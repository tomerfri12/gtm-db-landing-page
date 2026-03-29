# GtmDB marketing site

Static landing page for **[GtmDB](https://github.com/tomerfri12/gtm-db)** — graph-native GTM data layer. Primary CTA links to the [Cursor agent skill](https://github.com/tomerfri12/gtm-db/blob/main/skills/gtmdb/SKILL.md).

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
cd gtmdb-landing
python3 -m http.server 8080
# http://127.0.0.1:8080
```

## Git (own repo)

This directory is meant as a **separate** repository from `gtm-db`:

```bash
cd gtmdb-landing
git init
git add .
git commit -m "Initial landing page"
git remote add origin https://github.com/YOUR_USER/gtmdb-landing.git
git push -u origin main
```

## Deploy on Railway

1. Create a new **empty** project on [Railway](https://railway.com) and connect this repo (or deploy from the CLI).
2. Railway detects the **Dockerfile** and runs **nginx**; it sets **`PORT`** automatically — the image uses `/etc/nginx/templates/default.conf.template` so nginx listens on `$PORT`.
3. After deploy, open the generated **public URL**. No build command needed (static files baked into the image).

**CLI (optional):** from this directory, with Railway linked:

```bash
railway up
```

Redeploy after changes by pushing to the connected branch or triggering a redeploy in the dashboard.

## Repository links

| Resource    | URL |
|------------|-----|
| GtmDB code | https://github.com/tomerfri12/gtm-db |
| SKILL.md   | https://github.com/tomerfri12/gtm-db/blob/main/skills/gtmdb/SKILL.md |
