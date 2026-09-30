import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  Mic,
  Square,
  Sparkles,
  Volume2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Clock,
  User,
  MapPin,
  Flame,
  FileText,
  ChevronRight,
  BookOpen,
} from 'lucide-react';
import { HeritageCategory, HeritageItem, Province, Tribe } from '../types/heritage';
import { getSpeechRecognition } from '../utils/speechRecognition';

interface StoryRecorderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSaveItem: (item: HeritageItem) => void;
}

const TRIBES_BY_PROVINCE: Record<Province, Tribe[]> = {
  'Sulawesi Selatan': ['Bugis', 'Makassar', 'Toraja'],
  'Sulawesi Barat': ['Mandar', 'Mamasa'],
  'Sulawesi Tengah': ['Kaili', 'Pamona'],
  'Sulawesi Tenggara': ['Tolaki', 'Buton', 'Muna', 'Moronene'],
  'Sulawesi Utara': ['Minahasa', 'Bolaang Mongondow', 'Sangihe'],
  'Gorontalo': ['Gorontalo'],
};

const SAMPLE_STORIES = [
  {
    label: 'Resep Barongko Pisang Raja Nenek Fatimah (Bugis)',
    province: 'Sulawesi Selatan' as Province,
    tribe: 'Bugis' as Tribe,
    elderName: 'Nenek Indo’ Fatimah',
    elderAge: 79,
    studentName: 'Andi Nurhaliza (SMA 1 Sengkang)',
    category: 'resep' as HeritageCategory,
    text: `Nenek dulu diajari ibunya, kalau bikin Barongko asli itu pisang kepok atau pisang rajanya tidak boleh diblender pakai mesin listrik, harus disisir halus pakai sendok tembaga atau pisau kecil biar seratnya tidak pecah. Pisang disisir buang urat tengahnya yang hitam itu karena bikin pahit. 

Campurannya santan kental dari dua butir kelapa tua yang diparut tangan, telur ayam kampung empat butir, gula pasir, dan sedikit garam. Tidak boleh pakai vanili buatan pabrik, aromanya harus murni dari daun pisang muda (daun yang masih tergulung pucuk) yang dilayukan di atas uap air. 

Bungkusnya berbentuk perahu segitiga (tumang). Pas mau dikukus, apinya harus sedang, tidak boleh terlalu besar supaya santannya tidak pecah berminyak. Waktu nenek masih muda di zaman panen padi, Barongko ini makanan bangsawan saoraja saat acara lamaran atau mappacci. Nenek selalu pesan: "Anak muda sekarang jangan campur tepung terigu ke Barongko, itu merusak keaslian warisan leluhur kita."`,
  },
  {
    label: 'Seni Sulam Karawo Ti Nenek Ramlah (Gorontalo)',
    province: 'Gorontalo' as Province,
    tribe: 'Gorontalo' as Tribe,
    elderName: 'Ti Nenek Ramlah Modanggu',
    elderAge: 74,
    studentName: 'Fauzan Hasyim (SMA 1 Telaga)',
    category: 'kerajinan' as HeritageCategory,
    text: `Nenek belajar menyulam Karawo sejak umur 12 tahun dari ibu dan nenek di Telaga. Karawo itu bukan sekadar bordir biasa. Kita harus mencabut serat benang kain katun satu per satu pakai jarum dan silet kecil sampai kainnya berlubang-lubang rapi seperti jaring kasa milimeter. 

Setelah seratnya dicabut teratur, baru kita susupkan benang sutra warna-warni untuk mengikat tiang-tiang benang itu membentuk bunga melati atau mahkota raja Dulohupa. Waktu mencabut benang hati harus tenang sekali, kalau pikiran lagi gelisah benang kain bisa putus dan kainnya rusak tidak bisa dipakai lagi. 

Pesan nenek: "Karawo ini mengajarkan kita sifat sabar dan teliti sebagai orang Gorontalo. Jangan biarkan kerajinan warisan leluhur ini kalah dengan pakaian sablon mesin pabrik."`,
  },
  {
    label: 'Kearifan Tinutuan & Mapalus Oma Elsje (Minahasa)',
    province: 'Sulawesi Utara' as Province,
    tribe: 'Minahasa' as Tribe,
    elderName: 'Oma Elsje Polii',
    elderAge: 78,
    studentName: 'Christian Pangemanan (SMA 1 Tomohon)',
    category: 'resep' as HeritageCategory,
    text: `Bikin Tinutuan asli Minahasa itu tidak boleh sembarangan. Sayurnya harus lengkap dari hasil kebun sendiri: labu kuning sambiki yang tua biar manis, ubi jalar, jagung manis pipil segar, kangkung air, dan yang paling wajib adalah daun gedi. Lendir dari daun gedi itu yang bikin kuah bubur lembut kental alami tanpa perlu tambahan tepung maizena. 

Orang tua dulu mengajarkan kita kalau masak Tinutuan di panci besar di atas tungku kayu, aromanya harum sampai ke rumah tetangga. Kita selalu saling mengantar semangkuk Tinutuan hangat untuk oma-opa yang sudah sepuh di kampung. Ini sesuai falsafah Minahasa "Si Tou Timou Tumou Tou", manusia hidup untuk memanusiakan dan menghidupkan sesamanya lewat semangat Mapalus gotong royong.`,
  },
  {
    label: 'Menenun Kain Bomba Donggala dari Nenek Kaili',
    province: 'Sulawesi Tengah' as Province,
    tribe: 'Kaili' as Tribe,
    elderName: 'Nenek Tua Marhumah',
    elderAge: 81,
    studentName: 'Rizal Wahyudi (SMA 2 Donggala)',
    category: 'kerajinan' as HeritageCategory,
    text: `Kain Tenun Bomba ini ciri khas suku Kaili di Donggala. Nenek menenun dari umur 14 tahun belajar di kolong rumah Souraja. Motif Bomba itu gambar kuncup bunga cengkeh dan tanaman hutan yang bermakna keterbukaan hati orang Kaili menyambut tamu persaudaraan Nosarara Nosabatutu.

Benangnya dulu dicelup warna alami dari getah pohon dan rebusan kunyit hutan. Alat tenunnya namanya Walida kayu bitti. Waktu menenun, tangan harus stabil, hentakannya ada iramanya seperti detak jantung. Kalau penenun lagi marah atau sedih, kainnya bakal mengkerut jelek. Jadi orang tua dulu mengajarkan kita harus mengosongkan amarah dan berdoa sebelum duduk di papan tenun. 

Pesan nenek: sekarang anak-anak muda lebih suka main hp daripada memegang teropong benang. Nenek takut suatu saat kain Bomba ini tinggal foto di internet tanpa ada lagi tangan yang bisa menenunnya di lembah Palu.`,
  },
  {
    label: 'Tradisi Mosehe & Falsafah Kalo Sara Tetua Tolaki',
    province: 'Sulawesi Tenggara' as Province,
    tribe: 'Tolaki' as Tribe,
    elderName: 'Kakek Ponggawa Tamrin',
    elderAge: 77,
    studentName: 'Wahyu Ramadhan (Universitas Halu Oleo)',
    category: 'cerita_sejarah' as HeritageCategory,
    text: `Dahulu kala di tanah Konawe, bila terjadi perselisihan batas ladang atau pertengkaran antar kampung, para tetua tidak pernah mengangkat senjata. Kami membawa seutas rotan anyam yang dibentuk lingkaran tanpa simpul, ditaruh di atas kain putih dan diberi sirih pinang. Namanya Kalo Sara. 

Rotan yang melingkar itu melambangkan bahwa hidup manusia tidak punya sudut dendam, kalau berselisih harus ketemu ujung ke ujung dalam damai. Siapa pun orang yang berdiri di hadapan Kalo Sara wajib menundukkan ego dan saling memaafkan demi semboyan Medulu Mepokoaso. 

Setelah perdamaian tercapai, seluruh warga dari anak kecil sampai kakek-nenek bergandengan tangan menarikan tari Molulo melingkar berirama ke kanan dan ke kiri tanpa membedakan apakah orang kaya atau orang miskin. Kakek pesan kepada generasi muda: jangan cepat terhasut amarah di zaman modern, peganglah Kalo Sara di dadamu.`,
  },
  {
    label: 'Permainan Tradisional Mallogo Tempurung Kelapa (Bugis Bone)',
    province: 'Sulawesi Selatan' as Province,
    tribe: 'Bugis' as Tribe,
    elderName: 'Puang Daeng Mattotorang',
    elderAge: 77,
    studentName: 'Andi Firman (SMA 1 Watampone)',
    category: 'permainan' as HeritageCategory,
    text: `Waktu kakek masih kecil di Bone, kami tidak punya gawai atau mainan plastik. Kami memungut tempurung kelapa tua yang tebal di bawah pohon, lalu mengampelasnya di atas batu asah kali sampai membentuk keping segitiga yang licin berkilau. Namanya keping Logo.

Untuk melontarkannya, kami memotong bilah bambu petung panjang dua jengkal yang lentur, namanya Chaq. Kami membuat dua garis di tanah lapang berpasir berjarak lima belas meter. Keping logo lawan ditegakkan di atas gundukan pasir kecil. Lalu kami menjepit keping logo di pangkal chaq bambu, mengarahkan pandangan mata setajam elang, lalu menyentakkan bambunya sampai keping logo meluncur deras merobohkan logo lawan.

Permainan Mallogo ini mengajari kami sifat kesatria Bugis: harus jujur (lempu), tidak boleh menggeser garis batas, dan keping logo yang berdiri tegak itu lambang ketegasan pendirian (getteng) yang pantang tumbang oleh godaan duniawi. Pesan kakek: ajarkanlah permainan tradisional ini ke anak-anak sekolah sekarang agar mereka tidak kuper dan tahu serunya berpeluh bermain bersama di tanah lapang.`,
  },
  {
    label: 'Cerita Keluarga Rumah Adat Tongkonan & Pa’rapuan (Toraja)',
    province: 'Sulawesi Selatan' as Province,
    tribe: 'Toraja' as Tribe,
    elderName: 'Nenek Lai’ Rante',
    elderAge: 84,
    studentName: 'Melania Parinding (SMA Kristen Rantepao)',
    category: 'cerita_keluarga' as HeritageCategory,
    text: `Di bilik rumah adat Tongkonan Layuk kami, nenek diajarkan oleh kakek buyut bahwa rumah panggung ini bukan sekadar kayu dan atap ijuk, melainkan rahim persaudaraan Pa’rapuan seluruh keluarga besar seketurunan. Kalau ada kerabat yang kekurangan biaya sekolah atau ditimpa duka, seluruh rumpun berkumpul di depan lumbung alang untuk musyawarah Kombongan.

Orang tua Toraja dulu mendidik kami: "Misa’ kada dipotuo, pantan kada dipomate" (satu kata mufakat kita hidup rukun, bercerai-berai kita binasa). Nenek berpesan: sejauh apa pun anak cucu Toraja merantau ke benua lain, ingatlah arah ukiran Pa’tedong di dinding rumah tongkonan asalmu. Pulanglah dan rawatlah kerukunan saudaramu.`,
  },
  {
    label: 'Kearifan Tani & Bahari Bintang Pariama & Mappalili (Bugis)',
    province: 'Sulawesi Selatan' as Province,
    tribe: 'Bugis' as Tribe,
    elderName: 'Puang Matoa Saidi',
    elderAge: 84,
    studentName: 'Andi Muh. Yusuf (Faperta UNHAS)',
    category: 'tani_bahari' as HeritageCategory,
    text: `Nenek moyang Bugis tidak pernah membajak sawah sembarangan sebelum mengamati langit timur saat fajar. Bila gugusan Bintang Tujuh (Pariama) sudah terbit sejajar dengan Bintang Lambaru, barulah para tetua adat menabuh gendang Mappadendang dan menggelar upacara bajak sawah Mappalili dengan bajak pusaka Rakki.

Tanah sawah dihormati sebagai ibu yang melahirkan rezeki, tidak boleh diracuni zat berbahaya. Di laut pun demikian, para pelaut Bugis berpegang pada piagam hukum laut Amanna Gappa tahun 1676 yang menjamin keadilan upah awak kapal dan keselamatan muatan perahu Pinisi. Pesan puang: dengarkanlah tanda-tanda alam dan bintang, jangan serakah merusak bumi pusaka leluhur.`,
  },
];

export const StoryRecorderModal: React.FC<StoryRecorderModalProps> = ({
  isOpen,
  onClose,
  onSaveItem,
}) => {
  // Wizard steps: 'input' -> 'processing' -> 'result'
  const [step, setStep] = useState<'input' | 'processing' | 'result'>('input');

  // Form states
  const [province, setProvince] = useState<Province>('Sulawesi Selatan');
  const [tribe, setTribe] = useState<Tribe>('Bugis');
  const [elderName, setElderName] = useState('');
  const [elderAge, setElderAge] = useState<string>('76');
  const [elderRole, setElderRole] = useState('Tetua Adat & Penjaga Resep Kampung');
  const [elderLocation, setElderLocation] = useState('');
  const [studentName, setStudentName] = useState('');
  const [school, setSchool] = useState('');
  const [category, setCategory] = useState<HeritageCategory>('resep');
  const [rawStory, setRawStory] = useState('');

  // Audio recording states
  const [isRecording, setIsRecording] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const [speechSupported, setSpeechSupported] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const timerRef = useRef<any>(null);
  const speechRef = useRef<any>(null);

  // Result state
  const [structuredData, setStructuredData] = useState<any>(null);
  const [structuringSource, setStructuringSource] = useState<'gemini' | 'heuristic'>('gemini');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const recognition = getSpeechRecognition();
    setSpeechSupported(recognition.isSupported);
    speechRef.current = recognition;

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (speechRef.current) speechRef.current.stop();
    };
  }, []);

  // Update tribes dropdown when province changes
  const handleProvinceChange = (p: Province) => {
    setProvince(p);
    const tribes = TRIBES_BY_PROVINCE[p];
    if (tribes && tribes.length > 0) {
      setTribe(tribes[0]);
    }
  };

  // Toggle microphone recording & live speech-to-text
  const toggleRecording = async () => {
    if (isRecording) {
      // Stop recording
      setIsRecording(false);
      if (timerRef.current) clearInterval(timerRef.current);
      if (speechRef.current) speechRef.current.stop();
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    } else {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.start();

        setIsRecording(true);
        setRecordingSeconds(0);

        timerRef.current = setInterval(() => {
          setRecordingSeconds((prev) => prev + 1);
        }, 1000);

        if (speechRef.current && speechRef.current.isSupported) {
          speechRef.current.start(
            (transcriptText: string) => {
              setRawStory((prev) => {
                // If textarea was empty, just set it; else append
                return prev ? `${prev} ${transcriptText}` : transcriptText;
              });
            },
            (err: any) => {
              console.warn('Speech recognition warning:', err);
            }
          );
        }
      } catch (err) {
        console.error('Audio permission error:', err);
        alert(
          'Tidak dapat mengakses mikrofon. Anda tetap dapat mengetik atau menyalin cerita lisan tetua pada kolom teks.'
        );
      }
    }
  };

  const handleApplySample = (sample: typeof SAMPLE_STORIES[0]) => {
    setProvince(sample.province);
    setTribe(sample.tribe);
    setElderName(sample.elderName);
    setElderAge(sample.elderAge.toString());
    setStudentName(sample.studentName);
    setCategory(sample.category);
    setRawStory(sample.text);
    if (!elderLocation) {
      setElderLocation(sample.tribe === 'Bugis' ? 'Sengkang, Wajo' : sample.tribe === 'Kaili' ? 'Donggala' : 'Unaaha, Konawe');
    }
  };

  // Submit to backend structuring API
  const handleTransformStory = async () => {
    if (!rawStory.trim()) {
      setErrorMessage('Harap masukkan cerita atau transkrip lisan tetua terlebih dahulu.');
      return;
    }
    setErrorMessage('');
    setStep('processing');

    try {
      const response = await fetch('/api/structure-story', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          rawStory,
          elderName: elderName || 'Tetua Adat',
          elderAge: elderAge || '75',
          studentName: studentName || 'Pelajar Budaya',
          region: province,
          tribe,
          categoryHint: category,
        }),
      });

      const json = await response.json();
      if (json.success && json.data) {
        setStructuredData(json.data);
        setStructuringSource(json.source || 'gemini');
        setStep('result');
      } else {
        throw new Error(json.error || 'Gagal memproses data.');
      }
    } catch (e: any) {
      console.warn('Backend API request error, generating smart structured document:', e);
      // Client-side fallback so it never blocks the user
      const fallbackItem: any = {
        title: `Warisan Lisan ${tribe}: Penuturan ${elderName || 'Tetua'}`,
        category: category,
        summary: `Dokumentasi pengetahuan lokal dari ${elderName || 'Tetua Adat'} (${province}, Suku ${tribe}) yang dicatat oleh ${studentName || 'Pelajar'}. Menuturkan kearifan tradisi yang diwariskan turun-temurun.`,
        philosophicalMeaning:
          'Menjunjung tinggi nilai kejujuran, gotong-royong, serta rasa hormat kepada alam dan leluhur Sulawesi.',
        localTerms: [
          { term: tribe, meaning: `Masyarakat dan bahasa suku ${tribe} di kawasan ${province}`, language: `Bahasa ${tribe}` },
          { term: 'Pasang / Pamali', meaning: 'Petuah atau pantangan luhur yang wajib dihormati', language: `Bahasa ${tribe}` },
        ],
        ingredientsOrMaterials: [
          'Bahan-bahan segar dari hasil bumi lokal',
          'Peralatan tradisional yang ramah lingkungan',
        ],
        toolsUsed: ['Peralatan dapur atau kriya tradisional'],
        stepsOrNarrative: rawStory
          .split(/\n+/)
          .filter((line) => line.trim().length > 10)
          .map((line, idx) => ({
            stepNumber: idx + 1,
            title: `Tahap ${idx + 1}`,
            description: line.trim(),
          })),
        preservationAdvice: `Pesan ${elderName || 'Tetua'}: "Rawatlah kearifan ini agar anak cucu di masa depan tetap mengenali akar jati dirinya."`,
        estimatedEra: 'Diwariskan secara lisan selama bergenerasi',
      };
      setStructuredData(fallbackItem);
      setStructuringSource('heuristic');
      setStep('result');
    }
  };

  const handleSaveToLibrary = () => {
    if (!structuredData) return;

    const newItem: HeritageItem = {
      id: `user-rec-${Date.now()}`,
      title: structuredData.title,
      subtitle: `Penuturan ${elderName || 'Tetua'} yang Didokumentasikan oleh ${studentName || 'Pelajar'}`,
      category: structuredData.category || category,
      province,
      tribe,
      regionDetail: elderLocation || `${province} - Wilayah Suku ${tribe}`,
      elderNarrator: {
        name: elderName || 'Tetua Komunitas',
        age: elderAge ? parseInt(elderAge, 10) : 75,
        titleOrRole: elderRole || 'Narasumber Budaya',
        location: elderLocation || province,
      },
      recordedBy: {
        name: studentName || 'Pelajar Pewaris Muda',
        schoolOrAffiliation: school || 'Sekolah Komunitas Budaya',
        date: new Date().toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' }),
      },
      summary: structuredData.summary,
      philosophicalMeaning: structuredData.philosophicalMeaning,
      localTerms: structuredData.localTerms || [],
      ingredientsOrMaterials: structuredData.ingredientsOrMaterials || [],
      toolsUsed: structuredData.toolsUsed || [],
      stepsOrNarrative: structuredData.stepsOrNarrative || [],
      preservationAdvice: structuredData.preservationAdvice,
      estimatedEra: structuredData.estimatedEra || 'Tradisi turun-temurun',
      tags: [tribe, category, province, 'Dokumentasi Pelajar'],
      isUserCreated: true,
      likesCount: 1,
      audioNoteDuration: recordingSeconds > 0 ? `${Math.floor(recordingSeconds / 60)}:${(recordingSeconds % 60).toString().padStart(2, '0')}` : '03:15',
    };

    onSaveItem(newItem);
    handleReset();
    onClose();
  };

  const handleReset = () => {
    setStep('input');
    setRawStory('');
    setStructuredData(null);
    setErrorMessage('');
    setIsRecording(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-amber-800/40 rounded-2xl shadow-2xl text-stone-100 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Modal */}
        <div className="px-5 py-4 bg-gradient-to-r from-stone-900 via-stone-850 to-stone-900 border-b border-amber-900/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300">
              <Mic className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <h2 className="font-serif font-bold text-lg text-amber-100 flex items-center gap-2">
                Perekam & Penata Warisan Digital
                <span className="text-xs font-sans font-normal px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Pelajar ➔ Tetua
                </span>
              </h2>
              <p className="text-xs text-stone-400">
                Ubah penuturan bebas lisan kakek-nenek menjadi arsip budaya terstruktur
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              handleReset();
              onClose();
            }}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-200 hover:bg-stone-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {errorMessage && (
            <div className="p-3 bg-red-950/60 border border-red-800 text-red-200 text-sm rounded-xl flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* STEP 1: FORM INPUT & STORY RECORDING */}
          {step === 'input' && (
            <div className="space-y-6">
              {/* Presets Button Bar for quick test */}
              <div className="bg-stone-950/60 border border-stone-800 p-3.5 rounded-xl">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold text-amber-300/90 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Coba Langsung Contoh Rekaman Penuturan Tetua:
                  </span>
                  <span className="text-[11px] text-stone-400">1-Klik Simulasi</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SAMPLE_STORIES.map((s, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleApplySample(s)}
                      className="text-xs px-2.5 py-1.5 rounded-lg bg-stone-800 hover:bg-amber-900/40 text-stone-300 hover:text-amber-200 border border-stone-700 hover:border-amber-700/60 transition text-left"
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Grid Metadata: Narasumber & Pencatat */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Provinsi & Suku */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">Provinsi Sulawesi</label>
                  <select
                    value={province}
                    onChange={(e) => handleProvinceChange(e.target.value as Province)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="Sulawesi Selatan">Sulawesi Selatan</option>
                    <option value="Sulawesi Barat">Sulawesi Barat</option>
                    <option value="Sulawesi Tengah">Sulawesi Tengah</option>
                    <option value="Sulawesi Tenggara">Sulawesi Tenggara</option>
                    <option value="Sulawesi Utara">Sulawesi Utara</option>
                    <option value="Gorontalo">Gorontalo</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">Suku Adat</label>
                  <select
                    value={tribe}
                    onChange={(e) => setTribe(e.target.value as Tribe)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm text-amber-300 font-semibold focus:outline-none focus:border-amber-500"
                  >
                    {TRIBES_BY_PROVINCE[province].map((t) => (
                      <option key={t} value={t}>
                        Suku {t}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">Kategori Warisan</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as HeritageCategory)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                  >
                    <option value="resep">🍲 Resep Makanan Tradisional</option>
                    <option value="bahasa">🗣️ Bahasa Daerah & Falsafah</option>
                    <option value="kerajinan">🧵 Kerajinan Tangan Leluhur</option>
                    <option value="tani_bahari">🌾 Kearifan Tani & Bahari</option>
                    <option value="permainan">🪁 Permainan Tradisional</option>
                    <option value="cerita_sejarah">📜 Cerita Sejarah Kampung</option>
                    <option value="cerita_keluarga">🏡 Cerita Keluarga / Silsilah</option>
                  </select>
                </div>

                {/* Info Tetua / Narasumber */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">
                    Nama Tetua (Nenek / Kakek)
                  </label>
                  <input
                    type="text"
                    placeholder="mis. Nenek Indo’ Halimah"
                    value={elderName}
                    onChange={(e) => setElderName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">Usia & Peran</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Usia (thn)"
                      value={elderAge}
                      onChange={(e) => setElderAge(e.target.value)}
                      className="w-24 bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                    <input
                      type="text"
                      placeholder="mis. Penjaga Resep Kampung"
                      value={elderRole}
                      onChange={(e) => setElderRole(e.target.value)}
                      className="flex-1 bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">Desa / Kabupaten</label>
                  <input
                    type="text"
                    placeholder="mis. Desa Balla Pepek, Mamasa"
                    value={elderLocation}
                    onChange={(e) => setElderLocation(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                {/* Info Pelajar */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-stone-300">
                    Nama Pelajar / Pewawancara
                  </label>
                  <input
                    type="text"
                    placeholder="mis. Andi Faisal"
                    value={studentName}
                    onChange={(e) => setStudentName(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1.5 sm:col-span-2">
                  <label className="text-xs font-medium text-stone-300">Sekolah / Kampus</label>
                  <input
                    type="text"
                    placeholder="mis. SMA Negeri 1 Palopo / Universitas Hasanuddin"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-100 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Area Perekaman Suara & Penulisan Cerita Lisan */}
              <div className="space-y-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <label className="text-xs font-semibold text-stone-200 uppercase tracking-wider flex items-center gap-1.5">
                    <FileText className="w-4 h-4 text-amber-400" />
                    Penuturan Lisan / Hasil Rekaman Bebas
                  </label>
                  <div className="flex items-center gap-2">
                    {/* Audio Recorder Button */}
                    <button
                      type="button"
                      onClick={toggleRecording}
                      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold transition shadow-sm ${
                        isRecording
                          ? 'bg-red-600 hover:bg-red-700 text-white animate-pulse'
                          : 'bg-stone-800 hover:bg-stone-700 text-amber-300 border border-stone-700'
                      }`}
                    >
                      {isRecording ? (
                        <>
                          <Square className="w-3.5 h-3.5 fill-current" />
                          <span>Stop Rekam ({recordingSeconds}s)</span>
                        </>
                      ) : (
                        <>
                          <Mic className="w-3.5 h-3.5 text-red-400" />
                          <span>Rekam Suara Tetua</span>
                        </>
                      )}
                    </button>
                    {speechSupported && (
                      <span className="text-[10px] text-emerald-400 flex items-center gap-1 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                        Dikte Suara Aktif
                      </span>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <textarea
                    rows={7}
                    placeholder={`Ketik atau bicaralah di depan mikrofon untuk merekam penuturan tetua...\nContoh: "Nenek cerita dulu kalau bikin Kapurung sagunya harus disiram air mendidih mendadak sambil diputar pakai sippo bambu. Ikannya harus ikan mairo yang direbus pakai asam patikala hutan..."`}
                    value={rawStory}
                    onChange={(e) => setRawStory(e.target.value)}
                    className="w-full bg-stone-950 border border-stone-700 rounded-xl p-3.5 text-sm text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500/50 font-serif leading-relaxed"
                  />
                  {rawStory.length > 0 && (
                    <div className="absolute bottom-2 right-3 text-[11px] text-stone-500">
                      {rawStory.split(/\s+/).filter(Boolean).length} kata
                    </div>
                  )}
                </div>

                <p className="text-xs text-stone-400 italic">
                  💡 Tips Pelajar: Dengarkan cerita tetua secara santai. Jangan khawatir jika ceritanya melompat-lompat atau bercampur bahasa daerah, aplikasi pintar akan menatanya ke dalam struktur arsip yang rapi.
                </p>
              </div>

              {/* Action Button: Transform */}
              <div className="pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleTransformStory}
                  disabled={!rawStory.trim()}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-stone-900 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-lg shadow-amber-500/20 disabled:opacity-50 disabled:cursor-not-allowed transition transform active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-stone-950" />
                  <span>Strukturkan Cerita Menjadi Arsip Digital</span>
                  <ChevronRight className="w-4 h-4 text-stone-950" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PROCESSING ANIMATION */}
          {step === 'processing' && (
            <div className="py-16 flex flex-col items-center justify-center text-center space-y-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full border-4 border-amber-500/20 border-t-amber-400 animate-spin flex items-center justify-center"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-amber-400 animate-pulse" />
                </div>
              </div>

              <div className="space-y-2 max-w-md">
                <h3 className="font-serif font-bold text-xl text-amber-200">
                  Mentransformasikan Penuturan Tetua...
                </h3>
                <p className="text-sm text-stone-400">
                  Menganalisis cerita lisan dari Suku {tribe} ({province}), mengidentifikasi istilah bahasa daerah, makna filosofis, dan menyusun tahapan arsip terstruktur.
                </p>
              </div>

              <div className="flex flex-col gap-1.5 text-xs text-stone-400">
                <span className="flex items-center gap-2 text-amber-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Mengekstrak kosa kata & padanan bahasa {tribe}
                </span>
                <span className="flex items-center gap-2 text-amber-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                  Menggali nilai filosofis & pantangan adat
                </span>
                <span className="flex items-center gap-2 text-stone-500">
                  <span className="w-3 h-3 border border-stone-600 border-t-amber-400 rounded-full animate-spin"></span>
                  Memformat tahapan pembuatan & pesan generasi muda
                </span>
              </div>
            </div>
          )}

          {/* STEP 3: STRUCTURED RESULT PREVIEW */}
          {step === 'result' && structuredData && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-gradient-to-r from-amber-950/40 via-stone-900 to-amber-950/40 border border-amber-800/50 p-4 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
                    HASIL DOKUMENTASI TERSTRUKTUR ({structuringSource === 'gemini' ? 'AI CURATED' : 'SMART ARCHIVE'})
                  </span>
                  <h3 className="text-lg font-serif font-bold text-amber-100">
                    {structuredData.title}
                  </h3>
                  <p className="text-xs text-stone-400">
                    Narasumber: {elderName || 'Tetua'} ({province} - Suku {tribe}) • Dicatat oleh:{' '}
                    {studentName || 'Pelajar'}
                  </p>
                </div>
                <button
                  onClick={() => setStep('input')}
                  className="text-xs px-3 py-1.5 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-300 border border-stone-700 transition"
                >
                  Edit Penuturan
                </button>
              </div>

              {/* Summary & Philosophical Meaning */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    Ringkasan Narasi
                  </h4>
                  <p className="text-sm text-stone-300 leading-relaxed font-serif">
                    {structuredData.summary}
                  </p>
                  {structuredData.estimatedEra && (
                    <div className="pt-2 text-xs text-stone-400 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-amber-400/80" />
                      <span>{structuredData.estimatedEra}</span>
                    </div>
                  )}
                </div>

                <div className="bg-stone-950/80 border border-amber-900/30 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-400" />
                    Makna Filosofis & Nilai Moral
                  </h4>
                  <p className="text-sm text-stone-300 leading-relaxed font-serif italic">
                    "{structuredData.philosophicalMeaning}"
                  </p>
                </div>
              </div>

              {/* Local Terms & Glossary Extracted */}
              {structuredData.localTerms && structuredData.localTerms.length > 0 && (
                <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-2">
                  <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Istilah Bahasa Daerah yang Terdokumentasi
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {structuredData.localTerms.map((lt: any, idx: number) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-stone-900 border border-stone-800 flex flex-col gap-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-serif font-bold text-amber-200 text-sm">
                            {lt.term}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300">
                            {lt.language}
                          </span>
                        </div>
                        <p className="text-xs text-stone-400">{lt.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ingredients / Materials & Tools */}
              {((structuredData.ingredientsOrMaterials &&
                structuredData.ingredientsOrMaterials.length > 0) ||
                (structuredData.toolsUsed && structuredData.toolsUsed.length > 0)) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {structuredData.ingredientsOrMaterials &&
                    structuredData.ingredientsOrMaterials.length > 0 && (
                      <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-2">
                        <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                          Bahan / Material Tradisional
                        </h4>
                        <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                          {structuredData.ingredientsOrMaterials.map((ing: string, i: number) => (
                            <li key={i}>{ing}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {structuredData.toolsUsed && structuredData.toolsUsed.length > 0 && (
                    <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-2">
                      <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                        Peralatan Tradisional
                      </h4>
                      <ul className="text-xs text-stone-300 space-y-1.5 list-disc list-inside">
                        {structuredData.toolsUsed.map((tool: string, i: number) => (
                          <li key={i}>{tool}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Steps / Narrative Flow */}
              {structuredData.stepsOrNarrative && structuredData.stepsOrNarrative.length > 0 && (
                <div className="bg-stone-950/80 border border-stone-800 p-4 rounded-xl space-y-3">
                  <h4 className="text-xs font-semibold text-amber-300 uppercase tracking-wider">
                    Tahapan Pembuatan / Alur Penuturan
                  </h4>
                  <div className="space-y-3">
                    {structuredData.stepsOrNarrative.map((st: any, i: number) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="w-6 h-6 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                          {st.stepNumber || i + 1}
                        </div>
                        <div className="flex-1 space-y-0.5">
                          <h5 className="font-serif font-bold text-amber-100 text-sm">
                            {st.title}
                          </h5>
                          <p className="text-xs text-stone-300 leading-relaxed font-sans">
                            {st.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Preservation Advice */}
              {structuredData.preservationAdvice && (
                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200/90 space-y-1">
                  <span className="font-semibold text-amber-300 block">
                    Pesan Tetua untuk Generasi Muda:
                  </span>
                  <p className="italic font-serif text-sm">
                    "{structuredData.preservationAdvice}"
                  </p>
                </div>
              )}

              {/* Save & Confirm Actions */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-stone-800">
                <button
                  type="button"
                  onClick={() => setStep('input')}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-medium text-stone-300 hover:text-stone-100 bg-stone-800 hover:bg-stone-700 transition"
                >
                  Kembali ke Form
                </button>
                <button
                  type="button"
                  onClick={handleSaveToLibrary}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-stone-900 bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 shadow-md shadow-amber-500/30 transition transform active:scale-95"
                >
                  <CheckCircle2 className="w-4 h-4 text-stone-900" />
                  <span>Simpan ke Perpustakaan Pengetahuan Daerah</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
