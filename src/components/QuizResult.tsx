"use client";

interface QuizResultProps {
  correct: boolean;
  explanation: string;
  isLast: boolean;
  onNext: () => void;
}

export function QuizResult({ correct, explanation, isLast, onNext }: QuizResultProps) {
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
