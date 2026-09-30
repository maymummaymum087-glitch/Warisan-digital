import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { HeritageLibrary } from './components/HeritageLibrary';
import { SulawesiMap } from './components/SulawesiMap';
import { GlossaryView } from './components/GlossaryView';
import { QuizView } from './components/QuizView';
import { StoryRecorderModal } from './components/StoryRecorderModal';
import { HeritageDetailModal } from './components/HeritageDetailModal';
import { HeritageItem, Province, Tribe } from './types/heritage';
import {
  getBookmarkedIds,
  getSavedHeritageItems,
  saveHeritageItem,
  toggleBookmark,
} from './utils/storage';
import { Landmark, Heart, Mic, BookOpen, Compass, Award } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'library' | 'map' | 'glossary' | 'quiz'>('library');
  const [items, setItems] = useState<HeritageItem[]>([]);
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([]);
  const [isRecorderOpen, setIsRecorderOpen] = useState(false);
  const [selectedDetailItem, setSelectedDetailItem] = useState<HeritageItem | null>(null);

  // Filter state passed from map or hero to library
  const [filterTribe, setFilterTribe] = useState<Tribe | null>(null);
  const [filterProvince, setFilterProvince] = useState<Province | null>(null);

  useEffect(() => {
    const loadedItems = getSavedHeritageItems();
    setItems(loadedItems);
    setBookmarkedIds(getBookmarkedIds());
  }, []);

  const handleSaveItem = (newItem: HeritageItem) => {
    const updated = saveHeritageItem(newItem);
    setItems(updated);
    setSelectedDetailItem(newItem);
  };

  const handleToggleBookmark = (id: string) => {
    const next = toggleBookmark(id);
    setBookmarkedIds(next);
  };

  const handleSelectTribeFromMapOrHero = (tribe: Tribe) => {
    setFilterTribe(tribe);
    setFilterProvince(null);
    setActiveTab('library');
  };

  const handleSelectProvinceFromMap = (province: Province) => {
    setFilterProvince(province);
    setFilterTribe(null);
    setActiveTab('library');
  };

  const handleResetFilters = () => {
    setFilterTribe(null);
    setFilterProvince(null);
  };

  return (
    <div className="min-h-screen bg-stone-950 text-stone-100 flex flex-col font-sans selection:bg-amber-500 selection:text-stone-950">
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenRecorder={() => setIsRecorderOpen(true)}
        itemsCount={items.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-8">
        {/* VIEW: LIBRARY */}
        {activeTab === 'library' && (
          <div className="space-y-8 animate-in fade-in">
            {/* Hero Section */}
            <HeroSection
              onOpenRecorder={() => setIsRecorderOpen(true)}
              onExploreMap={() => setActiveTab('map')}
              onSelectTribeFilter={handleSelectTribeFromMapOrHero}
              totalRecordsCount={items.length}
            />

            {/* Library Section */}
            <HeritageLibrary
              items={items}
              bookmarkedIds={bookmarkedIds}
              onToggleBookmark={handleToggleBookmark}
              onSelectItem={(item) => setSelectedDetailItem(item)}
              onOpenRecorder={() => setIsRecorderOpen(true)}
              filterTribe={filterTribe}
              filterProvince={filterProvince}
              onResetFilters={handleResetFilters}
            />
          </div>
        )}

        {/* VIEW: MAP & TRIBE EXPLORER */}
        {activeTab === 'map' && (
          <SulawesiMap
            items={items}
            onSelectTribe={handleSelectTribeFromMapOrHero}
            onSelectProvince={handleSelectProvinceFromMap}
          />
        )}

        {/* VIEW: GLOSSARY, REGIONAL LANGUAGES & ANCESTRAL STORIES */}
        {activeTab === 'glossary' && (
          <GlossaryView
            items={items}
            onSelectItem={(item) => setSelectedDetailItem(item)}
          />
        )}

        {/* VIEW: QUIZ */}
        {activeTab === 'quiz' && <QuizView />}
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 border-t border-amber-900/30 text-stone-400 py-10 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300">
                <Landmark className="w-4 h-4 text-amber-400" />
              </div>
              <div>
                <span className="font-serif font-black text-lg text-amber-100">
                  Warisan Digital Sulawesi
                </span>
                <p className="text-xs text-stone-400">
                  Perpustakaan Pengetahuan Adat & Komunitas Lokal
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              <button onClick={() => setActiveTab('library')} className="hover:text-amber-300 transition">
                Perpustakaan
              </button>
              <button onClick={() => setActiveTab('map')} className="hover:text-amber-300 transition">
                Peta 15 Suku (6 Provinsi)
              </button>
              <button onClick={() => setActiveTab('glossary')} className="hover:text-amber-300 transition">
                Kamus & Falsafah
              </button>
              <button onClick={() => setActiveTab('quiz')} className="hover:text-amber-300 transition">
                Kuis Budaya
              </button>
              <button onClick={() => setIsRecorderOpen(true)} className="text-amber-400 font-semibold hover:underline">
                + Rekam Penuturan Tetua
              </button>
            </div>
          </div>

          <div className="pt-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-2 text-center sm:text-left">
            <p>
              Mencakup kearifan Suku Bugis, Makassar, Toraja, Mandar, Mamasa, Kaili, Pamona, Tolaki, Buton, Muna, Moronene, Minahasa, Bolaang Mongondow, Sangihe, dan Gorontalo (6 Provinsi Sulawesi).
            </p>
            <p className="flex items-center justify-center gap-1">
              Dibuat dengan <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline" /> untuk generasi muda penerus Sulawesi.
            </p>
          </div>
        </div>
      </footer>

      {/* Story Recorder Modal */}
      <StoryRecorderModal
        isOpen={isRecorderOpen}
        onClose={() => setIsRecorderOpen(false)}
        onSaveItem={handleSaveItem}
      />

      {/* Heritage Detail Modal */}
      <HeritageDetailModal
        item={selectedDetailItem}
        isOpen={!!selectedDetailItem}
        onClose={() => setSelectedDetailItem(null)}
        isBookmarked={selectedDetailItem ? bookmarkedIds.includes(selectedDetailItem.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />
    </div>
  );
}
