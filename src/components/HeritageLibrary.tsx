import React, { useState, useMemo } from 'react';
import {
  Search,
  Filter,
  Bookmark,
  BookOpen,
  Volume2,
  User,
  GraduationCap,
  Sparkles,
  MapPin,
  Calendar,
  RotateCcw,
} from 'lucide-react';
import { HeritageCategory, HeritageItem, Province, Tribe } from '../types/heritage';

interface HeritageLibraryProps {
  items: HeritageItem[];
  bookmarkedIds: string[];
  onToggleBookmark: (id: string) => void;
  onSelectItem: (item: HeritageItem) => void;
  filterTribe?: Tribe | null;
  filterProvince?: Province | null;
  onResetFilters: () => void;
}

const CATEGORIES: { key: HeritageCategory | 'all'; label: string; icon: string }[] = [
  { key: 'all', label: 'Semua Warisan', icon: '🏛️' },
  { key: 'resep', label: 'Resep Makanan Tradisional', icon: '🍲' },
  { key: 'bahasa', label: 'Bahasa & Falsafah', icon: '🗣️' },
  { key: 'kerajinan', label: 'Kerajinan Tangan', icon: '🧵' },
  { key: 'tani_bahari', label: 'Kearifan Tani & Bahari', icon: '🌾' },
  { key: 'permainan', label: 'Permainan Tradisional', icon: '🪁' },
  { key: 'cerita_sejarah', label: 'Cerita Sejarah Kampung', icon: '📜' },
  { key: 'cerita_keluarga', label: 'Cerita Keluarga', icon: '🏡' },
];

export const HeritageLibrary: React.FC<HeritageLibraryProps> = ({
  items,
  bookmarkedIds,
  onToggleBookmark,
  onSelectItem,
  filterTribe,
  filterProvince,
  onResetFilters,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<HeritageCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProvinceFilter, setSelectedProvinceFilter] = useState<string>(
    filterProvince || 'all'
  );
  const [selectedTribeFilter, setSelectedTribeFilter] = useState<string>(filterTribe || 'all');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);

  // Sync external filters if passed from map
  React.useEffect(() => {
    if (filterTribe) {
      setSelectedTribeFilter(filterTribe);
    }
  }, [filterTribe]);

  React.useEffect(() => {
    if (filterProvince) {
      setSelectedProvinceFilter(filterProvince);
    }
  }, [filterProvince]);

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Province filter
      if (selectedProvinceFilter !== 'all' && item.province !== selectedProvinceFilter) {
        return false;
      }

      // Tribe filter
      if (selectedTribeFilter !== 'all' && item.tribe !== selectedTribeFilter) {
        return false;
      }

      // Bookmarked filter
      if (onlyBookmarked && !bookmarkedIds.includes(item.id)) {
        return false;
      }

      // Search query (matches title, subtitle, summary, elder name, student name, local terms)
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesSubtitle = item.subtitle.toLowerCase().includes(q);
        const matchesSummary = item.summary.toLowerCase().includes(q);
        const matchesElder = item.elderNarrator.name.toLowerCase().includes(q);
        const matchesStudent = item.recordedBy.name.toLowerCase().includes(q);
        const matchesTerms = item.localTerms.some(
          (t) => t.term.toLowerCase().includes(q) || t.meaning.toLowerCase().includes(q)
        );
        const matchesIngredients =
          item.ingredientsOrMaterials?.some((ing) => ing.toLowerCase().includes(q)) ?? false;

        if (
          !matchesTitle &&
          !matchesSubtitle &&
          !matchesSummary &&
          !matchesElder &&
          !matchesStudent &&
          !matchesTerms &&
          !matchesIngredients
        ) {
          return false;
        }
      }

      return true;
    });
  }, [
    items,
    selectedCategory,
    selectedProvinceFilter,
    selectedTribeFilter,
    onlyBookmarked,
    bookmarkedIds,
    searchQuery,
  ]);

  const getCategoryBadgeClass = (category: HeritageCategory) => {
    switch (category) {
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
      case 'cerita_keluarga':
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40';
      default:
        return 'bg-stone-700/40 text-stone-300 border-stone-600';
    }
  };

  const hasActiveFilters =
    selectedCategory !== 'all' ||
    selectedProvinceFilter !== 'all' ||
    selectedTribeFilter !== 'all' ||
    onlyBookmarked ||
    searchQuery.trim().length > 0;

  return (
    <div id="heritage-library-section" className="space-y-6">
      {/* Category Pills Slider / Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setSelectedCategory(cat.key)}
            className={`whitespace-nowrap px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 shrink-0 ${
              selectedCategory === cat.key
                ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                : 'bg-stone-900 text-stone-300 hover:bg-stone-800 hover:text-amber-200 border border-stone-800'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* Search and Secondary Filter Row */}
      <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 shadow-md space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Cari warisan: nama resep, istilah bahasa daerah, kakek-nenek, suku..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-200"
              >
                Hapus
              </button>
            )}
          </div>

          {/* Province Filter */}
          <select
            value={selectedProvinceFilter}
            onChange={(e) => {
              setSelectedProvinceFilter(e.target.value);
              setSelectedTribeFilter('all');
            }}
            className="bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-amber-500 sm:w-44"
          >
            <option value="all">Semua Provinsi (6)</option>
            <option value="Sulawesi Selatan">Sulawesi Selatan</option>
            <option value="Sulawesi Barat">Sulawesi Barat</option>
            <option value="Sulawesi Tengah">Sulawesi Tengah</option>
            <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
            <option value="Sulawesi Utara">Sulawesi Utara</option>
            <option value="Gorontalo">Gorontalo</option>
          </select>

          {/* Tribe Filter */}
          <select
            value={selectedTribeFilter}
            onChange={(e) => setSelectedTribeFilter(e.target.value)}
            className="bg-stone-950 border border-stone-800 rounded-xl px-3 py-2.5 text-xs text-amber-300 font-semibold focus:outline-none focus:border-amber-500 sm:w-40"
          >
            <option value="all">Semua Suku (15)</option>
            <option value="Bugis">Suku Bugis</option>
            <option value="Makassar">Suku Makassar</option>
            <option value="Toraja">Suku Toraja</option>
            <option value="Mandar">Suku Mandar</option>
            <option value="Mamasa">Suku Mamasa</option>
            <option value="Kaili">Suku Kaili</option>
            <option value="Pamona">Suku Pamona</option>
            <option value="Tolaki">Suku Tolaki</option>
            <option value="Buton">Suku Buton</option>
            <option value="Muna">Suku Muna</option>
            <option value="Moronene">Suku Moronene</option>
            <option value="Minahasa">Suku Minahasa</option>
            <option value="Bolaang Mongondow">Suku Bolaang Mongondow</option>
            <option value="Sangihe">Suku Sangihe</option>
            <option value="Gorontalo">Suku Gorontalo</option>
          </select>

          {/* Bookmark Toggle */}
          <button
            onClick={() => setOnlyBookmarked(!onlyBookmarked)}
            className={`px-3 py-2 rounded-xl text-xs font-medium border flex items-center gap-1.5 transition ${
              onlyBookmarked
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50'
                : 'bg-stone-950 text-stone-400 border-stone-800 hover:text-stone-200'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${onlyBookmarked ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">Disimpan</span>
          </button>
        </div>

        {/* Active Filters Bar */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between text-xs text-stone-400 pt-1">
            <span>
              Menampilkan <strong className="text-amber-300">{filteredItems.length}</strong> warisan
              budaya
            </span>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSelectedProvinceFilter('all');
                setSelectedTribeFilter('all');
                setSearchQuery('');
                setOnlyBookmarked(false);
                onResetFilters();
              }}
              className="text-amber-400 hover:underline"
            >
              Reset Semua Filter
            </button>
          </div>
        )}
      </div>

      {/* Category Dynamic Showcase Banner */}
      {selectedCategory !== 'all' && (
        <div className="bg-gradient-to-r from-stone-900 via-amber-950/30 to-stone-900 border border-amber-900/40 rounded-2xl p-4 sm:p-5 space-y-3 shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl">
                {selectedCategory === 'cerita_sejarah' && '📜'}
                {selectedCategory === 'cerita_keluarga' && '🏡'}
                {selectedCategory === 'tani_bahari' && '🌾'}
                {selectedCategory === 'bahasa' && '🗣️'}
                {selectedCategory === 'permainan' && '🎯'}
                {selectedCategory === 'resep' && '🍲'}
                {selectedCategory === 'kerajinan' && '🧵'}
              </span>
              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-amber-200">
                  {selectedCategory === 'cerita_sejarah' && 'Cerita Sejarah Kampung & Asal-Usul Permukiman 15 Suku'}
                  {selectedCategory === 'cerita_keluarga' && 'Cerita Keluarga & Tradisi Kekerabatan Rumah Tangga 15 Suku'}
                  {selectedCategory === 'tani_bahari' && 'Kearifan Tani & Bahari: Siklus Musim, Pertanian & Navigasi Samudra 15 Suku'}
                  {selectedCategory === 'bahasa' && 'Bahasa Daerah, Sastra Lisan & Falsafah Luhur 15 Suku'}
                  {selectedCategory === 'permainan' && 'Permainan Tradisional Rakyat Berdasarkan 6 Provinsi & 15 Suku'}
                  {selectedCategory === 'resep' && 'Resep Masakan Tradisional & Kuliner Pusaka 15 Suku'}
                  {selectedCategory === 'kerajinan' && 'Kerajinan Tangan, Kain Tenun & Kriya Adat 15 Suku'}
                </h4>
                <p className="text-xs text-stone-300 font-sans">
                  {selectedCategory === 'cerita_sejarah' && 'Tuturan lisan asal-usul kampung, benteng kuno, persekutuan adat, dan legenda pendiri permukiman.'}
                  {selectedCategory === 'cerita_keluarga' && 'Kisah keteladanan orang tua, silsilah kekerabatan, adab perkawinan, dan didikan moral di ruang keluarga.'}
                  {selectedCategory === 'tani_bahari' && 'Sistem irigasi tradisional, kalender bintang tanam padi, perahu layar bercadik, dan hukum laut pelayaran nusantara.'}
                  {selectedCategory === 'bahasa' && 'Kosa kata bahasa ibu, syair kidung lisan, ungkapan adab, dan falsafah hidup warisan tetua.'}
                  {selectedCategory === 'permainan' && 'Olahraga ketangkasan, adu kelincahan, dan permainan rakyat pengakrab kebersamaan.'}
                  {selectedCategory === 'resep' && 'Kekayaan rempah-rempah lokal dan cara pengolahan pangan alami khas setiap suku.'}
                  {selectedCategory === 'kerajinan' && 'Keahlian menenun serat alam, ukiran kayu rumah adat, dan kerajinan tangan adiluhung.'}
                </p>
              </div>
            </div>
          </div>

          {/* Province Quick Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
            <button
              onClick={() => {
                setSelectedProvinceFilter('all');
                setSelectedTribeFilter('all');
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition ${
                selectedProvinceFilter === 'all'
                  ? 'bg-amber-500 text-stone-950 font-bold shadow'
                  : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
              }`}
            >
              🌟 Semua 6 Provinsi
            </button>
            {[
              { prov: 'Sulawesi Selatan', icon: '🏛️' },
              { prov: 'Sulawesi Barat', icon: '⛵' },
              { prov: 'Sulawesi Tengah', icon: '⛰️' },
              { prov: 'Sulawesi Tenggara', icon: '🌴' },
              { prov: 'Sulawesi Utara', icon: '🌋' },
              { prov: 'Gorontalo', icon: '🌾' },
            ].map(({ prov, icon }) => (
              <button
                key={prov}
                onClick={() => {
                  setSelectedProvinceFilter(prov);
                  setSelectedTribeFilter('all');
                }}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                  selectedProvinceFilter === prov
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                }`}
              >
                <span>{icon}</span>
                <span>{prov}</span>
              </button>
            ))}
          </div>

          {/* Quick Tribe Selector for 15 Tribes */}
          <div className="pt-2 border-t border-stone-800/80">
            <span className="text-[11px] text-amber-300/90 font-semibold block mb-1.5">
              Pilih Berdasarkan Suku Adat (15 Suku):
            </span>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setSelectedTribeFilter('all')}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition ${
                  selectedTribeFilter === 'all'
                    ? 'bg-amber-500 text-stone-950 font-bold shadow'
                    : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                }`}
              >
                Semua Suku (15)
              </button>
              {[
                'Bugis',
                'Makassar',
                'Toraja',
                'Mandar',
                'Mamasa',
                'Kaili',
                'Pamona',
                'Tolaki',
                'Buton',
                'Muna',
                'Moronene',
                'Minahasa',
                'Bolaang Mongondow',
                'Sangihe',
                'Gorontalo',
              ].map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTribeFilter(t)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition ${
                    selectedTribeFilter === t
                      ? 'bg-amber-500 text-stone-950 font-bold shadow'
                      : 'bg-stone-900 text-stone-400 hover:text-stone-200 border border-stone-800'
                  }`}
                >
                  Suku {t}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Grid of Heritage Items */}
      {filteredItems.length === 0 ? (
        <div className="bg-stone-900/60 border border-stone-800 rounded-2xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mx-auto text-amber-400">
            <BookOpen className="w-8 h-8 opacity-60" />
          </div>
          <div className="space-y-1">
            <h3 className="font-serif font-bold text-lg text-stone-200">
              Belum Ada Warisan yang Cocok
            </h3>
            <p className="text-xs text-stone-400 max-w-md mx-auto">
              Tidak ditemukan arsip budaya untuk kriteria pencarian tersebut. Silakan bersihkan kata kunci atau atur ulang filter pencarian.
            </p>
          </div>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedProvinceFilter('all');
              setSelectedTribeFilter('all');
              setSelectedCategory('all');
              setOnlyBookmarked(false);
              onResetFilters();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-stone-900 bg-amber-400 hover:bg-amber-300 shadow-md shadow-amber-500/20 transition"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Semua Filter Pencarian</span>
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const isBookmarked = bookmarkedIds.includes(item.id);

            return (
              <div
                key={item.id}
                className="bg-stone-900/90 border border-stone-800 hover:border-amber-700/60 rounded-2xl p-5 shadow-lg hover:shadow-amber-950/30 transition-all flex flex-col justify-between group space-y-4"
              >
                <div className="space-y-3">
                  {/* Card Badges Row */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span
                        className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded-full border ${getCategoryBadgeClass(
                          item.category
                        )}`}
                      >
                        {item.category.replace('_', ' ')}
                      </span>
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Suku {item.tribe}
                      </span>
                      {item.isUserCreated && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Kontribusi Baru
                        </span>
                      )}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleBookmark(item.id);
                      }}
                      className="text-stone-400 hover:text-amber-300 transition"
                      title="Simpan ke Favorit"
                    >
                      <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
                    </button>
                  </div>

                  {/* Title and Subtitle */}
                  <div>
                    <h3
                      onClick={() => onSelectItem(item)}
                      className="font-serif font-bold text-lg text-amber-100 group-hover:text-amber-200 transition cursor-pointer line-clamp-2"
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs text-stone-400 line-clamp-1 font-serif mt-0.5">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Elder & Student Metadata */}
                  <div className="space-y-1.5 pt-1 text-xs">
                    <div className="flex items-center gap-2 text-stone-300">
                      <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span className="line-clamp-1">
                        <strong>{item.elderNarrator.name}</strong>{' '}
                        {item.elderNarrator.age ? `(${item.elderNarrator.age} thn)` : ''} •{' '}
                        <span className="text-stone-400">{item.elderNarrator.titleOrRole}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-stone-400 text-[11px]">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                      <span className="line-clamp-1">
                        Dicatat: {item.recordedBy.name} ({item.recordedBy.schoolOrAffiliation})
                      </span>
                    </div>
                  </div>

                  {/* Summary Snippet */}
                  <p className="text-xs text-stone-300 line-clamp-3 font-serif leading-relaxed pt-1">
                    {item.summary}
                  </p>

                  {/* Local Terms Pills Preview */}
                  {item.localTerms && item.localTerms.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {item.localTerms.slice(0, 3).map((term, i) => (
                        <span
                          key={i}
                          className="text-[10px] px-2 py-0.5 rounded bg-stone-950 text-amber-300/90 border border-stone-800 font-mono"
                        >
                          {term.term}
                        </span>
                      ))}
                      {item.localTerms.length > 3 && (
                        <span className="text-[10px] text-stone-500 self-center">
                          +{item.localTerms.length - 3} lagi
                        </span>
                      )}
                    </div>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2 text-stone-400 font-mono text-[11px]">
                    <MapPin className="w-3 h-3 text-amber-400/80" />
                    <span>{item.province.replace('Sulawesi', 'Sul-')}</span>
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:text-amber-300 transition"
                  >
                    <span>Buka Arsip</span>
                    <span className="group-hover:translate-x-0.5 transition-transform">➔</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
