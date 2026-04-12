"use client";

import { useCallback, useState } from "react";
import { positions, getHandName } from "@/data/ranges";

const OPEN_SCENARIOS: Record<string, string> = {
  ep: "ep-open",
  co: "co-open",
  btn: "btn-open",
};

function getOpenRaiseSet(positionId: string): Set<string> {
  const pos = positions.find((p) => p.id === positionId);
  if (!pos) return new Set();
  const scenario = pos.scenarios.find(
    (s) => s.id === OPEN_SCENARIOS[positionId],
  );
  if (!scenario) return new Set();
  const raiseRange = scenario.ranges.find((r) => r.action === "raise");
  return new Set(raiseRange?.hands ?? []);
}

const EP_HANDS = getOpenRaiseSet("ep");
const CO_HANDS = getOpenRaiseSet("co");
const BTN_HANDS = getOpenRaiseSet("btn");

type Answer = "ep" | "co" | "btn" | "none";

function getCorrectAnswer(hand: string): Answer {
  if (EP_HANDS.has(hand)) return "ep";
  if (CO_HANDS.has(hand)) return "co";
  if (BTN_HANDS.has(hand)) return "btn";
  return "none";
}

const ANSWER_LABELS: Record<Answer, string> = {
  ep: "EP（全ポジション）からオープン可",
  co: "CO（CO・BTN）からオープン可",
  btn: "BTN のみオープン可",
  none: "どのポジションからもオープンしない",
};

const OPTIONS: { value: Answer; label: string }[] = [
  { value: "ep", label: "EPから" },
  { value: "co", label: "COから" },
  { value: "btn", label: "BTNのみ" },
  { value: "none", label: "オープンしない" },
];

function randomHand(): string {
  const r = Math.floor(Math.random() * 13);
  const c = Math.floor(Math.random() * 13);
  return getHandName(r, c);
}

export function PositionQuiz() {
  const [hand, setHand] = useState(() => randomHand());
  const [selected, setSelected] = useState<Answer | null>(null);
  const [score, setScore] = useState(0);
  const [total, setTotal] = useState(0);

  const correct = getCorrectAnswer(hand);

  const handleSelect = useCallback(
    (answer: Answer) => {
      if (selected !== null) return;
      setSelected(answer);
      setTotal((t) => t + 1);
      if (answer === correct) setScore((s) => s + 1);
    },
    [selected, correct],
  );

  function handleNext() {
    setHand(randomHand());
    setSelected(null);
  }

  return (
    <div className="max-w-sm mx-auto">
      {/* Score */}
      <div className="text-center mb-3">
        <span className="text-xs font-bold text-slate-400">
          正解 {score} / {total}
        </span>
      </div>

      {/* Hand */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="bg-slate-800 text-white px-4 py-2.5 text-center">
          <span className="text-xs text-slate-300">このハンドは？</span>
        </div>
        <div className="px-4 py-4 text-center border-b border-slate-100">
          <div className="text-3xl font-black tracking-wider text-slate-900">
            {hand}
          </div>
        </div>

        {/* Options */}
        <div className="px-4 py-3 flex flex-col gap-2">
          {OPTIONS.map((opt) => {
            let style = "bg-slate-50 text-slate-700 border-slate-200";
            if (selected !== null) {
              if (opt.value === correct) {
                style =
                  "bg-green-50 text-green-800 border-green-400 ring-2 ring-green-300";
              } else if (opt.value === selected) {
                style =
                  "bg-red-50 text-red-800 border-red-400 ring-2 ring-red-300";
              } else {
                style = "bg-slate-50 text-slate-400 border-slate-100";
              }
            }
            return (
              <button
                key={opt.value}
                disabled={selected !== null}
                onClick={() => handleSelect(opt.value)}
                className={`w-full text-left px-4 py-2.5 rounded-lg border text-sm font-bold transition-all ${style} ${
                  selected === null
                    ? "hover:bg-slate-100 active:scale-[0.98]"
                    : ""
                }`}
              >
                {opt.label}
              </button>
            );
          })}
        </div>

        {/* Explanation */}
        {selected !== null && (
          <div className="px-4 pb-4">
            <div
              className={`rounded-lg p-3 text-xs font-bold ${
                selected === correct
                  ? "bg-green-50 text-green-800"
                  : "bg-red-50 text-red-800"
              }`}
            >
              {ANSWER_LABELS[correct]}
            </div>
            <button
              onClick={handleNext}
              className="mt-3 w-full px-4 py-2.5 rounded-lg bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 transition-all"
            >
              次のハンド
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
