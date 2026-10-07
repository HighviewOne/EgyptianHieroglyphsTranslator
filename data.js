// ============================================================
// MEDU — Egyptian Hieroglyph data
// All glyphs use Unicode block U+13000–U+1342F
// ============================================================

// 24 uniliteral signs — the Egyptian "alphabet"
// Each English letter maps to the closest Egyptian phoneme
window.ALPHABET = [
  { letter: "A", glyph: "𓄿", name: "Vulture",         sound: "ah",  hint: "Egyptian vulture — the breathy 'A' sound" },
  { letter: "B", glyph: "𓃀", name: "Foot",            sound: "b",   hint: "A single foot — straight 'B'" },
  { letter: "C", glyph: "𓎡", name: "Basket",          sound: "k",   hint: "Egyptian had no soft C — uses K" },
  { letter: "D", glyph: "𓂧", name: "Hand",            sound: "d",   hint: "An open hand — 'D'" },
  { letter: "E", glyph: "𓇋", name: "Reed",            sound: "ee",  hint: "A flowering reed — long E or I" },
  { letter: "F", glyph: "𓆑", name: "Horned viper",    sound: "f",   hint: "A horned viper — 'F'" },
  { letter: "G", glyph: "𓎼", name: "Jar stand",       sound: "g",   hint: "A pottery stand — hard 'G'" },
  { letter: "H", glyph: "𓉔", name: "Reed shelter",    sound: "h",   hint: "A reed shelter seen from above" },
  { letter: "I", glyph: "𓇋", name: "Reed",            sound: "ee",  hint: "Same reed — short or long I" },
  { letter: "J", glyph: "𓆓", name: "Cobra",           sound: "dj",  hint: "A resting cobra — the 'DJ' sound" },
  { letter: "K", glyph: "𓎡", name: "Basket",          sound: "k",   hint: "A handled basket — 'K'" },
  { letter: "L", glyph: "𓃭", name: "Lion",            sound: "l",   hint: "A recumbent lion — 'L'" },
  { letter: "M", glyph: "𓅓", name: "Owl",             sound: "m",   hint: "An owl — 'M'" },
  { letter: "N", glyph: "𓈖", name: "Water ripple",    sound: "n",   hint: "A ripple of water — 'N'" },
  { letter: "O", glyph: "𓅱", name: "Quail chick",     sound: "oo",  hint: "Egyptian used W for O sounds" },
  { letter: "P", glyph: "𓊪", name: "Reed stool",      sound: "p",   hint: "A reed stool — 'P'" },
  { letter: "Q", glyph: "𓈎", name: "Hill slope",      sound: "q",   hint: "A hill slope — deep 'Q'" },
  { letter: "R", glyph: "𓂋", name: "Mouth",           sound: "r",   hint: "A mouth — 'R'" },
  { letter: "S", glyph: "𓋴", name: "Folded cloth",    sound: "s",   hint: "Folded cloth — 'S'" },
  { letter: "T", glyph: "𓏏", name: "Bread loaf",      sound: "t",   hint: "A loaf of bread — 'T'" },
  { letter: "U", glyph: "𓅱", name: "Quail chick",     sound: "oo",  hint: "Same quail chick — 'U' or 'W'" },
  { letter: "V", glyph: "𓆑", name: "Horned viper",    sound: "f",   hint: "No V in Egyptian — uses F" },
  { letter: "W", glyph: "𓅱", name: "Quail chick",     sound: "w",   hint: "A baby quail — 'W' or 'U'" },
  { letter: "X", glyph: "𓐍", name: "Placenta",        sound: "kh",  hint: "Throaty 'KH' — closest to X" },
  { letter: "Y", glyph: "𓇌", name: "Two reeds",       sound: "y",   hint: "Two reeds together — 'Y'" },
  { letter: "Z", glyph: "𓊃", name: "Door bolt",       sound: "z",   hint: "A door bolt — 'Z' or 'S'" },
];

window.DIGRAPHS = [
  { seq: "SH", glyph: "𓈙", name: "Garden pool",     sound: "sh", hint: "A garden pool — 'SH' sound" },
  { seq: "CH", glyph: "𓍿", name: "Tethering rope",  sound: "tj", hint: "Rope for tying animals — 'CH'" },
  { seq: "TH", glyph: "𓍿", name: "Tethering rope",  sound: "tj", hint: "Closest match to 'TH'" },
  { seq: "PH", glyph: "𓆑", name: "Horned viper",    sound: "f",  hint: "PH = F sound" },
  { seq: "CK", glyph: "𓎡", name: "Basket",          sound: "k",  hint: "CK = K sound" },
  { seq: "QU", glyph: "𓈎", name: "Hill slope",      sound: "q",  hint: "QU collapses to Q" },
];

window.WORD_GLYPHS = [
  { word: "ANKH",      glyph: "𓋹",   meaning: "Life — the breath of the gods" },
  { word: "LIFE",      glyph: "𓋹",   meaning: "Same glyph as ANKH" },
  { word: "RA",        glyph: "𓇳",   meaning: "Ra — the sun god" },
  { word: "SUN",       glyph: "𓇳",   meaning: "The sun disc" },
  { word: "DJED",      glyph: "𓊽",   meaning: "Stability — spine of Osiris" },
  { word: "EYE",       glyph: "𓂀",   meaning: "Eye of Horus — protection" },
  { word: "HORUS",     glyph: "𓅃",   meaning: "The falcon god Horus" },
  { word: "FALCON",    glyph: "𓅃",   meaning: "The Horus falcon" },
  { word: "NEFER",     glyph: "𓄤",   meaning: "Beautiful, good, perfect" },
  { word: "HOTEP",     glyph: "𓊵",   meaning: "Peace, satisfaction, offering" },
  { word: "SKY",       glyph: "𓇯",   meaning: "The heavens" },
  { word: "STAR",      glyph: "𓇼",   meaning: "A five-pointed star" },
  { word: "WATER",     glyph: "𓈗",   meaning: "Three water ripples = plural water" },
  { word: "HOUSE",     glyph: "𓉐",   meaning: "Plan of a house" },
  { word: "BREAD",     glyph: "𓏏",   meaning: "A loaf of bread" },
  { word: "MOUTH",     glyph: "𓂋",   meaning: "The mouth glyph" },
  { word: "SCARAB",    glyph: "𓆣",   meaning: "Khepri — the rising sun beetle" },
  { word: "GOD",       glyph: "𓊹",   meaning: "Netjer — a deity" },
  { word: "PHARAOH",   glyph: "𓉐𓉻", meaning: "Per-aa — 'great house'" },
  { word: "KING",      glyph: "𓇓",   meaning: "Sedge plant of Upper Egypt" },
  { word: "QUEEN",     glyph: "𓇓𓏏", meaning: "King + feminine ending" },
  { word: "EGYPT",     glyph: "𓆎𓅓𓏏𓊖", meaning: "Kemet — 'the black land'" },
  { word: "KEMET",     glyph: "𓆎𓅓𓏏𓊖", meaning: "Egypt — 'the black land'" },
  { word: "GOLD",      glyph: "𓋞",   meaning: "Nub — gold collar" },
  { word: "NUB",       glyph: "𓋞",   meaning: "Gold" },
];

window.PHARAOHS = [
  { name: "Tutankhamun", glyph: "𓇋𓏠𓈖𓏏𓅱𓏏𓋹", dates: "c. 1341 – 1323 BCE", dynasty: "18th Dynasty", title: "The Boy King", fact: "Became pharaoh at age 9. His tomb (KV62) was found nearly untouched in 1922 by Howard Carter — packed with over 5,000 objects including a solid gold coffin and the famous death mask.", color: "#D4A24C" },
  { name: "Cleopatra VII", glyph: "𓈎𓃭𓇋𓍯𓊪𓄿𓂧𓂋𓄿", dates: "69 – 30 BCE", dynasty: "Ptolemaic Dynasty", title: "The Last Pharaoh", fact: "Spoke at least 9 languages and was the first Ptolemaic ruler to learn Egyptian. Allied with Julius Caesar and Mark Antony before Egypt fell to Rome.", color: "#B8552E" },
  { name: "Ramses II", glyph: "𓇳𓄟𓋴𓋴", dates: "c. 1303 – 1213 BCE", dynasty: "19th Dynasty", title: "Ramses the Great", fact: "Reigned 66 years, fathered around 100 children, and built more temples than any other pharaoh — including Abu Simbel, carved into a cliff face.", color: "#8B3A3A" },
  { name: "Hatshepsut", glyph: "𓄂𓏏𓈙𓊪𓋴𓏏", dates: "c. 1507 – 1458 BCE", dynasty: "18th Dynasty", title: "Foremost of Noble Ladies", fact: "One of ancient Egypt's few female pharaohs. Wore the false beard of kingship and sent trade expeditions to the mysterious Land of Punt.", color: "#2E5C8A" },
  { name: "Khufu", glyph: "𓐍𓅱𓆑𓅱", dates: "c. 2589 – 2566 BCE", dynasty: "4th Dynasty", title: "Builder of the Great Pyramid", fact: "Commissioned the Great Pyramid of Giza — 2.3 million stone blocks, originally 481 ft tall, the tallest structure on Earth for 3,800 years.", color: "#D4A24C" },
  { name: "Akhenaten", glyph: "𓇋𓏏𓈖𓇳𓅜𓈖", dates: "c. 1380 – 1334 BCE", dynasty: "18th Dynasty", title: "The Heretic King", fact: "Abandoned Egypt's old gods to worship only the Aten (sun disc). Built a brand-new capital city, Amarna, and was married to the famous Nefertiti.", color: "#E8C36E" },
  { name: "Nefertiti", glyph: "𓄤𓆑𓂋𓏏𓇋𓇋𓏏𓇋", dates: "c. 1370 – 1330 BCE", dynasty: "18th Dynasty", title: "The Beautiful One Has Come", fact: "Queen alongside Akhenaten, possibly co-ruler. Her painted limestone bust, found in 1912, is one of the most copied works of ancient art.", color: "#B8552E" },
  { name: "Thutmose III", glyph: "𓅝𓄟𓋴", dates: "c. 1481 – 1425 BCE", dynasty: "18th Dynasty", title: "The Napoleon of Egypt", fact: "Led 17 military campaigns and expanded Egypt to its largest size ever. Never lost a battle in over 50 years of campaigning.", color: "#2E5C8A" },
];

window.LESSONS = [
  { id: 1, title: "What is a hieroglyph?", duration: "3 min", icon: "𓂀", summary: "The basics — pictures that became writing.", content: [{ type: "p", text: "Around 3200 BCE, Egyptian scribes invented one of the world's first writing systems. They called it medu netjer — 'words of the gods.'" }, { type: "p", text: "Each picture, called a hieroglyph, could mean three different things: a sound, an idea, or a hint about what the surrounding word means." }, { type: "showcase", glyphs: ["𓂀", "𓅓", "𓇳", "𓉐"], caption: "Eye, owl, sun, house — each one is both a picture AND a sound." }, { type: "p", text: "Scribes carved them on tomb walls, painted them on coffins, and brushed them onto papyrus scrolls. For over 3,000 years, only specially trained scribes could read them." }] },
  { id: 2, title: "The 24 sound signs", duration: "5 min", icon: "𓄿", summary: "Hieroglyphs that work like letters of an alphabet.", content: [{ type: "p", text: "Most of the 1,000+ hieroglyphs are complex symbols, but 24 special signs work like our alphabet — each one stands for a single consonant sound." }, { type: "p", text: "Egyptian writing usually skipped vowels (like writing 'CT' for 'CAT'). When we translate English names today, we use these 24 signs to spell out the sounds." }, { type: "showcase", glyphs: ["𓄿", "𓃀", "𓂧", "𓆑", "𓅓", "𓈖", "𓂋", "𓏏"], caption: "Eight of the 24 uniliteral signs." }, { type: "tip", text: "Try the Alphabet tab to see all 24 — tap any glyph to hear its sound." }] },
  { id: 3, title: "Reading direction", duration: "2 min", icon: "𓅓", summary: "Which way does it read? Look at the animals.", content: [{ type: "p", text: "Hieroglyphs can be read right-to-left, left-to-right, or even top-to-bottom — Egyptian scribes were flexible." }, { type: "p", text: "The secret: look at which way the animals and people face. They always face the START of the line. If the owl looks left, you read left-to-right toward where it's looking from." }, { type: "showcase", glyphs: ["𓅓", "𓆑", "𓃭"], caption: "These animals face left — so this line reads LEFT to RIGHT." }] },
  { id: 4, title: "The cartouche", duration: "4 min", icon: "𓍷", summary: "The oval loop that protects a royal name.", content: [{ type: "p", text: "When scribes wrote a pharaoh's name, they drew an oval loop around it — called a cartouche. The loop was meant to magically protect the name from harm." }, { type: "p", text: "It was the discovery of cartouches on the Rosetta Stone that let scholars finally crack the hieroglyphic code in 1822." }, { type: "showcase", glyphs: ["𓍷"], caption: "An empty cartouche, ready for a royal name." }, { type: "tip", text: "Try the Cartouche maker to write your own name in a royal oval." }] },
  { id: 5, title: "Sacred symbols", duration: "4 min", icon: "𓋹", summary: "Ankh, Eye of Horus, scarab — what they meant.", content: [{ type: "p", text: "Some hieroglyphs weren't just letters — they were sacred symbols carried as amulets and painted on tombs for protection in the afterlife." }, { type: "glyphCard", glyph: "𓋹", title: "Ankh", text: "Life. The key of life, held by gods to grant immortality." }, { type: "glyphCard", glyph: "𓂀", title: "Eye of Horus", text: "Protection and healing. The eye Horus lost battling his uncle Set." }, { type: "glyphCard", glyph: "𓆣", title: "Scarab", text: "Rebirth. The beetle that rolls the sun across the sky each day." }, { type: "glyphCard", glyph: "𓊽", title: "Djed", text: "Stability. The spine of the god Osiris." }] },
  { id: 6, title: "Cracking the code", duration: "5 min", icon: "𓊪", summary: "How Champollion decoded hieroglyphs from a stone.", content: [{ type: "p", text: "The last known hieroglyphic inscription was carved at Philae in 394 CE. Soon after, no one on Earth could read them — the knowledge was lost for about 1,400 years." }, { type: "p", text: "In 1799, Napoleon's soldiers found a black stone near Rosetta, Egypt. It had the same text carved three times: in Greek, in Demotic, and in hieroglyphs." }, { type: "p", text: "A young Frenchman, Jean-François Champollion, spent 14 years comparing them. In 1822 he cracked it — starting with the cartouche containing the name 'PTOLEMY.'" }, { type: "showcase", glyphs: ["𓊪", "𓏏", "𓍯", "𓃭", "𓐝", "𓇌", "𓋴"], caption: "P-T-O-L-M-Y-S — the cartouche that started it all." }] },
];

window.PRACTICE_DECK = [
  { glyph: "𓄿", answer: "A", options: ["A", "E", "I", "O"] },
  { glyph: "𓅓", answer: "M", options: ["M", "N", "W", "B"] },
  { glyph: "𓈖", answer: "N", options: ["N", "M", "S", "R"] },
  { glyph: "𓂋", answer: "R", options: ["R", "L", "D", "T"] },
  { glyph: "𓏏", answer: "T", options: ["T", "B", "P", "D"] },
  { glyph: "𓆑", answer: "F", options: ["F", "P", "B", "S"] },
  { glyph: "𓊪", answer: "P", options: ["P", "B", "T", "K"] },
  { glyph: "𓋴", answer: "S", options: ["S", "Z", "X", "T"] },
  { glyph: "𓎡", answer: "K", options: ["K", "G", "Q", "T"] },
  { glyph: "𓇋", answer: "I", options: ["I", "Y", "A", "H"] },
  { glyph: "𓅱", answer: "W", options: ["W", "M", "B", "V"] },
  { glyph: "𓃭", answer: "L", options: ["L", "R", "N", "M"] },
  { glyph: "𓂧", answer: "D", options: ["D", "T", "B", "P"] },
  { glyph: "𓃀", answer: "B", options: ["B", "P", "D", "F"] },
  { glyph: "𓇌", answer: "Y", options: ["Y", "I", "E", "J"] },
];

window.DAILY_GLYPHS = [
  { glyph: "𓋹", name: "Ankh",    meaning: "Life",           fact: "Carried by gods as a key — said to unlock the door to the afterlife." },
  { glyph: "𓂀", name: "Wedjat",  meaning: "Eye of Horus",   fact: "Each part of the eye stood for a fraction — 1/2, 1/4, 1/8, all the way to 1/64." },
  { glyph: "𓆣", name: "Kheper",  meaning: "Scarab beetle",  fact: "Egyptians saw beetles rolling dung balls and imagined the sun being rolled across the sky." },
  { glyph: "𓊽", name: "Djed",    meaning: "Stability",      fact: "Represented the backbone of the god Osiris — symbol of standing firm." },
  { glyph: "𓇳", name: "Ra",      meaning: "The sun",        fact: "The sun god sailed across the sky in a golden boat by day and fought the serpent Apophis by night." },
  { glyph: "𓅃", name: "Heru",    meaning: "Horus",          fact: "The falcon god of the sky — his right eye was the sun, his left eye the moon." },
  { glyph: "𓉐", name: "Per",     meaning: "House",          fact: "Combined with 'great' (aa), per-aa became 'pharaoh' — literally 'great house.'" },
  { glyph: "𓍷", name: "Shen",    meaning: "Cartouche",      fact: "An endless loop of rope — symbolizing eternal protection around a royal name." },
  { glyph: "𓄤", name: "Nefer",   meaning: "Beautiful",      fact: "Also meant 'good' and 'perfect' — the root of names like Nefertiti and Nefertari." },
  { glyph: "𓊵", name: "Hotep",   meaning: "Peace",          fact: "An offering table piled with bread — meant 'at peace,' 'satisfied,' or 'offering.'" },
  { glyph: "𓌀", name: "Was",     meaning: "Power",          fact: "A scepter held by gods — topped with the head of a mysterious animal no one has identified." },
  { glyph: "𓇼", name: "Seba",    meaning: "Star",           fact: "Egyptians believed the stars were the souls of pharaohs sailing through the night sky." },
];

window.translateToGlyphs = function(input) {
  const text = (input || "").toUpperCase();
  const tokens = [];
  const words = text.split(/(\s+|[^\w])/);
  for (const word of words) {
    if (!word) continue;
    if (/^\s+$/.test(word)) { tokens.push({ char: " ", glyph: " ", name: "space", type: "space" }); continue; }
    if (/^[^\w]$/.test(word)) { tokens.push({ char: word, glyph: word, name: "punctuation", type: "punct" }); continue; }
    const wordMatch = window.WORD_GLYPHS.find(w => w.word === word);
    if (wordMatch) { tokens.push({ char: word.toLowerCase(), glyph: wordMatch.glyph, name: wordMatch.meaning, type: "word" }); continue; }
    let i = 0;
    while (i < word.length) {
      const two = word.slice(i, i + 2);
      const dig = window.DIGRAPHS.find(d => d.seq === two);
      if (dig) { tokens.push({ char: two.toLowerCase(), glyph: dig.glyph, name: dig.name, type: "digraph" }); i += 2; continue; }
      const ch = word[i];
      const letter = window.ALPHABET.find(a => a.letter === ch);
      if (letter) { tokens.push({ char: ch.toLowerCase(), glyph: letter.glyph, name: letter.name, type: "letter" }); }
      else if (/\d/.test(ch)) { tokens.push({ char: ch, glyph: ch, name: "number", type: "num" }); }
      else { tokens.push({ char: ch, glyph: "·", name: "unknown", type: "unknown" }); }
      i += 1;
    }
  }
  return tokens;
};

// Longest-match scan. Multi-glyph words (EGYPT, PHARAOH) win over their
// parts; single glyphs that are also letters (𓏏 T, 𓂋 R) read as letters.
window.translateFromGlyphs = function(input) {
  if (!input) return "";
  const glyphs = Array.from(input);
  const words = window.WORD_GLYPHS
    .map(w => ({ glyphs: Array.from(w.glyph), text: w.word.toLowerCase() }))
    .filter(w => w.glyphs.length > 1)
    .sort((a, b) => b.glyphs.length - a.glyphs.length);
  let out = "";
  let i = 0;
  while (i < glyphs.length) {
    const ch = glyphs[i];
    if (/\s/.test(ch)) { out += " "; i += 1; continue; }
    const multi = words.find(w => w.glyphs.every((g, k) => glyphs[i + k] === g));
    if (multi) { out += ` ${multi.text} `; i += multi.glyphs.length; continue; }
    i += 1;
    const letter = window.ALPHABET.find(a => a.glyph === ch);
    if (letter) { out += letter.letter.toLowerCase(); continue; }
    const dig = window.DIGRAPHS.find(d => d.glyph === ch);
    if (dig) { out += dig.seq.toLowerCase(); continue; }
    const word = window.WORD_GLYPHS.find(w => w.glyph === ch);
    if (word) { out += ` ${word.word.toLowerCase()} `; continue; }
    out += /[\u{13000}-\u{1342F}]/u.test(ch) ? "?" : ch;
  }
  return out.replace(/\s+/g, " ").replace(/ ([,.!;:])/g, "$1").trim();
};

// Memory-match board: `pairs` letters with distinct glyphs (C/K, E/I, F/V and
// O/U/W share a glyph, so two of them on one board would be indistinguishable).
window.makeMatchBoard = function(pairs) {
  const shuffle = (arr) => {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    return a;
  };
  const seen = new Set();
  const pool = shuffle(window.ALPHABET).filter(a => !seen.has(a.glyph) && seen.add(a.glyph)).slice(0, pairs);
  const tiles = [];
  pool.forEach((a, i) => { tiles.push({ pairId: i, kind: "glyph", value: a.glyph }); tiles.push({ pairId: i, kind: "letter", value: a.letter }); });
  return shuffle(tiles);
};

window.getDailyGlyph = function() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  return window.DAILY_GLYPHS[dayOfYear % window.DAILY_GLYPHS.length];
};
