#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
npm ci
npm run build
npx wrangler pages deploy dist --project-name=pampasfields --branch=main --commit-hash="$(git rev-parse HEAD)"
