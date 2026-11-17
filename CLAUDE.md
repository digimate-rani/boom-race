# Boom Race - project instructions

Kids' car game designed with Rani's son. Track: **Quick build** (no Digido). Rani forwards his son's requests
("rejects") in Hebrew; reply to Rani in Hebrew, short, and answer the kid's questions in plain words.

## Files
- `index.html` - the whole game (canvas + inline JS/CSS). Lines ending `<!--wrap-->` are the HTML document
  wrapper (doctype, head metas, service worker); everything else is the page body.
- `manifest.json`, `icon.svg`, `sw.js` - installable PWA, works offline after the first visit.
- `tools/check-*.js` - Playwright checks (use the Playwright install in `<PROJECTS_ROOT>/ronit-agent/tools/playwright`).
  The game exposes `window.__boomRace.S` (game state) for these tests only.
- `session-handoffs/` - gitignored session summaries. Read the latest before changing anything.

## After every change
1. `node tools/check-full-level.js` (and the other checks that touch the change) - must print `errors: []`.
2. Look at a screenshot for any visual change (they are saved in the system temp folder).
3. Commit (no Co-Authored-By trailer) and `git push` - GitHub Pages redeploys in ~1 minute.
4. Optional: the claude.ai artifact copy = `sed '/<!--wrap-->/d' index.html`, published to
   https://claude.ai/artifact/BhQRXWkDhYzzJxSXiW9og6 (pass that url).

## Save data
localStorage key `boomrace-v2`: `{money, owned[], car, stars{}, unlocked, muted}`. Car ids are `<style>-<n>`.
Never break old saves: add a migration next to the existing one (old 8-car ids -> `<id>-0`).
