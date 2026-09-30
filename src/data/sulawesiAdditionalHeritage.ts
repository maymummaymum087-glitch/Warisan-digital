import { HeritageItem } from '../types/heritage';

export const ADDITIONAL_HERITAGE_ITEMS: HeritageItem[] = [
  // ==========================================
  // CERITA KELUARGA & SEJARAH KAMPUNG SULAWESI SELATAN
  // ==========================================
  {
    id: 'bugis-keluarga-saoraja-merantau',
    title: 'Memori Rumah Saoraja & Petuah Kakek Arung Mendidik Tujuh Anak Merantau',
    subtitle: 'Nasihat Menjelang Berlayar: Membawa Siri’ dan Lempu ke Tanah Rantau Nusantara',
    category: 'cerita_keluarga',
    province: 'Sulawesi Selatan',
    tribe: 'Bugis',
    regionDetail: 'Soppeng & Wajo',
    elderNarrator: {
      name: 'Puang Arung Datu Lolo',
      age: 82,
      titleOrRole: 'Kepala Keluarga Pewaris Rumah Panggung Saoraja',
      location: 'Watansoppeng, Soppeng',
    },
    recordedBy: {
      name: 'Andi Muh. Fadil',
      schoolOrAffiliation: 'SMA Negeri 1 Soppeng',
      date: '14 September 2024',
    },
    summary:
      'Catatan memori lisan keluarga bangsawan Bugis saat melepas anak-anak merantau (sompe’). Sang kakek mengumpulkan cucu-cucunya di ruang tengah rumah panggung kayu jati Saoraja, membagikan bekal beras ketan dan keping koin tua sambil membisikkan amanah agar anak cucu tidak membuat malu nama keluarga di rantau orang.',
    philosophicalMeaning:
      'Mewariskan petuah luhur: "Sompe’ki na mupaddecengngi rupamu, aja’ mumapolei siri’ ri kampongna tau" (Merantaulah dengan budi pekerti baik, jangan membawa aib di tanah orang). Merantau adalah sarana pembentukan kedewasaan jiwa ksatria Bugis.',
    localTerms: [
      { term: 'Sompe’', meaning: 'Tradisi merantau melintasi samudra demi menuntut ilmu dan mencari nafkah', language: 'Bugis', pronunciationTip: 'Som-pe\'' },
      { term: 'Saoraja', meaning: 'Rumah besar panggung tempat berhimpun keluarga besar', language: 'Bugis' },
      { term: 'Lempu', meaning: 'Kejujuran batin yang tak ternilai oleh harta benda', language: 'Bugis' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Mappatabe’ di Hadapan Orang Tua',
        description: 'Anak yang hendak merantau mencium tangan ayah dan ibu meminta doa restu di tangga rumah panggung.',
      },
      {
        stepNumber: 2,
        title: 'Pembagian Bekal dan Pesan Amanah',
        description: 'Orang tua menyisipkan segenggam tanah pekarangan rumah dibungkus kain putih agar anak tidak lupa tanah tumpah darah.',
      },
      {
        stepNumber: 3,
        title: 'Sumpah Pulang Membawa Kebanggaan',
        description: 'Sang anak berjanji akan kembali setelah sukses mendirikan usaha atau menamatkan pendidikan.',
      },
    ],
    preservationAdvice:
      'Puang Arung berpesan: "Meskipun engkau sudah fasih bahasa asing di perantauan, bila kembali ke rumah panggung ini, tetaplah santun dan tundukkan badanmu saat lewat di depan orang tua."',
    estimatedEra: 'Diwariskan sejak abad ke-17 di Kedatuan Soppeng',
    tags: ['Cerita Keluarga', 'Bugis', 'Sompe', 'Merantau', 'Sulawesi Selatan'],
    likesCount: 312,
  },
  {
    id: 'bugis-tani-bahari-kutika-pinisi',
    title: 'Kearifan Kalender Bintang Palontara & Tradisi Lunas Perahu Pinisi',
    subtitle: 'Ilmu Astronomi Tradisional Menghitung Hari Baik Menanam Padi dan Menebang Kayu Lopi',
    category: 'tani_bahari',
    province: 'Sulawesi Selatan',
    tribe: 'Bugis',
    regionDetail: 'Bulukumba & Bone',
    elderNarrator: {
      name: 'Panrita Lopi Panette Daeng Sirua',
      age: 78,
      titleOrRole: 'Ahli Falak Palontara & Pande Pembuat Kapal Pinisi',
      location: 'Tanah Beru, Bulukumba',
    },
    recordedBy: {
      name: 'Ilyas Baso & Nur Hikmah',
      schoolOrAffiliation: 'SMK Pelayaran Bulukumba',
      date: '10 Agustus 2024',
    },
    summary:
      'Kearifan maritim dan agraris Bugis-Makassar memadukan ilmu bintang dalam kitab lontara Palontara (Kutika). Sebelum menebang kayu ulin atau besi untuk lunas perahu Pinisi, panrita lopi menghitung peredaran bulan dan bintang Walu-walu agar kayu tidak lapuk dimakan tiram laut.',
    philosophicalMeaning:
      'Harmoni manusia dengan kosmos. Kayu lunas perahu dipotong dengan ritual doa meminta maaf pada penunggu pohon hutan, mengajarkan bahwa kapal yang berlayar membawa berkah karena dibangun dengan rasa hormat pada alam ciptaan Tuhan.',
    localTerms: [
      { term: 'Palontara', meaning: 'Kitab astronomi dan kalender tradisional Bugis-Makassar', language: 'Bugis' },
      { term: 'Panrita Lopi', meaning: 'Maestro ahli rancang bangun kapal layar Pinisi', language: 'Bugis' },
      { term: 'Kalabiseang', meaning: 'Upacara pemotongan lunas pertama perahu layar', language: 'Bugis' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Membaca Rasi Bintang Walu-Walu',
        description: 'Melihat terbitnya rasi bintang luku di ufuk timur sebagai penanda musim barat dan hari baik menebang kayu.',
      },
      {
        stepNumber: 2,
        title: 'Ritual Pemotongan Lunas Utama (Annyorong Lopi)',
        description: 'Ujung lunas kayu yang dipotong diarahkan ke laut sebagai lambang perahu akan selalu mencari jalan pulang ke daratan.',
      },
      {
        stepNumber: 3,
        title: 'Gotong Royong Menarik Kapal ke Laut',
        description: 'Ratusan warga desa bergotong royong menarik lambung Pinisi yang berbobot puluhan ton ke air pasang laut.',
      },
    ],
    preservationAdvice:
      'Daeng Sirua menegaskan: "Pinisi diakui UNESCO bukan hanya karena kayunya yang kokoh, melainkan karena filosofi spiritual Palontara yang menyertainya."',
    estimatedEra: 'Warisan peradaban maritim Nusantara abad ke-14',
    tags: ['Pinisi', 'Palontara', 'Kearifan Bahari', 'Bugis', 'Bulukumba'],
    likesCount: 350,
  },
  {
    id: 'makassar-cerita-sejarah-bontoramba',
    title: 'Sejarah Kampung Somba Opu & Benteng Perdagangan Rempah Gowa',
    subtitle: 'Kisah Bandar Dagang Internasional Abad ke-16 yang Menyatukan Berbagai Bangsa Nusantara',
    category: 'cerita_sejarah',
    province: 'Sulawesi Selatan',
    tribe: 'Makassar',
    regionDetail: 'Somba Opu, Kabupaten Gowa',
    elderNarrator: {
      name: 'Daeng Mangka',
      age: 80,
      titleOrRole: 'Pencatat Sejarah Lisan Kampung Somba Opu',
      location: 'Sungguminasa, Gowa',
    },
    recordedBy: {
      name: 'Rahmatullah & Nurlaila',
      schoolOrAffiliation: 'SMA Negeri 2 Gowa',
      date: '20 Agustus 2024',
    },
    summary:
      'Kampung Somba Opu di muara Sungai Jeneberang dahulu merupakan salah satu pelabuhan kosmopolitan termaju di Asia Tenggara. Dinding benteng bata merah setebal 3 meter melindungi ribuan saudagar Melayu, Arab, Gujarat, Maluku, dan Jawa yang berdagang rempah di bawah perlindungan hukum adil Sultan Hasanuddin.',
    philosophicalMeaning:
      'Falsafah "Manna sita tona, siri’ ri padangngang" (Meskipun berbeda suku dan bangsa, jika bertransaksi di pelabuhan Somba Opu, semua terikat pada martabat kejujuran niaga).',
    localTerms: [
      { term: 'Somba Opu', meaning: 'Pusat pemerintahan dan benteng pertahanan utama Kesultanan Gowa', language: 'Makassar' },
      { term: 'Balla Lompoa', meaning: 'Istana kayu jati megah tempat kediaman raja-raja Gowa', language: 'Makassar' },
      { term: 'Tubarania', meaning: 'Laskar pejuang penjaga batas gerbang benteng', language: 'Makassar' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pembangunan Dinding Benteng Bata Merah',
        description: 'Bata merah direkatkan menggunakan adonan getah pohon, putih telur, dan kapur sirih menghasilkan dinding yang kebal peluru meriam.',
      },
      {
        stepNumber: 2,
        title: 'Pasar Rempah Antarbangsa di Tepi Sungai',
        description: 'Perahu dari Ternate, Malaka, dan Nusa Tenggara bersandar menukar cengkeh dan pala dengan beras Pangkep serta keramik.',
      },
      {
        stepNumber: 3,
        title: 'Pertahanan Abadi Ksatria Makassar',
        description: 'Ketika benteng dikepung armada asing, para prajurit memilih gugur mempertahankan tanah pusaka daripada menandatangani pakta penindasan.',
      },
    ],
    preservationAdvice:
      'Daeng Mangka berpesan: "Anak cucu Makassar jangan melupakan kejayaan benteng ini. Kebanggaan kita bukan untuk bermusuhan, melainkan untuk berani berdiri tegak membela kebenaran."',
    estimatedEra: 'Puncak kejayaan abad ke-16 hingga 1669 Masehi',
    tags: ['Somba Opu', 'Cerita Sejarah Kampung', 'Makassar', 'Gowa', 'Benteng Bersejarah'],
    likesCount: 298,
  },
  {
    id: 'makassar-tani-bahari-patorani',
    title: 'Kearifan Pelaut Patorani: Berburu Telur Ikan Terbang di Laut Flores',
    subtitle: 'Teknologi Perangkap Bubu Daun Kelapa Pakaja Warisan Leluhur Galesong',
    category: 'tani_bahari',
    province: 'Sulawesi Selatan',
    tribe: 'Makassar',
    regionDetail: 'Galesong, Kabupaten Takalar',
    elderNarrator: {
      name: 'Daeng Salle',
      age: 76,
      titleOrRole: 'Punggawa Perahu Patorani Galesong',
      location: 'Galesong Utara, Takalar',
    },
    recordedBy: {
      name: 'Firman Pratama',
      schoolOrAffiliation: 'SMK Kelautan Galesong',
      date: '25 Juli 2024',
    },
    summary:
      'Patorani adalah tradisi bahari unik para nelayan Galesong berlayar ribuan mil ke perairan Laut Flores dan Selat Makassar untuk memanen telur ikan terbang (tuing-tuing). Mereka menggunakan perangkap anyaman bambu dan daun kelapa yang disebut Pakaja, tanpa merusak habitat induk ikan.',
    philosophicalMeaning:
      'Mengajarkan kearifan konservasi alam bahari: para nelayan hanya mengambil sebagian telur yang menempel pada daun kelapa dan membiarkan sebagian lainnya menetas di lautan lepas agar populasi ikan terbang tetap lestari selamanya.',
    localTerms: [
      { term: 'Patorani', meaning: 'Nelayan penangkap telur ikan terbang menggunakan perahu layar tradisional', language: 'Makassar' },
      { term: 'Pakaja', meaning: 'Perangkap apung berbahan daun kelapa dan bambu tempat ikan bertelur', language: 'Makassar' },
      { term: 'Ikan Tuing-tuing', meaning: 'Ikan terbang yang meluncur di atas ombak samudra tropis', language: 'Makassar' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Merangkai Bubu Daun Kelapa Pakaja',
        description: 'Daun kelapa tua diikatkan pada rangka bambu berpelampung kayu ringan yang menyerupai rumpon alami.',
      },
      {
        stepNumber: 2,
        title: 'Menghanyutkan Pakaja di Jalur Arus Laut',
        description: 'Perahu patorani melepas puluhan pakaja di tengah laut tempat kawanan ikan terbang mencari tempat menempelkan telur keemasan.',
      },
      {
        stepNumber: 3,
        title: 'Memanen Telur dengan Teliti',
        description: 'Telur ikan yang berwarna kuning bening diangkat lembut lalu dijemur di atas bilah bambu beralaskan daun pisang.',
      },
    ],
    preservationAdvice:
      'Daeng Salle berpesan: "Patorani jangan memakai jaring pukat harimau. Pakailah pakaja daun kelapa, agar anak cucu kita tetap melihat tuing-tuing terbang melompati ombak."',
    estimatedEra: 'Tradisi maritim Galesong sejak abad ke-16',
    tags: ['Patorani', 'Kearifan Bahari', 'Makassar', 'Takalar', 'Telur Ikan Terbang'],
    likesCount: 285,
  },
  {
    id: 'toraja-keluarga-pesan-tongkonan',
    title: 'Memori Nenek Ne’ Indo’ Kanna: Menghitung Silsilah di Kolong Lumbung Alang',
    subtitle: 'Pelajaran Adab Menghormati Yang Tua dan Menyayangi Yang Muda di Beranda Tongkonan',
    category: 'cerita_keluarga',
    province: 'Sulawesi Selatan',
    tribe: 'Toraja',
    regionDetail: 'Kete Kesu, Toraja Utara',
    elderNarrator: {
      name: 'Ne’ Indo’ Kanna',
      age: 85,
      titleOrRole: 'Nenek Sepuh Pemegang Silsilah Klan Tongkonan',
      location: 'Kete Kesu, Rantepao',
    },
    recordedBy: {
      name: 'Yohanes Rantetoding & Maria Sambo',
      schoolOrAffiliation: 'SMA Katolik Rantepao',
      date: '18 September 2024',
    },
    summary:
      'Kisah mengharukan seorang nenek di Kete Kesu yang setiap sore mengumpulkan para cucu di pelataran kolong lumbung padi (Alang). Nenek menunjuk ukiran-ukiran kayu sambil mengisahkan perjuangan para leluhur yang berjalan kaki menembus rimba pegunungan membuka ladang demi menyekolahkan anak-anaknya.',
    philosophicalMeaning:
      'Nilai kekeluargaan "Misa’ kada dipotuo, pantan kada dipomate" (Satu kata kita hidup rukun, bercerai-berai kita celaka). Di hadapan Tongkonan, semua anggota klan memiliki kewajiban merawat sanak saudara yang berkekurangan.',
    localTerms: [
      { term: 'Kandean Sanglalan', meaning: 'Satu piring dimakan bersama melambangkan ikatan darah tak terpisahkan', language: 'Toraja' },
      { term: 'Alang', meaning: 'Lumbung padi berukir tempat bermusyawarah dan mengajari anak cucu', language: 'Toraja' },
      { term: 'Pa’rapuan', meaning: 'Satu garis keturunan utuh dari nenek moyang pendiri tongkonan', language: 'Toraja' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Duduk Melingkar di Bawah Kolong Alang',
        description: 'Anak cucu duduk di atas tikar anyaman pandan mendengarkan penuturan silsilah keluarga besar.',
      },
      {
        stepNumber: 2,
        title: 'Mengenalkan Nama Buyut Lewat Ukiran Passura’',
        description: 'Nenek menceritakan arti ukiran Pa’tedong dan Pa’barre Allo yang dipahat oleh kakek buyut puluhan tahun silam.',
      },
      {
        stepNumber: 3,
        title: 'Makan Bersama Kandean Sanglalan',
        description: 'Menutup petang dengan menyantap nasi beras merah hangat dan ikan mas bakar sambal katokkon.',
      },
    ],
    preservationAdvice:
      'Ne’ Indo’ Kanna berpesan: "Meskipun kalian menjadi pejabat di Jakarta atau dokter di luar negeri, jangan lupa nama kakek buyutmu di Toraja. Tongkonan ini rumah pulangmu."',
    estimatedEra: 'Diwariskan secara lisan berabad-abad di Tana Toraja',
    tags: ['Cerita Keluarga', 'Toraja', 'Tongkonan', 'Kete Kesu', 'Silsilah'],
    likesCount: 318,
  },
  {
    id: 'toraja-tani-terasering-batutumonga',
    title: 'Kearifan Terasering Batu Batutumonga & Tata Kelola Air Gunung Sesean',
    subtitle: 'Teknologi Sawah Bertingkat Purba yang Membagi Air Dingin Mata Air ke Lembah Toraja',
    category: 'tani_bahari',
    province: 'Sulawesi Selatan',
    tribe: 'Toraja',
    regionDetail: 'Batutumonga, Lereng Gunung Sesean',
    elderNarrator: {
      name: 'Ambe’ Pong Massora',
      age: 79,
      titleOrRole: 'To Parengnge’ Tani Lereng Gunung Sesean',
      location: 'Batutumonga, Toraja Utara',
    },
    recordedBy: {
      name: 'Samuel Tandirau',
      schoolOrAffiliation: 'Institut Pertanian Toraja',
      date: '05 September 2024',
    },
    summary:
      'Di lereng berkabut Batutumonga setinggi 1.300 mdpl, masyarakat Toraja menata sawah berterasering bertingkat dengan dinding batu gunung tanpa semen. Air dialirkan melalui saluran bambu talang (suluk) dari mata air suci hutan lindung Gunung Sesean secara bergiliran tanpa sengketa.',
    philosophicalMeaning:
      'Kearifan ekologis Aluk Todolo "Tallu Lolona": manusia (Lolo Tau), hewan kerbau pembajak sawah (Lolo Patuan), dan tanaman padi wangi (Lolo Tanan) adalah tiga saudara ciptaan Tuhan yang saling menghidupi.',
    localTerms: [
      { term: 'Batutumonga', meaning: 'Dataran tinggi lereng gunung tempat memandang hamparan lembah luas', language: 'Toraja' },
      { term: 'Tallu Lolona', meaning: 'Trilogi keselarasan kosmis manusia, hewan, dan tumbuhan', language: 'Toraja' },
      { term: 'Padi Pare Bau', meaning: 'Varietas padi beras merah lokal pegunungan berbulu dan beraroma harum', language: 'Toraja' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Menata Tanggul Batu Penahan Erosi',
        description: 'Batu kali bulat disusun rapi membentuk dinding terasering penahan tanah longsor di kemiringan curam.',
      },
      {
        stepNumber: 2,
        title: 'Membajak Menggunakan Kerbau Tedong',
        description: 'Kerbau kesayangan membajak lumpur sawah dengan tenang diiringi senandung tembang petani.',
      },
      {
        stepNumber: 3,
        title: 'Menanam Bibit Padi Pare Bau Bersama',
        description: 'Para ibu menanam bibit padi secara gotong royong (ma’combong) sambil melantunkan kidung syukur.',
      },
    ],
    preservationAdvice:
      'Ambe’ Pong Massora berpesan: "Hutan lindung di atas Gunung Sesean adalah kepala air kita. Kalau hutan itu gundul, sawah terasering kita akan kering dan lumbung alang kita akan kosong."',
    estimatedEra: 'Diwariskan sejak peradaban agraris megalitik Toraja Kuno',
    tags: ['Tani Bahari', 'Terasering', 'Batutumonga', 'Toraja', 'Tallu Lolona'],
    likesCount: 294,
  },

  // ==========================================
  // SULAWESI BARAT (MANDAR & MAMASA)
  // ==========================================
  {
    id: 'mandar-sejarah-kampung-pambusuang',
    title: 'Sejarah Kampung Nelayan Pambusuang: Negeri Sejuta Pelaut & Sarung Sa’be',
    subtitle: 'Kisah Dermaga Para Nakhoda Sandeq dan Penenun Sutra Sutra Mandar di Teluk Mandar',
    category: 'cerita_sejarah',
    province: 'Sulawesi Barat',
    tribe: 'Mandar',
    regionDetail: 'Pambusuang, Kabupaten Polewali Mandar',
    elderNarrator: {
      name: 'Kakanna H. Syamsuddin',
      age: 82,
      titleOrRole: 'Tokoh Sejarah Adat Pambusuang',
      location: 'Pambusuang, Polman',
    },
    recordedBy: {
      name: 'Zulfikar & Rahmayanti',
      schoolOrAffiliation: 'SMA Negeri 1 Balanipa',
      date: '12 September 2024',
    },
    summary:
      'Pambusuang adalah desa pesisir legendaris tempat lahirnya para pelaut ulung penunggang perahu Sandeq dan penenun sarung sutra Sa’be Mandar. Sejak abad ke-16, perahu-perahu layar dari kampung ini berlayar menembus Selat Makassar menuju Selat Malaka, Tumasik (Singapura), dan Jawa membawa hasil laut dan kain sutra bermutu tinggi.',
    philosophicalMeaning:
      'Melahirkan falsafah Malaqbi di Pau (anggun berkata), Malaqbi di Gau (luhur berbuat), dan Malaqbi di Kedzo (santun bertingkah laku). Pelaut Pambusuang dikenal tidak pernah berbuat onar di pelabuhan mana pun mereka bersandar.',
    localTerms: [
      { term: 'Pambusuang', meaning: 'Kampung pesisir pusat kebudayaan maritim dan tenun sutra Mandar', language: 'Mandar' },
      { term: 'Sa’be Mandar', meaning: 'Kain sarung sutra bermotif kotak-kotak geometris megah', language: 'Mandar' },
      { term: 'Malaqbi', meaning: 'Karakter kemuliaan akhlak dan harga diri ksatria Mandar', language: 'Mandar' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Suara Pagi Ketukan Alat Tenun Walida',
        description: 'Sejak fajar menyingsing, suara "klek-tak-klek" alat tenun para ibu berpadu dengan hembusan angin laut.',
      },
      {
        stepNumber: 2,
        title: 'Mempersiapkan Layar Putih Perahu Sandeq',
        description: 'Para nakhoda muda memeriksa tali temali cadik dan mendengarkan petuah punggawa tua sebelum bertolak.',
      },
      {
        stepNumber: 3,
        title: 'Kepulangan Membawa Hasil Niaga',
        description: 'Perahu Sandeq disambut riang gembira di bibir pantai dengan dendang rebana Parrawana.',
      },
    ],
    preservationAdvice:
      'Kakanna Syamsuddin berpesan: "Pambusuang ini tanah pusaka keberanian pelaut. Jangan sampai cucu-cucu kami malu menjadi pelaut atau enggan menyentuh alat tenun."',
    estimatedEra: 'Era Kesultanan Balanipa Mandar abad ke-16',
    tags: ['Pambusuang', 'Cerita Sejarah Kampung', 'Mandar', 'Sulawesi Barat', 'Sandeq'],
    likesCount: 289,
  },
  {
    id: 'mandar-keluarga-pelita-istri-nelayan',
    title: 'Memori Istri Pelaut Mandar: Menyalakan Pelita Minyak Menunggu Suami di Laut',
    subtitle: 'Kisah Ketabahan dan Doa Para Ibu di Beranda Rumah Panggung Pesisir Majene',
    category: 'cerita_keluarga',
    province: 'Sulawesi Barat',
    tribe: 'Mandar',
    regionDetail: 'Pamboang, Kabupaten Majene',
    elderNarrator: {
      name: 'Nenek Indo’ Salma',
      age: 79,
      titleOrRole: 'Istri Nakhoda Sandeq Senior',
      location: 'Pamboang, Majene',
    },
    recordedBy: {
      name: 'Hasriani & Muh. Irfan',
      schoolOrAffiliation: 'SMA Negeri 1 Pamboang',
      date: '02 Agustus 2024',
    },
    summary:
      'Catatan memori lisan ketabahan para ibu di pesisir Mandar ketika suami dan anak lelakinya berlayar berbulan-bulan mengarungi samudra. Setiap malam, para ibu menyalakan pelita minyak kelapa (palita) di anjungan rumah panggung sebagai lentera penuntun arah pulang bagi perahu yang terombang-ambing di laut gelap.',
    philosophicalMeaning:
      'Melambangkan kesetiaan, keteguhan doa keluarga, dan keterikatan batin antara mereka yang berjuang di tengah gelombang dan mereka yang menjaga ketahanan rumah tangga di daratan.',
    localTerms: [
      { term: 'Palita Tingko', meaning: 'Lampu pelita minyak kelapa kecil bersumbu kapas penanda rumah', language: 'Mandar' },
      { term: 'Mappalili Lopi', meaning: 'Doa keselamatan menyambut perahu yang pulang dari laut lepas', language: 'Mandar' },
      { term: 'Boyang', meaning: 'Rumah panggung kayu adat Mandar tempat pelita dipasang', language: 'Mandar' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Menyalakan Pelita di Sudut Anjungan Rumah',
        description: 'Menjelang maghrib, minyak kelapa murni dituangkan ke mangkuk tanah liat dan dinyalakan menghadap ke laut.',
      },
      {
        stepNumber: 2,
        title: 'Mengasuh Anak Sambil Membaca Doa Kalindaqdaq',
        description: 'Para ibu menidurkan anak dengan senandung pantun doa agar ayah mereka selamat melintasi badai karang.',
      },
      {
        stepNumber: 3,
        title: 'Sorak Bahagia Saat Layar Putih Tampak di Ufuk',
        description: 'Ketika ujung layar segitiga Sandeq muncul di fajar pagi, seluruh keluarga bergegas ke pantai menyambut kepulangan ayah.',
      },
    ],
    preservationAdvice:
      'Nenek Indo’ Salma berpesan: "Keberanian pelaut Mandar di laut lepas berakar dari doa air mata istri dan ibunya di rumah panggung. Hargailah pengorbanan orang tuamu."',
    estimatedEra: 'Tradisi keluarga maritim Mandar turun-temurun',
    tags: ['Cerita Keluarga', 'Mandar', 'Istri Nelayan', 'Sulawesi Barat', 'Sandeq'],
    likesCount: 304,
  },
  {
    id: 'mamasa-sejarah-kampung-ballapeu',
    title: 'Sejarah Kampung Adat Ballapeu & Persekutuan Pitu Ulunna Salu',
    subtitle: 'Asal Mula Tujuh Negeri Hulu Sungai di Lembah Sejuk Pegunungan Gandangdewata',
    category: 'cerita_sejarah',
    province: 'Sulawesi Barat',
    tribe: 'Mamasa',
    regionDetail: 'Desa Ballapeu, Kabupaten Mamasa',
    elderNarrator: {
      name: 'Ambe’ Malillin',
      age: 78,
      titleOrRole: 'Pemangku Adat Utama Kampung Ballapeu',
      location: 'Ballapeu, Mamasa',
    },
    recordedBy: {
      name: 'Grace Natalia & Samuel Banne',
      schoolOrAffiliation: 'SMA Negeri 1 Mamasa',
      date: '08 September 2024',
    },
    summary:
      'Kampung Ballapeu adalah salah satu pemukiman tertua suku Mamasa yang berdiri di lembah berhawa sejuk diapit puncak-puncak Gunung Gandangdewata. Di kampung inilah dirumuskan ikatan persekutuan Pitu Ulunna Salu (Tujuh Hulu Sungai) yang menyatukan wilayah pedalaman pegunungan dalam perjanjian damai abadi tanpa peperangan saudara.',
    philosophicalMeaning:
      'Semboyan "Mesa kada dipotuo, pantan kada dipomate" (Satu kata mufakat kita hidup rukun, bercerai-berai kita binasa). Negeri-negeri hulu sungai bersumpah saling menjaga kejernihan air sungai yang mengalir ke hilir pantai.',
    localTerms: [
      { term: 'Pitu Ulunna Salu', meaning: 'Persekutuan tujuh kerajaan adat hulu sungai di Mamasa', language: 'Mamasa' },
      { term: 'Banua Sura’', meaning: 'Rumah adat panggung berukir khas Mamasa tempat tetua bermusyawarah', language: 'Mamasa' },
      { term: 'Gandangdewata', meaning: 'Gunung tertinggi pembawa berkat air dan benih kehidupan Mamasa', language: 'Mamasa' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Pertemuan Tetua Adat di Bawah Pohon Rindang',
        description: 'Tujuh kepala adat hulu sungai menancapkan sumpah tombak perdamaian agar tidak saling menyerang.',
      },
      {
        stepNumber: 2,
        title: 'Mendirikan Rumah Panggung Banua Sura’',
        description: 'Rumah adat dibangun bergotong royong dengan tiang kayu ulin tanpa paku besi menghadap ke arah hulu mata air.',
      },
      {
        stepNumber: 3,
        title: 'Menjaga Kejernihan Aliran Sungai Gandangdewata',
        description: 'Dilarang keras meracuni atau membuang bangkai di hulu sungai karena air itu diminum oleh saudara di hilir.',
      },
    ],
    preservationAdvice:
      'Ambe’ Malillin berpesan: "Jangan biarkan hutan Gandangdewata dirusak. Sungai-sungai di Mamasa adalah darah kehidupan nenek moyang kita."',
    estimatedEra: 'Awal abad ke-16 era deklarasi Pitu Ulunna Salu',
    tags: ['Ballapeu', 'Cerita Sejarah Kampung', 'Mamasa', 'Pitu Ulunna Salu', 'Sulawesi Barat'],
    likesCount: 267,
  },
  {
    id: 'mamasa-tani-kopi-gandangdewata',
    title: 'Kearifan Tani Kopi Arabika Organik & Pola Tanam Teras Gunung Mamasa',
    subtitle: 'Teknik Tumpangsari Alami di Bawah Naungan Pohon Hutan Lindung Pegunungan',
    category: 'tani_bahari',
    province: 'Sulawesi Barat',
    tribe: 'Mamasa',
    regionDetail: 'Balla & Messawa, Kabupaten Mamasa',
    elderNarrator: {
      name: 'Ambe’ Yosias Buntulangi’',
      age: 76,
      titleOrRole: 'Petani Kopi Sepuh Lereng Gandangdewata',
      location: 'Messawa, Mamasa',
    },
    recordedBy: {
      name: 'Yustus Tandi',
      schoolOrAffiliation: 'SMK Pertanian Mamasa',
      date: '14 Agustus 2024',
    },
    summary:
      'Masyarakat adat Mamasa membudidayakan kopi arabika di ketinggian 1.200-1.700 mdpl tanpa pupuk kimia. Pohon kopi ditanam di bawah naungan rindang pohon dadap dan kayu hutan asli, dipetik hanya saat buah berwarna merah ranum sempurna (petik merah), lalu diproses dengan air mata air pegunungan yang jernih dingin.',
    philosophicalMeaning:
      'Mengajarkan kearifan bertani selaras dengan hutan: manusia tidak membakar rimba untuk menanam kopi, melainkan menyisipkan bibit kopi ke dalam ekosistem hutan alami agar tanah tidak longsor.',
    localTerms: [
      { term: 'Kopi Mamasa', meaning: 'Kopi arabika khas pegunungan beraroma rempah dan buah hutan alami', language: 'Mamasa' },
      { term: 'Petik Merah', meaning: 'Adat hanya memanen buah kopi yang sudah matang sempurna', language: 'Mamasa' },
      { term: 'Gandangdewata', meaning: 'Gugusan gunung penyedia tanah vulkanis subur kaya mineral', language: 'Mamasa' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Menanam Bibit di Bawah Naungan Rimba',
        description: 'Bibit kopi disemai di bawah kanopi pohon hutan tanpa menebang pohon pelindung utama.',
      },
      {
        stepNumber: 2,
        title: 'Memetik Buah Kopi Merah Satu per Satu',
        description: 'Petani memetik dengan jari penuh kasih sayang tanpa mematahkan tangkai dahan produktif.',
      },
      {
        stepNumber: 3,
        title: 'Mencuci dengan Air Mengalir dan Menjemur di Atas Para-Para',
        description: 'Biji kopi dicuci di air mata air sungai lalu dijemur di atas panggung bambu berventilasi udara sejuk.',
      },
    ],
    preservationAdvice:
      'Ambe’ Yosias berpesan: "Kopi Mamasa ini wangi karena ditanam di tanah suci para leluhur. Jangan diracun dengan pestisida pabrik."',
    estimatedEra: 'Diwariskan sejak masuknya varietas kopi pegunungan abad ke-18',
    tags: ['Kearifan Tani', 'Kopi Mamasa', 'Gandangdewata', 'Mamasa', 'Sulawesi Barat'],
    likesCount: 275,
  },
  {
    id: 'mamasa-bahasa-falsafah-pitu-ulunna',
    title: 'Sastra Lisan Kada Dipotuo & Kosa Kata Bahasa Mamasa Pitu Ulunna Salu',
    subtitle: 'Untaian Tutur Adab Penuh Kebijaksanaan Orang Tua di Pelataran Rumah Adat Banua Olang',
    category: 'bahasa',
    province: 'Sulawesi Barat',
    tribe: 'Mamasa',
    regionDetail: 'Balla & Sumarorong, Mamasa',
    elderNarrator: {
      name: 'Nenek Indo’ Banne',
      age: 75,
      titleOrRole: 'Pencerita Sastra Lisan Bahasa Mamasa',
      location: 'Balla, Mamasa',
    },
    recordedBy: {
      name: 'Lydia Pongtiku',
      schoolOrAffiliation: 'SMA Negeri 1 Mamasa',
      date: '22 September 2024',
    },
    summary:
      'Bahasa Mamasa kaya akan ungkapan sastra tutur (Kada Dipotuo) yang sarat nasihat budi pekerti. Bahasa ini dituturkan dengan nada lembut bergelombang mencerminkan keteduhan lembah pegunungan Gandangdewata.',
    philosophicalMeaning:
      'Falsafah "Mesa kada dipotuo, pantan kada dipomate" mengajarkan bahwa perselisihan hanya akan mendatangkan kemiskinan dan malapetaka. Kesepakatan bersama yang dicapai lewat musyawarah adalah sumber kehidupan sejati.',
    localTerms: [
      { term: 'Kada Dipotuo', meaning: 'Tutur kata kearifan lisan yang memberi kehidupan dan kerukunan', language: 'Mamasa', pronunciationTip: 'Ka-da Di-po-tu-o' },
      { term: 'Banua Olang', meaning: 'Rumah panggung bertanduk kemuliaan keluarga besar Mamasa', language: 'Mamasa' },
      { term: 'Sambu’', meaning: 'Selendang tenun penghormatan tamu dan pengikat persaudaraan', language: 'Mamasa' },
      { term: 'Ambe’ & Indo’', meaning: 'Panggilan penuh takzim kepada ayah dan ibu tercinta', language: 'Mamasa' },
    ],
    stepsOrNarrative: [
      {
        stepNumber: 1,
        title: 'Mendengar Nasihat Kada Dipotuo di Malam Hari',
        description: 'Orang tua melantunkan petuah di dekat perapian dapur rumah panggung saat hawa dingin menusuk tulang.',
      },
      {
        stepNumber: 2,
        title: 'Mempraktikkan Sapaan Sopan Santun',
        description: 'Anak-anak diajarkan selalu menyapa orang yang lebih tua dengan menundukkan kepala dan menggunakan sapaan Ambe’ atau Indo’.',
      },
    ],
    preservationAdvice:
      'Nenek Indo’ Banne berpesan: "Gunakanlah bahasa Mamasa di rumahmu. Kalau anak-anak lupa bahasa ibunya, mereka akan asing di tanah kelahirannya sendiri."',
    estimatedEra: 'Warisan lisan leluhur Mamasa turun-temurun',
    tags: ['Bahasa Mamasa', 'Falsafah', 'Kada Dipotuo', 'Mamasa', 'Sulawesi Barat'],
    likesCount: 242,
  },
];
