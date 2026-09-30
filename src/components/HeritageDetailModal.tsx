import React, { useState, useEffect } from 'react';
import {
  X,
  Volume2,
  VolumeX,
  Share2,
  Printer,
  Heart,
  Bookmark,
  Calendar,
  User,
  GraduationCap,
  MapPin,
  Clock,
  Sparkles,
  Flame,
  CheckCircle2,
  FileText,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { HeritageItem } from '../types/heritage';
import { speakText, stopSpeaking } from '../utils/storage';

interface HeritageDetailModalProps {
  item: HeritageItem | null;
  isOpen: boolean;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (id: string) => void;
}

export const HeritageDetailModal: React.FC<HeritageDetailModalProps> = ({
  item,
  isOpen,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [liked, setLiked] = useState(false);
  const [activeStepTab, setActiveStepTab] = useState<number>(0);

  useEffect(() => {
    return () => {
      stopSpeaking();
    };
  }, []);

  if (!isOpen || !item) return null;

  const handleToggleVoiceReader = () => {
    if (isPlayingAudio) {
      stopSpeaking();
      setIsPlayingAudio(false);
    } else {
      setIsPlayingAudio(true);
      const textToRead = `${item.title}. Warisan dari Suku ${item.tribe}, ${item.province}. Penuturan oleh ${item.elderNarrator.name}. ${item.summary}. Makna filosofis: ${item.philosophicalMeaning}. Pesan tetua: ${item.preservationAdvice}`;
      speakText(textToRead, () => {
        setIsPlayingAudio(false);
      });
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'resep':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40';
      case 'bahasa':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
      case 'kerajinan':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/40';
      case 'tani_bahari':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/40';
      case 'permainan':
        return 'bg-pink-500/20 text-pink-300 border-pink-500/40';
      case 'cerita_sejarah':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40';
      default:
        return 'bg-stone-700/40 text-stone-300 border-stone-600';
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-amber-900/50 rounded-2xl shadow-2xl text-stone-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Cultural top banner */}
        <div className="h-2 w-full bg-gradient-to-r from-amber-600 via-red-600 to-amber-500" />

        {/* Modal Header */}
        <div className="px-6 py-4 bg-stone-900/90 border-b border-stone-800 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5 flex-wrap">
            <span
              className={`text-xs uppercase font-mono px-2.5 py-0.5 rounded-full border ${getCategoryColor(
                item.category
              )}`}
            >
              {item.category.replace('_', ' ')}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 font-semibold">
              Suku {item.tribe}
            </span>
            <span className="text-xs text-stone-400">• {item.province}</span>
          </div>

          <div className="flex items-center gap-2">
            {/* Audio Voice Reader */}
            <button
              onClick={handleToggleVoiceReader}
              title="Dengarkan pembacaan naskah lisan"
              className={`p-2 rounded-xl border text-xs font-semibold flex items-center gap-1.5 transition ${
                isPlayingAudio
                  ? 'bg-amber-500 text-stone-950 border-amber-400 animate-pulse'
                  : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border-stone-700'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <VolumeX className="w-4 h-4" />
                  <span className="hidden sm:inline">Hentikan Suara</span>
                </>
              ) : (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span className="hidden sm:inline">Dengarkan Penuturan</span>
                </>
              )}
            </button>

            {/* Print / Save Archive */}
            <button
              onClick={handlePrint}
              title="Cetak Arsip Budaya"
              className="p-2 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark(item.id)}
              title="Simpan ke Favorit"
              className={`p-2 rounded-xl border transition ${
                isBookmarked
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                  : 'bg-stone-800 hover:bg-stone-700 text-stone-400 border-stone-700'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            {/* Close Button */}
            <button
              onClick={() => {
                stopSpeaking();
                onClose();
              }}
              className="p-2 rounded-xl text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 print:p-0 print:bg-white print:text-black">
          {/* Title & Subtitle */}
          <div className="space-y-2 border-b border-stone-800 pb-5">
            <h2 className="text-2xl sm:text-3xl font-serif font-black tracking-tight text-amber-100">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-stone-300 font-serif leading-relaxed">
              {item.subtitle}
            </p>

            {/* Narasumber & Pelajar Card */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="text-stone-400 block font-mono">Narasumber Tetua Adat:</span>
                  <span className="font-semibold text-stone-200">
                    {item.elderNarrator.name} {item.elderNarrator.age ? `(${item.elderNarrator.age} thn)` : ''}
                  </span>
                  <p className="text-stone-400 text-[11px]">
                    {item.elderNarrator.titleOrRole} • {item.regionDetail}
                  </p>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-stone-950/70 border border-stone-800 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="text-xs">
                  <span className="text-stone-400 block font-mono">Didokumentasikan oleh Pelajar:</span>
                  <span className="font-semibold text-stone-200">
                    {item.recordedBy.name}
                  </span>
                  <p className="text-stone-400 text-[11px]">
                    {item.recordedBy.schoolOrAffiliation} • {item.recordedBy.date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary & Philosophical Meaning */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            <div className="md:col-span-7 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-amber-400" />
                Ringkasan Pengetahuan & Asal-Usul
              </h3>
              <p className="text-sm text-stone-200 leading-relaxed font-serif">
                {item.summary}
              </p>
              {item.estimatedEra && (
                <div className="text-xs text-stone-400 flex items-center gap-1.5 pt-1">
                  <Clock className="w-3.5 h-3.5 text-amber-400/80" />
                  <span>Akar Tradisi: {item.estimatedEra}</span>
                </div>
              )}
            </div>

            <div className="md:col-span-5 bg-gradient-to-br from-amber-950/50 to-stone-950 p-4 rounded-xl border border-amber-800/40 space-y-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-amber-400" />
                Makna Filosofis & Pantangan Adat
              </h3>
              <p className="text-sm text-amber-100/90 font-serif italic leading-relaxed">
                "{item.philosophicalMeaning}"
              </p>
            </div>
          </div>

          {/* Local Dialect Words / Vocabulary */}
          {item.localTerms && item.localTerms.length > 0 && (
            <div className="space-y-3 border-t border-stone-800 pt-5">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                  Kamus Kosa Kata & Istilah Bahasa Daerah ({item.localTerms.length})
                </h3>
                <span className="text-[11px] text-stone-400">Klik ikon suara untuk dengar lafal</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {item.localTerms.map((term, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-stone-950/70 border border-stone-800 space-y-1.5 hover:border-amber-700/50 transition"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-serif font-bold text-amber-200 text-sm">
                        {term.term}
                      </span>
                      <button
                        onClick={() => speakText(term.term)}
                        title="Dengarkan pengucapan istilah"
                        className="p-1 rounded bg-stone-800 hover:bg-stone-700 text-stone-300"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 inline-block">
                      {term.language}
                    </span>
                    <p className="text-xs text-stone-400 leading-snug">{term.meaning}</p>
                    {term.pronunciationTip && (
                      <p className="text-[11px] text-stone-500 italic">
                        Lafal: {term.pronunciationTip}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ingredients / Materials & Tools */}
          {((item.ingredientsOrMaterials && item.ingredientsOrMaterials.length > 0) ||
            (item.toolsUsed && item.toolsUsed.length > 0)) && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 border-t border-stone-800 pt-5">
              {item.ingredientsOrMaterials && item.ingredientsOrMaterials.length > 0 && (
                <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Bahan / Komponen Utama
                  </h3>
                  <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                    {item.ingredientsOrMaterials.map((ing, i) => (
                      <li key={i}>{ing}</li>
                    ))}
                  </ul>
                </div>
              )}

              {item.toolsUsed && item.toolsUsed.length > 0 && (
                <div className="p-4 rounded-xl bg-stone-950/60 border border-stone-800 space-y-2">
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                    Peralatan Tradisional
                  </h3>
                  <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                    {item.toolsUsed.map((tool, i) => (
                      <li key={i}>{tool}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {/* Steps & Narrative Flow */}
          {item.stepsOrNarrative && item.stepsOrNarrative.length > 0 && (
            <div className="space-y-4 border-t border-stone-800 pt-5">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                Tahapan Proses & Tata Cara Tradisional ({item.stepsOrNarrative.length} Langkah)
              </h3>

              <div className="space-y-3">
                {item.stepsOrNarrative.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex gap-4 items-start"
                  >
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-mono text-sm font-bold shrink-0 mt-0.5">
                      {step.stepNumber || idx + 1}
                    </div>
                    <div className="space-y-1 flex-1">
                      <h4 className="font-serif font-bold text-amber-100 text-sm">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-300 font-sans leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Preservation Advice */}
          {item.preservationAdvice && (
            <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/30 to-stone-950 border border-amber-800/40 text-xs text-amber-200 space-y-1">
              <span className="font-semibold text-amber-300 block">
                Pesan & Amanah Leluhur untuk Generasi Masa Kini:
              </span>
              <p className="font-serif text-sm italic">"{item.preservationAdvice}"</p>
            </div>
          )}

          {/* Footer Metadata */}
          <div className="pt-4 border-t border-stone-800 flex flex-wrap items-center justify-between gap-3 text-xs text-stone-400">
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, i) => (
                <span key={i} className="px-2 py-0.5 rounded bg-stone-800 text-stone-300 font-mono">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border transition ${
                  liked
                    ? 'bg-red-950/60 text-red-400 border-red-800'
                    : 'bg-stone-800 text-stone-400 hover:text-stone-200 border-stone-700'
                }`}
              >
                <Heart className={`w-3.5 h-3.5 ${liked ? 'fill-current' : ''}`} />
                <span>{(item.likesCount || 0) + (liked ? 1 : 0)} Mengapresiasi</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
