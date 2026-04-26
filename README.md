# Mile 1 — v3 Update: Real CGI Case Studies

This update replaces the placeholder portfolio with **3 real case studies** using your CGI partnership work with @wesualizestudios.

---

## What changed

### 1. Replaced 6 placeholder cases → 3 real cases

| # | Client | Project | Headline metric |
|---|--------|---------|-----------------|
| 01 | **Duroflex** | "The Virat Effect" — CGI Times Square Tribute | 867K likes, 219K shares, featured in 4 national outlets |
| 02 | **Jio Cinemas** | CGI Reveal Film | 1.3M likes |
| 03 | **Sony** | CGI Product Film | 246K likes |

All copy is written in Mile 1's voice — Brief, Thinking, Process, Outcome — for each case.

### 2. New Case Study page

Clicking any case (from Recent Miles on home, or Portfolio grid) now opens a dedicated page with:

- **Hero** — sector + tag chips, big client name, project subtitle
- **Embedded video** — vertical 9:16 player, full controls, partner credit "@WESUALIZESTUDIOS"
- **Metrics strip** — 4 hero numbers on a charcoal panel
- **Press features** — only shows if the case has press (Duroflex only)
- **Story** — Brief / Thinking / Process / Outcome in 4 dashed sections
- **Other Cases** — grid linking to siblings
- **CTA + Footer** — same layout as rest of site

### 3. Wired up navigation

- Recent Miles cards on home → click opens the case page directly (was: opened portfolio)
- Portfolio grid cards → click opens the case page (was: no click)
- Filter on portfolio simplified to `ALL / CGI` (since all 3 cases are CGI)
- Case page has a back button → returns to portfolio

### 4. Brand-specific gradients

Each case has its own accent colors instead of cycling generic gradients:
- Duroflex: `#1a1a2e → #3355FF`
- Jio Cinemas: `#0F0F10 → #3355FF`
- Sony: `#1a1a20 → #3355FF`

---

## How to deploy

This is a **complete drop-in replacement** for your current Vite + React project. Two paths:

### Path A — Replace files in your existing repo (recommended)

1. Unzip this archive
2. Replace `src/App.jsx` in your repo with the one in this zip
3. Copy the `public/cases/` folder (with the 3 videos) to your repo's `public/` folder
4. Commit + push — Vercel will auto-deploy

```bash
# rough sketch from your local machine
cp mile1-deploy-v3/src/App.jsx your-repo/src/App.jsx
cp -r mile1-deploy-v3/public/cases your-repo/public/cases
cd your-repo
git add -A && git commit -m "Add real CGI case studies (Sony, Duroflex, Jio Cinemas)"
git push
```

### Path B — Fresh deploy from this folder

```bash
cd mile1-deploy-v3
npm install
npm run build
# upload dist/ to your host of choice
```

---

## Files in this archive

```
src/App.jsx                  — Updated React app (single-file)
src/main.jsx                 — Unchanged
public/cases/duroflex.mp4    — 5.1 MB  (1080×1920, 21.9s)
public/cases/jio-cinemas.mp4 — 7.5 MB  (1080×1920, 19.2s)
public/cases/sony.mp4        — 2.3 MB  (360×640, 44.5s)
public/team/*.png            — Team photos (unchanged)
public/favicon.svg           — Unchanged
index.html                   — Unchanged
package.json, vite.config.js — Unchanged
```

Total video payload: **~15 MB**.

---

## To replace a video later (e.g. swap Sony for a higher-res version)

Just drop the new file in `public/cases/` with the same filename (`sony.mp4`) and rebuild. The `CASES` array in `src/App.jsx` references files by path, so as long as the filename stays the same, no code changes needed.

---

## To add a new case study

In `src/App.jsx`, find the `CASES` array (~line 95) and add a new object following the existing shape:

```js
{
  slug: 'new-client-name',           // URL-safe identifier
  client: 'New Client',
  sector: 'INDUSTRY',
  project: 'Project name',
  tags: ['CGI'],                      // or other tags
  result: 'One-line outcome.',
  metric: '500K',
  metricLabel: 'likes',
  video: '/cases/new-client.mp4',     // drop file in public/cases/
  accent: '#1a1a2e',                  // gradient start
  accent2: '#3355FF',                 // gradient end
  metrics: [                          // 4 stat tiles
    { num: '500K', label: 'Description' },
    // ...
  ],
  press: ['Outlet 1', 'Outlet 2'],   // empty array if none
  brief: '...',
  thinking: '...',
  process: '...',
  outcome: '...',
}
```

That's it — the new case automatically appears in Recent Miles (if in top 3), Portfolio grid, and the Other Cases panel of every other case page.

---

**Built for review before deploy.** Test locally first — `npm install && npm run dev` — then push when you're happy.
