# pampasfields.com local migration

## 起動

```bash
npm install
npm run dev
```

表示されたローカルURLをブラウザで開く。

## Codexへ渡す
Codexにこのフォルダを開かせて、最初に `CODEX_TASK.md` を読ませる。

推奨プロンプト:

```text
CODEX_TASK.mdを読んで、現行の https://pampasfields.com/ を確認しながらTumblrから静的サイトへ移管してください。まず現行ページとこのリポジトリを比較し、必要な素材と未実装箇所を洗い出した後、そのまま実装、ビルド確認まで進めてください。
```

## Production deployment

Canonical production target is Cloudflare Workers Static Assets.

Repository:
- `7thleaf-gd/pampasfields`

Worker:
- `pampasfields`
- Cloudflare account: `85c112de7152c89bb5ea84fdcb397e41`

Normal deployment goal:

```text
GitHub main
  -> Cloudflare Workers Builds
  -> npm ci && npm run build
  -> npx wrangler deploy
  -> pampasfields Worker
```

GitHub Actions deployment is retired and must not be restored while runner capacity is unavailable.

Direct recovery/deploy:

```bash
./scripts/deploy-direct.sh
```

The Wrangler config is `wrangler.jsonc` and serves `./dist` through Workers Static Assets.
