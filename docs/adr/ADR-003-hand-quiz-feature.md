---
title: "ADR-003: プリフロップ ハンドクイズ機能"
status: accepted
date: 2026-04-12
tags: [機能設計, クイズ, プリフロップ]
---

# ADR-003: プリフロップ ハンドクイズ機能

## ステータス

Accepted

## コンテキスト

レンジ表で戦略を「見る」ことはできるが、実際のプレイでは「このシチュエーションでどうするか」を瞬時に判断する力が必要。書籍のハンドクイズ形式（シチュエーション提示 → アクション選択 → 解説）をインタラクティブなWebツールに変換したかった。

## 決定

**`/quiz` ページとしてハンドクイズ機能を追加する。**

### データ設計

問題データは `src/data/quiz-data.ts` に `QuizQuestion[]` として静的に定義:

```typescript
interface QuizQuestion {
  id: number;
  situation: string;        // シチュエーション説明
  hand: string;             // 自分のハンド
  position: string;         // ポジション
  options: string[];        // 選択肢
  correctIndex: number;     // 正解インデックス
  explanation: string;      // 解説
  rangePositionId: string;  // 関連レンジのポジションID
  rangeScenarioId: string;  // 関連レンジのシナリオID
}
```

### UI 構成

- `QuizCard`: 問題表示（シチュエーション + ハンド + 選択肢ボタン）
- `QuizResult`: 正解/不正解 + 解説 + 関連レンジ表（`HandGrid` を再利用）
- クイズページ: Fisher-Yates シャッフルで毎回ランダム出題、全問完了後にスコア表示

### レンジ表連携

各問題に `rangePositionId` / `rangeScenarioId` を持たせ、回答後に該当するレンジ表を `HandGrid` で表示。これにより「なぜこのアクションが正しいか」をレンジ表で視覚的に確認できる。

## 理由

- **静的データ**: 問題数が少なく（現在6問）、データベース不要。TypeScript オブジェクトで十分
- **シャッフル**: `useMemo` + `shuffleKey` パターンで、リスタート時にも再シャッフルされる
- **レンジ表連携**: 既存の `ranges.ts` データと `HandGrid` コンポーネントをそのまま再利用でき、追加コストが低い
- **問題追加の容易さ**: `quiz-data.ts` にオブジェクトを追加するだけで新問題が出題される

## 影響

- 問題の追加はデータファイルのみの変更で完結する
- 将来的にスコア記録やユーザー別進捗を追加する場合は、localStorage や外部ストレージの導入が必要
- フロップ以降のクイズに拡張する場合は、`QuizQuestion` の型を拡張するか別のデータ型を用意する
