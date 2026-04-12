---
title: "ADR-002: ハンドレンジデータの一元管理"
status: accepted
date: 2026-04-12
tags: [データ設計, プリフロップ, レンジ]
---

# ADR-002: ハンドレンジデータの一元管理

## ステータス

Accepted

## コンテキスト

既存の4つの JSX ファイルでは、各ポジションのハンドレンジデータ（`new Set([...])` による定義）と UI コンポーネント（`HandGrid`, `GridBox`, `PlayerBox` 等）が完全に重複していた。

- ポジション追加・レンジ修正のたびに複数ファイルを変更する必要があった
- UI コンポーネントのバグ修正が4ファイルに波及していた
- 各ファイルのデータ形式が微妙に異なる（ブラインドのみスチールシナリオあり等）

## 決定

**全ポジション・全シナリオのレンジデータを `src/data/ranges.ts` に TypeScript オブジェクトとして一元管理する。**

データ構造は3層:

```typescript
PositionData → Scenario[] → ActionRange[]
```

- `PositionData`: ポジション（EP, CO, BTN, Blinds）の定義
- `Scenario`: 状況分岐（オープン、対タイト、対ルース、スチール等）
- `ActionRange`: アクション（raise, reraise, flat）とそのハンド集合・表示色

UI コンポーネント（`HandGrid`, `PositionSelector`, `ScenarioSelector`）は `src/components/` に1つずつ配置し、データを受け取って描画する純粋な表示コンポーネントとした。

## 理由

- **Single Source of Truth**: レンジデータの修正が1ファイルで完結する
- **型安全性**: TypeScript の型定義により、不正なデータ構造をコンパイル時に検出
- **柔軟なシナリオ対応**: ブラインドの特殊シナリオ（リンプポット、スチール）も `Scenario` の配列として自然に表現
- **再利用性**: クイズ機能からもレンジデータを参照できる（`rangePositionId` / `rangeScenarioId` で紐付け）

## 影響

- 新しいポジションやシナリオの追加は `ranges.ts` にデータを追加するだけで UI に反映される
- ハンドは文字列配列として定義しており、コンパイル時のタイポ検出はできない（手動照合で検証済み）
- 将来的にレンジのカスタマイズ機能を追加する場合、このデータ構造をベースに拡張可能
