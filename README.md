# Mile 1 — v4 Update: Logos + Partners + Video Fix

This update fixes the video playback issue, adds client logos throughout, replaces the homepage marquee with a logo strip, and introduces a Partners section featuring WeSualize Studios.

---

## What changed in v4

### 1. Video playback fix on case study pages
The previous CSS (`aspectRatio: 9/16` + `objectFit: contain` on the `<video>`) was breaking native HTML5 controls in some browsers. Replaced with a clean `width: 100% / height: auto / maxHeight: 80vh` setup, plus `key={c.slug}` so the player actually reloads between cases. Videos now play correctly.

### 2. Homepage marquee — services → client logos
The strip after the hero now shows client logos in light brand color, all moving left. Logos in the strip: **Sony, Duroflex, JioHotstar, Amazon, Titan, Paris Corner**. All logos are filtered to white (`brightness(0) invert(1)`) so they render uniformly regardless of source format (PNG/WEBP/SVG with various original colors).

### 3. Client logos on case study thumbnails
- **Recent Miles** cards (homepage) — large white client logo center-stage replaces the "01/02/03" number
- **Portfolio grid** cards — client logo overlaid centered, small case number kept as decoration in corner
- **Other Cases** grid (inside each case study page) — same treatment

### 4. New Partners section on homepage
Sits between Recent Miles and Stats. Two-column layout: copy on the left (*"We don't do this alone."* + WeSualize partnership write-up) + framed logo card on the right with the WeSualize gradient logo on its native black background. Also added 'PARTNERS' to the home page progress rail.

### 5. WeSualize logo replaces text below videos
Every case study page previously read *"CGI FILM · PRODUCED WITH @WESUALIZESTUDIOS"* — now it reads *"CGI FILM · PRODUCED WITH"* + the WeSualize logo image inline.

---

## Files in this archive

```
src/App.jsx                    — Updated React app (single file, ~2400 lines)
src/main.jsx                   — Unchanged
public/cases/
  duroflex.mp4                 — 5.1 MB  (1080x1920, 21.9s)
  jio-cinemas.mp4              — 7.5 MB  (1080x1920, 19.2s)
  sony.mp4                     — 2.3 MB  (360x640, 44.5s)
public/clients/                — NEW DIRECTORY
  amazon.webp                  — Amazon logo
  duroflex.png                 — Duroflex logo
  jio-cinemas.png              — JioHotstar logo
  paris-corner.png             — Paris Corner logo
  sony.svg                     — Sony logo (SVG, recolorable)
  titan.png                    — Titan logo
  wesualize.png                — Partner studio logo (color preserved)
public/team/*.png              — Team photos (unchanged)
public/favicon.svg             — Unchanged
index.html, package.json, vite.config.js — Unchanged
```

---

## How to deploy

### Path A — Drop into existing repo (recommended)

Copy these into your existing repo:
1. `src/App.jsx` (replaces existing)
2. `public/clients/` folder (entire directory — new)
3. `public/cases/` folder if you don't have it yet

```bash
cp v4/src/App.jsx your-repo/src/App.jsx
cp -r v4/public/clients your-repo/public/clients
cp -r v4/public/cases your-repo/public/cases  # if not already present
cd your-repo
git add -A && git commit -m "v4: client logos, partners, video fix"
git push
```

Vercel auto-deploys.

### Path B — Fresh build

```bash
cd v4
npm install
npm run build
# upload dist/ to your host
```

---

## How to add a new client to the homepage marquee

In `src/App.jsx`, find `clientLogos` (~line 903) and add an entry:

```js
{ src: '/clients/new-client.png', alt: 'New Client', height: 40 }
```

Drop the logo file into `public/clients/`. Source format doesn't matter (PNG/WEBP/SVG/JPG) — the marquee filters all logos to white automatically. Adjust `height` based on the logo's aspect ratio.

## How to swap the partner studio

In the Partners section (~line 1151 in App.jsx), the WeSualize logo is referenced by `/clients/wesualize.png`. To swap, replace that file with the new partner's logo and update the copy. Note: this section preserves the partner's original colors (no white filter applied) — make sure the new logo has reasonable visibility on a black background.

---

**Test locally first** — `npm install && npm run dev` — then push when you're happy.
