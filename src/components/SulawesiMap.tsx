import React, { useState } from 'react';
import { Province, Tribe, HeritageItem } from '../types/heritage';
import { MapPin, Compass, Sparkles, BookOpen, ChevronRight, Award } from 'lucide-react';

interface SulawesiMapProps {
  items: HeritageItem[];
  onSelectTribe: (tribe: Tribe) => void;
  onSelectProvince: (province: Province) => void;
}

interface RegionInfo {
  province: Province;
  tribes: {
    name: Tribe;
    description: string;
    specialties: string[];
    philosophy: string;
    landmarkCraft: string;
  }[];
  svgPathId: string;
  color: string;
}

const REGION_DETAILS: RegionInfo[] = [
  {
    province: 'Sulawesi Selatan',
    color: 'from-amber-600 to-red-700',
    svgPathId: 'sulsel',
    tribes: [
      {
        name: 'Bugis',
        description: 'Masyarakat pelaut ulung, peramu sagu Luwu, dan perumus adat Lontara.',
        specialties: ['Kapurung Luwu', 'Nasu Palekko', 'Barongko'],
        philosophy: 'Sipakatau, Sipakalebbi, Sipakainge (Adab memanusiakan dan memuliakan sesama)',
        landmarkCraft: 'Tenun Sutra Sengkang & Badik Gecong',
      },
      {
        name: 'Makassar',
        description: 'Bumi Somba Opu dan Kesultanan Gowa yang menjunjung martabat.',
        specialties: ['Coto Makassar', 'Pallubasa', 'Es Pisang Ijo'],
        philosophy: 'Siri’ na Pacce (Harga diri moral dan empati mendalam)',
        landmarkCraft: 'Songkok Recca / Songkok Guru Serat Lontar Emas',
      },
      {
        name: 'Toraja',
        description: 'Masyarakat lembah pegunungan dengan arsitektur Tongkonan dan ritual sakral.',
        specialties: ['Pa’piong Bambu', 'Pantollo Lendong', 'Deppa Tori'],
        philosophy: 'Tallu Lolona & Longko’ Toraya (Harmoni semesta alam manusia, flora, fauna)',
        landmarkCraft: 'Ukiran Passura’ Tongkonan & Tenun Sa’dan',
      },
    ],
  },
  {
    province: 'Sulawesi Barat',
    color: 'from-blue-600 to-indigo-700',
    svgPathId: 'sulbar',
    tribes: [
      {
        name: 'Mandar',
        description: 'Suku bahari penakluk samudra dengan perahu layar Sandeq tercepat di dunia.',
        specialties: ['Jepa Ubi Kayu', 'Bau Peapi', 'Golla Kambu'],
        philosophy: 'Malaqbi (Keanggunan pekerti dan keteguhan keberanian maritim)',
        landmarkCraft: 'Perahu Sandeq & Kain Tenun Sa’be Mandar',
      },
      {
        name: 'Mamasa',
        description: 'Masyarakat pegunungan Gandangdewata dengan rumah adat Banua Olang bertanduk.',
        specialties: ['Deppa Tetekan', 'Sambal Dengen', 'Padi Gunung Gandangdewata'],
        philosophy: 'Mesa Kada Dipotuo, Pantan Kada Dipomate (Bersatu rukun kita hidup, berpecah kita mati)',
        landmarkCraft: 'Tenun Sambu’ Mamasa & Ukiran Kayu Banua Olang',
      },
    ],
  },
  {
    province: 'Sulawesi Tengah',
    color: 'from-emerald-600 to-teal-700',
    svgPathId: 'sulteng',
    tribes: [
      {
        name: 'Kaili',
        description: 'Suku lembah Palu & Donggala dengan arsitektur tahan gempa Souraja.',
        specialties: ['Kaledo Donggala', 'Uta Kelo Daun Kelor', 'Duo Sale'],
        philosophy: 'Nosarara Nosabatutu (Kita Bersaudara, Kita Bersatu)',
        landmarkCraft: 'Tenun Sutra Bomba Donggala & Arsitektur Souraja',
      },
      {
        name: 'Pamona',
        description: 'Masyarakat Danau Poso dengan tradisi tekstil prasejarah tertua Nusantara.',
        specialties: ['Inuyu Nasi Bambu', 'Ikan Bakar Danau Poso'],
        philosophy: 'Sintuwu Maroso (Gotong royong kuat dan teguh dalam kebersamaan)',
        landmarkCraft: 'Kain Fuya dari Kulit Kayu Nunu/Ivo & Tari Dero',
      },
    ],
  },
  {
    province: 'Sulawesi Tenggara',
    color: 'from-yellow-600 to-amber-700',
    svgPathId: 'sultra',
    tribes: [
      {
        name: 'Tolaki',
        description: 'Masyarakat dataran rawa Konawe & Kendari pengamal musyawarah damai Kalo Sara.',
        specialties: ['Sinonggi Hu’a Ikan Tawaloho', 'Sagu Rawa'],
        philosophy: 'Kalo Sara & Medulu Mepokoaso (Lingkaran rotan hukum perdamaian tanpa sudut permusuhan)',
        landmarkCraft: 'Tari Molulo & Anyaman Anyi Tolaki',
      },
      {
        name: 'Buton',
        description: 'Armada pelaut Kesultanan Buton dengan benteng keraton terluas di dunia.',
        specialties: ['Kasuami Kerucut Singkong', 'Ikan Kuah Parende'],
        philosophy: 'Yinda-yindamo Arata Somanamo Karo, Yinda-yindamo Karo Somanamo Liwu (Integritas tanpa suap)',
        landmarkCraft: 'Benteng Keraton Wolio, Tenun Buton, & Kapal Lambo',
      },
      {
        name: 'Muna',
        description: 'Masyarakat pulau karang dengan tradisi layang-layang purba tertua di dunia.',
        specialties: ['Kambuse Jagung Pipil Kapur Sirih', 'Kenta Mbaeno'],
        philosophy: 'Hansuru-hansuru kalambe hansurumo karo somanamo liwu (Bela tanah air di atas kepentingan diri)',
        landmarkCraft: 'Kaghati Kolope (Layang-layang daun ubi hutan 4.000 SM) & Tenun Masalili',
      },
      {
        name: 'Moronene',
        description: 'Suku asli tertua Sulawesi di kawasan rimba Rawa Aopa Watumohai & Pulau Kabaena.',
        specialties: ['Sinole Sagu Sangrai Karamel', 'Gule Moronene'],
        philosophy: 'Mepokoaso (Satu jiwa memelihara rimba adat Hukaea Laea)',
        landmarkCraft: 'Tenun Kasab Kabaena & Anyaman Rotan Kambu',
      },
    ],
  },
  {
    province: 'Sulawesi Utara',
    color: 'from-rose-600 to-red-800',
    svgPathId: 'sulut',
    tribes: [
      {
        name: 'Minahasa',
        description: 'Masyarakat lembah Danau Tondano & perbukitan Tomohon penjunjung semangat Mapalus.',
        specialties: ['Tinutuan (Bubur Manado)', 'Sambal Roa', 'Perkedel Nike', 'Klappertaart'],
        philosophy: 'Si Tou Timou Tumou Tou (Manusia hidup untuk memanusiakan dan menghidupkan sesama)',
        landmarkCraft: 'Alat Musik Kolintang Kayu Cempaka, Kain Tenun Bentenan, & Rumah Adat Woloan',
      },
      {
        name: 'Bolaang Mongondow',
        description: 'Masyarakat agraris lembah Danau Moat berakar kerajaan Datu Manoppo dengan trilogi budi pekerti luhur.',
        specialties: ['Alangan Padi Gunung', 'Nasi Jaha', 'Kopi Kotamobagu'],
        philosophy: 'Mototompiaan, Mototabian, bo Mototanoban (Saling memperbaiki, mengasihi, dan merindukan dalam kebaikan)',
        landmarkCraft: 'Tenun Sikayu, Anyaman Bambu, & Rumah Adat Kabela',
      },
      {
        name: 'Sangihe',
        description: 'Masyarakat maritim kepulauan perbatasan samudra Pasifik penakluk ombak badai.',
        specialties: ['Kue Tamo Sakral Gula Aren Siau', 'Sagu Porno', 'Ikan Roa Asap'],
        philosophy: 'Somahe Kai Kehage (Makin keras badai menghadang, makin gigih pantang mundur)',
        landmarkCraft: 'Kain Koffo Serat Abaka, Kue Tamo Tulude, & Musik Bambu Seng',
      },
    ],
  },
  {
    province: 'Gorontalo',
    color: 'from-amber-500 to-yellow-600',
    svgPathId: 'gorontalo',
    tribes: [
      {
        name: 'Gorontalo',
        description: 'Bumi Serambi Madinah Teluk Tomini dengan kekayaan tradisi luhur dan falsafah adat bersendi syara’.',
        specialties: ['Binte Biluhuta (Milu Siram Jagung Cakalang)', 'Ayam Iloni', 'Ilabulo', 'Tiliaya'],
        philosophy: 'Adati Hula-Hulaa to Saraa, Saraa Hula-Hulaa to Kuru’ani (Adat bersendi syara’, syara’ bersendi Kitabullah)',
        landmarkCraft: 'Kain Sulam Karawo (Mokarawo cabut benang milimeter) & Rumah Adat Dulohupa',
      },
    ],
  },
];

export const SulawesiMap: React.FC<SulawesiMapProps> = ({
  items,
  onSelectTribe,
  onSelectProvince,
}) => {
  const [activeProvince, setActiveProvince] = useState<Province>('Sulawesi Selatan');
  const [selectedTribeDetail, setSelectedTribeDetail] = useState<Tribe | null>('Bugis');

  const selectedRegion = REGION_DETAILS.find((r) => r.province === activeProvince)!;

  const countByTribe = (t: Tribe) => items.filter((item) => item.tribe === t).length;
  const countByProvince = (p: Province) => items.filter((item) => item.province === p).length;

  return (
    <div className="space-y-8 animate-in fade-in">
      {/* Header Banner */}
      <div className="bg-gradient-to-br from-stone-900 via-stone-850 to-stone-900 border border-amber-900/30 rounded-2xl p-6 sm:p-8 text-stone-100 shadow-xl relative overflow-hidden">
        <div className="absolute right-0 top-0 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-3xl space-y-3 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
            <Compass className="w-3.5 h-3.5" />
            <span>Peta Budaya Kepulauan Sulawesi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif font-black tracking-tight text-amber-100">
            Jelajahi 15 Suku Adat & Pusaka Leluhur 6 Provinsi
          </h2>
          <p className="text-sm sm:text-base text-stone-300 font-serif leading-relaxed">
            Dari semenanjung Minahasa, Sangihe, & Gorontalo di utara, pegunungan Tana Toraja & Gandangdewata, lembah Palu & Danau Poso, hingga benteng samudra Buton & pesisir Mandar. Setiap jengkal tanah Sulawesi menyimpan khazanah pengetahuan orang tua yang tak ternilai harganya.
          </p>
        </div>
      </div>

      {/* Main Grid: Interactive Map Visual + Region / Tribe Navigator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Visual Map of Sulawesi (4 cols on lg) */}
        <div className="lg:col-span-5 bg-stone-900/90 border border-stone-800 rounded-2xl p-5 shadow-xl space-y-4">
          <div className="flex items-center justify-between border-b border-stone-800 pb-3">
            <h3 className="font-serif font-bold text-base text-amber-200 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-400" />
              Pilih Wilayah Provinsi
            </h3>
            <span className="text-xs font-mono text-stone-400">6 Provinsi Terpetakan</span>
          </div>

          {/* Interactive Province Buttons */}
          <div className="grid grid-cols-2 gap-2.5">
            {REGION_DETAILS.map((reg) => {
              const isSelected = reg.province === activeProvince;
              const count = countByProvince(reg.province);
              return (
                <button
                  key={reg.province}
                  onClick={() => {
                    setActiveProvince(reg.province);
                    setSelectedTribeDetail(reg.tribes[0].name);
                  }}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? 'bg-amber-600/20 border-amber-500 text-amber-200 shadow-md ring-1 ring-amber-500/40'
                      : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-700 hover:bg-stone-800/40'
                  }`}
                >
                  <div className="text-xs font-bold font-serif">{reg.province}</div>
                  <div className="text-[11px] text-stone-400 mt-1 flex items-center justify-between">
                    <span>{reg.tribes.map((t) => t.name).join(', ')}</span>
                    <span className="px-1.5 py-0.2 rounded bg-stone-800 text-amber-300 font-mono text-[10px]">
                      {count}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Stylized Sulawesi Island Visual Representation */}
          <div className="relative bg-stone-950 rounded-xl p-4 border border-stone-800 flex flex-col items-center justify-center min-h-[300px] overflow-hidden">
            <div className="text-center space-y-1 mb-2">
              <span className="text-[11px] font-mono uppercase text-amber-400/90 tracking-wider">
                Geometri Pulau Sulawesi (Celebes)
              </span>
              <p className="text-xs text-stone-400">Klik salah satu lengan pulau untuk menelusuri suku</p>
            </div>

            {/* Stylized vector map representing Sulawesi 4 arms & islands */}
            <svg
              viewBox="0 0 400 420"
              className="w-full max-w-[280px] h-auto drop-shadow-2xl"
              style={{ filter: 'drop-shadow(0 0 16px rgba(245, 158, 11, 0.15))' }}
            >
              {/* Background Glow */}
              <circle cx="200" cy="200" r="160" fill="radial-gradient(circle, rgba(217,119,6,0.1) 0%, transparent 70%)" />

              {/* Kepulauan Sangihe (Sulawesi Utara - Lingkar Utara) */}
              <circle
                cx="335"
                cy="15"
                r="7"
                fill={activeProvince === 'Sulawesi Utara' ? '#e11d48' : '#27272a'}
                stroke={activeProvince === 'Sulawesi Utara' ? '#fda4af' : '#52525b'}
                strokeWidth="1.5"
                className="cursor-pointer"
                onClick={() => {
                  setActiveProvince('Sulawesi Utara');
                  setSelectedTribeDetail('Sangihe');
                }}
              >
                <title>Kepulauan Sangihe & Talaud (Suku Sangihe)</title>
              </circle>

              {/* Gorontalo (Leher Semenanjung Utara Bagian Barat) */}
              <path
                d="M 185 68 Q 230 42 275 46 Q 275 60 230 65 Q 185 75 185 68 Z"
                fill={activeProvince === 'Gorontalo' ? '#f59e0b' : '#27272a'}
                stroke={activeProvince === 'Gorontalo' ? '#fbbf24' : '#52525b'}
                strokeWidth={activeProvince === 'Gorontalo' ? '2.5' : '1.5'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => {
                  setActiveProvince('Gorontalo');
                  setSelectedTribeDetail('Gorontalo');
                }}
              >
                <title>Gorontalo (Suku Gorontalo / Hulonthalo)</title>
              </path>

              {/* Sulawesi Utara (Ujung Semenanjung Minahasa & Bolmong) */}
              <path
                d="M 275 46 Q 320 28 355 42 Q 345 60 300 62 Q 275 60 275 46 Z"
                fill={activeProvince === 'Sulawesi Utara' ? '#e11d48' : '#27272a'}
                stroke={activeProvince === 'Sulawesi Utara' ? '#fda4af' : '#52525b'}
                strokeWidth={activeProvince === 'Sulawesi Utara' ? '2.5' : '1.5'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => {
                  setActiveProvince('Sulawesi Utara');
                  setSelectedTribeDetail('Minahasa');
                }}
              >
                <title>Sulawesi Utara (Suku Minahasa, Bolaang Mongondow, Sangihe)</title>
              </path>

              {/* Sulawesi Tengah (Lengan Tengah & Poso/Palu) */}
              <path
                d="M 170 80 Q 215 75 240 100 Q 290 120 330 145 Q 310 165 240 145 Q 200 140 180 160 Q 155 140 160 100 Z"
                fill={activeProvince === 'Sulawesi Tengah' ? '#059669' : '#27272a'}
                stroke={activeProvince === 'Sulawesi Tengah' ? '#34d399' : '#52525b'}
                strokeWidth={activeProvince === 'Sulawesi Tengah' ? '2.5' : '1.5'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => {
                  setActiveProvince('Sulawesi Tengah');
                  setSelectedTribeDetail('Kaili');
                }}
              >
                <title>Sulawesi Tengah (Suku Kaili, Pamona)</title>
              </path>

              {/* Sulawesi Barat (Lengan Barat / Mandar & Mamasa) */}
              <path
                d="M 160 140 Q 180 160 165 190 Q 140 220 130 250 Q 115 240 130 190 Q 145 155 160 140 Z"
                fill={activeProvince === 'Sulawesi Barat' ? '#2563eb' : '#27272a'}
                stroke={activeProvince === 'Sulawesi Barat' ? '#60a5fa' : '#52525b'}
                strokeWidth={activeProvince === 'Sulawesi Barat' ? '2.5' : '1.5'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => {
                  setActiveProvince('Sulawesi Barat');
                  setSelectedTribeDetail('Mandar');
                }}
              >
                <title>Sulawesi Barat (Suku Mandar, Mamasa)</title>
              </path>

              {/* Sulawesi Selatan (Lengan Selatan / Bugis, Makassar, Toraja) */}
              <path
                d="M 165 190 Q 190 200 185 240 Q 180 290 170 340 Q 145 365 135 340 Q 140 290 140 250 Q 165 220 165 190 Z"
                fill={activeProvince === 'Sulawesi Selatan' ? '#b45309' : '#27272a'}
                stroke={activeProvince === 'Sulawesi Selatan' ? '#fbbf24' : '#52525b'}
                strokeWidth={activeProvince === 'Sulawesi Selatan' ? '2.5' : '1.5'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => {
                  setActiveProvince('Sulawesi Selatan');
                  setSelectedTribeDetail('Bugis');
                }}
              >
                <title>Sulawesi Selatan (Suku Bugis, Makassar, Toraja)</title>
              </path>

              {/* Sulawesi Tenggara (Lengan Tenggara / Tolaki, Buton, Muna, Moronene) */}
              <path
                d="M 190 200 Q 230 210 260 250 Q 275 290 270 320 Q 255 350 240 370 Q 225 340 230 300 Q 215 260 185 240 Z"
                fill={activeProvince === 'Sulawesi Tenggara' ? '#d97706' : '#27272a'}
                stroke={activeProvince === 'Sulawesi Tenggara' ? '#fde047' : '#52525b'}
                strokeWidth={activeProvince === 'Sulawesi Tenggara' ? '2.5' : '1.5'}
                className="cursor-pointer transition-all hover:opacity-90"
                onClick={() => {
                  setActiveProvince('Sulawesi Tenggara');
                  setSelectedTribeDetail('Tolaki');
                }}
              >
                <title>Sulawesi Tenggara (Suku Tolaki, Buton, Muna, Moronene)</title>
              </path>

              {/* Pulau Muna & Pulau Buton (Kepulauan Tenggara) */}
              <circle
                cx="245"
                cy="375"
                r="12"
                fill={activeProvince === 'Sulawesi Tenggara' ? '#d97706' : '#27272a'}
                stroke={activeProvince === 'Sulawesi Tenggara' ? '#fde047' : '#52525b'}
                strokeWidth="1.5"
                className="cursor-pointer"
                onClick={() => {
                  setActiveProvince('Sulawesi Tenggara');
                  setSelectedTribeDetail('Muna');
                }}
              >
                <title>Pulau Muna (Suku Muna)</title>
              </circle>
              <circle
                cx="275"
                cy="365"
                r="14"
                fill={activeProvince === 'Sulawesi Tenggara' ? '#d97706' : '#27272a'}
                stroke={activeProvince === 'Sulawesi Tenggara' ? '#fde047' : '#52525b'}
                strokeWidth="1.5"
                className="cursor-pointer"
                onClick={() => {
                  setActiveProvince('Sulawesi Tenggara');
                  setSelectedTribeDetail('Buton');
                }}
              >
                <title>Pulau Buton (Suku Buton)</title>
              </circle>

              {/* City & Cultural Landmark Markers */}
              <g className="text-[9px] fill-stone-300 font-sans font-semibold">
                <circle cx="340" cy="42" r="3" fill="#e11d48" />
                <text x="320" y="32">Manado</text>

                <circle cx="230" cy="52" r="3" fill="#f59e0b" />
                <text x="210" y="44">Gorontalo</text>

                <circle cx="140" cy="335" r="3.5" fill="#f59e0b" />
                <text x="75" y="338">Makassar</text>

                <circle cx="165" cy="225" r="3" fill="#f59e0b" />
                <text x="175" y="228">Toraja</text>

                <circle cx="135" cy="245" r="3" fill="#3b82f6" />
                <text x="95" y="248">Mandar</text>

                <circle cx="165" cy="115" r="3" fill="#10b981" />
                <text x="135" y="112">Palu</text>

                <circle cx="205" cy="150" r="3" fill="#10b981" />
                <text x="212" y="152">Poso</text>

                <circle cx="255" cy="285" r="3" fill="#f59e0b" />
                <text x="262" y="288">Kendari</text>

                <circle cx="280" cy="370" r="3" fill="#f59e0b" />
                <text x="290" y="373">Bau-Bau</text>
              </g>
            </svg>

            <div className="mt-3 text-center">
              <span className="text-xs font-serif font-bold text-amber-300">
                Terpilih: {activeProvince}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Detailed Tribe Explorer (7 cols on lg) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-800 pb-3">
            <div>
              <span className="text-xs uppercase font-mono tracking-wider text-amber-400">
                Wilayah Kebudayaan
              </span>
              <h3 className="text-xl font-serif font-bold text-amber-100">
                {selectedRegion.province}
              </h3>
            </div>
            <button
              onClick={() => onSelectProvince(selectedRegion.province)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700 transition"
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Lihat Semua Koleksi Provinsi Ini</span>
            </button>
          </div>

          {/* Tribe Tabs inside Active Province */}
          <div className="flex flex-wrap gap-2">
            {selectedRegion.tribes.map((t) => {
              const isSelected = selectedTribeDetail === t.name;
              const count = countByTribe(t.name);
              return (
                <button
                  key={t.name}
                  onClick={() => setSelectedTribeDetail(t.name)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all flex items-center gap-2 ${
                    isSelected
                      ? 'bg-amber-500 text-stone-950 font-bold shadow-md shadow-amber-500/20'
                      : 'bg-stone-900 text-stone-300 hover:bg-stone-800 border border-stone-800'
                  }`}
                >
                  <span>Suku {t.name}</span>
                  <span
                    className={`text-xs px-1.5 py-0.2 rounded-full font-mono ${
                      isSelected ? 'bg-stone-900/30 text-stone-950' : 'bg-stone-800 text-amber-400'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Tribe Deep Dive Card */}
          {selectedTribeDetail && (() => {
            const currentTribe = selectedRegion.tribes.find((t) => t.name === selectedTribeDetail);
            if (!currentTribe) return null;
            const tribeItems = items.filter((item) => item.tribe === currentTribe.name);

            return (
              <div className="bg-stone-900/90 border border-amber-900/40 rounded-2xl p-6 shadow-xl space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs uppercase font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/30">
                        Suku Bangsa Asli Sulawesi
                      </span>
                      <span className="text-xs text-stone-400">• {selectedRegion.province}</span>
                    </div>
                    <h4 className="text-2xl font-serif font-black text-amber-100">
                      Suku {currentTribe.name}
                    </h4>
                    <p className="text-sm text-stone-300 font-serif leading-relaxed">
                      {currentTribe.description}
                    </p>
                  </div>

                  <button
                    onClick={() => onSelectTribe(currentTribe.name)}
                    className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-stone-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition shadow"
                  >
                    <span>Buka Arsip Suku {currentTribe.name}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Specialties & Landmark Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-2">
                    <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block">
                      🍲 Kuliner & Resep Leluhur Terkenal
                    </span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {currentTribe.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-lg bg-stone-900 text-stone-200 border border-stone-700/80"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-2">
                    <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider block">
                      🧵 Kerajinan & Mahakarya Kriya
                    </span>
                    <p className="text-xs text-stone-300 font-serif pt-1">
                      {currentTribe.landmarkCraft}
                    </p>
                  </div>
                </div>

                {/* Falsafah / Wisdom */}
                <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-stone-950 border border-amber-800/40 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-semibold text-amber-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Falsafah Hidup Leluhur (Adab & Karakter):</span>
                  </div>
                  <p className="text-sm font-serif italic text-amber-200/90 leading-relaxed">
                    "{currentTribe.philosophy}"
                  </p>
                </div>

                {/* Seeded Records Preview for This Tribe */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-stone-300">
                      Dokumentasi Pengetahuan Tersimpan ({tribeItems.length})
                    </h5>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tribeItems.slice(0, 4).map((item) => (
                      <div
                        key={item.id}
                        onClick={() => onSelectTribe(currentTribe.name)}
                        className="p-3 rounded-xl bg-stone-950/60 hover:bg-stone-950 border border-stone-800 hover:border-amber-700/60 transition cursor-pointer space-y-1.5 group"
                      >
                        <div className="flex items-center justify-between text-[11px] text-stone-400">
                          <span className="px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 text-[10px] uppercase font-mono">
                            {item.category}
                          </span>
                          <span>Oleh: {item.elderNarrator.name}</span>
                        </div>
                        <h6 className="font-serif font-bold text-sm text-stone-200 group-hover:text-amber-200 line-clamp-1 transition">
                          {item.title}
                        </h6>
                        <p className="text-xs text-stone-400 line-clamp-2 font-serif">
                          {item.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </div>
  );
};
