# residensea

Static Next.js site for residensea, an annual artist residency by the sea hosted
by Violet Moon and Madelline Vicencio.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

`next.config.ts` sets `output: "export"`, so this produces a static site in
`./out` — no server required.

## Deploy — GitHub Pages

`.github/workflows/deploy.yml` builds and publishes `./out` to GitHub Pages on
every push to `main`. One-time setup in the repo:

1. Settings → Pages → Build and deployment → Source: **GitHub Actions**.
2. Push to `main` — the workflow builds and deploys automatically.

The site is served at `https://<owner>.github.io/<repo>/` until a custom
domain is attached.

### Pointing a custom domain at it later

1. Add a `public/CNAME` file containing just the domain, e.g. `residensea.com`.
2. At your DNS provider, add either:
   - an `A` record for the apex domain pointing at GitHub Pages' IPs
     (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`), or
   - a `CNAME` record for a subdomain (e.g. `www`) pointing at
     `<owner>.github.io`.
3. In Settings → Pages, set the custom domain and enable **Enforce HTTPS**
   once DNS has propagated.

No code changes needed beyond the `CNAME` file — the site has no `basePath`
configured, so it works the same at the GitHub Pages URL and a custom domain.
