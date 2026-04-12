"use client";

import Link from "next/link";
import { RangeDiff } from "@/components/RangeDiff";
import { PositionQuiz } from "@/components/PositionQuiz";

export default function TipsPage() {
  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 to-slate-100 px-3 py-4 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-slate-800 font-bold"
        >
          &larr; レンジ表
        </Link>
        <h1 className="text-base font-extrabold text-slate-800">
          レンジの覚え方
        </h1>
        <div className="w-16" />
      </div>

      <div className="flex flex-col items-center gap-6 max-w-lg mx-auto">
        {/* ── セクション1: 覚え方ガイド ── */}
        <section className="w-full">
          <h2 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
            <span className="bg-slate-800 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
              1
            </span>
            コア構造は全ポジション共通
          </h2>
          <div className="bg-white rounded-xl shadow-md p-4 text-sm text-slate-700 leading-relaxed">
            <p className="mb-3">
              どのポジションでも「核」は同じ。ポジションが良くなるほど外側に広がるだけ:
            </p>
            <div className="bg-slate-50 rounded-lg p-3 font-mono text-xs leading-loose mb-3">
              <div>
                <span className="text-slate-400">核　:</span>{" "}
                <span className="font-bold">AA-JJ, AKs-ATs, KQs, AKo</span>
              </div>
              <div className="mt-1">
                <span className="text-slate-400">+EP :</span>{" "}
                ローペア, スーテッドコネクター(JTs-76s), AQo
              </div>
              <div>
                <span className="text-slate-400">+CO :</span>{" "}
                K9s-K7s, ギャップSC(J9s,T8s等), ATo,KJo
              </div>
              <div>
                <span className="text-slate-400">+BTN:</span>{" "}
                全Kxs, Q8s-Q5s, A9o-A7o, KTo,QJo
              </div>
            </div>
            <p className="text-xs text-slate-500">
              核を覚えれば、あとは「ポジションごとに何が追加されるか」だけ。
            </p>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
            <span className="bg-slate-800 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
              2
            </span>
            スーテッドならワンランク広い
          </h2>
          <div className="bg-white rounded-xl shadow-md p-4 text-sm text-slate-700 leading-relaxed">
            <p className="mb-3">ほぼ全シナリオで成り立つ法則:</p>
            <div className="space-y-2 mb-3">
              {[
                ["AJo → Fold", "AJs → Call", "フラッシュ可能性の差"],
                ["K8o → Fold", "K8s → Raise", "BTNオープンの境界"],
                ["AQo → Call", "AQs → 3-Bet", "スーテッドでバリューアップ"],
              ].map(([bad, good, reason]) => (
                <div
                  key={bad}
                  className="flex items-center gap-2 text-xs bg-slate-50 rounded-lg px-3 py-2"
                >
                  <span className="text-red-500 font-bold whitespace-nowrap">
                    {bad}
                  </span>
                  <span className="text-slate-300">→</span>
                  <span className="text-green-600 font-bold whitespace-nowrap">
                    {good}
                  </span>
                  <span className="text-slate-400 ml-auto text-[10px]">
                    {reason}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500">
              迷ったら「スーテッドならワンランク上のアクション」と覚える。
            </p>
          </div>
        </section>

        <section className="w-full">
          <h2 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
            <span className="bg-slate-800 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
              3
            </span>
            3-Betは「両端」だけ
          </h2>
          <div className="bg-white rounded-xl shadow-md p-4 text-sm text-slate-700 leading-relaxed">
            <p className="mb-3">
              リレイズするのはバリューとブラフの両端。中間はフラットコール:
            </p>
            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2 text-xs">
                <span
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ background: "#e53935" }}
                />
                <span className="font-bold text-slate-800">バリュー:</span>
                <span>AA, KK, AKs</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ background: "#e53935" }}
                />
                <span className="font-bold text-slate-800">ブラフ:</span>
                <span>A5s-A2s, T9s, 87s（ブロッカー効果）</span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ background: "#1565c0" }}
                />
                <span className="font-bold text-slate-800">中間（フラット）:</span>
                <span>JJ, TT, AQs, KQs, JTs ...</span>
              </div>
            </div>
            <p className="text-xs text-slate-500">
              「強すぎるか弱すぎる（けどポテンシャルがある）ハンドで3-Bet」と覚える。
            </p>
          </div>
        </section>

        {/* ── セクション2: レンジ差分表示 ── */}
        <section className="w-full">
          <h2 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
            <span className="bg-orange-500 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
              4
            </span>
            ポジション間の差分を見る
          </h2>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p className="text-xs text-slate-500 mb-3 text-center">
              オレンジのハンドが「そのポジションで追加されるハンド」
            </p>
            <RangeDiff />
          </div>
        </section>

        {/* ── セクション3: ポジション当てクイズ ── */}
        <section className="w-full">
          <h2 className="text-sm font-extrabold text-slate-800 mb-3 flex items-center gap-2">
            <span className="bg-green-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-[10px]">
              5
            </span>
            ポジション当てクイズ
          </h2>
          <p className="text-xs text-slate-500 mb-3 text-center">
            このハンドはどのポジションからオープンできる？
          </p>
          <PositionQuiz />
        </section>

        {/* Navigation */}
        <div className="flex gap-2 pb-4">
          <Link
            href="/"
            className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-all"
          >
            レンジ表へ
          </Link>
          <Link
            href="/quiz"
            className="px-5 py-2.5 rounded-lg bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 transition-all"
          >
            ハンドクイズへ
          </Link>
        </div>
      </div>
    </div>
  );
}
