// Looks up the object map location marker for each TotK bounty that has one
// (shrines, lightroots, caves, wells) and writes src/data/totk-map-ids.json.
// The bounties page uses it to link straight to the selected marker.
//
// Run once (and again if the bounty list changes):  node scripts/totk-map-ids.mjs
import { readFile, writeFile } from 'node:fs/promises';

const RADAR = 'https://radar-totk.zeldamods.org';
const targets = JSON.parse(
  await readFile(new URL('./totk-map-targets.json', import.meta.url), 'utf8')
);

const norm = (s) =>
  s
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();

async function search(mapType, query) {
  const url = `${RADAR}/objs/${mapType}/?q=${encodeURIComponent(query)}&withMapNames=true&limit=50`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  return res.json();
}

const out = {};
const missing = [];

for (const t of targets) {
  const mapType = t.type === 'lightroot' ? 'MinusField' : 'MainField';
  // Try the full name, then just its first word; match on the location marker's exact name
  const queries = [t.name, t.name.split(' ')[0]];
  let hit;
  for (const query of queries) {
    try {
      const results = await search(mapType, query);
      hit = results.find((o) => o.Location && norm(o.Location) === norm(t.name));
    } catch (e) {
      console.error(`\n! ${t.name}: ${e.message}`);
    }
    if (hit) break;
  }

  if (hit) {
    out[t.id] = {
      hashId: hit.hash_id,
      mapType: hit.map_type,
      mapName: hit.map_name ?? '',
      x: Math.round(hit.pos[0]),
      z: Math.round(hit.pos[2]),
    };
    process.stdout.write('.');
  } else {
    missing.push(`#${t.id} ${t.name}`);
    process.stdout.write('x');
  }
}

const sorted = Object.fromEntries(Object.entries(out).sort(([a], [b]) => a - b));
await writeFile(
  new URL('../src/data/totk-map-ids.json', import.meta.url),
  JSON.stringify(sorted, null, 2) + '\n'
);

console.log(`\nFound ${Object.keys(out).length}/${targets.length}.`);
if (missing.length)
  console.log(`Not found (these fall back to a map search):\n  ${missing.join('\n  ')}`);
