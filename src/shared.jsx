// Helpers shared by desktop.jsx and mobile.jsx (bundled into each by `npm run build`).

// Dialog behaviour for modals and bottom sheets: Esc closes, focus moves into the
// dialog (the element marked data-dialog) and Tab stays inside it, and focus goes
// back to whatever opened it on close.
export function useDialog(open, onClose) {
  const closeRef = React.useRef(onClose);
  closeRef.current = onClose;
  React.useEffect(() => {
    if (!open) return;
    const opener = document.activeElement;
    const dialog = () => document.querySelector("[data-dialog]");
    const raf = requestAnimationFrame(() => dialog()?.focus());
    const onKey = (e) => {
      if (e.key === "Escape") { e.preventDefault(); closeRef.current(); return; }
      if (e.key !== "Tab") return;
      const d = dialog();
      if (!d) return;
      const items = Array.from(d.querySelectorAll('button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])')).filter(el => !el.disabled);
      if (!items.length) { e.preventDefault(); return; }
      const first = items[0], last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || document.activeElement === d)) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", onKey);
      if (opener && opener.focus) opener.focus();
    };
  }, [open]);
}

export function speak(text, pitch = 0.95) {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.rate = 0.85; u.pitch = pitch;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch {}
}

// Font size for a row of glyphs: long names (Cleopatra has 9 signs) shrink to fit `width` px.
export const fitGlyphs = (glyph, max, width) => Math.min(max, Math.floor(width / Array.from(glyph).length));

// Speech engines read "dj" or "kh" as letter names, so speak each sign's sound as a
// syllable a voice can say. Keys are the `sound` values in data.js.
const SAYABLE = {
  ah: "ah", ee: "ee", oo: "oo", b: "buh", d: "duh", f: "fuh", g: "guh", h: "huh", dj: "juh",
  k: "kuh", kh: "khuh", l: "luh", m: "muh", n: "nuh", p: "puh", q: "kuh", r: "ruh", s: "sss",
  sh: "shh", t: "tuh", tj: "chuh", w: "wuh", y: "yuh", z: "zzz",
};
export function speakSound(sound) {
  speak(SAYABLE[sound] || sound);
}

// Speak a translator token: a letter or digraph by its sound, a sacred word as the word.
export function speakToken(tok) {
  const sign = tok.type === "letter" ? window.ALPHABET.find(a => a.letter === tok.char.toUpperCase())
    : tok.type === "digraph" ? window.DIGRAPHS.find(d => d.seq === tok.char.toUpperCase()) : null;
  if (sign) speakSound(sign.sound); else speak(tok.char);
}

// Completed lessons, shared by the desktop and mobile pages (same site, same storage).
// Older versions kept mobile progress under its own key; merge it in once.
const PROGRESS_KEY = "medu-completed";
export function useCompletedLessons() {
  const [completed, setCompleted] = React.useState(() => {
    try {
      const read = (k) => JSON.parse(localStorage.getItem(k) || "[]");
      const merged = [...new Set([...read(PROGRESS_KEY), ...read("medu-mobile-completed")])];
      localStorage.setItem(PROGRESS_KEY, JSON.stringify(merged));
      localStorage.removeItem("medu-mobile-completed");
      return merged;
    } catch { return []; }
  });
  const toggle = (id) => setCompleted(prev => {
    const next = prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id];
    try { localStorage.setItem(PROGRESS_KEY, JSON.stringify(next)); } catch {}
    return next;
  });
  return [completed, toggle];
}
