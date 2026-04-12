"use client";

import { useState } from "react";
import { positions, getHandName } from "@/data/ranges";

const OPEN_SCENARIOS: Record<string, string> = {
  ep: "ep-open",
  co: "co-open",
  btn: "btn-open",
};

const POSITION_PAIRS = [
  { base: "ep", target: "co", label: "EP → CO" },
  { base: "co", target: "btn", label: "CO → BTN" },
  { base: "ep", target: "btn", label: "EP → BTN" },
];

function getOpenRaiseHands(positionId: string): Set<string> {
  const pos = positions.find((p) => p.id === positionId);
  if (!pos) return new Set();
  const scenarioId = OPEN_SCENARIOS[positionId];
  const scenario = pos.scenarios.find((s) => s.id === scenarioId);
  if (!scenario) return new Set();
  const raiseRange = scenario.ranges.find((r) => r.action === "raise");
  return new Set(raiseRange?.hands ?? []);
}

export function RangeDiff() {
  const [pairIndex, setPairIndex] = useState(0);
  const pair = POSITION_PAIRS[pairIndex];

  const baseHands = getOpenRaiseHands(pair.base);
  const targetHands = getOpenRaiseHands(pair.target);

  const baseName =
    positions.find((p) => p.id === pair.base)?.shortName ?? pair.base;
  const targetName =
    positions.find((p) => p.id === pair.target)?.shortName ?? pair.target;

  return (
    <div>
      {/* Pair selector */}
      <div className="flex gap-2 mb-3 justify-center">
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
    </div>
  );
}
