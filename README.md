# pampasfields.com

Static production site for `https://pampasfields.com/`.

## Local development

```bash
npm install
npm run dev
```

## Canonical deployment

```text
GitHub main
  -> CircleCI
  -> npm ci && npm run build
  -> wrangler deploy
  -> Cloudflare Workers Static Assets / pampasfields
  -> pampasfields.com/*
  -> production readback
```

Repository:
- `7thleaf-gd/pampasfields`

Worker:
- `pampasfields`
- Cloudflare account: `85c112de7152c89bb5ea84fdcb397e41`
- Production route: `pampasfields.com/*`

Deployment authority is `.circleci/config.yml` using CircleCI context `7thleaf-studios-deploy`.

### Locked rules

- Normal deploys use only CircleCI -> Cloudflare Workers.
- `CLOUDFLARE_API_TOKEN` is the only Cloudflare production credential used by the deploy job.
- Global API Key is not a production credential and must not be stored in CircleCI.
- Cloudflare Workers Builds / Git integration is not a second production executor.
- GitHub Actions is not a production deploy path.
- Mac / DC / RDC and `scripts/deploy-direct.sh` are recovery only.
- Do not add another production executor without explicitly replacing this authority.
- The Worker route `pampasfields.com/*` is part of production and must remain in `wrangler.jsonc`.
- A deploy is incomplete until live readback from `https://pampasfields.com/` passes.

## Wrangler

`wrangler.jsonc` serves `./dist` through Workers Static Assets and owns the production route.
