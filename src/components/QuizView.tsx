import React, { useState } from 'react';
import { Award, CheckCircle2, XCircle, RotateCcw, Sparkles, BookOpen, ChevronRight } from 'lucide-react';
import { SULAWESI_QUIZ_QUESTIONS } from '../data/sulawesiHeritageData';
import { QuizQuestion } from '../types/heritage';

export const QuizView: React.FC = () => {
  const [questions] = useState<QuizQuestion[]>(SULAWESI_QUIZ_QUESTIONS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const currentQ = questions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);

    if (index === currentQ.answerIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResult(false);
  };

  const getBadgeTitle = (finalScore: number, total: number) => {
    const ratio = finalScore / total;
    if (ratio === 1) return 'Pewaris Luhur Kehormatan Sulawesi';
    if (ratio >= 0.75) return 'Duta Pelestari Warisan Nusantara';
    if (ratio >= 0.5) return 'Penjelajah Pengetahuan Komunitas Adat';
    return 'Pelajar Muda Pencinta Budaya';
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 animate-in fade-in">
      {/* Header */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 border border-amber-900/30 rounded-2xl p-6 text-stone-100 shadow-xl space-y-2 text-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold mx-auto">
          <Award className="w-3.5 h-3.5" />
          <span>Uji Pengetahuan Budaya Sulawesi</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-serif font-black text-amber-100">
          Kuis Interaktif Kearifan Lokal
        </h2>
        <p className="text-xs sm:text-sm text-stone-400 font-serif">
          Uji wawasan Anda seputar kuliner, bahasa, falsafah lisan, dan kriya 11 suku Sulawesi.
        </p>
      </div>

      {!showResult ? (
        <div className="bg-stone-900/90 border border-amber-900/40 rounded-2xl p-6 sm:p-8 shadow-xl space-y-6">
          {/* Progress Bar */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs text-stone-400">
              <span className="font-mono">
                Pertanyaan {currentIndex + 1} dari {questions.length}
              </span>
              <span className="font-semibold text-amber-300">
                Skor Saat Ini: {score} Poin
              </span>
            </div>
            <div className="w-full h-2 bg-stone-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-amber-400 transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Box */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Suku {currentQ.tribe}
              </span>
              <span className="text-xs text-stone-400">• {currentQ.province}</span>
            </div>

            <h3 className="font-serif font-bold text-lg sm:text-xl text-amber-100 leading-snug">
              {currentQ.question}
            </h3>
          </div>

          {/* Options Grid */}
          <div className="space-y-2.5">
            {currentQ.options.map((option, idx) => {
              let btnClass =
                'bg-stone-950/70 border-stone-800 text-stone-200 hover:bg-stone-800 hover:border-amber-700/60';

              if (isAnswered) {
                if (idx === currentQ.answerIndex) {
                  btnClass = 'bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold ring-1 ring-emerald-500/50';
                } else if (idx === selectedOption) {
                  btnClass = 'bg-red-950/80 border-red-500 text-red-200 font-semibold';
                } else {
                  btnClass = 'bg-stone-950/40 border-stone-800 text-stone-500 opacity-60';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full p-4 rounded-xl border text-left text-sm transition flex items-center justify-between gap-3 ${btnClass}`}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-stone-800 text-stone-300 font-mono text-xs flex items-center justify-center shrink-0">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="font-serif">{option}</span>
                  </div>

                  {isAnswered && idx === currentQ.answerIndex && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  )}
                  {isAnswered && idx === selectedOption && idx !== currentQ.answerIndex && (
                    <XCircle className="w-5 h-5 text-red-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box when answered */}
          {isAnswered && (
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs sm:text-sm text-stone-300 space-y-1.5 animate-in fade-in">
              <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Penjelasan Edukasi Budaya:
              </span>
              <p className="font-serif leading-relaxed text-stone-200">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Next Button */}
          {isAnswered && (
            <div className="pt-2 flex justify-end">
              <button
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-stone-900 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 shadow-md shadow-amber-500/20 transition transform active:scale-95"
              >
                <span>{currentIndex < questions.length - 1 ? 'Soal Berikutnya' : 'Lihat Hasil & Gelar'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      ) : (
        /* Result Screen */
        <div className="bg-stone-900 border border-amber-900/40 rounded-2xl p-8 shadow-2xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-amber-500 to-yellow-600 flex items-center justify-center mx-auto text-stone-950 shadow-lg shadow-amber-500/30">
            <Award className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase font-mono tracking-widest text-amber-400">
              Gelar Penghormatan Adat
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-black text-amber-100">
              {getBadgeTitle(score, questions.length)}
            </h3>
            <p className="text-sm text-stone-300 font-serif">
              Anda berhasil menjawab benar <strong>{score}</strong> dari {questions.length} soal kuis budaya Sulawesi!
            </p>
          </div>

          <div className="p-4 rounded-xl bg-stone-950/70 border border-stone-800 text-xs text-stone-300 font-serif max-w-md mx-auto leading-relaxed italic">
            "Pengetahuan leluhur tidak akan pernah usang selama anak-anak muda terus belajar, mendengarkan para tetua, dan menuliskannya untuk generasi yang akan datang."
          </div>

          <button
            onClick={handleRestart}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 shadow-md transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Ulangi Kuis</span>
          </button>
        </div>
      )}
    </div>
  );
};
