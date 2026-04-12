# Poker Preflop Strategy

ポーカー（テキサスホールデム）のプリフロップ戦略ツール。

ポジション別のハンドレンジ表示と、シチュエーション形式のハンドクイズ機能を提供します。

## Features

- **レンジ表**: EP / CO / BTN / SB・BB のポジション別ハンドレンジを 13x13 グリッドで表示
- **シナリオ切り替え**: オープン / 対タイト / 対ルース / スチール等のシチュエーション別レンジ
- **ハンドクイズ**: プリフロップの判断力を鍛えるインタラクティブクイズ（回答後にレンジ表も確認可能）
- **モバイル対応**: プレイ中にスマホから素早く参照できるレスポンシブデザイン

## Tech Stack

- Next.js (App Router) + TypeScript + Tailwind CSS v4
- Static export (`output: 'export'`) + GitHub Pages

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build  # out/ に静的ファイルを生成
```
