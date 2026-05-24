# 𓂀 MEDU — Words of the Gods

> *An interactive Egyptian hieroglyph translator and learning app for curious minds.*

**[Launch Desktop App](https://highviewone.github.io/EgyptianHieroglyphsTranslator/) · [Launch Mobile App](https://highviewone.github.io/EgyptianHieroglyphsTranslator/Medu%20Mobile.html)**

---

## What is MEDU?

**MEDU** (𓅓𓂧𓅱) means *"words"* in Ancient Egyptian — the root of *Medu Netjer*, "words of the gods," the name Egyptians gave their hieroglyphic script.

This app lets you translate English into hieroglyphs, learn the alphabet, build your name in a royal cartouche, study the pharaohs, and practice with flashcards — all with an authentic tomb-wall aesthetic.

---

## Features

### Desktop (`index.html`)

| Tab | What you can do |
|---|---|
| 𓂀 **Translate** | Type English → see animated hieroglyphs. Tap any glyph for its name. Reverse-translate hieroglyphs → English. Speak aloud. Copy to clipboard. |
| 𓄿 **Alphabet** | 26-tile grid of the hieroglyphic alphabet. Tap to hear the sound and see full detail. |
| 𓏣 **Cartouche** | Generate your name inside a royal oval, just like the pharaohs. Save as PNG or print. |
| 𓏠 **Lessons** | 6 structured lessons from "What Are Hieroglyphs?" to determinatives. Progress saved automatically. |
| 𓉐 **Pharaohs** | 8 legendary rulers with their cartouche glyphs and full bio cards. |
| 𓆣 **Practice** | Flashcards with streak counter + a 4×4 memory-match card game. |

### Mobile (`Medu Mobile.html`)

A pixel-perfect iPhone mockup with Dynamic Island, status bar, and home indicator — four tabs, bottom sheets, and touch-friendly layout.

---

## How It Works

Both files are **fully self-contained** — no server, no build step, no dependencies to install. Open either HTML file directly in any browser.

- **React 18** + **Babel standalone** for in-browser JSX rendering
- **Unicode hieroglyphs** from the U+13000–U+1342F block
- **Noto Sans Egyptian Hieroglyphs** font for authentic glyph rendering
- Translation engine: digraph-first scan → whole-word sacred glyph lookup → letter-by-letter fallback
- Progress persists in `localStorage`

---

## Sacred Words

The translator recognizes 26 special whole-word translations beyond the alphabet:

𓋹 ANKH · 𓉐𓉻 PHARAOH · 𓆎𓅓𓏏𓊖 EGYPT · 𓇳 RA · 𓁹 EYE · 𓆑 SNAKE · 𓅃 FALCON · 𓂋𓏤 MOUTH · 𓇋𓇌 REED · 𓈖𓇌𓇌𓈖 WATER · *…and more*

---

## Design

Inspired by tomb-wall carvings — deep midnight background, gold accents, and the Cinzel display font, with a `glyphCarveIn` reveal animation on every translation.

```
Background  #0E0A05   Deep midnight
Gold        #D4A24C   Warm sarcophagus gold
Text        #F4E8C8   Papyrus cream
```

---

## Run Locally

```bash
git clone https://github.com/HighviewOne/EgyptianHieroglyphsTranslator.git
cd EgyptianHieroglyphsTranslator
open index.html          # desktop
open "Medu Mobile.html"  # mobile mockup
```

No `npm install`. No build. Just open and learn.

---

*Built with ♥ for young explorers of ancient worlds.*
