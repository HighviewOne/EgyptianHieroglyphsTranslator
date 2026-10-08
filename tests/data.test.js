// Checks for the shared glyph data and translation engine in data.js.
// Run with `npm test` (Node's built-in test runner, no dependencies).
const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const root = path.join(__dirname, "..");
const window = {};
vm.runInNewContext(fs.readFileSync(path.join(root, "data.js"), "utf8"), { window });
const { ALPHABET, DIGRAPHS, WORD_GLYPHS, PHARAOHS, LESSONS, PRACTICE_DECK, DAILY_GLYPHS } = window;

const toGlyphs = (s) => window.translateToGlyphs(s).map(t => t.glyph).join("");
const isHieroglyph = (ch) => /^[\u{13000}-\u{1342F}]$/u.test(ch);

test("every sign in the data is a real Egyptian hieroglyph code point", () => {
  const sets = [
    ...ALPHABET.map(a => [a.letter, a.glyph]),
    ...DIGRAPHS.map(d => [d.seq, d.glyph]),
    ...WORD_GLYPHS.map(w => [w.word, w.glyph]),
    ...PHARAOHS.map(p => [p.name, p.glyph]),
    ...PRACTICE_DECK.map(c => ["flashcard " + c.answer, c.glyph]),
    ...DAILY_GLYPHS.map(d => [d.name, d.glyph]),
    ...LESSONS.map(l => ["lesson " + l.id, l.icon]),
  ];
  for (const [label, glyph] of sets) {
    for (const ch of Array.from(glyph)) assert.ok(isHieroglyph(ch), `${label}: ${JSON.stringify(ch)} is not a hieroglyph`);
  }
});

test("alphabet covers A–Z exactly once", () => {
  assert.deepEqual(ALPHABET.map(a => a.letter).join(""), "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
});

test("sacred words are unique", () => {
  const words = WORD_GLYPHS.map(w => w.word);
  assert.equal(new Set(words).size, words.length);
});

test("known spellings use the right signs", () => {
  const glyphOf = (l) => ALPHABET.find(a => a.letter === l).glyph;
  assert.equal(glyphOf("Q"), "𓈎", "Q is the sandy hill slope N29");
  assert.equal(DAILY_GLYPHS.find(d => d.name === "Per").glyph, "𓉐", "per (house) is O1");
  assert.equal(PHARAOHS.find(p => p.name === "Khufu").glyph, "𓐍𓅱𓆑𓅱");
  assert.equal(PHARAOHS.find(p => p.name === "Thutmose III").glyph, "𓅝𓄟𓋴");
});

test("English → glyphs", () => {
  assert.equal(toGlyphs("ankh"), "𓋹", "sacred words win over spelling");
  assert.equal(toGlyphs("cat"), "𓎡𓄿𓏏");
  assert.equal(toGlyphs("ship"), "𓈙𓇋𓊪", "SH digraph");
  assert.equal(toGlyphs("I was here"), "𓇋 𓅱𓄿𓋴 𓉔𓇋𓂋𓇋", "everyday 'was' is spelled out, not the sceptre");
});

test("glyphs → English", () => {
  const back = window.translateFromGlyphs;
  assert.equal(back("𓎡𓄿𓏏"), "cat", "𓏏 reads as T, not 'bread'");
  assert.equal(back("𓂋𓄿"), "ra", "𓂋 reads as R, not 'mouth'");
  assert.equal(back(toGlyphs("pharaoh")), "pharaoh", "multi-glyph words match first");
  assert.equal(back(toGlyphs("egypt")), "egypt");
  assert.equal(back(toGlyphs("queen")), "queen");
  assert.equal(back(""), "");
});

test("signs with several letters decode to real words", () => {
  const roundTrip = (s) => window.translateFromGlyphs(toGlyphs(s));
  for (const s of ["you were wow", "i was here", "thanks for the fish", "the quick fox", "kick the ball", "now go"]) {
    assert.equal(roundTrip(s), s);
  }
  assert.equal(window.translateFromGlyphs("𓅱"), "w", "a lone quail chick at a word start reads as W");
});

test("every flashcard has exactly one correct option", () => {
  for (const card of PRACTICE_DECK) {
    assert.ok(card.options.includes(card.answer), `${card.answer} missing from its own options`);
    const correct = card.options.filter(o => ALPHABET.find(a => a.letter === o)?.glyph === card.glyph);
    assert.equal(correct.join(","), card.answer, `card ${card.glyph}: options ${card.options} share its sign`);
  }
});

test("memory-match boards never repeat a sign", () => {
  for (let run = 0; run < 200; run++) {
    const tiles = window.makeMatchBoard(8);
    const glyphs = tiles.filter(t => t.kind === "glyph").map(t => t.value);
    assert.equal(glyphs.length, 8);
    assert.equal(new Set(glyphs).size, 8);
  }
});

test("lessons are numbered 1..n and every block type is one the apps render", () => {
  assert.equal(LESSONS.map(l => l.id).join(), LESSONS.map((_, i) => i + 1).join());
  const known = new Set(["p", "tip", "showcase", "glyphCard"]);
  for (const l of LESSONS) for (const b of l.content) assert.ok(known.has(b.type), `lesson ${l.id}: unknown block ${b.type}`);
});

test("both pages load data.js and their compiled bundle", () => {
  for (const [html, bundle] of [["index.html", "dist/desktop.js"], ["Medu Mobile.html", "dist/mobile.js"]]) {
    const src = fs.readFileSync(path.join(root, html), "utf8");
    assert.match(src, /<script src="data\.js"><\/script>/, `${html} loads data.js`);
    assert.ok(src.includes(`<script src="${bundle}"></script>`), `${html} loads ${bundle}`);
    assert.ok(fs.existsSync(path.join(root, bundle)), `${bundle} exists — run npm run build`);
    assert.doesNotMatch(src, /text\/babel|babel\.min\.js/, `${html} no longer needs Babel in the browser`);
  }
});

test("offline cache lists only files that exist, including every page script", () => {
  const sw = fs.readFileSync(path.join(root, "sw.js"), "utf8");
  const own = JSON.parse(sw.match(/const OWN_FILES = (\[[\s\S]*?\]);/)[1].replace(/,\s*\]/, "]"));
  for (const f of own) {
    if (f === "./") continue;
    assert.ok(fs.existsSync(path.join(root, decodeURIComponent(f))), `sw.js caches missing file ${f}`);
  }
  for (const html of ["index.html", "Medu Mobile.html"]) {
    const src = fs.readFileSync(path.join(root, html), "utf8");
    for (const [, s] of src.matchAll(/<script src="([^"]+)"/g)) {
      assert.ok(own.includes(s) || sw.includes(s), `${html} loads ${s} but sw.js doesn't cache it`);
    }
  }
});
