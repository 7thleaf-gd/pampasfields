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

Canonical production is Cloudflare Pages project `pampasfields` on `pampasfields.com`.

GitHub Actions deployment is retired. Use Cloudflare Git Integration when healthy; direct recovery/deploy is:

```bash
./scripts/deploy-direct.sh
```

Do not add a scheduled or push-triggered GitHub Actions deploy.
