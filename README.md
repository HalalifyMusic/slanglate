# Slanglate — Slang to English Translator

**[slanglate.pages.dev](https://slanglate.pages.dev)** — Translate Gen Z slang, internet lingo, and modern expressions into plain English. Like Google Translate meets Urban Dictionary.

![Slanglate screenshot](https://og-image-nine-virid.vercel.app/api/og?title=Slanglate&desc=Slang+to+English+Translator)

---

## What it does

Type any slang phrase — `no cap that's lowkey bussin fr fr` — and get a clear, plain-English breakdown of every term. Works for Gen Z slang, internet acronyms, TikTok terms, Discord speak, and more.

- **328 slang terms** — rizz, gyat, situationship, delulu, based, NPC, wsg, lmao, hmu, and hundreds more
- **Instant translation** — no API calls, no latency, fully offline-capable
- **Trending dictionary** — browse by category (compliments, criticism, internet, common)
- **Search** — find any term instantly across the full dictionary
- **Random mode** — discover terms you didn't know existed

## Tech

Pure HTML, CSS, and JavaScript. No framework, no build step, no dependencies. Deployed on Cloudflare Pages.

| Layer | Choice |
|-------|--------|
| Frontend | Vanilla JS |
| Fonts | Unbounded + Plus Jakarta Sans + DM Mono (Google Fonts) |
| Hosting | Cloudflare Pages |
| Data | Static `slangData.js` — hand-curated + scraped from open datasets |

## Running locally

```bash
python3 -m http.server 8765
# open http://localhost:8765
```

## Slang coverage

Covers terms from:
- Gen Z / TikTok (rizz, gyat, delulu, NPC, understood the assignment)
- Internet / Twitter / Discord (ratio, L + ratio, based, rent free)
- AAVE-derived (bussin, slay, no cap, periodt, fr fr)
- Acronyms (wsg, wsp, wyd, hmu, lmk, istg, ngl, smh, lmao)
- Relationship language (situationship, talking stage, benching, orbiting, breadcrumbing)
- Aesthetics & trends (dark academia, clean girl, that girl, goblinmode, quiet luxury)

## License

MIT
