import test from 'node:test'; import assert from 'node:assert/strict'; import fs from 'node:fs';

test('site', () => {
  const h = fs.readFileSync('index.html', 'utf8');
  assert.ok(h.length > 8000, 'too thin');
  for (const s of ['NAME', '<svg', 'id="offer"', 'id="contact"', '@media'])
    assert.ok(h.includes(s), s);
});