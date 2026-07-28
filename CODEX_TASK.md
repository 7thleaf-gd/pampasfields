# Codex実装指示: pampasfields.com Tumblr → Git移管

## 目的
現行サイト `https://pampasfields.com/` をTumblrから静的サイトへ移管する。
ページ数は少ないためCMS化しない。Viteの静的マルチページ構成で完成させる。

## 最重要
- 現行サイトをブラウザで確認し、見た目を可能な限り忠実に再構成する。
- Stashテーマのソースコードを転載・流用しない。HTML/CSS/JSを新規実装する。
- コンテンツ、画像、リンク、ページ構造は現行サイトから回収する。
- `thepan.xyz` の案件は触らない。
- 一人運用なのでReact、CMS、DB、過剰なコンポーネント設計は禁止。

## 対象ページ
- `/`
- `/discography/`
- `/biography/`
- `/Biography/` は `/biography/` へリダイレクトまたは同内容
- `/lyrics/`
- `/lineat/`
- `/contents/` は現行リンク先へ接続
- `/post/821495624623161344/watch-one-night-read-the-pan-dossier-listen`

## デザイン再現方針
- 現行の大きなフルスクリーン画像を主役にする。
- 黒基調、白文字、簡素なナビゲーション。
- 写真とタイポグラフィ中心。
- 余白を大きく取り、Tumblr感のある縦スクロール体験を維持。
- スマホを最優先。
- 過剰なグリッチや装飾を追加しない。今のサイトの静けさを守る。
- 現行サイトの画像URLを一時利用してもよいが、最終的には `public/assets/images/` に保存して相対パス化する。

## 計測
- `content/site.json` の `analytics.ga4MeasurementId` にGA4 IDを設定できるようにする。
- 全ページでpage_viewを取得する。
- YouTube、Bandcamp、外部リンクのクリックを `outbound_click` として送る。
- 計測IDが空ならエラーを出さず何もしない。

## SEO・移管
- title / description / canonical / OGPを全ページ設定。
- 既存URLを可能な限り維持。
- Cloudflare Pages用 `_redirects` を作る。
- 404ページを作る。
- `npm run build` が成功すること。

## 作業順
1. `npm install`
2. `npm run dev`
3. 現行サイトを各ページ・スマホ幅で確認
4. ページ内容と画像を回収
5. デザインを新規実装
6. GA4実装
7. リダイレクト実装
8. `npm run build`
9. PC 1440px / mobile 390pxで最終確認

## 完了条件
- Tumblrを停止しても主要ページが成立する。
- 現行のブランド印象が崩れていない。
- 全主要リンクが動く。
- GA4が確実に入る。
- 静的ホスティングへそのまま出せる。
