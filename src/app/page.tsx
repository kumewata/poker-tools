"use client";

import { useState } from "react";
import Link from "next/link";
import { positions, LEGEND, type ActionRange } from "@/data/ranges";
import { HandGrid } from "@/components/HandGrid";
import { PositionSelector } from "@/components/PositionSelector";
import { ScenarioSelector } from "@/components/ScenarioSelector";

export default function Home() {
  const [positionId, setPositionId] = useState(positions[0].id);
  const position = positions.find((p) => p.id === positionId) ?? positions[0];

  const [scenarioId, setScenarioId] = useState(position.scenarios[0].id);
  // Fallback handles the render where positionId changed but scenarioId hasn't yet
  const scenario = position.scenarios.find((s) => s.id === scenarioId) ?? position.scenarios[0];

  function handlePositionChange(id: string) {
    setPositionId(id);
    const newPos = positions.find((p) => p.id === id) ?? positions[0];
    setScenarioId(newPos.scenarios[0].id);
  }

  return (
    <div className="min-h-full bg-gradient-to-br from-slate-50 to-slate-100 px-3 py-4 font-sans">
      {/* Header */}
      <div
        className="rounded-xl px-4 py-3 mb-4 text-center"
        style={{ background: position.badgeColor }}
      >
        <h1 className="text-white font-extrabold text-base">
          {position.name}
        </h1>
        <p className="text-white/80 text-xs mt-1">{position.badge}</p>
      </div>

      {/* Position tabs */}
      <div className="mb-3">
        <PositionSelector
          positions={positions}
          selectedId={positionId}
          onSelect={handlePositionChange}
        />
      </div>

      {/* Scenario tabs */}
      <div className="mb-4">
        <ScenarioSelector
          scenarios={position.scenarios}
          selectedId={scenario.id}
          onSelect={setScenarioId}
        />
      </div>

      {/* Hand grids */}
      <div className="flex flex-col items-center gap-3">
        {scenario.ranges.length > 0 ? (
          <div className="flex flex-wrap justify-center gap-3">
            {scenario.ranges.map((range: ActionRange) => (
              <div
                key={`${scenario.id}-${range.action}`}
                className="rounded-lg overflow-hidden shadow-md"
                style={{ border: `2.5px solid ${range.color}` }}
              >
                <div
                  className="text-white text-center text-xs font-extrabold py-1.5 px-3 whitespace-nowrap"
                  style={{ background: range.color }}
                >
                  {range.label}
                </div>
                <div className="p-1.5 bg-white">
                  <HandGrid ranges={[range]} />
                </div>
                <div
                  className="text-white text-center text-[10px] font-bold py-1 px-2"
                  style={{ background: range.color }}
                >
                  {range.footer}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Fold recommendation (CO/BTN vs tight) */
          <div className="bg-red-50 border-2 border-red-500 rounded-xl p-6 text-center shadow-md max-w-xs">
            <div className="text-4xl mb-2">🚫</div>
            <div className="text-red-900 font-black text-lg tracking-wide">
              フォールド推奨
            </div>
          </div>
        )}

        {/* Notes */}
        {scenario.notes && scenario.notes.length > 0 && (
          <div className="bg-amber-50 border border-amber-300 rounded-lg p-3 max-w-md text-xs text-amber-900 leading-relaxed">
            {scenario.notes.map((note, i) => (
              <p key={note} className={i > 0 ? "mt-1.5" : ""}>
                {note}
              </p>
            ))}
          </div>
        )}
      </div>

      {/* Navigation links */}
      <div className="mt-5 flex gap-2 justify-center flex-wrap">
        <Link
          href="/tips"
          className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-all"
        >
          覚え方のコツ
        </Link>
        <Link
          href="/skills"
          className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-all"
        >
          ポストフロップ
        </Link>
        <Link
          href="/quiz"
          className="px-5 py-2.5 rounded-lg bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 transition-all"
        >
          ハンドクイズに挑戦 &rarr;
        </Link>
      </div>

      {/* Legend */}
      <div className="mt-3 flex flex-wrap gap-3 justify-center bg-white/60 rounded-lg py-2.5 px-4 backdrop-blur-sm">
        {LEGEND.map(({ color, label }) => (
          <div key={label} className="flex items-center gap-1.5">
            <div
              className="w-4 h-2.5 rounded-sm"
              style={{ background: color }}
            />
            <span className="text-[11px] font-bold text-slate-800">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
