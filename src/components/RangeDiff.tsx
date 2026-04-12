"use client";

import { useState } from "react";
import { positions, getHandName } from "@/data/ranges";

const OPEN_SCENARIOS: Record<string, string> = {
  ep: "ep-open",
  co: "co-open",
  btn: "btn-open",
  blinds: "blinds-limp",
};

/** 全ポジション共通の核（覚え方ガイドのセクション1と対応） */
const CORE_HANDS = new Set([
  "AA","KK","QQ","JJ",
  "AKs","AQs","AJs","ATs",
  "KQs",
  "AKo",
]);

const POSITION_PAIRS = [
  { base: "core", target: "blinds", label: "コア → SB/BB", note: "リンパーに対するレイズレンジ" },
  { base: "core", target: "ep", label: "コア → EP", note: null },
  { base: "ep", target: "co", label: "EP → CO", note: null },
  { base: "co", target: "btn", label: "CO → BTN", note: null },
  { base: "ep", target: "btn", label: "EP → BTN", note: null },
];

function getOpenRaiseHands(positionId: string): Set<string> {
  if (positionId === "core") return CORE_HANDS;
  const pos = positions.find((p) => p.id === positionId);
  if (!pos) return new Set();
  const scenarioId = OPEN_SCENARIOS[positionId];
  const scenario = pos.scenarios.find((s) => s.id === scenarioId);
  if (!scenario) return new Set();
  const raiseRange = scenario.ranges.find((r) => r.action === "raise");
  return new Set(raiseRange?.hands ?? []);
}

const DISPLAY_NAMES: Record<string, string> = {
  core: "コア",
  ep: "EP",
  co: "CO",
  btn: "BTN",
  blinds: "SB/BB",
};

export function RangeDiff() {
  const [pairIndex, setPairIndex] = useState(0);
  const pair = POSITION_PAIRS[pairIndex];

  const baseHands = getOpenRaiseHands(pair.base);
  const targetHands = getOpenRaiseHands(pair.target);

  const baseName = DISPLAY_NAMES[pair.base] ?? pair.base;
  const targetName = DISPLAY_NAMES[pair.target] ?? pair.target;

  return (
    <div>
      {/* Pair selector */}
      <div className="flex flex-wrap gap-2 mb-3 justify-center">
        {POSITION_PAIRS.map((p, i) => (
          <button
            key={p.label}
            onClick={() => setPairIndex(i)}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
              i === pairIndex
                ? "bg-slate-800 text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="flex justify-center">
        <div className="inline-block leading-none">
          {Array.from({ length: 13 }, (_, r) => (
            <div key={r} className="flex gap-px mb-px">
              {Array.from({ length: 13 }, (_, c) => {
                const h = getHandName(r, c);
                const inBase = baseHands.has(h);
                const inTarget = targetHands.has(h);
                const isAdded = !inBase && inTarget;
                const isPair = r === c;

                let bg: string;
                let color: string;
                if (inBase) {
                  bg = "#16a34a";
                  color = "#fff";
                } else if (isAdded) {
                  bg = "#f97316";
                  color = "#fff";
                } else {
                  bg = isPair ? "#b0bec5" : "#cfd8e3";
                  color = isPair ? "#546e7a" : "#90a4ae";
                }

                return (
                  <div
                    key={c}
                    className="flex items-center justify-center font-mono font-bold select-none rounded-sm"
                    style={{
                      width: "clamp(20px, 6.5vw, 32px)",
                      height: "clamp(16px, 5vw, 26px)",
                      fontSize: "clamp(6px, 1.8vw, 10px)",
                      background: bg,
                      color,
                    }}
                  >
                    {h}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="flex gap-4 justify-center mt-3">
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-2.5 rounded-sm" style={{ background: "#16a34a" }} />
          <span className="text-[11px] font-bold text-slate-700">
            {baseName} でもオープン
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-2.5 rounded-sm" style={{ background: "#f97316" }} />
          <span className="text-[11px] font-bold text-slate-700">
            {targetName} で追加
          </span>
        </div>
      </div>

      {/* Note */}
      {pair.note && (
        <p className="text-[10px] text-slate-400 text-center mt-2">
          ※ SB/BBはオープンレイズではなく{pair.note}
        </p>
      )}
      {!pair.note && pair.target !== "blinds" && pair.base !== "blinds" && (
        <p className="text-[10px] text-slate-400 text-center mt-2">
          ※ EP〜BTNはオープンレイズ（誰もレイズしていない状態）のレンジ
        </p>
      )}
    </div>
  );
}
