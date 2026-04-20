# Mile 1 Website — Deploy Package (v2)

Updated: team photos, Social Media Management service, mile1.co.in branding, real social links.

---

## ⚡ If you already deployed v1 and just need to update

You have two clean options:

### Option 1 — Replace everything on GitHub (recommended)

1. Go to your GitHub repo (`github.com/<your-username>/mile1-website`).
2. Delete all existing files in the repo (click each file → trash icon → commit).
3. Once the repo is empty, click **Add file → Upload files**.
4. Unzip this package on your computer.
5. **Drag the files from INSIDE `mile1-deploy/` into the GitHub upload area** — not the `mile1-deploy` folder itself. So you're uploading: `package.json`, `vite.config.js`, `index.html`, `README.md`, the `public/` folder (with `favicon.svg` and `team/` inside), and the `src/` folder (with `App.jsx` and `main.jsx` inside).
6. Commit changes.
7. Vercel auto-redeploys in ~90 seconds.

### Option 2 — Only update what changed

If you'd rather keep your commit history clean, you only need to update these files:

- Replace **`src/App.jsx`** with the new one (has all content changes)
- Create a new folder **`public/team/`** and upload all 6 team photos into it:
  - `joel-sunil.png`
  - `vinayak-choodan.png`
  - `aparna-as.png`
  - `milan-sebastian.png`
  - `sidhadh-binu.png`
  - `don-p-sunny.png`

To create the `public/team/` folder on GitHub: navigate to `public/` → click **Add file → Create new file** → in the filename box type `team/.gitkeep` (the `/` creates the folder) → scroll down, commit. Then click into the new `team/` folder → **Add file → Upload files** → drag all six photos in → commit.

---

## 📦 What's in this package

```
mile1-deploy/
├── package.json                    # dependencies
├── vite.config.js                  # build config
├── index.html                      # HTML entry
├── README.md                       # this file
├── public/
│   ├── favicon.svg                 # Mile 1 icon favicon
│   └── team/                       # ← NEW in v2
│       ├── joel-sunil.png          # Joel Sunil — Co-Founder & Creative Director
│       ├── vinayak-choodan.png     # Vinayak Choodan — Co-Founder & Strategy
│       ├── aparna-as.png           # Aparna AS — Content Writer
│       ├── milan-sebastian.png     # Milan Sebastian — SEO & Paid Ads Specialist
│       ├── sidhadh-binu.png        # Sidhadh Binu — CGI Specialist
│       └── don-p-sunny.png         # Don P Sunny — Video Editor
└── src/
    ├── main.jsx                    # React bootstrap
    └── App.jsx                     # entire website
```

---

## 🆕 What changed from v1 to v2

### Content
- **New service #7:** Social Media Management (with built-in content creation) — appears across home marquee, services page, portfolio filters
- **Team section:** 6 real team members with photos, in your specified order
- **Removed** the "countries shipped to" stat from homepage
- **Email:** hello@mile1.in → hello@mile1.co.in (footer + menu)
- **Instagram:** icons now link to https://www.instagram.com/mile1creations/

### Interaction / UX
- Team section is now a **horizontal drag-scrollable row** with real photos (grayscale by default, full colour on hover, subtle zoom)
- **Menu overlay is scrollable** now (previously overflow hidden on small screens)
- Progress rail no longer shows "MILE 02 / 03 / 04" as you scroll — just a quiet position indicator

### Copy
- Removed all "Mile 2 / 3 / 4 / 5 / 3.1 / 3.6 / 5.1" references — only "Mile 1" / "MILE 01" (the brand name) remains anywhere
- "Six services" → "Seven services" everywhere
- End-of-services headline: "You've reached Mile 3.6" → "You've reached the end of the toolkit"
- Page transition: "MOVING TO MILE X" → "MOVING TO [PAGE NAME]"

---

## 🚀 If this is your FIRST deployment

### Path A — Vercel + GitHub (recommended)

1. Create a GitHub account at https://github.com/signup (free).
2. Go to https://github.com/new, name the repo `mile1-website`, click **Create**.
3. On the empty repo page, click **"uploading an existing file"**.
4. Unzip this package on your computer.
5. Drag the files from INSIDE the `mile1-deploy/` folder into GitHub (not the outer folder). First file visible in your upload should be `package.json`.
6. Commit.
7. Go to https://vercel.com/new, sign in with GitHub.
8. Click **Import** next to your `mile1-website` repo.
9. Don't change settings. Click **Deploy**.
10. Live URL in ~90 seconds.

### Custom domain (after deploy)

1. Vercel → your project → **Settings → Domains**.
2. Add `mile1.co.in`.
3. Vercel shows DNS records to add at your registrar (GoDaddy/Namecheap/etc.).
4. Add the A record and CNAME at your registrar. Wait 10–30 minutes for DNS to propagate.

---

## 🔧 Common issues

| Symptom | Fix |
|---|---|
| Team photos not showing / broken icons | The `public/team/` folder didn't upload. Check GitHub — it should exist with all 6 `.png` files inside. |
| "Cannot find module 'lucide-react'" | `package.json` didn't upload to repo root. |
| Blank page after deploy | Open browser DevTools → Console tab. Copy the error and share it. |
| Build fails with syntax error | Don't edit App.jsx in a rush — paste your intended change for a fixed version. |

---

## 🛠 Running locally (optional)

If you want to test before deploying:

```
npm install
npm run dev
```

Opens at http://localhost:5173. Hot reload works — any edit to App.jsx updates instantly.

Build for production:
```
npm run build
```
