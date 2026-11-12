export function parseTopic(raw) {
  const out = {};
  let tier = null;
  for (const line of raw.trim().split('\n').map(x => x.trim()).filter(Boolean)) {
    if (line.startsWith('@')) { tier = line.slice(1); out[tier] = []; continue; }
    const parts = line.split('|').map(x=>x.trim());
    if (!tier || parts.length !== 4 || parts.some(x=>!x)) throw new Error(`Invalid trivia seed for ${tier}: ${line}`);
    out[tier].push(parts);
  }
  if (Object.keys(out).length !== 8 || out.beginner.length !== 20 || Object.entries(out).some(([tier, rows]) => tier !== 'beginner' && rows.length !== 10)) throw new Error(`Invalid trivia seed distribution: ${JSON.stringify(Object.fromEntries(Object.entries(out).map(([k,v])=>[k,v.length])))}`);
  return out;
}
