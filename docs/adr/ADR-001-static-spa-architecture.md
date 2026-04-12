---
title: "ADR-001: Next.js 静的 SPA + GitHub Pages"
status: accepted
date: 2026-04-12
tags: [アーキテクチャ, Next.js, GitHub Pages, デプロイ]
---

# ADR-001: Next.js 静的 SPA + GitHub Pages

## ステータス

Accepted

## コンテキスト

ポーカープレイ中にスマホから素早くプリフロップ戦略を参照できるツールが必要だった。元々は4つの独立した React JSX ファイル（EP, CO, BTN, Blinds）として存在しており、プレイ中に個別ファイルを開くのは実用的でなかった。

要件:
- サーバー不要で動作すること（全データがクライアントサイド）
- モバイルブラウザで快適に操作できること
- 無料でホスティングできること
- `main` push で自動デプロイされること

## 決定

**Next.js (App Router) + TypeScript + Tailwind CSS v4 の静的 SPA として構築し、GitHub Pages でホスティングする。**

- `next.config.ts` で `output: "export"` を設定し、`out/` に静的 HTML を生成
- GitHub Actions で `main` push 時に自動ビルド・デプロイ
- `basePath` / `assetPrefix` は `NEXT_PUBLIC_BASE_PATH` 環境変数で制御（GitHub Pages のサブパス対応）

## 理由

- **Next.js**: 静的エクスポート対応、App Router によるページ追加が容易、将来の SSR 拡張にも対応可能
- **GitHub Pages**: 無料、GitHub Actions との統合がシームレス、カスタムドメインも設定可能
- **Vite + React SPA を採用しなかった理由**: Next.js の方がデプロイ設定が容易で、ルーティングも組み込み
- **CLI ツールを採用しなかった理由**: プレイ中はスマホで見ることが想定され、ブラウザアクセスが最も自然

## 影響

- GitHub Pages ではサブパスデプロイのため `basePath` 設定が必須（CI で `NEXT_PUBLIC_BASE_PATH` を自動設定）
- 全データをクライアントに持つため、データ量が増えてもバンドルサイズへの影響は軽微（数 KB）
- 新しいページ追加は `src/app/` 配下にディレクトリを作るだけで可能
