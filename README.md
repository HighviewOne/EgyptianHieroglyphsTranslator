![MEDU Banner](https://capsule-render.vercel.app/api?type=waving&color=0E0A05,251B0F,8C6A2A,D4A24C&height=200&section=header&text=𓂀%20MEDU&fontSize=80&fontColor=D4A24C&animation=fadeIn&fontAlignY=42&desc=Words%20of%20the%20Gods%20%E2%80%94%20Egyptian%20Hieroglyph%20Translator&descAlignY=68&descAlign=50&descSize=16)

<div align="center">

[![GitHub Pages](https://img.shields.io/github/deployments/HighviewOne/EgyptianHieroglyphsTranslator/github-pages?label=live%20app&color=D4A24C&logo=github&logoColor=white)](https://highviewone.github.io/EgyptianHieroglyphsTranslator/)
[![Last Commit](https://img.shields.io/github/last-commit/HighviewOne/EgyptianHieroglyphsTranslator?color=8C6A2A&label=last%20update)](https://github.com/HighviewOne/EgyptianHieroglyphsTranslator/commits/main)
[![Repo Size](https://img.shields.io/github/repo-size/HighviewOne/EgyptianHieroglyphsTranslator?color=251B0F&label=size)](https://github.com/HighviewOne/EgyptianHieroglyphsTranslator)
[![License: MIT](https://img.shields.io/badge/license-MIT-E8C36E)](LICENSE)

**[🏛 Launch Desktop App](https://highviewone.github.io/EgyptianHieroglyphsTranslator/) · [📱 Launch Mobile App](https://highviewone.github.io/EgyptianHieroglyphsTranslator/Medu%20Mobile.html)**

</div>

---

## What is MEDU?

**MEDU** (𓅓𓂧𓅱) means *"words"* in Ancient Egyptian — the root of *Medu Netjer*, "words of the gods," the name Egyptians gave their hieroglyphic script.

This app lets you translate English into hieroglyphs, learn the alphabet, build your name in a royal cartouche, study the pharaohs, and practice with flashcards — all with an authentic tomb-wall aesthetic.

---

## Features

### 🖥 Desktop (`index.html`)

| Tab | What you can do |
|---|---|
| 𓂀 **Translate** | Type English → see animated hieroglyphs. Tap any glyph for its name. Reverse-translate hieroglyphs → English. Speak aloud. Copy to clipboard. |
| 𓄿 **Alphabet** | 26-tile grid of the hieroglyphic alphabet. Tap to hear the sound and see full detail. |
| 𓏣 **Cartouche** | Generate your name inside a royal oval, just like the pharaohs. Save as PNG or print. |
| 𓏠 **Lessons** | 6 structured lessons from "What Are Hieroglyphs?" to determinatives. Progress saved automatically. |
| 𓉐 **Pharaohs** | 8 legendary rulers with their cartouche glyphs and full bio cards. |
| 𓆣 **Practice** | Flashcards with streak counter + a 4×4 memory-match card game. |

### 📱 Mobile (`Medu Mobile.html`)

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

| Token | Hex | Role |
|---|---|---|
| `--bg-deep` | `#0E0A05` | Deep midnight background |
| `--gold` | `#D4A24C` | Warm sarcophagus gold |
| `--papyrus` | `#F4E8C8` | Papyrus cream text |

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

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0E0A05,251B0F,8C6A2A,D4A24C&height=100&section=footer)

*Built with ♥ for young explorers of ancient worlds.*
