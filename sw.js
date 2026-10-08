// MEDU service worker: makes both pages work offline after the first visit.
// Own files: network first (so updates show up as soon as you're online), cache as fallback.
// Fonts and React from CDNs: cache first (they never change at these URLs).
const CACHE = "medu-v1";

const OWN_FILES = [
  "./", "index.html", "Medu%20Mobile.html", "data.js", "dist/desktop.js", "dist/mobile.js",
  "manifest.webmanifest", "manifest-mobile.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/apple-touch-icon.png",
];
const CDN_FILES = [
  "https://unpkg.com/react@18.3.1/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js",
];
// The font CSS lists the actual font files, so fetch it and cache those too.
const FONT_CSS = [
  "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Egyptian+Hieroglyphs&family=JetBrains+Mono:wght@400;500&display=swap",
  "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=Noto+Sans+Egyptian+Hieroglyphs&display=swap",
];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(OWN_FILES);
    // Third-party files are best effort: a CDN hiccup shouldn't block install.
    await Promise.allSettled(CDN_FILES.map(u => cache.add(new Request(u, { mode: "cors" }))));
    await Promise.allSettled(FONT_CSS.map(async (u) => {
      const res = await fetch(u, { mode: "cors" });
      if (!res.ok) return;
      await cache.put(u, res.clone());
      const fontUrls = [...(await res.text()).matchAll(/url\((https:\/\/fonts\.gstatic\.com[^)]+)\)/g)].map(m => m[1]);
      await Promise.allSettled(fontUrls.map(f => cache.add(new Request(f, { mode: "cors" }))));
    }));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    for (const key of await caches.keys()) if (key !== CACHE) await caches.delete(key);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;
  event.respondWith(sameOrigin ? networkFirst(req) : cacheFirst(req));
});

async function networkFirst(req) {
  const cache = await caches.open(CACHE);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch {
    return (await cache.match(req, { ignoreSearch: true })) ||
           (req.mode === "navigate" && await cache.match("./")) ||
           Response.error();
  }
}

async function cacheFirst(req) {
  const cache = await caches.open(CACHE);
  const hit = await cache.match(req);
  if (hit) return hit;
  const res = await fetch(req);
  if (res.ok) cache.put(req, res.clone());
  return res;
}
