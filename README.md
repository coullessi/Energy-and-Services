# Energy and Services - Website

An elegant, fully responsive commercial website for **Energy and Services (E&S)**, a Burkina Faso distributor of quality solar energy solutions: production, storage and transformation of solar power, plus all types of pumping.

Built as a fast, dependency-free static site (HTML, CSS, vanilla JS) and ready to host on **Azure Static Web Apps**.

---

## Pages

| Page | File | Description |
|------|------|-------------|
| Accueil | `index.html` | Hero, solutions, about, stats, partners, news, CTA |
| Solutions | `solutions.html` | Full solution catalogue + 4-step method |
| À propos | `a-propos.html` | Mission, values, E&S spaces |
| Nos marques | `marques.html` | Partner brands and focus highlights |
| Actualités | `actualites.html` | News and product highlights |
| Contact | `contact.html` | Contact details + validated contact form |

## Project structure

```
Energy_Services/
├── index.html
├── solutions.html
├── a-propos.html
├── marques.html
├── actualites.html
├── contact.html
├── css/styles.css            # Design system + all styling
├── js/main.js                # Shared nav/footer, reveal, counters, form
├── staticwebapp.config.json  # Azure Static Web Apps routing + security headers
└── .github/workflows/        # CI/CD to Azure Static Web Apps
```

## Features

- Single shared design system with brand tokens (solar gold + sustainability green).
- Nav bar and footer injected from `js/main.js` so every page stays in sync.
- Scroll-reveal animations, animated counters, sticky nav, mobile menu, back-to-top.
- Accessible: semantic HTML, focus styles, `prefers-reduced-motion` support, ARIA labels.
- Client-side validated contact form.
- Security headers + CSP configured in `staticwebapp.config.json`.

---

## Run locally

Any static server works. For example:

```powershell
# Option A: VS Code Live Server extension (right-click index.html -> Open with Live Server)

# Option B: Node http-server
npx http-server . -p 5500

# Option C: Python
python -m http.server 5500
```

Then open http://localhost:5500.

---

## Deploy to Azure (Static Web Apps)

The admin account is `lessic@lessit.net`. Sign in with that account, then choose one of the options below.

### Option 1 - Azure CLI (quickest one-time deploy)

```powershell
# 1. Sign in (use the admin account when prompted)
az login

# 2. Create a resource group (choose a region close to your audience)
az group create --name rg-energy-services --location westeurope

# 3. Create the Static Web App and deploy this folder
#    (the Free tier is enough for this site)
az staticwebapp create `
  --name swa-energy-services `
  --resource-group rg-energy-services `
  --location westeurope `
  --sku Free

# 4. Deploy the local content using the SWA CLI
npm install -g @azure/static-web-apps-cli
swa deploy . --env production --app-name swa-energy-services --resource-group rg-energy-services
```

### Option 2 - GitHub Actions (recommended, continuous deployment)

1. Push this repository to GitHub.
2. In the Azure Portal, create a **Static Web App** and connect it to the GitHub repo (branch `main`, app location `/`, build preset **Custom**, output location `/`).
3. Azure adds the deployment token as the `AZURE_STATIC_WEB_APPS_API_TOKEN` secret and commits a workflow. This repo already includes a compatible workflow at `.github/workflows/azure-static-web-apps.yml`, so every push to `main` deploys automatically.

> If you let the Portal generate its own workflow file, you can delete the bundled one to avoid duplicate runs.

### Option 3 - VS Code

Install the **Azure Static Web Apps** extension, sign in with `lessic@lessit.net`, then use **Create Static Web App** and point it at this folder.

---

## Custom domain

After deployment, map `www.es-bf.com` (or your chosen domain) under the Static Web App's **Custom domains** blade and add the CNAME record at your DNS provider. Azure issues a free managed TLS certificate automatically.

---

## Content notes

Text content is in French and adapted from the public Energy and Services site (es-bf.com). Replace the placeholder visuals (CSS-rendered solar panels, brand tiles) with official photography and logos before going live.
