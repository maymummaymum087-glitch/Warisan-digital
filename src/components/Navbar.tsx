import React from 'react';
import { BookOpen, Compass, Sparkles, BookMarked, Landmark, Award } from 'lucide-react';

interface NavbarProps {
  activeTab: 'library' | 'map' | 'glossary' | 'quiz';
  setActiveTab: (tab: 'library' | 'map' | 'glossary' | 'quiz') => void;
  itemsCount: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  itemsCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-stone-900/95 backdrop-blur-md border-b border-amber-900/40 text-stone-100 shadow-xl">
      {/* Decorative top cultural band representing Sulawesi traditional patterns */}
      <div className="h-1.5 w-full bg-gradient-to-r from-amber-700 via-red-600 to-amber-500" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Identity */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('library')}>
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-red-700 flex items-center justify-center shadow-lg shadow-amber-900/40 border border-amber-400/30">
              <Landmark className="w-5 h-5 text-stone-900" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif font-black text-xl tracking-tight text-amber-100">
                  Warisan Digital
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Sulawesi
                </span>
              </div>
              <p className="text-xs text-stone-400 font-sans hidden sm:block">
                Arsip Pengetahuan Tetua & Komunitas Adat
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <button
              onClick={() => setActiveTab('library')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'library'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Perpustakaan</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-stone-800 text-stone-300 font-mono">
                {itemsCount}
              </span>
            </button>

            <button
              onClick={() => setActiveTab('map')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'map'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              <Compass className="w-4 h-4" />
              <span>Peta Budaya & Suku</span>
            </button>

            <button
              onClick={() => setActiveTab('glossary')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'glossary'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              <BookMarked className="w-4 h-4" />
              <span>Bahasa & Cerita Leluhur</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === 'quiz'
                  ? 'bg-amber-600/30 text-amber-300 border border-amber-500/40 shadow-inner'
                  : 'text-stone-300 hover:text-amber-200 hover:bg-stone-800/60'
              }`}
            >
              <Award className="w-4 h-4" />
              <span>Kuis Warisan</span>
            </button>
          </nav>

          {/* Quick Info Badge on the right */}
          <div className="hidden sm:flex items-center gap-2">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-950/80 border border-amber-900/40 text-xs text-amber-300 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>15 Suku Adat • 6 Provinsi</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Row */}
        <div className="flex md:hidden items-center justify-around py-2 border-t border-stone-800/80 text-xs font-medium">
          <button
            onClick={() => setActiveTab('library')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded ${
              activeTab === 'library' ? 'text-amber-300 font-bold' : 'text-stone-400'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Pustaka</span>
          </button>
          <button
            onClick={() => setActiveTab('map')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded ${
              activeTab === 'map' ? 'text-amber-300 font-bold' : 'text-stone-400'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>Peta</span>
          </button>
          <button
            onClick={() => setActiveTab('glossary')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded ${
              activeTab === 'glossary' ? 'text-amber-300 font-bold' : 'text-stone-400'
            }`}
          >
            <BookMarked className="w-4 h-4" />
            <span>Bahasa & Cerita</span>
          </button>
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex flex-col items-center gap-1 py-1 px-2 rounded ${
              activeTab === 'quiz' ? 'text-amber-300 font-bold' : 'text-stone-400'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>Kuis</span>
          </button>
        </div>
      </div>
    </header>
  );
};
