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
