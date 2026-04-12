"use client";

import { type QuizQuestion } from "@/data/quiz-data";

interface QuizCardProps {
  question: QuizQuestion;
  totalQuestions: number;
  selectedIndex: number | null;
  onSelect: (index: number) => void;
}

export function QuizCard({
  question,
  totalQuestions,
  selectedIndex,
  onSelect,
}: QuizCardProps) {
  const answered = selectedIndex !== null;

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-lg w-full">
      {/* Header */}
      <div className="bg-slate-800 text-white px-4 py-2.5 flex items-center justify-between">
        <span className="font-bold text-sm">
          ハンド {question.id} / {totalQuestions}
        </span>
        <span className="text-xs text-slate-300 bg-slate-700 px-2.5 py-1 rounded-full">
          {question.position}
        </span>
      </div>

      {/* Situation */}
      <div className="px-4 py-3 border-b border-slate-100">
        <p className="text-sm text-slate-700 leading-relaxed">
          {question.situation}
        </p>
      </div>

      {/* Hand */}
      <div className="px-4 py-4 text-center border-b border-slate-100">
        <div className="text-xs text-slate-400 font-bold mb-1">あなたのハンド</div>
        <div className="text-3xl font-black tracking-wider text-slate-900">
          {question.hand}
        </div>
      </div>

      {/* Options */}
      <div className="px-4 py-3 flex flex-col gap-2">
        <div className="text-xs text-slate-400 font-bold mb-0.5">
          アクションを選択
        </div>
        {question.options.map((option, i) => {
          let style = "bg-slate-50 text-slate-700 border-slate-200";
          if (answered) {
            if (i === question.correctIndex) {
              style = "bg-green-50 text-green-800 border-green-400 ring-2 ring-green-300";
            } else if (i === selectedIndex) {
              style = "bg-red-50 text-red-800 border-red-400 ring-2 ring-red-300";
            } else {
              style = "bg-slate-50 text-slate-400 border-slate-100";
            }
          }

          return (
            <button
              key={option}
              disabled={answered}
              onClick={() => onSelect(i)}
              className={`w-full text-left px-4 py-3 rounded-lg border text-sm font-bold transition-all ${style} ${
                !answered ? "hover:bg-slate-100 active:scale-[0.98]" : ""
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}
