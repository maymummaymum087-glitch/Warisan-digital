import React from 'react';
import { Mic, BookOpen, Compass, Sparkles, MapPin, Landmark } from 'lucide-react';
import { Tribe } from '../types/heritage';

interface HeroSectionProps {
  onOpenRecorder: () => void;
  onExploreMap: () => void;
  onSelectTribeFilter: (tribe: Tribe) => void;
  totalRecordsCount: number;
}

const TRIBES: { name: Tribe; region: string; icon: string }[] = [
  { name: 'Bugis', region: 'Sul-Sel', icon: '🏛️' },
  { name: 'Makassar', region: 'Sul-Sel', icon: '⚔️' },
  { name: 'Toraja', region: 'Sul-Sel', icon: '🐃' },
  { name: 'Mandar', region: 'Sul-Bar', icon: '⛵' },
  { name: 'Mamasa', region: 'Sul-Bar', icon: '🏔️' },
  { name: 'Kaili', region: 'Sul-Teng', icon: '🌿' },
  { name: 'Pamona', region: 'Sul-Teng', icon: '🪵' },
  { name: 'Tolaki', region: 'Sul-Tra', icon: '⭕' },
  { name: 'Buton', region: 'Sul-Tra', icon: '🏰' },
  { name: 'Muna', region: 'Sul-Tra', icon: '🪁' },
  { name: 'Moronene', region: 'Sul-Tra', icon: '🌾' },
  { name: 'Minahasa', region: 'Sul-Ut', icon: '🌋' },
  { name: 'Bolaang Mongondow', region: 'Sul-Ut', icon: '🌾' },
  { name: 'Sangihe', region: 'Sul-Ut', icon: '🌊' },
  { name: 'Gorontalo', region: 'Gorontalo', icon: '🌽' },
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRecorder,
  onExploreMap,
  onSelectTribeFilter,
  totalRecordsCount,
}) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-stone-900 via-stone-900 to-stone-950 border border-amber-900/40 p-6 sm:p-10 shadow-2xl text-stone-100">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-red-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/20 to-red-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold shadow-inner">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Platform Edukatif Pelestarian Pengetahuan Lokal Sulawesi</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black tracking-tight text-amber-100 leading-tight">
          Menjaga Warisan Leluhur,{' '}
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            Dari Tutur Tetua Menjadi Arsip Abadi
          </span>
        </h1>

        {/* Narrative Description */}
        <p className="text-sm sm:text-lg text-stone-300 font-serif leading-relaxed max-w-3xl mx-auto">
          Setiap resep nenek, teknik tenun, permainan tradisional, filosofi bahasa, hingga kearifan bertani dan maritim adalah mutiara peradaban. Pelajar merekam cerita orang tua ➔ aplikasi menyusunnya menjadi perpustakaan pengetahuan terstruktur untuk setiap kampung di seluruh Sulawesi.
        </p>

        {/* Primary Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onOpenRecorder}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-stone-900 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-xl shadow-amber-500/25 transition transform active:scale-95"
          >
            <Mic className="w-4 h-4 text-stone-900" />
            <span>Mulai Wawancara & Rekam Cerita Tetua</span>
          </button>

          <button
            onClick={onExploreMap}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-semibold text-stone-200 bg-stone-850 hover:bg-stone-800 border border-stone-700 hover:border-amber-700/60 shadow transition"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>Jelajahi Peta 15 Suku</span>
          </button>
        </div>

        {/* Ticker / Stats Bar */}
        <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto border-t border-stone-800/80">
          <div className="p-2.5 rounded-xl bg-stone-950/60 border border-stone-800/60">
            <div className="font-serif font-black text-xl text-amber-300">15 Suku</div>
            <div className="text-[11px] text-stone-400 font-sans">Bugis, Minahasa, Gorontalo...</div>
          </div>
          <div className="p-2.5 rounded-xl bg-stone-950/60 border border-stone-800/60">
            <div className="font-serif font-black text-xl text-amber-300">6 Provinsi</div>
            <div className="text-[11px] text-stone-400 font-sans">Seluruh Jazirah Sulawesi</div>
          </div>
          <div className="p-2.5 rounded-xl bg-stone-950/60 border border-stone-800/60">
            <div className="font-serif font-black text-xl text-amber-300">6 Kategori</div>
            <div className="text-[11px] text-stone-400 font-sans">Resep, Bahasa, Kriya, Tani</div>
          </div>
          <div className="p-2.5 rounded-xl bg-stone-950/60 border border-stone-800/60">
            <div className="font-serif font-black text-xl text-amber-300">{totalRecordsCount} Arsip</div>
            <div className="text-[11px] text-stone-400 font-sans">Terdokumentasi Rapi</div>
          </div>
        </div>

        {/* Quick Tribe Selector Chips */}
        <div className="pt-2 space-y-2">
          <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400">
            Klik Suku untuk Menjelajahi Warisannya Langsung:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-1.5 max-w-3xl mx-auto">
            {TRIBES.map((t) => (
              <button
                key={t.name}
                onClick={() => onSelectTribeFilter(t.name)}
                className="text-xs px-3 py-1.5 rounded-xl bg-stone-950/80 hover:bg-amber-950/50 text-stone-300 hover:text-amber-200 border border-stone-800 hover:border-amber-700/60 transition flex items-center gap-1.5"
              >
                <span>{t.icon}</span>
                <span className="font-serif font-medium">Suku {t.name}</span>
                <span className="text-[10px] text-stone-500 font-mono">({t.region})</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
