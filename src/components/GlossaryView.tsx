import React, { useState, useMemo } from 'react';
import {
  Search,
  Volume2,
  BookMarked,
  Sparkles,
  Scroll,
  BookOpen,
  User,
  MapPin,
  Calendar,
  ArrowRight,
  Shield,
  Layers,
  Quote,
} from 'lucide-react';
import { HeritageItem, Tribe } from '../types/heritage';
import { speakText } from '../utils/storage';

interface GlossaryViewProps {
  items: HeritageItem[];
  onSelectItem?: (item: HeritageItem) => void;
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ items, onSelectItem }) => {
  const [activeSubTab, setActiveSubTab] = useState<'dictionary' | 'stories' | 'philosophies'>('dictionary');
  const [selectedTribe, setSelectedTribe] = useState<string>('all');
  const [storyCategoryFilter, setStoryCategoryFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Collect all local terms across items
  const allTerms = useMemo(() => {
    const list: {
      term: string;
      meaning: string;
      language: string;
      tribe: Tribe;
      pronunciationTip?: string;
      originItemTitle: string;
      province: string;
      originItem: HeritageItem;
    }[] = [];

    const seen = new Set<string>();

    items.forEach((item) => {
      item.localTerms.forEach((lt) => {
        const key = `${lt.term.toLowerCase()}-${item.tribe}`;
        if (!seen.has(key)) {
          seen.add(key);
          list.push({
            term: lt.term,
            meaning: lt.meaning,
            language: lt.language,
            tribe: item.tribe,
            pronunciationTip: lt.pronunciationTip,
            originItemTitle: item.title,
            province: item.province,
            originItem: item,
          });
        }
      });
    });

    return list;
  }, [items]);

  // Filtered dictionary terms
  const filteredTerms = useMemo(() => {
    return allTerms.filter((term) => {
      if (selectedTribe !== 'all' && term.tribe !== selectedTribe) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          term.term.toLowerCase().includes(q) ||
          term.meaning.toLowerCase().includes(q) ||
          term.language.toLowerCase().includes(q) ||
          term.tribe.toLowerCase().includes(q) ||
          term.originItemTitle.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [allTerms, selectedTribe, searchQuery]);

  // Ancestral Stories & Oral Traditions (Cerita Sejarah, Cerita Keluarga, Tani Bahari, Bahasa)
  const ancestralStories = useMemo(() => {
    return items.filter(
      (item) =>
        item.category === 'cerita_sejarah' ||
        item.category === 'cerita_keluarga' ||
        item.category === 'tani_bahari' ||
        item.category === 'bahasa'
    );
  }, [items]);

  const filteredStories = useMemo(() => {
    return ancestralStories.filter((story) => {
      if (storyCategoryFilter !== 'all' && story.category !== storyCategoryFilter) {
        return false;
      }
      if (selectedTribe !== 'all' && story.tribe !== selectedTribe) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          story.title.toLowerCase().includes(q) ||
          story.subtitle.toLowerCase().includes(q) ||
          story.summary.toLowerCase().includes(q) ||
          story.tribe.toLowerCase().includes(q) ||
          story.regionDetail.toLowerCase().includes(q) ||
          story.elderNarrator.name.toLowerCase().includes(q) ||
          story.tags.some((t) => t.toLowerCase().includes(q))
        );
      }
      return true;
    });
  }, [ancestralStories, storyCategoryFilter, selectedTribe, searchQuery]);

  const PHILOSOPHIES = [
    {
      tribe: 'Bugis',
      title: 'Sipakatau, Sipakalebbi, Sipakainge',
      meaning:
        'Saling memanusiakan martabat sesama, saling memuliakan kelebihan orang lain, dan saling mengingatkan dalam kebaikan dan kejujuran.',
      province: 'Sulawesi Selatan',
    },
    {
      tribe: 'Makassar',
      title: 'Siri’ na Pacce',
      meaning:
        'Siri’ adalah rasa malu moral dan kehormatan martabat. Pacce adalah rasa sakit empati dan solidaritas saat melihat penderitaan orang lain.',
      province: 'Sulawesi Selatan',
    },
    {
      tribe: 'Toraja',
      title: 'Tallu Lolona & Longko’ Toraya',
      meaning:
        'Menjaga keselarasan tiga tunas kosmis: Lolo Tau (manusia), Lolo Patuan (hewan), dan Lolo Tanan (tumbuhan) agar bumi lestari.',
      province: 'Sulawesi Selatan',
    },
    {
      tribe: 'Mandar',
      title: 'Malaqbi & Pappasang Ada’',
      meaning:
        'Karakter berakhlak mulia, anggun dalam tutur kata, dan tangguh pantang menyerah mengarungi samudra kehidupan.',
      province: 'Sulawesi Barat',
    },
    {
      tribe: 'Mamasa',
      title: 'Mesa Kada Dipotuo, Pantan Kada Dipomate',
      meaning:
        'Satu kata mufakat kita hidup rukun berbahagia, berselisih dan bercerai-berai kita akan binasa.',
      province: 'Sulawesi Barat',
    },
    {
      tribe: 'Kaili',
      title: 'Nosarara Nosabatutu',
      meaning:
        'Kita semua bersaudara dan kita semua bersatu dalam kedamaian dan gotong royong di lembah bumi Tadulako.',
      province: 'Sulawesi Tengah',
    },
    {
      tribe: 'Pamona',
      title: 'Sintuwu Maroso',
      meaning:
        'Bersatu kita teguh kokoh kuat; kebersamaan rakyat Danau Poso merawat alam dan persaudaraan tanpa sekat.',
      province: 'Sulawesi Tengah',
    },
    {
      tribe: 'Tolaki',
      title: 'Kalo Sara & Medulu Mepokoaso',
      meaning:
        'Hukum adat lingkaran rotan perdamaian tanpa sudut kebencian, menuntut manusia saling memaafkan dan saling mengasihi.',
      province: 'Sulawesi Tenggara',
    },
    {
      tribe: 'Buton',
      title: 'Yinda-yindamo Arata Somanamo Karo',
      meaning:
        'Korbankan harta demi harga diri, korbankan diri demi bangsa dan negeri, korbankan negeri demi hukum dan keimanan.',
      province: 'Sulawesi Tenggara',
    },
    {
      tribe: 'Muna',
      title: 'Hansuru-hansuru kalambe',
      meaning:
        'Hancur luluh kepentingan pribadi demi kejayaan dan kehormatan tanah air tumpah darah.',
      province: 'Sulawesi Tenggara',
    },
    {
      tribe: 'Moronene',
      title: 'Mepokoaso Hukaea Laea',
      meaning:
        'Satu jiwa satu rasa melindungi hutan adat, pohon sagu, dan keadilan bagi generasi penerus.',
      province: 'Sulawesi Tenggara',
    },
    {
      tribe: 'Minahasa',
      title: 'Si Tou Timou Tumou Tou',
      meaning:
        'Manusia baru menjadi manusia seutuhnya ketika ia hidup untuk memanusiakan, mendidik, dan menghidupkan sesamanya melalui Mapalus gotong royong.',
      province: 'Sulawesi Utara',
    },
    {
      tribe: 'Bolaang Mongondow',
      title: 'Mototompiaan, Mototabian, bo Mototanoban',
      meaning:
        'Saling memperbaiki kesalahan dengan kasih, saling mencintai tanpa pamrih, dan saling merindukan dalam kebaikan persaudaraan.',
      province: 'Sulawesi Utara',
    },
    {
      tribe: 'Sangihe',
      title: 'Somahe Kai Kehage',
      meaning:
        'Makin keras terjangan badai ombak samudra, makin gigih dan pantang mundur jiwa ksatria para pelaut perbatasan.',
      province: 'Sulawesi Utara',
    },
    {
      tribe: 'Gorontalo',
      title: 'Adati Hula-Hulaa to Saraa, Saraa Hula-Hulaa to Kuru’ani',
      meaning:
        'Adat bersendikan hukum syara’, dan hukum syara’ bersendikan Kitab Suci Al-Qur’an dalam bingkai musyawarah Dulohupa.',
      province: 'Gorontalo',
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 border border-amber-900/40 rounded-3xl p-6 sm:p-8 text-stone-100 shadow-2xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
          <BookMarked className="w-3.5 h-3.5" />
          <span>Khasanah Bahasa Daerah & Cerita Leluhur 15 Suku</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-amber-100">
          Bahasa Daerah & Cerita Leluhur Sulawesi
        </h2>
        <p className="text-sm sm:text-base text-stone-300 font-serif leading-relaxed max-w-3xl">
          Dari epos I La Galigo di Luwu, hikayat Datu Museng di Somba Opu, legenda Toar-Lumimuut di Minahasa, hingga balada lisan Tanggomo di Gorontalo. Temukan ribuan kosa kata bahasa ibu dan dengarkan cerita sejarah kampung yang dituturkan langsung oleh para tetua adat.
        </p>

        {/* Sub-tab Navigation */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-stone-800">
          <button
            onClick={() => setActiveSubTab('dictionary')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeSubTab === 'dictionary'
                ? 'bg-amber-600 text-stone-950 font-bold shadow-lg shadow-amber-900/30'
                : 'bg-stone-900 text-stone-300 hover:text-amber-200 hover:bg-stone-800 border border-stone-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Kamus Kosa Kata ({allTerms.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('stories')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeSubTab === 'stories'
                ? 'bg-amber-600 text-stone-950 font-bold shadow-lg shadow-amber-900/30'
                : 'bg-stone-900 text-stone-300 hover:text-amber-200 hover:bg-stone-800 border border-stone-800'
            }`}
          >
            <Scroll className="w-4 h-4" />
            <span>Cerita Leluhur & Mitos ({ancestralStories.length})</span>
          </button>

          <button
            onClick={() => setActiveSubTab('philosophies')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeSubTab === 'philosophies'
                ? 'bg-amber-600 text-stone-950 font-bold shadow-lg shadow-amber-900/30'
                : 'bg-stone-900 text-stone-300 hover:text-amber-200 hover:bg-stone-800 border border-stone-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>15 Pilar Falsafah Luhur</span>
          </button>
        </div>
      </div>

      {/* SUB-TAB 1: KAMUS KOSA KATA DAERAH */}
      {activeSubTab === 'dictionary' && (
        <div className="space-y-6">
          {/* Search & Filter Bar */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 shadow-md space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari kosa kata daerah (mis. Tabaro, Sippo, Sandeq, Fuya, Kalo Sara, Mapalus, Tanggomo, Singgi)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <select
                value={selectedTribe}
                onChange={(e) => setSelectedTribe(e.target.value)}
                className="bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-amber-300 font-semibold focus:outline-none focus:border-amber-500 sm:w-56"
              >
                <option value="all">Semua Suku ({allTerms.length} Kata)</option>
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
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-400">
            <span>
              Menampilkan <strong className="text-amber-300">{filteredTerms.length}</strong> istilah
              bahasa daerah leluhur
            </span>
          </div>

          {/* Term Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTerms.map((term, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-stone-900 border border-stone-800/90 hover:border-amber-600/60 transition shadow-lg space-y-3 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif font-black text-amber-200 text-xl tracking-wide group-hover:text-amber-300 transition">
                      {term.term}
                    </span>
                    <button
                      onClick={() => speakText(term.term)}
                      title="Dengarkan pelafalan kata"
                      className="p-2 rounded-xl bg-stone-800 hover:bg-amber-600 hover:text-stone-950 text-amber-300 transition shadow"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center gap-1.5 flex-wrap">
                    <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                      Bahasa {term.language}
                    </span>
                    <span className="text-[11px] text-stone-400 font-sans">• Suku {term.tribe}</span>
                    <span className="text-[10px] text-stone-500">({term.province})</span>
                  </div>

                  <p className="text-xs text-stone-200 leading-relaxed font-sans pt-1">
                    {term.meaning}
                  </p>

                  {term.pronunciationTip && (
                    <div className="p-2 rounded-lg bg-stone-950/60 border border-stone-800/60 text-[11px] text-stone-400 font-mono">
                      <span className="text-amber-400/80 font-semibold">Pelafalan: </span>
                      {term.pronunciationTip}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-stone-800/80 flex items-center justify-between text-[11px] text-stone-400">
                  <span className="line-clamp-1 truncate max-w-[190px]">
                    Konteks: {term.originItemTitle}
                  </span>
                  {onSelectItem && (
                    <button
                      onClick={() => onSelectItem(term.originItem)}
                      className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1 ml-2 shrink-0"
                    >
                      <span>Buka</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 2: CERITA LELUHUR, MITOS & SEJARAH KAMPUNG */}
      {activeSubTab === 'stories' && (
        <div className="space-y-6">
          {/* Search & Tribe Filter */}
          <div className="bg-stone-900/90 border border-stone-800 rounded-2xl p-4 shadow-md space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Cari cerita leluhur (mis. Sawerigading, Datu Museng, Toar Lumimuut, Lahilote, Sandeq, Tongkonan)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-stone-950 border border-stone-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500"
                />
              </div>

              <select
                value={selectedTribe}
                onChange={(e) => setSelectedTribe(e.target.value)}
                className="bg-stone-950 border border-stone-800 rounded-xl px-3 py-2 text-xs text-amber-300 font-semibold focus:outline-none focus:border-amber-500 sm:w-56"
              >
                <option value="all">Semua Suku ({ancestralStories.length} Cerita)</option>
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
            </div>

            {/* Category Filter Pills for Oral Traditions */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1 border-t border-stone-800">
              {[
                { key: 'all', label: `Semua Ranah (${ancestralStories.length})`, icon: '🌟' },
                { key: 'cerita_sejarah', label: 'Sejarah Kampung & Mitos', icon: '📜' },
                { key: 'cerita_keluarga', label: 'Cerita Keluarga & Rumah Adat', icon: '🏡' },
                { key: 'tani_bahari', label: 'Kearifan Tani & Bahari', icon: '🌾' },
                { key: 'bahasa', label: 'Bahasa Daerah & Falsafah', icon: '🗣️' },
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setStoryCategoryFilter(cat.key)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition flex items-center gap-1.5 ${
                    storyCategoryFilter === cat.key
                      ? 'bg-amber-500 text-stone-950 font-bold shadow'
                      : 'bg-stone-950 text-stone-400 hover:text-stone-200 border border-stone-800'
                  }`}
                >
                  <span>{cat.icon}</span>
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between text-xs text-stone-400">
            <span>
              Menampilkan <strong className="text-amber-300">{filteredStories.length}</strong> tuturan
              cerita sejarah kampung, cerita keluarga, kearifan tani/bahari, dan bahasa leluhur
            </span>
          </div>

          {/* Stories Cards List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredStories.map((story) => (
              <div
                key={story.id}
                className="rounded-3xl bg-stone-900 border border-amber-900/30 hover:border-amber-600/60 p-6 space-y-4 shadow-xl transition flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  {/* Top Badges */}
                  <div className="flex items-center justify-between flex-wrap gap-2 text-xs">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="px-2.5 py-1 rounded-lg bg-amber-500/20 text-amber-300 font-bold border border-amber-500/30 text-[11px]">
                        Suku {story.tribe}
                      </span>
                      {story.category === 'cerita_sejarah' && (
                        <span className="px-2.5 py-1 rounded-lg bg-yellow-500/20 text-yellow-300 font-semibold border border-yellow-500/30 text-[11px]">
                          📜 Sejarah Kampung
                        </span>
                      )}
                      {story.category === 'cerita_keluarga' && (
                        <span className="px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30 text-[11px]">
                          🏡 Cerita Keluarga
                        </span>
                      )}
                      {story.category === 'tani_bahari' && (
                        <span className="px-2.5 py-1 rounded-lg bg-blue-500/20 text-blue-300 font-semibold border border-blue-500/30 text-[11px]">
                          🌾 Tani & Bahari
                        </span>
                      )}
                      {story.category === 'bahasa' && (
                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 font-semibold border border-emerald-500/30 text-[11px]">
                          🗣️ Bahasa & Falsafah
                        </span>
                      )}
                      <span className="text-stone-400 text-xs">{story.province}</span>
                    </div>
                    <span className="text-[11px] text-stone-500 font-mono">
                      {story.estimatedEra}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif font-black text-xl text-amber-100 group-hover:text-amber-200 transition">
                      {story.title}
                    </h3>
                    <p className="text-xs text-amber-400/90 font-serif italic mt-0.5">
                      {story.subtitle}
                    </p>
                  </div>

                  {/* Elder & Student Credit Box */}
                  <div className="p-3 rounded-2xl bg-stone-950/70 border border-stone-800/80 text-xs space-y-1.5">
                    <div className="flex items-center gap-2 text-stone-300">
                      <User className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>
                        <strong className="text-amber-200">{story.elderNarrator.name}</strong>
                        {story.elderNarrator.age && ` (${story.elderNarrator.age} tahun)`} —{' '}
                        <span className="text-stone-400">{story.elderNarrator.titleOrRole}</span>
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[11px] text-stone-400">
                      <MapPin className="w-3 h-3 text-stone-500 shrink-0" />
                      <span>{story.regionDetail}</span>
                      <span className="text-stone-600">•</span>
                      <span>Dicatat: {story.recordedBy.name}</span>
                    </div>
                  </div>

                  {/* Story Summary */}
                  <p className="text-xs text-stone-300 font-serif leading-relaxed line-clamp-3">
                    "{story.summary}"
                  </p>

                  {/* Philosophical Quote */}
                  <div className="p-3 rounded-xl bg-amber-950/20 border-l-2 border-amber-500 text-xs text-stone-300 font-serif italic">
                    <Quote className="w-3 h-3 text-amber-400 inline mr-1" />
                    {story.philosophicalMeaning}
                  </div>

                  {/* Local Terms in this story */}
                  {story.localTerms.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
                        Kosa Kata Daerah Kunci:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {story.localTerms.map((term, tIdx) => (
                          <button
                            key={tIdx}
                            onClick={(e) => {
                              e.stopPropagation();
                              speakText(term.term);
                            }}
                            title={`Dengar: ${term.term} (${term.meaning})`}
                            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-stone-800 hover:bg-stone-700 text-amber-300 text-[10px] font-mono border border-stone-700 transition"
                          >
                            <Volume2 className="w-2.5 h-2.5" />
                            <span>{term.term}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between gap-3">
                  <button
                    onClick={() => speakText(`${story.title}. ${story.summary}`)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-amber-300 text-xs font-semibold transition"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>Dengar Suara Narasi</span>
                  </button>

                  {onSelectItem && (
                    <button
                      onClick={() => onSelectItem(story)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-stone-950 text-xs font-bold transition shadow"
                    >
                      <span>Baca Kisah Lengkap</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: 15 PILAR FALSAFAH LUHUR */}
      {activeSubTab === 'philosophies' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-serif font-bold text-lg text-amber-200 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              15 Pilar Falsafah Luhur Suku-Suku Sulawesi
            </h3>
            <span className="text-xs text-stone-400">Fondasi Etika, Adab & Perdamaian</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {PHILOSOPHIES.map((phil, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-stone-900/90 border border-amber-900/40 hover:border-amber-600/60 transition shadow-lg space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold">
                      Suku {phil.tribe}
                    </span>
                    <span className="text-[11px] text-stone-400">{phil.province}</span>
                  </div>
                  <h4 className="font-serif font-bold text-base text-amber-100">
                    {phil.title}
                  </h4>
                  <p className="text-xs text-stone-300 font-serif italic leading-relaxed">
                    "{phil.meaning}"
                  </p>
                </div>

                <button
                  onClick={() => speakText(`${phil.title}. ${phil.meaning}`)}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-semibold self-start"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Dengar Pelafalan Suara</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

