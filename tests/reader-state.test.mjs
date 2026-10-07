import assert from 'node:assert/strict';
import fs from 'node:fs';

const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];

assert.ok(script, 'reader script is present');
new Function(script);

// A late response must not overwrite the selection made after it started.
assert.match(script, /let dateRequest = 0/);
assert.match(script, /const request = \+\+dateRequest/);
assert.match(script, /if\(request!==dateRequest\)return/);

// A failed date fetch clears stale freshness text before showing the error state.
assert.match(script, /catch \(error\) \{ if\(request!==dateRequest\)return; current=\[\]; setSections\(\); render\(\); updated\.textContent=''; message/);

// Fixture-only data is schema-valid but is deliberately not part of public data/.
const fixture = JSON.parse(fs.readFileSync('/tmp/news-fixture-2026-10-07.json', 'utf8'));
assert.equal(fixture.schemaVersion, 1);
assert.equal(fixture.date, '2026-10-07');
assert.equal(fixture.items[0].source.url, 'https://example.com/article');
assert.equal(fs.existsSync(new URL('../data/2026-10-07.json', import.meta.url)), false);

console.log('reader state contract and offline fixture checks passed');
