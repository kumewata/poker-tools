"use client";

import { useState } from "react";
import Link from "next/link";
import { quizQuestions } from "@/data/quiz-data";
import { QuizCard } from "@/components/QuizCard";
import { QuizResult } from "@/components/QuizResult";

export default function QuizPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quizQuestions[currentIndex];
  const isCorrect = selectedAnswer === question.correctIndex;

  function handleSelect(index: number) {
    setSelectedAnswer(index);
    if (index === question.correctIndex) {
      setCorrectCount((c) => c + 1);
    }
  }

  function handleNext() {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setCorrectCount(0);
    setFinished(false);
  }

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
          ハンドクイズ
        </h1>
        <div className="w-16" />
      </div>

      <div className="flex flex-col items-center">
        {!finished ? (
          <>
            <QuizCard
              question={question}
              totalQuestions={quizQuestions.length}
              selectedIndex={selectedAnswer}
              onSelect={handleSelect}
            />
            {selectedAnswer !== null && (
              <QuizResult
                correct={isCorrect}
                explanation={question.explanation}
                isLast={currentIndex === quizQuestions.length - 1}
                onNext={handleNext}
              />
            )}
          </>
        ) : (
          /* Summary */
          <div className="bg-white rounded-xl shadow-md max-w-lg w-full overflow-hidden">
            <div className="bg-slate-800 text-white px-4 py-3 text-center">
              <div className="text-lg font-black">クイズ完了</div>
            </div>
            <div className="px-6 py-8 text-center">
              <div className="text-5xl font-black text-slate-800 mb-2">
                {correctCount} / {quizQuestions.length}
              </div>
              <div className="text-sm text-slate-500 mb-6">
                {correctCount === quizQuestions.length
                  ? "パーフェクト!"
                  : correctCount >= quizQuestions.length * 0.7
                    ? "よくできました!"
                    : "レンジ表を復習しましょう"}
              </div>
              <div className="flex gap-2 justify-center">
                <button
                  onClick={handleRestart}
                  className="px-5 py-2.5 rounded-lg bg-slate-800 text-white font-bold text-sm hover:bg-slate-700 transition-all"
                >
                  もう一度
                </button>
                <Link
                  href="/"
                  className="px-5 py-2.5 rounded-lg bg-slate-100 text-slate-700 font-bold text-sm hover:bg-slate-200 transition-all"
                >
                  レンジ表へ
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
