# Mile 1 Website — Deploy Guide

This folder is a complete, ready-to-deploy website. Pick **one** of the paths below.

---

## ✅ Path A — Vercel (easiest, ~2 minutes, free public URL)

Vercel gives you a live URL like `mile1.vercel.app` without touching a terminal.

1. Unzip this folder somewhere on your computer (Desktop is fine).
2. Go to **https://vercel.com/signup** and sign up with GitHub, Google, or email. It's free.
3. Once logged in, go to **https://vercel.com/new**.
4. You'll see three options. Click **"Deploy a template"** is NOT what you want — instead, look for the small link that says **"Import Third-Party Git Repository →"** OR just scroll down to **"Upload a folder"**.
5. If you don't see an upload option, use this direct link: **https://vercel.com/new/upload**
6. **Drag the unzipped `mile1-deploy` folder** into the upload area.
7. Vercel detects it's a Vite project automatically. Leave all settings as default.
8. Click **Deploy**.
9. Wait ~60–90 seconds. You'll get a live URL: `https://mile1-deploy-xxxxx.vercel.app`

That URL is shareable with anyone. Open it on mobile, desktop, show it to clients — it's live on the internet.

---

## ✅ Path B — Netlify Drop (even simpler, but requires one build step)

This one is drag-and-drop simple but you need to build the project first. Skip to Path C if you don't want to install Node.

1. Install Node.js from **https://nodejs.org** (pick the LTS version, download, run installer, click Next through everything).
2. Open Terminal (Mac) or PowerShell (Windows).
3. Navigate to the unzipped folder:
   ```
   cd path/to/mile1-deploy
   ```
   (Tip on Mac: type `cd ` with a space, then drag the folder into Terminal — it auto-fills the path.)
4. Run these two commands, one at a time:
   ```
   npm install
   npm run build
   ```
5. A new `dist` folder appears inside `mile1-deploy`.
6. Go to **https://app.netlify.com/drop**.
7. Drag the `dist` folder (not the whole project — just `dist`) into the browser.
8. ~20 seconds later you have a live URL like `https://random-name-123.netlify.app`.

---

## ✅ Path C — GitHub + Vercel (most robust, what real teams use)

Best if you plan to iterate on the site over time.

1. Install Node.js from **https://nodejs.org** (LTS version).
2. Create a free GitHub account at **https://github.com/signup** if you don't have one.
3. Go to **https://github.com/new**, name the repo `mile1-website`, leave it public (or private, your call), click **Create repository**.
4. GitHub shows you instructions. Use the **"upload an existing file"** link on that page.
5. Drag the entire contents of the unzipped `mile1-deploy` folder (all of it) into the upload area.
6. Scroll down, click **Commit changes**.
7. Now go to **https://vercel.com/new**, sign in with GitHub.
8. Click **Import** next to your `mile1-website` repo.
9. Leave everything default, click **Deploy**.
10. Live URL in ~90 seconds.

Any time you want to update the site later, just edit files on GitHub and Vercel auto-redeploys.

---

## 🔧 If something breaks — troubleshooting

**"Build failed" on Vercel/Netlify**
- Make sure you uploaded the folder that contains `package.json` at its root, not a folder above it. The very first file inside your zip should be `package.json`, not `mile1-deploy/package.json`.

**"Cannot find module 'lucide-react'"**
- Your `package.json` is missing the dependency. Open `package.json` and confirm it contains `"lucide-react": "^0.383.0"` under `dependencies`. This folder's `package.json` already has it — just make sure it got uploaded.

**Site loads but shows a blank page**
- Open the browser dev tools (right-click → Inspect → Console tab) and copy the error. Send it back to me, I'll fix it.

**Preview URL loads but looks unstyled**
- The Satoshi font is loaded from Fontshare at runtime. Give it 2–3 seconds. If it never loads, your network is blocking Fontshare — let me know and I'll switch to a different font CDN.

---

## 📦 What's in this folder

```
mile1-deploy/
├── package.json          ← dependencies (React, Vite, lucide-react)
├── vite.config.js        ← build configuration
├── index.html            ← HTML entry
├── public/
│   └── favicon.svg       ← Mile 1 favicon
└── src/
    ├── main.jsx          ← React bootstrap
    └── App.jsx           ← the entire website (all 5 pages)
```

Everything the site needs is self-contained. No external config, no environment variables, no API keys.

---

## 🌐 Adding a custom domain (mile1.in) later

Once deployed on Vercel:
1. Go to your project → Settings → Domains.
2. Add `mile1.in` (or `www.mile1.in`).
3. Vercel shows you DNS records to add at your domain registrar (GoDaddy/Namecheap/wherever you bought mile1.in).
4. Add those records, wait 5–30 minutes, and `mile1.in` points to your site with automatic HTTPS.

---

**Recommendation:** Try **Path A** first. It's the fastest and doesn't need any installation.
