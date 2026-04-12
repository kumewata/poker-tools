"use client";

import { positions, type ActionRange } from "@/data/ranges";
import { HandGrid } from "@/components/HandGrid";

interface QuizResultProps {
  correct: boolean;
  explanation: string;
  isLast: boolean;
  rangePositionId: string;
  rangeScenarioId: string;
  onNext: () => void;
}

export function QuizResult({
  correct,
  explanation,
  isLast,
  rangePositionId,
  rangeScenarioId,
  onNext,
}: QuizResultProps) {
  const position = positions.find((p) => p.id === rangePositionId);
  const scenario = position?.scenarios.find((s) => s.id === rangeScenarioId);

  return (
    <div className="max-w-lg w-full mt-3">
      {/* Verdict */}
      <div
        className={`rounded-lg px-4 py-2.5 text-center font-black text-sm mb-3 ${
          correct
            ? "bg-green-100 text-green-800 border border-green-300"
            : "bg-red-100 text-red-800 border border-red-300"
        }`}
      >
        {correct ? "正解!" : "不正解"}
      </div>

      {/* Explanation */}
      <div className="bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
        <div className="text-xs font-bold text-amber-700 mb-1.5">解説</div>
        <p className="text-sm text-amber-900 leading-relaxed">{explanation}</p>
      </div>

      {/* Range table */}
      {scenario && scenario.ranges.length > 0 && (
        <div className="mt-3 bg-white border border-slate-200 rounded-lg p-3">
          <div className="text-xs font-bold text-slate-500 mb-2">
            {position!.name} — {scenario.name}
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {scenario.ranges.map((range: ActionRange) => (
              <div
                key={`${scenario.id}-${range.action}`}
                className="rounded-lg overflow-hidden"
                style={{ border: `2px solid ${range.color}` }}
              >
                <div
                  className="text-white text-center text-[10px] font-extrabold py-1 px-2 whitespace-nowrap"
                  style={{ background: range.color }}
                >
                  {range.label}
                </div>
                <div className="p-1 bg-white">
                  <HandGrid ranges={[range]} />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Next button */}
      <button
        onClick={onNext}
        className="w-full mt-3 py-3 rounded-lg bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 active:scale-[0.98] transition-all"
      >
        {isLast ? "結果を見る" : "次の問題へ"}
      </button>
    </div>
  );
}
