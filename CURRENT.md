# Pampas Fields CURRENT

Status: CURRENT
Authority: `7thleaf-gd/pampasfields`
Deploy authority: CircleCI
Production branch: `main`
Production hostname: `pampasfields.com`
Provider: Cloudflare Workers Static Assets
Worker: `pampasfields`
Production route: `pampasfields.com/*`

## Canonical deploy path

```text
GitHub main
  -> CircleCI
  -> npm ci
  -> npm run build
  -> wrangler deploy
  -> Cloudflare Worker / pampasfields
  -> pampasfields.com/*
  -> production readback
```

## Fixed rules

- CircleCI is the only normal production deploy executor.
- CircleCI context: `7thleaf-studios-deploy`.
- Cloudflare credential: scoped `CLOUDFLARE_API_TOKEN` only.
- Global API Key must not be stored as a deploy credential.
- Cloudflare Workers Builds / Git Integration is not a parallel production executor.
- GitHub Actions is not a production deploy path.
- Mac / DC / RDC is recovery only and is not a production deploy executor.
- Manual direct-deploy scripts are retired and must not be restored.
- `wrangler.jsonc` must keep `route: "pampasfields.com/*"`.
- No alternate deploy lane, direct-deploy script, or relay may be added beside this path.
- Production is complete only after live readback from `https://pampasfields.com/` passes.

## Current live boundary

- Public network bar must not contain a Studio / `7thleaf.xyz` route.
- Public shop route is `https://7thleaf.thebase.in/`.

## Chappy 0002 production verification

- Executor trace: `CHAPPY-0002-GD-DEPLOY-20260929-PFNFA`
- Shared CircleCI context: `7thleaf-studios-deploy`
- Shared Cloudflare credential was replaced with a long-lived CI API token before this verification run.
- Verification target: CircleCI deploy -> `https://pampasfields.com/` -> production readback.

## CircleCI connection

- CircleCI project ID: `871da056-ef14-4f61-9df1-8962fbd02398`
- Project follow: PASS
- Shared context restriction: `7thleaf-studios-deploy` / project restriction added
- Executor trace: `CHAPPY-0002-GD-DEPLOY-20260929-PFNFA`
