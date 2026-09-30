import { HeritageItem, QuizQuestion } from '../types/heritage';

export const INITIAL_HERITAGE_ITEMS: HeritageItem[] = [
  {
    "id": "bugis-kapurung-01",
    "title": "Kapurung Ikan Mairo & Daun Patikala",
    "subtitle": "Olahan Sagu Kenyal Leluhur Luwu & Wajo dengan Kuah Rempah Asam Segar",
    "category": "resep",
    "province": "Sulawesi Selatan",
    "tribe": "Bugis",
    "regionDetail": "Kabupaten Luwu & Bone",
    "elderNarrator": {
      "name": "Nenek Indo’ Halimah",
      "age": 78,
      "titleOrRole": "Tetua Dapur Adat Saoraja",
      "location": "Palopo, Luwu"
    },
    "recordedBy": {
      "name": "Faisal & Nurul Hidayah",
      "schoolOrAffiliation": "SMA Negeri 1 Palopo",
      "date": "14 Agustus 2024"
    },
    "summary": "Kapurung adalah hidangan pokok berbasis pati sagu (tabaro) yang disiram air mendidih lalu digulung bulat dengan sumpit bambu (sippo). Disajikan bersama kuah ikan mairo rebus bercampur asam patikala (kecombrang hutan) dan sayur jantung pisang serta bayam liar.",
    "philosophicalMeaning": "Makna \"Mabbule-bule\" (makan bersama melingkar satu mangkuk besar) melambangkan persaudaraan Bugis tanpa kasta. Bulatan sagu yang kenyal melambangkan ikatan silaturahmi yang liat dan tidak mudah dipatahkan.",
    "localTerms": [
      {
        "term": "Tabaro",
        "meaning": "Pati tepung sagu basah murni dari pohon rumbia",
        "language": "Bugis"
      },
      {
        "term": "Sippo",
        "meaning": "Sepasang sumpit bambu kecil untuk membulatkan adonan sagu",
        "language": "Bugis"
      },
      {
        "term": "Patikala",
        "meaning": "Buah kecombrang asam hutan pemberi aroma khas kuah",
        "language": "Bugis"
      },
      {
        "term": "Mappalili Tabaro",
        "meaning": "Adat merawat dan memanen pohon sagu tua",
        "language": "Bugis"
      }
    ],
    "ingredientsOrMaterials": [
      "Pati sagu basah murni (tabaro) 300 gram",
      "Ikan Mairo / Cakalang segar 500 gram",
      "Buah patikala (kecombrang) geprek 4 buah",
      "Jantung pisang muda iris halus rebus",
      "Daun bayam liar & kacang panjang",
      "Cabai rawit ulek, garam gunung, jeruk nipis"
    ],
    "toolsUsed": [
      "Sippo bambu",
      "Cobek batu (Gandria)",
      "Wajan tanah liat"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mencairkan dan Menyiram Sagu Panas",
        "description": "Larutkan pati sagu dengan sedikit air dingin di baskom. Siram seketika dengan air mendidih bergolak sambil diaduk cepat satu arah hingga berubah bening kenyal berkilau."
      },
      {
        "stepNumber": 2,
        "title": "Membulatkan Bola Sagu (Mappasippo)",
        "description": "Gunakan dua bilah sippo bambu basah, putar adonan sagu panas membentuk bulatan sebesar kelereng atau bakso, lalu cemplungkan langsung ke dalam mangkuk air dingin agar tidak saling menempel."
      },
      {
        "stepNumber": 3,
        "title": "Membuat Kuah Kaldu Ikan Patikala",
        "description": "Rebus ikan mairo bersama geprekan buah patikala hingga kaldunya harum dan gurih alami tanpa penyedap kimiawi. Tumbuk sebagian daging ikan bersama cabai dan garam."
      },
      {
        "stepNumber": 4,
        "title": "Menyatukan Sayur dan Penyajian",
        "description": "Masukkan rebusan sayur jantung pisang dan bayam ke kuah ikan, campurkan bola-bola sagu, lalu santap selagi hangat bersama keluarga di beranda rumah panggung."
      }
    ],
    "preservationAdvice": "Nenek Halimah berpesan: \"Pohon sagu di bantaran sungai Luwu jangan ditebang diganti beton. Kalau sagu punah, hilanglah napas kuliner leluhur Bugis Luwu.\"",
    "estimatedEra": "Turun-temurun sejak era Kedatuan Luwu Kuno (abad ke-14)",
    "tags": [
      "Kuliner Leluhur",
      "Sagu Rumbia",
      "Luwu",
      "Bugis"
    ],
    "likesCount": 142,
    "audioNoteDuration": "04:12"
  },
  {
    "id": "bugis-pappaseng-falsafah-02",
    "title": "Pappaseng Bugis: Sipakatau, Sipakalebbi, Sipakainge",
    "subtitle": "Trilogi Adab Etika dan Kearifan Hidup Lisan Manusia Bugis",
    "category": "bahasa",
    "province": "Sulawesi Selatan",
    "tribe": "Bugis",
    "regionDetail": "Kabupaten Bone, Soppeng, & Wajo",
    "elderNarrator": {
      "name": "Puang Matoa Arung Baso",
      "age": 82,
      "titleOrRole": "Pemerhati Lontara & Tetua Adat",
      "location": "Watampone, Bone"
    },
    "recordedBy": {
      "name": "Andi Tenri Bau",
      "schoolOrAffiliation": "Mahasiswa Arkeologi & Budaya Unhas",
      "date": "20 September 2024"
    },
    "summary": "Pappaseng adalah amanah lisan bertutur para cerdik pandai (To Acca) Bugis tempo dulu seperti Kajao Laliddong. Prinsip utamanya adalah menjaga harkat manusia sesama makhluk hidup melalui tiga pilar moral sosial.",
    "philosophicalMeaning": "Sipakatau (memanusiakan manusia), Sipakalebbi (saling memuliakan martabat), dan Sipakainge (saling mengingatkan jika berbuat keliru). Ketiganya menolak kesombongan feodal dan menumbuhkan demokrasi mufakat (tudang sipulung).",
    "localTerms": [
      {
        "term": "Sipakatau",
        "meaning": "Saling memanusiakan dan tidak merendahkan sesama",
        "language": "Bugis",
        "pronunciationTip": "Si-pa-ka-tau"
      },
      {
        "term": "Sipakalebbi",
        "meaning": "Saling menghargai martabat dan kelebihan orang lain",
        "language": "Bugis",
        "pronunciationTip": "Si-pa-ka-leb-bi"
      },
      {
        "term": "Sipakainge",
        "meaning": "Saling mengingatkan bila ada sahabat yang khilaf",
        "language": "Bugis",
        "pronunciationTip": "Si-pa-ka-i-nge"
      },
      {
        "term": "Tudang Sipulung",
        "meaning": "Musyawarah duduk bersama mencari mufakat",
        "language": "Bugis"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Penuturan Lisan di Balla / Saoraja",
        "description": "Dahulu, pappaseng diajarkan kakek kepada cucu menjelang maghrib saat menyalakan pelita minyak kelapa, sambil menghafal ungkapan sastra Lontara."
      },
      {
        "stepNumber": 2,
        "title": "Penerapan dalam Pergaulan Pasar & Pelayaran",
        "description": "Pelaut dan saudagar Bugis yang merantau ke Malaka hingga Madagaskar wajib memegang trilogi ini agar diterima damai oleh bangsa asing."
      },
      {
        "stepNumber": 3,
        "title": "Pesan Menghindari Sifat Tapa-Tapa (Sombong)",
        "description": "\"Aja’ mupadduppa tekka’mu, apaq iya tekka’e ripangngajari\" (Jangan tonjolkan egomu, karena ego itulah yang harus diajar)."
      }
    ],
    "preservationAdvice": "Puang Arung Baso mengingatkan anak muda: \"Peganglah pappaseng ini di media sosial. Jangan membully sesama anak bangsa, gunakanlah adab Sipakalebbi.\"",
    "estimatedEra": "Diikrarkan sejak masa Kajao Laliddong (abad ke-16)",
    "tags": [
      "Falsafah",
      "Adab Bugis",
      "Pappaseng",
      "Lontara"
    ],
    "likesCount": 219,
    "audioNoteDuration": "06:45"
  },
  {
    "id": "bugis-tenun-sutra-sengkang-03",
    "title": "Kain Tenun Sutra Sengkang (Corak Balo Tettong & Lagosi)",
    "subtitle": "Kearifan Pemintalan Ulat Murbei dan Alat Tenun Bukan Mesin Walida",
    "category": "kerajinan",
    "province": "Sulawesi Selatan",
    "tribe": "Bugis",
    "regionDetail": "Sengkang, Kabupaten Wajo",
    "elderNarrator": {
      "name": "Nenek Indo’ Sengngeng",
      "age": 71,
      "titleOrRole": "Maestro Penenun Sutra Danau Tempe",
      "location": "Desa Pakanna, Wajo"
    },
    "recordedBy": {
      "name": "Muhammad Ilham & Sitti Aminah",
      "schoolOrAffiliation": "SMK 1 Sengkang",
      "date": "10 Juli 2024"
    },
    "summary": "Kerajinan tenun sutra alami yang berasal dari budidaya ulat sutra (Bombyx mori) di pohon murbei sekitar Danau Tempe. Ditenun helai demi helai menggunakan alat gedogan kayu kuno (walida) dengan motif garis vertikal dan bunga lagosi.",
    "philosophicalMeaning": "Garis tegak (Balo Tettong) melambangkan ketegasan moral dan kejujuran (Lempu), sedangkan benang emas berkilau melambangkan kemuliaan budi pekerti wanita penenun.",
    "localTerms": [
      {
        "term": "Walida",
        "meaning": "Bilah kayu pipih keras untuk memadatkan benang tenun",
        "language": "Bugis"
      },
      {
        "term": "Balo Tettong",
        "meaning": "Motif garis lurus vertikal penanda ketegasan sikap",
        "language": "Bugis"
      },
      {
        "term": "Lagosi",
        "meaning": "Motif kuncup bunga liar penuh keanggunan",
        "language": "Bugis"
      },
      {
        "term": "Sabbangparu",
        "meaning": "Sutra bermotif halus serbaguna pakaian pesta",
        "language": "Bugis"
      }
    ],
    "ingredientsOrMaterials": [
      "Benang sutra murni hasil kokon ulat murbei",
      "Pewarna alami dari kunyit, daun mangga, dan serbuk secang",
      "Pati tajin beras untuk menguatkan benang"
    ],
    "toolsUsed": [
      "Walida (kayu ulin/bitti)",
      "Sorong bambu",
      "Pemutar kincir benang (Ani)"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membudidayakan Murbei dan Merebus Kokon",
        "description": "Memetik daun murbei segar setiap fajar untuk ulat sutra, merebus kokon dalam air panas lalu menarik serat sutra halus."
      },
      {
        "stepNumber": 2,
        "title": "Mewarnai Benang Secara Alami (Maccallu)",
        "description": "Merendam benang sutra dalam rebusan daun dan rempah hutan untuk menghasilkan warna kuning emas, hijau pupus, dan merah marun."
      },
      {
        "stepNumber": 3,
        "title": "Menata Benang pada Kisi Ani (Mappanyi)",
        "description": "Mengukur panjang lusi kain dengan kesabaran luar biasa agar tensi kain tidak bergelombang."
      },
      {
        "stepNumber": 4,
        "title": "Menenun dengan Walida",
        "description": "Duduk beralaskan tikar, menyelipkan pakan dan menghentakkan walida menghasilkan suara \"klek-tak-klek\" yang menenangkan."
      }
    ],
    "preservationAdvice": "Pesan Nenek Sengngeng: \"Anak muda jangan hanya bangga baju impor. Belajarlah menginjak pedal walida, agar sutra Sengkang tak tinggal kenangan di museum.\"",
    "estimatedEra": "Terdokumentasi sejak abad ke-17 di Kerajaan Wajo",
    "tags": [
      "Tenun Sutra",
      "Sengkang",
      "Kriya Leluhur",
      "Wajo"
    ],
    "likesCount": 184
  },
  {
    "id": "makassar-coto-rempah-04",
    "title": "Coto Makassar & Ketupat Daun Kelapa Beras Pangkep",
    "subtitle": "Kuah Rempah 40 Jenis (Rampa-Rampa) Warisan Dapur Kerajaan Gowa",
    "category": "resep",
    "province": "Sulawesi Selatan",
    "tribe": "Makassar",
    "regionDetail": "Gowa & Kota Makassar",
    "elderNarrator": {
      "name": "Daeng Rewa",
      "age": 75,
      "titleOrRole": "Juru Masak Turunan Balla Lompoa",
      "location": "Sungguminasa, Gowa"
    },
    "recordedBy": {
      "name": "Rahmat Saputra",
      "schoolOrAffiliation": "SMA Negeri 2 Gowa",
      "date": "02 Mei 2024"
    },
    "summary": "Coto Makassar bukan sekadar soto daging biasa. Kuahnya yang gurih pekat tercipta dari rebusan jeroan sapi pilihan, kacang tanah sangrai giling halus, air cucian beras (baje), dan paduan rempah rampa-rampa khas Gowa.",
    "philosophicalMeaning": "Penggunaan air tajin cucian beras melambangkan kearifan tidak membuang karunia padi leluhur, serta sambal taoco yang mengajari keseimbangan rasa manis, pedas, dan asin kehidupan.",
    "localTerms": [
      {
        "term": "Rampa-rampa",
        "meaning": "Komposisi puluhan rempah dapur rempah aromatik khas Makassar",
        "language": "Makassar"
      },
      {
        "term": "Kaluku Sanggar",
        "meaning": "Kelapa parut sangrai tumbuk halus berminyak",
        "language": "Makassar"
      },
      {
        "term": "Ketupa Bura’",
        "meaning": "Ketupat mini anyaman janur kelapa pengiring coto",
        "language": "Makassar"
      }
    ],
    "ingredientsOrMaterials": [
      "Daging sapi sandung lamur & jeroan (babat, paru, hati) 1 kg",
      "Kacang tanah kupas sangrai dan giling halus 250 gram",
      "Air tajin cucian beras putih kedua 2 liter",
      "Ketumbar, jinten sangrai, serai, lengkuas, cengkeh, kayu manis",
      "Sambal taoco cabai rawit pedas"
    ],
    "toolsUsed": [
      "Kuali tanah liat besar (Kuaneng)",
      "Centong batok kelapa"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Merebus Daging dengan Air Tajin",
        "description": "Rebus daging dan jeroan terpisah menggunakan air tajin beras bersama serai dan daun salam hingga empuk lembut."
      },
      {
        "stepNumber": 2,
        "title": "Menyangrai dan Menghaluskan Rempah",
        "description": "Giling halus ketumbar, jinten, bawang, pala, cengkeh bersama kacang tanah sangrai."
      },
      {
        "stepNumber": 3,
        "title": "Mendidihkan Kuah Kacang Pekat",
        "description": "Masukkan bumbu halus ke kaldu mendidih di kuali tanah liat. Aduk perlahan hingga aroma rempah merebak ke seluruh ruangan."
      },
      {
        "stepNumber": 4,
        "title": "Penyajian Bersama Ketupat",
        "description": "Iris dadu daging ke mangkuk porselen, siram kuah mendidih, beri perasan jeruk nipis, seledri, daun bawang, dan bawang goreng."
      }
    ],
    "preservationAdvice": "Daeng Rewa berpesan: \"Jangan gunakan kaldu instan saset. Keaslian rasa coto terletak pada kesabaran menyangrai kacang dan rempah kuali tanah.\"",
    "estimatedEra": "Zaman Kesultanan Gowa-Tallo abad ke-16",
    "tags": [
      "Coto Makassar",
      "Rampa Rampa",
      "Gowa",
      "Kuliner Sejarah"
    ],
    "likesCount": 310
  },
  {
    "id": "makassar-siri-na-pacce-05",
    "title": "Falsafah Siri’ na Pacce & Pappasang Ri Kajang",
    "subtitle": "Penjaga Kehormatan Diri dan Solidaritas Duka Kemanusiaan",
    "category": "bahasa",
    "province": "Sulawesi Selatan",
    "tribe": "Makassar",
    "regionDetail": "Makassar, Gowa, & Bulukumba (Kajang)",
    "elderNarrator": {
      "name": "Daeng Mangka",
      "age": 79,
      "titleOrRole": "Tetua Adat Somba Opu",
      "location": "Makassar"
    },
    "recordedBy": {
      "name": "Tari Anugerah",
      "schoolOrAffiliation": "SMA Katolik Rajawali Makassar",
      "date": "18 Juni 2024"
    },
    "summary": "Siri’ adalah rasa malu moral dan kehormatan martabat. Sedangkan Pacce (atau Pesse dalam Bugis) adalah rasa sakit dan empati mendalam ketika melihat penderitaan orang lain. Keduanya merupakan inti jiwa orang Makassar.",
    "philosophicalMeaning": "\"Punna teai siri’, tania tau\" (Bila seseorang hilang rasa malunya, maka ia bukan lagi manusia seutuhnya). Pacce mencegah sikap egois dan melahirkan jiwa kepahlawanan untuk membela kaum yang lemah.",
    "localTerms": [
      {
        "term": "Siri’",
        "meaning": "Rasa malu moral, harga diri, dan integritas",
        "language": "Makassar"
      },
      {
        "term": "Pacce",
        "meaning": "Rasa pedih dan empati mendalam terhadap kesusahan saudara",
        "language": "Makassar"
      },
      {
        "term": "Kasipalli",
        "meaning": "Pantangan adat yang pamali dilanggar demi kesucian",
        "language": "Makassar"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menanamkan Nilai Kejujuran Sejak Dini",
        "description": "Tetua mendidik anak agar pantang mengambil milik orang lain sekecil apapun demi menjaga siri’ keluarga."
      },
      {
        "stepNumber": 2,
        "title": "Mempraktikkan Pacce dalam Duka Warga",
        "description": "Bila ada tetangga tertimpa musibah atau gagal panen, seluruh warga bergotong royong membagi makanan dan papan."
      }
    ],
    "preservationAdvice": "Daeng Mangka berpesan: \"Siri’ bukan untuk berkelahi membabi buta, melainkan untuk malu bila berlaku curang, korupsi, atau berbohong.\"",
    "estimatedEra": "Pondasi adat Makassar pra-Islam hingga sekarang",
    "tags": [
      "Siri na Pacce",
      "Falsafah",
      "Makassar",
      "Etika Luhur"
    ],
    "likesCount": 265
  },
  {
    "id": "toraja-papiong-bambu-06",
    "title": "Pa’piong Daging Mayana dalam Buluh Bambu Talang",
    "subtitle": "Seni Memasak Lambat di Atas Bara Api Upacara Rambu Solo’ & Rambu Tuka’",
    "category": "resep",
    "province": "Sulawesi Selatan",
    "tribe": "Toraja",
    "regionDetail": "Kete Kesu, Tana Toraja & Toraja Utara",
    "elderNarrator": {
      "name": "Ambe’ Pong Massangka",
      "age": 76,
      "titleOrRole": "Tetua Tongkonan Kete Kesu",
      "location": "Rantepao, Toraja Utara"
    },
    "recordedBy": {
      "name": "Yuliana Tandilino",
      "schoolOrAffiliation": "SMA Kristen Rantepao",
      "date": "05 September 2024"
    },
    "summary": "Pa’piong adalah cara memasak purba Toraja menggunakan potongan bambu talang muda yang diisi daging (ayam kampung, ikan mas, atau daging pesta), dicampur daun mayana (miana) ungu, parutan kelapa, serai, dan cabai katokkon super pedas.",
    "philosophicalMeaning": "Memasak dengan bambu di atas bara menyatukan empat elemen alam semesta: tanah (tempat bambu tumbuh), air (embun batang), udara (aroma uap daun), dan api (penyucian bara). Bambu melambangkan kesederhanaan hidup masyarakat adat.",
    "localTerms": [
      {
        "term": "Pa’piong",
        "meaning": "Masakan yang dipanggang dalam buluh bambu di atas bara api",
        "language": "Toraja"
      },
      {
        "term": "Katokkon",
        "meaning": "Cabai gendut khas Toraja dengan kepedasan tajam dan aroma fruity",
        "language": "Toraja"
      },
      {
        "term": "Bulo Talang",
        "meaning": "Jenis bambu khusus berdinding tebal dan berair untuk memasak",
        "language": "Toraja"
      },
      {
        "term": "Daun Mayana",
        "meaning": "Daun miana herbal yang menyerap lemak dan memberi rasa gurih herbal",
        "language": "Toraja"
      }
    ],
    "ingredientsOrMaterials": [
      "Bambu talang muda panjang 60-70 cm 2 ruas",
      "Daging ayam kampung / ikan mas cincang 1 kg",
      "Daun mayana (miana) segar remas air garam",
      "Kelapa parut setengah tua disangrai sebentar",
      "Cabai katokkon ulek kasar, serai, daun bawang",
      "Daun pisang hutan untuk penutup mulut bambu"
    ],
    "toolsUsed": [
      "Parang Toraja (La’bo’)",
      "Bara kayu kopi",
      "Ganjalan batu sungai"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mempersiapkan Buluh Bambu Talang",
        "description": "Pilih bambu yang masih hijau dan segar. Cuci bagian dalamnya dengan air mata air jernih."
      },
      {
        "stepNumber": 2,
        "title": "Meremas Bumbu dan Daun Mayana",
        "description": "Campurkan daging cincang, remasan daun mayana, kelapa parut, serai, dan ulekan cabai katokkon hingga merata."
      },
      {
        "stepNumber": 3,
        "title": "Memasukkan ke Dalam Bambu (Ma’piong)",
        "description": "Padatkan adonan ke dalam rongga bambu, tutup rapat mulut bambu dengan gulungan daun pisang segar agar uap tidak bocor."
      },
      {
        "stepNumber": 4,
        "title": "Memanggang Perlahan di Atas Bara",
        "description": "Tegakkan bambu dengan sudut 60 derajat di sekitar bara api kayu kopi. Putar bambu setiap 15 menit selama 2 jam sampai kulit bambu kecokelatan merata."
      }
    ],
    "preservationAdvice": "Ambe’ Pong Massangka berkata: \"Jangan ganti bambu talang dengan panci aluminium modern, karena bau gosong manisnya bambu hutan tak bisa dibeli di toko.\"",
    "estimatedEra": "Tradisi Aluk Todolo berumur ribuan tahun",
    "tags": [
      "Pa’piong",
      "Katokkon",
      "Toraja",
      "Bambu Kuliner"
    ],
    "likesCount": 198
  },
  {
    "id": "toraja-ukiran-passura-07",
    "title": "Ukiran Passura’ Tongkonan & Filosofi Pa’tedong",
    "subtitle": "Seni Pahat Kayu Ulin Menggunakan Empat Warna Kosmologi Tanah Toraja",
    "category": "kerajinan",
    "province": "Sulawesi Selatan",
    "tribe": "Toraja",
    "regionDetail": "Sangalla’ & Kete Kesu, Tana Toraja",
    "elderNarrator": {
      "name": "Ne’ Tangkeallo",
      "age": 84,
      "titleOrRole": "Pande Passura’ (Pematung Adat Senior)",
      "location": "Sangalla’, Tana Toraja"
    },
    "recordedBy": {
      "name": "Markus Sampe",
      "schoolOrAffiliation": "SMA Negeri 1 Makale",
      "date": "12 Oktober 2024"
    },
    "summary": "Passura’ adalah seni ukir geometris khas rumah adat Tongkonan dan lumbung alang. Menggunakan pahat baja manual pada kayu ulin (uru) dengan empat warna alami ritual: hitam (arang), merah (tanah liat merah), kuning (tanah liat kuning), dan putih (kapur sirih).",
    "philosophicalMeaning": "Motif Pa’tedong (kepala kerbau) melambangkan kemakmuran, kerja keras, dan kepemimpinan berwibawa. Warna hitam melambangkan alam kematian/leluhur, merah melambangkan darah kehidupan manusia, putih melambangkan kesucian tulang, dan kuning anugerah Yang Mahakuasa.",
    "localTerms": [
      {
        "term": "Passura’",
        "meaning": "Seni tulisan ukir filosofis dinding Tongkonan",
        "language": "Toraja"
      },
      {
        "term": "Pa’tedong",
        "meaning": "Motif ukir kepala kerbau lambang kemakmuran",
        "language": "Toraja"
      },
      {
        "term": "Pa’barre Allo",
        "meaning": "Motif ukir lingkaran matahari sumber energi hidup",
        "language": "Toraja"
      },
      {
        "term": "Pande",
        "meaning": "Tukang ahli atau maestro pembuat karya seni adat",
        "language": "Toraja"
      }
    ],
    "ingredientsOrMaterials": [
      "Papan kayu uru tua tahan rayap",
      "Batu kapur sirih tumbuk (warna putih)",
      "Tanah lempung merah bukit (warna merah)",
      "Tanah lempung kuning sungai (warna kuning)",
      "Jelaga arang tempurung kelapa (warna hitam)"
    ],
    "toolsUsed": [
      "Pahat ukir lengkung (Tatah)",
      "Palu kayu pohon bitti",
      "Jangka bambu penanda lingkaran"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menggambar Garis Sketsa Tradisional",
        "description": "Pande menggores pola geometri dengan pisau ukir tanpa bantuan penggaris modern, mengandalkan ingatan doa adat."
      },
      {
        "stepNumber": 2,
        "title": "Memahat Relief Garis (Ma’sura’)",
        "description": "Memahat lekukan pola kepala kerbau dan sulur pakis setinggi 1 cm dengan ketelitian milimeter."
      },
      {
        "stepNumber": 3,
        "title": "Melabur Empat Warna Kosmologi",
        "description": "Mengoleskan pigmen tanah dan arang alami dengan kuas sabut kelapa yang tahan puluhan tahun terhadap panas hujan tropis."
      }
    ],
    "preservationAdvice": "Ne’ Tangkeallo berpesan: \"Sekarang banyak orang mengecat Tongkonan pakai cat tembok sintesis pabrik. Itu melunturkan wibawa sakral passura’.\"",
    "estimatedEra": "Dimulai sejak abad ke-11 era peradaban Tongkonan awal",
    "tags": [
      "Ukiran Passura",
      "Pa’tedong",
      "Tongkonan",
      "Toraja"
    ],
    "likesCount": 247
  },
  {
    "id": "mandar-jepa-bau-peapi-08",
    "title": "Jepa Singkong Bakar & Ikan Masak Bau Peapi",
    "subtitle": "Makanan Ketahanan Pangan Pelaut Sandeq Menantang Badai Selat Makassar",
    "category": "resep",
    "province": "Sulawesi Barat",
    "tribe": "Mandar",
    "regionDetail": "Pamboang & Balanipa, Kabupaten Majene",
    "elderNarrator": {
      "name": "Nenek Indo’ Rannu",
      "age": 73,
      "titleOrRole": "Ibu Nelayan Adat Balanipa",
      "location": "Pamboang, Majene"
    },
    "recordedBy": {
      "name": "Muhammad Fadli & Rismawati",
      "schoolOrAffiliation": "SMA Negeri 1 Majene",
      "date": "17 Juli 2024"
    },
    "summary": "Jepa adalah lempeng roti pipih berbahan parutan singkong (ubi kayu) diperas airnya lalu dicampur parutan kelapa muda dan dipanggang di atas piringan tanah liat bakar (panbel). Dinikmati bersama Bau Peapi (ikan cakalang berkuah kuning asam mangga khas Mandar).",
    "philosophicalMeaning": "Jepa adalah bukti kejeniusan pangan maritim leluhur Mandar. Jepa tahan disimpan berhari-hari di atas perahu layar Sandeq tanpa membusuk, menjadi simbol ketangguhan dan kemandirian pangan bahari.",
    "localTerms": [
      {
        "term": "Jepa",
        "meaning": "Lempeng singkong parut panggang pengganti nasi",
        "language": "Mandar"
      },
      {
        "term": "Panbel",
        "meaning": "Piringan tembikar tanah liat untuk memanggang jepa",
        "language": "Mandar"
      },
      {
        "term": "Bau Peapi",
        "meaning": "Olahan ikan cakalang/tuna kuah asam mangga pedas",
        "language": "Mandar"
      },
      {
        "term": "Paccellang",
        "meaning": "Alat peras bambu untuk membuang getah singkong",
        "language": "Mandar"
      }
    ],
    "ingredientsOrMaterials": [
      "Singkong parut segar yang sudah diperas getahnya 1 kg",
      "Kelapa setengah tua parut memanjang 1 butir",
      "Ikan cakalang segar potong tebal 800 gram",
      "Minyak kelapa Mandar asli (Minyak Mandar)",
      "Asam mangga kering (Pangi / Kaliki)",
      "Cabai rawit, kunyit bakar, bawang merah lokal"
    ],
    "toolsUsed": [
      "Panbel kembar tanah liat",
      "Tungku kayu bakar daun kelapa kering"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Memeras Pati Singkong (Mappeppeq)",
        "description": "Parutan ubi kayu diperas dengan kain putih hingga ampasnya kering remah bebas air."
      },
      {
        "stepNumber": 2,
        "title": "Memanggang Jepa pada Panbel",
        "description": "Taburkan adonan singkong dan kelapa tipis-tipis melingkar di atas panbel panas, lalu tangkupkan panbel kedua di atasnya selama 3 menit hingga matang renyah."
      },
      {
        "stepNumber": 3,
        "title": "Memasak Kuah Bau Peapi",
        "description": "Tumis kunyit ulek dan bawang dengan minyak Mandar asli, masukkan potongan ikan cakalang, air secukupnya, dan asam mangga kering hingga kuahnya mengental berminyak harum."
      }
    ],
    "preservationAdvice": "Nenek Indo’ Rannu berkata: \"Jepa ini yang membesarkan para nakhoda Sandeq. Jangan malu makan ubi kayu, ini warisan pahlawan laut kita.\"",
    "estimatedEra": "Diwariskan sejak kejayaan Kemaharajaan Pitu Baqbana Binanga (abad ke-15)",
    "tags": [
      "Jepa",
      "Bau Peapi",
      "Mandar",
      "Maritim Mandar"
    ],
    "likesCount": 173
  },
  {
    "id": "mandar-perahu-sandeq-09",
    "title": "Teknologi Perahu Cadik Sandeq & Nilai Malaqbi",
    "subtitle": "Mahakarya Perahu Layar Tercepat Dunia Karya Suku Bahari Mandar",
    "category": "tani_bahari",
    "province": "Sulawesi Barat",
    "tribe": "Mandar",
    "regionDetail": "Polewali Mandar & Majene",
    "elderNarrator": {
      "name": "Punggawa Baharuddin",
      "age": 70,
      "titleOrRole": "Punggawa Lopi (Nakhoda Sandeq Kawakan)",
      "location": "Tinambung, Polewali Mandar"
    },
    "recordedBy": {
      "name": "Ahmad Alwi",
      "schoolOrAffiliation": "SMK Pelayaran Majene",
      "date": "25 Agustus 2024"
    },
    "summary": "Sandeq adalah perahu layar bercadik ganda khas Mandar yang dinobatkan sebagai perahu layar tradisional tercepat di dunia (mencapai 20-30 knot) hanya dengan dorongan angin pada layar segitiga sombaq.",
    "philosophicalMeaning": "Falsafah Malaqbi (anggun, berani, berakhlak mulia) tercermin pada ketajaman haluan perahu yang membelah ombak tanpa menimbulkan suara gaduh, mencerminkan kerendahan hati pelaut Mandar di hadapan samudra luas.",
    "localTerms": [
      {
        "term": "Sandeq",
        "meaning": "Perahu cadik runcing ramping lambang kecepatan dan nyali Mandar",
        "language": "Mandar"
      },
      {
        "term": "Sombaq",
        "meaning": "Layar segitiga tinggi yang menangkap tiupan angin laut",
        "language": "Mandar"
      },
      {
        "term": "Barateng",
        "meaning": "Kayu cadik bambu penyeimbang di sisi kiri dan kanan",
        "language": "Mandar"
      },
      {
        "term": "Punggawa",
        "meaning": "Nakhoda tertinggi pembaca bintang dan arus laut",
        "language": "Mandar"
      }
    ],
    "toolsUsed": [
      "Pahat cekung kayu bitti",
      "Tali ijuk aren hitam",
      "Kayu jati putih"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Memilih Pohon Kayu Utuh di Hutan",
        "description": "Punggawa berdoa meminta izin kepada alam sebelum menebang sebatang pohon bitti besar untuk dijadikan lambung utuh (kole-kole)."
      },
      {
        "stepNumber": 2,
        "title": "Merakit Cadik Bambu Lentur",
        "description": "Mengikat bambu petung pilihan menggunakan lilitan rotan dan tali ijuk tahan garam."
      },
      {
        "stepNumber": 3,
        "title": "Membaca Arah Bintang dan Angin Muson",
        "description": "Pelaut Sandeq membaca rasi bintang Bintang Pari dan arah angin tanpa GPS saat berlayar menyeberangi Selat Makassar ke Kalimantan dan Jawa."
      }
    ],
    "preservationAdvice": "Punggawa Baharuddin: \"Kalau generasi muda hanya kenal perahu bermesin tempel, mereka akan kehilangan kepekaan membaca bahasa angin dan ombak.\"",
    "estimatedEra": "Dikenal sejak abad ke-16 di pesisir Mandar",
    "tags": [
      "Sandeq",
      "Mandar",
      "Perahu Layar",
      "Kearifan Bahari"
    ],
    "likesCount": 289
  },
  {
    "id": "mamasa-tenun-sambu-10",
    "title": "Kain Tenun Sambu’ Mamasa & Rumah Adat Banua Olang",
    "subtitle": "Untaian Benang Alam Pegunungan Gandangdewata Pembungkus Jiwa Damai",
    "category": "kerajinan",
    "province": "Sulawesi Barat",
    "tribe": "Mamasa",
    "regionDetail": "Balla & Sumarorong, Kabupaten Mamasa",
    "elderNarrator": {
      "name": "Nenek Indo’ Banne",
      "age": 74,
      "titleOrRole": "Penenun Sepuh Banua Olang",
      "location": "Desa Balla Pepek, Mamasa"
    },
    "recordedBy": {
      "name": "Grace Natalia",
      "schoolOrAffiliation": "SMA Negeri 1 Mamasa",
      "date": "28 Agustus 2024"
    },
    "summary": "Sambu’ Mamasa adalah selendang tenun tebal dengan corak geometris warna merah, hitam, dan putih yang ditenun para ibu di kolong rumah panggung Banua Olang beratap ijuk di lembah sejuk Gunung Gandangdewata.",
    "philosophicalMeaning": "Falsafah \"Mesa Kada Dipotuo, Pantan Kada Dipomate\" (Satu kata kita hidup rukun, berselisih kita binasa). Kain Sambu’ diberikan kepada tamu agung sebagai ikatan perjanjian damai abadi.",
    "localTerms": [
      {
        "term": "Sambu’",
        "meaning": "Kain selendang adat pelindung dingin dan penghormatan tamu",
        "language": "Mamasa"
      },
      {
        "term": "Banua Olang",
        "meaning": "Rumah adat panggung kayu bertanduk khas Mamasa",
        "language": "Mamasa"
      },
      {
        "term": "Mesa Kada Dipotuo",
        "meaning": "Falsafah musyawarah kerukunan suku Mamasa",
        "language": "Mamasa"
      }
    ],
    "ingredientsOrMaterials": [
      "Kapas gunung dipintal manual (Kape’)",
      "Getah kulit kayu hutan untuk pewarna hitam legam",
      "Akar pohon mengkudu hutan untuk warna merah jingga"
    ],
    "toolsUsed": [
      "Alat tenun berontang kayu",
      "Kincir pintal kapas"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Memintal Kapas Gunung",
        "description": "Memisahkan biji kapas dengan jemari, memintalnya menjadi benang benang kokoh yang tahan cuaca dingin pegunungan."
      },
      {
        "stepNumber": 2,
        "title": "Mewarnai dengan Akar Mengkudu",
        "description": "Rebusan akar mengkudu menghasilkan warna merah bata alami yang tidak luntur meski dicuci di sungai gunung berarus deras."
      },
      {
        "stepNumber": 3,
        "title": "Menenun Sambil Bersenandung Lagu Rakyat",
        "description": "Penenun menyanyikan bait-bait lagu doa agar pemakai Sambu’ senantiasa dikaruniai umur panjang dan kehangatan hati."
      }
    ],
    "preservationAdvice": "Nenek Indo’ Banne: \"Setiap helai benang Sambu’ adalah doa ibu untuk anaknya. Jangan biarkan anak Mamasa lupa cara memintal kapas leluhur.\"",
    "estimatedEra": "Diwariskan secara lisan sejak abad ke-15 di lembah Mamasa",
    "tags": [
      "Mamasa",
      "Sambu’",
      "Banua Olang",
      "Tenun Pegunungan"
    ],
    "likesCount": 156
  },
  {
    "id": "kaili-kaledo-palu-11",
    "title": "Kaledo Kaki Sapi Donggala & Uta Kelo Daun Kelor",
    "subtitle": "Sup Tulang Sumsum Asam Jawa Lembah Palu Penggugah Selera Turun Temurun",
    "category": "resep",
    "province": "Sulawesi Tengah",
    "tribe": "Kaili",
    "regionDetail": "Palu & Kabupaten Donggala",
    "elderNarrator": {
      "name": "Papanya Ical (Pak Rusli)",
      "age": 72,
      "titleOrRole": "Pewaris Resep Kaledo Lembah Palu",
      "location": "Donggala Kodi, Kota Palu"
    },
    "recordedBy": {
      "name": "Mohammad Farhan",
      "schoolOrAffiliation": "SMA Negeri 1 Palu",
      "date": "19 September 2024"
    },
    "summary": "Kaledo (singkatan dari Kaki Lembu Donggala) adalah sup tulang kaki sapi dengan sumsum melimpah, dimasak sederhana hanya dengan cabai rawit hijau, garam kasar, dan asam jawa mentah segar tanpa kunyit atau santan. Disantap dengan sedotan bambu dan singkong rebus.",
    "philosophicalMeaning": "Kesederhanaan bumbu Kaledo mencerminkan kejujuran karakter suku Kaili yang lugas: tidak berbelit-belit, memanfaatkan kesegaran bahan apa adanya dari alam bumi Tadulako.",
    "localTerms": [
      {
        "term": "Kaledo",
        "meaning": "Sup kaki sapi bertulang sumsum khas Donggala/Palu",
        "language": "Kaili"
      },
      {
        "term": "Uta Kelo",
        "meaning": "Sayur daun kelor santan kelapa muda khas Kaili",
        "language": "Kaili"
      },
      {
        "term": "Nosarara Nosabatutu",
        "meaning": "Falsafah suku Kaili: Bersaudara dan Bersatu",
        "language": "Kaili"
      },
      {
        "term": "Kasiwa",
        "meaning": "Singkong empuk rebus pendamping kaledo pengganti nasi",
        "language": "Kaili"
      }
    ],
    "ingredientsOrMaterials": [
      "Tulang kaki sapi potongan besar dengan sumsum padat 1.5 kg",
      "Buah asam jawa mentah segar yang masih hijau 15 buah",
      "Cabai rawit hijau ulek kasar 30 biji",
      "Garam laut Talise murni",
      "Singkong rebus pulen",
      "Jeruk nipis pemeras"
    ],
    "toolsUsed": [
      "Kuali kancah besi tebal",
      "Sedotan bambu kecil pengisap sumsum"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Merebus Tulang Kaki Sapi Lama",
        "description": "Rebus potongan kaki sapi selama 4-5 jam dengan api stabil hingga urat melunak dan kaldu sumsum keluar bening gurih."
      },
      {
        "stepNumber": 2,
        "title": "Merebus Asam Jawa Terpisah",
        "description": "Rebus buah asam muda hijau hingga cangkangnya pecah, saring sarinya lalu tuangkan ke dalam kuah kaki sapi."
      },
      {
        "stepNumber": 3,
        "title": "Menyajikan dengan Cabai Rawit Hijau",
        "description": "Bumbui kuah dengan garam laut dan cabai rawit hijau. Sajikan mengepul panas bersama singkong rebus."
      }
    ],
    "preservationAdvice": "Pak Rusli berpesan: \"Kaledo asli pantang pakai rempah berlebihan atau kecap. Kuahnya harus bening pedas asam murni.\"",
    "estimatedEra": "Populer sejak masa Pelabuhan Donggala abad ke-18",
    "tags": [
      "Kaledo",
      "Kaili",
      "Donggala",
      "Kuliner Palu"
    ],
    "likesCount": 228
  },
  {
    "id": "kaili-nosarara-souraja-12",
    "title": "Falsafah Nosarara Nosabatutu & Arsitektur Rumah Adat Souraja",
    "subtitle": "Arsitektur Kayu Pasak Tahan Gempa dan Toleransi Persaudaraan Lembah Palu",
    "category": "cerita_sejarah",
    "province": "Sulawesi Tengah",
    "tribe": "Kaili",
    "regionDetail": "Kelurahan Lere, Kota Palu",
    "elderNarrator": {
      "name": "Tetua Daeng Malewa",
      "age": 81,
      "titleOrRole": "Penjaga Cagar Budaya Banua Oge (Souraja)",
      "location": "Kampung Lere, Palu"
    },
    "recordedBy": {
      "name": "Siti Rahmawati",
      "schoolOrAffiliation": "Universitas Tadulako",
      "date": "08 Juni 2024"
    },
    "summary": "Souraja (Banua Oge) adalah rumah istana panggung suku Kaili yang dibangun dari kayu ulin dan bayam tanpa satu pun paku besi. Bangunan ini terbukti tahan guncangan gempa bumi dahsyat ratusan tahun berkat kearifan sambungan pasak kayu fleksibel.",
    "philosophicalMeaning": "Prinsip \"Nosarara Nosabatutu\" (Kita bersaudara, kita bersatu) terpatri pada tangga masuk yang terbuka lebar bagi siapa saja tanpa membedakan suku pendatang ataupun warga asli.",
    "localTerms": [
      {
        "term": "Nosarara Nosabatutu",
        "meaning": "Bersaudara dan bersatu rukun dalam keragaman",
        "language": "Kaili"
      },
      {
        "term": "Souraja",
        "meaning": "Rumah besar kediaman raja dan tetua Kaili",
        "language": "Kaili"
      },
      {
        "term": "Ledo / Tara",
        "meaning": "Dialek rumpun bahasa Kaili di lembah Palu",
        "language": "Kaili"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Konstruksi Pasak Kayu Tahan Goyang",
        "description": "Tiang-tiang kayu besar berdiri di atas umpak batu sungai bundar tanpa ditanam, sehingga saat tanah bergetar rumah bergoyang elastis mengikuti gelombang gempa."
      },
      {
        "stepNumber": 2,
        "title": "Ventilasi Silang Mengusir Udara Panas",
        "description": "Dinding ukiran terawang memungkinkan semilir angin Teluk Palu mengalir sejuk ke dalam rumah panggung."
      }
    ],
    "preservationAdvice": "Tetua Daeng Malewa berpesan: \"Gempa Palu mengajarkan kita bahwa nenek moyang Kaili sudah punya ilmu mitigasi lewat Souraja. Hormatilah kearifan mereka.\"",
    "estimatedEra": "Abad ke-19 era Kerajaan Palu",
    "tags": [
      "Souraja",
      "Kaili",
      "Tahan Gempa",
      "Nosarara"
    ],
    "likesCount": 195
  },
  {
    "id": "pamona-kain-fuya-kulit-kayu-13",
    "title": "Kain Fuya Kulit Kayu Nunu & Pesta Panen Padungku",
    "subtitle": "Kain Prasejarah Tertua Nusantara dari Serat Pohon Hutan Danau Poso",
    "category": "kerajinan",
    "province": "Sulawesi Tengah",
    "tribe": "Pamona",
    "regionDetail": "Tentena, Danau Poso & Lembah Bada",
    "elderNarrator": {
      "name": "Nenek Wuri Kandori",
      "age": 80,
      "titleOrRole": "Pembuat Kain Fuya Tradisional",
      "location": "Tentena, Kabupaten Poso"
    },
    "recordedBy": {
      "name": "Daniel Montolalu",
      "schoolOrAffiliation": "SMA Negeri 1 Tentena",
      "date": "11 September 2024"
    },
    "summary": "Kain Fuya adalah busana kuno dari serat bagian dalam kulit pohon nunu (beringin) atau pohon ivo. Kulit kayu direbus lalu ditumbuk berulang kali menggunakan batu pemukul bergaris (ike) hingga melebar menjadi sehelai kain lembut bertekstur suede alami.",
    "philosophicalMeaning": "Falsafah \"Sintuwu Maroso\" (Bersatu kita kuat teguh). Menumbuk kulit kayu memerlukan kebersamaan kaum wanita desa secara bergantian seraya menyanyikan kidung syukur panen raya Danau Poso.",
    "localTerms": [
      {
        "term": "Fuya",
        "meaning": "Kain alami yang terbuat dari ketukan serat kulit kayu hutan",
        "language": "Pamona"
      },
      {
        "term": "Ike",
        "meaning": "Batu pemukul berpahat garis-garis pembuat tekstur kain",
        "language": "Pamona"
      },
      {
        "term": "Sintuwu Maroso",
        "meaning": "Gotong royong kuat bersatu suku Pamona",
        "language": "Pamona"
      },
      {
        "term": "Padungku",
        "meaning": "Pesta adat syukuran panen padi sawah dan danau",
        "language": "Pamona"
      }
    ],
    "ingredientsOrMaterials": [
      "Kulit kayu bagian dalam pohon Nunu atau Pohon Ivo",
      "Air rebusan abu daun pisang",
      "Pewarna alami dari lumpur dan getah daun kesumba"
    ],
    "toolsUsed": [
      "Batu pemukul ike (batu andesit sungai)",
      "Balok bantalan kayu ulin"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengupas Kulit Pohon Pilihan",
        "description": "Memotong batang cabang pohon nunu secukupnya tanpa mematikan pohon induknya, lalu menguliti lapisan serat putih dalamnya."
      },
      {
        "stepNumber": 2,
        "title": "Memukul Serat dengan Batu Ike (Mombatu)",
        "description": "Meletakkan serat di atas kayu panjang, lalu memukulnya berirama dengan batu ike bergaris hingga serat melebar 4 kali lipat dari ukuran semula."
      },
      {
        "stepNumber": 3,
        "title": "Merendam dan Menjemur di Bawah Matahari",
        "description": "Menyambung lembaran kain dengan getah alami, menjemurnya di pinggir Danau Poso hingga menjadi kain pakaian upacara adat yang harum alami."
      }
    ],
    "preservationAdvice": "Nenek Wuri berpesan: \"Di dunia modern pakaian terbuat dari plastik polyester. Kain Fuya mengingatkan bahwa hutan memberikan sandang yang ramah pada bumi.\"",
    "estimatedEra": "Tradisi Zaman Megalitikum Lembah Bada & Poso (berusia ribuan tahun)",
    "tags": [
      "Fuya",
      "Kulit Kayu",
      "Pamona",
      "Danau Poso",
      "Sintuwu Maroso"
    ],
    "likesCount": 231
  },
  {
    "id": "pamona-inuyu-nasi-bambu-14",
    "title": "Inuyu: Nasi Pulut Bakar Santan dalam Bambu Harum",
    "subtitle": "Sajian Sakral Rasa Syukur Pesta Panen Padungku Masyarakat Danau Poso",
    "category": "resep",
    "province": "Sulawesi Tengah",
    "tribe": "Pamona",
    "regionDetail": "Kecamatan Pamona Utara, Poso",
    "elderNarrator": {
      "name": "Papa Maria (Pak Yanis)",
      "age": 69,
      "titleOrRole": "Tetua Kampung Padungku",
      "location": "Tentena, Poso"
    },
    "recordedBy": {
      "name": "Maria Magdalena",
      "schoolOrAffiliation": "SMA Kristen GKST Tentena",
      "date": "15 Juli 2024"
    },
    "summary": "Inuyu adalah beras ketan (pulut) yang dimasak bersama santan kelapa kental, jahe, dan daun pandan hutan di dalam buluh bambu yang dilapisi daun pisang muda, lalu dipanggang di atas jajaran perapian kayu api.",
    "philosophicalMeaning": "Inuyu wajib dibagikan kepada tetangga dan musafir yang lewat saat pesta Padungku tanpa memandang agama atau asal suku, sebagai wujud syukur atas berkah tanah Poso.",
    "localTerms": [
      {
        "term": "Inuyu",
        "meaning": "Nasi pulut santan bakar dalam buluh bambu khas Pamona",
        "language": "Pamona"
      },
      {
        "term": "Dero",
        "meaning": "Tarian persahabatan melingkar bergandengan tangan",
        "language": "Pamona"
      }
    ],
    "ingredientsOrMaterials": [
      "Beras ketan putih lokal Poso 1 liter",
      "Santan kelapa tua kental 800 ml",
      "Daun pandan wangi hutan 5 lembar",
      "Garam dan jahe geprek sedikit",
      "Bambu muda diameter 5 cm dilapisi daun pisang muda"
    ],
    "toolsUsed": [
      "Tungku bara kayu bakar terbuka"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Melapisi Bambu dengan Daun Pisang",
        "description": "Gulung daun pisang muda secara rapi lalu selipkan ke dalam lubang bambu agar beras ketan tidak menempel pada dinding bambu."
      },
      {
        "stepNumber": 2,
        "title": "Memasukkan Beras dan Santan Gurih",
        "description": "Masukkan beras ketan yang sudah dicuci hingga 3/4 tinggi bambu, tuangkan santan berbumbu jahe dan pandan."
      },
      {
        "stepNumber": 3,
        "title": "Membakar di Deretan Api Padungku",
        "description": "Panggang deretan bambu di atas perapian panjang, dibolak-balik sampai santan meresap dan aroma wangi pulut semerbak."
      }
    ],
    "preservationAdvice": "Pak Yanis berpesan: \"Pesta Padungku dan Inuyu adalah simbol perdamaian abadi warga Poso. Selama Inuyu masih dipanggang bersama, kita akan selalu bersaudara.\"",
    "estimatedEra": "Turun-temurun sejak era leluhur Danau Poso",
    "tags": [
      "Inuyu",
      "Pamona",
      "Padungku",
      "Nasi Bambu"
    ],
    "likesCount": 167
  },
  {
    "id": "tolaki-sinonggi-ikan-meohai-15",
    "title": "Sinonggi Sagu Kenyal & Kuah Ikan Tawaloho",
    "subtitle": "Simbol Pemersatu Kekerabatan Suku Tolaki di Dataran Konawe & Kendari",
    "category": "resep",
    "province": "Sulawesi Tenggara",
    "tribe": "Tolaki",
    "regionDetail": "Kabupaten Konawe & Kota Kendari",
    "elderNarrator": {
      "name": "Nenek Bua Kasmawati",
      "age": 77,
      "titleOrRole": "Tetua Adat Perempuan Lembaga Adat Tolaki",
      "location": "Unaaha, Konawe"
    },
    "recordedBy": {
      "name": "Dimas Anugrah & Fitriani",
      "schoolOrAffiliation": "SMA Negeri 1 Unaaha",
      "date": "21 Agustus 2024"
    },
    "summary": "Sinonggi adalah hidangan khas suku Tolaki berbahan pati sagu murni (karandapu) yang dimasak air mendidih lalu digulung menggunakan sumpit bambu khusus (posonggi). Disantap dengan hu’a (kuah) ikan gabus atau ikan laut berdaun tawaloho (daun kedondong hutan pembuat kuah segar).",
    "philosophicalMeaning": "Tradisi \"Mosonggi\" (makan sinonggi bersama-sama satu meja) melambangkan persatuan \"Medulu Mepokoaso\" (Bersatu dan saling menyayangi). Cara makan yang tidak boleh dipotong kasar mencerminkan kesabaran dan kelemahlembutan sikap hidup.",
    "localTerms": [
      {
        "term": "Sinonggi",
        "meaning": "Olahan sagu kenyal makanan pokok leluhur suku Tolaki",
        "language": "Tolaki"
      },
      {
        "term": "Posonggi",
        "meaning": "Sepasang sumpit bambu pemintal gulungan sinonggi",
        "language": "Tolaki"
      },
      {
        "term": "Tawaloho",
        "meaning": "Daun asam kedondong hutan pemberi rasa segar alami",
        "language": "Tolaki"
      },
      {
        "term": "Medulu Mepokoaso",
        "meaning": "Falsafah persaudaraan dan kebersamaan Tolaki",
        "language": "Tolaki"
      }
    ],
    "ingredientsOrMaterials": [
      "Pati sagu basah segar (karandapu) 400 gram",
      "Ikan segar (gabus/kakap/bandeng) 600 gram",
      "Pucuk daun tawaloho muda 2 genggam",
      "Kunyit segar, bawang merah, cabai rawit ulek",
      "Belimbing wuluh atau asam jawa"
    ],
    "toolsUsed": [
      "Posonggi bambu kuning",
      "Mangkuk tanah liat (Bikau)"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengencerkan Sagu Bersih",
        "description": "Saring pati sagu dengan air dingin bersih untuk membuang ampas serat."
      },
      {
        "stepNumber": 2,
        "title": "Menyiram Air Mendidih Berputar",
        "description": "Tuang air mendidih secara perlahan sambil terus diaduk kuat hingga sagu berubah tekstur menjadi liat bening transparan."
      },
      {
        "stepNumber": 3,
        "title": "Menggulung dengan Posonggi",
        "description": "Gunakan dua bilah posonggi, gulung adonan sagu membentuk porsi makan, lalu celupkan ke dalam mangkuk kuah ikan tawaloho panas."
      },
      {
        "stepNumber": 4,
        "title": "Menyeruput Hangat Bersama Keluarga",
        "description": "Sinonggi tidak dikunyah, melainkan ditelan lembut bersama kuah ikan kuning yang gurih dan pedas segar."
      }
    ],
    "preservationAdvice": "Nenek Bua berpesan: \"Anak Tolaki jangan gengsi makan sinonggi. Sagu adalah pohon kehidupan nenek moyang kita di rawa Konawe.\"",
    "estimatedEra": "Telah ada sejak masa Kerajaan Konawe kuno (abad ke-10)",
    "tags": [
      "Sinonggi",
      "Tolaki",
      "Konawe",
      "Sagu Leluhur"
    ],
    "likesCount": 204
  },
  {
    "id": "tolaki-kalo-sara-molulo-16",
    "title": "Hukum Adat Kalo Sara & Tari Persaudaraan Molulo",
    "subtitle": "Lingkaran Rotan Sakral Simbol Hukum Adat Tertinggi dan Tarian Tanpa Sekat",
    "category": "bahasa",
    "province": "Sulawesi Tenggara",
    "tribe": "Tolaki",
    "regionDetail": "Konawe, Kolaka, & Kendari",
    "elderNarrator": {
      "name": "Mokole Imran Tombili",
      "age": 75,
      "titleOrRole": "Tokoh Adat Bokeo Kerajaan Konawe",
      "location": "Kendari"
    },
    "recordedBy": {
      "name": "Suryani Wulandari",
      "schoolOrAffiliation": "Universitas Halu Oleo Kendari",
      "date": "03 Juli 2024"
    },
    "summary": "Kalo Sara adalah anyaman seutas rotan membentuk lingkaran yang diletakkan di atas kain putih dan daun sirih pinang. Ini adalah lambang tertinggi hukum adat suku Tolaki untuk menyelesaikan konflik damai. Ditutup dengan Tari Molulo (tarian melingkar mengaitkan jari tangan bersama warga).",
    "philosophicalMeaning": "Bentuk lingkaran rotan Kalo melambangkan tiadanya sudut kebencian, tiada awal dan tiada akhir persaudaraan. Siapa pun yang berselisih, jika sudah dipertemukan di hadapan Kalo Sara wajib berdamai.",
    "localTerms": [
      {
        "term": "Kalo Sara",
        "meaning": "Lingkaran rotan simbol hukum perdamaian adat Tolaki",
        "language": "Tolaki"
      },
      {
        "term": "Molulo",
        "meaning": "Tarian persahabatan melingkar dengan bergandengan tangan",
        "language": "Tolaki"
      },
      {
        "term": "Mosehe Wonua",
        "meaning": "Upacara adat pensucian negeri dari bencana",
        "language": "Tolaki"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mempersiapkan Lingkaran Rotan (Kalo)",
        "description": "Rotan hutan tua dipilin melingkar tanpa simpul patah, dialasi kain mori putih bersih."
      },
      {
        "stepNumber": 2,
        "title": "Musyawarah Mombatata Kalo",
        "description": "Tetua adat memimpin musyawarah; pihak yang bertikai meletakkan tangan di dekat Kalo sebagai tanda ikrar saling memaafkan."
      },
      {
        "stepNumber": 3,
        "title": "Tari Molulo Massal",
        "description": "Seluruh warga bergandengan jemari membentuk lingkaran raksasa mengikuti tetabuhan gong, bergerak seirama ke kanan dan kiri penuh senyuman."
      }
    ],
    "preservationAdvice": "Mokole Imran Tombili berpesan: \"Kalo Sara mengajarkan perdamaian. Bangsa ini butuh semangat Kalo Sara agar tidak mudah dipecah-belah.\"",
    "estimatedEra": "Diresmikan oleh Raja Sangia Ngginoburu (abad ke-15)",
    "tags": [
      "Kalo Sara",
      "Molulo",
      "Tolaki",
      "Hukum Adat Damai"
    ],
    "likesCount": 278
  },
  {
    "id": "buton-kasuami-parende-17",
    "title": "Kasuami Singkong Parut Tumpeng & Ikan Kuah Parende",
    "subtitle": "Makanan Bekal Pelaut Samudra Kesultanan Buton Menembus Gelombang",
    "category": "resep",
    "province": "Sulawesi Tenggara",
    "tribe": "Buton",
    "regionDetail": "Kota Bau-Bau & Keraton Buton",
    "elderNarrator": {
      "name": "Wa Ode Mardiana",
      "age": 72,
      "titleOrRole": "Pewaris Dapur Keraton Wolio",
      "location": "Benteng Keraton Buton, Bau-Bau"
    },
    "recordedBy": {
      "name": "La Ode Muhammad Zulfikar",
      "schoolOrAffiliation": "SMA Negeri 1 Bau-Bau",
      "date": "09 September 2024"
    },
    "summary": "Kasuami adalah makanan khas suku Buton berbahan dasar singkong (kaopi) yang diperas getahnya, difermentasi ringan, lalu dikukus dalam wadah anyaman daun kelapa berbentuk kerucut tumpeng mini (cora). Dimakan dengan Ikan Parende (sup ikan kakap kuah asam belimbing dan cabai rawit).",
    "philosophicalMeaning": "Bentuk kerucut kasuami melambangkan ketauhidan kepada Tuhan Yang Maha Esa dan puncak kepatuhan kepada syariat kebajikan. Ketahanan kasuami hingga berminggu-minggu menemani pelaut Buton mengarungi lautan Nusantara.",
    "localTerms": [
      {
        "term": "Kasuami",
        "meaning": "Singkong parut kukus kerucut bekal pelaut Buton",
        "language": "Buton (Wolio)"
      },
      {
        "term": "Parende",
        "meaning": "Kuah ikan segar kuning asam belimbing khas Buton",
        "language": "Buton (Wolio)"
      },
      {
        "term": "Cora",
        "meaning": "Anyaman daun kelapa berbentuk corong kerucut cetakan kasuami",
        "language": "Buton (Wolio)"
      },
      {
        "term": "Kaopi",
        "meaning": "Singkong tua yang telah dikeringkan dan difermentasi higienis",
        "language": "Buton (Wolio)"
      }
    ],
    "ingredientsOrMaterials": [
      "Singkong parut diperas getahnya (kaopi) 1 kg",
      "Ikan kakap merah atau tongkol segar 700 gram",
      "Belimbing wuluh asam 6 buah",
      "Cabai rawit merah, kunyit segar, serai, daun kemangi hutan",
      "Minyak kelapa goreng bawang untuk taburan"
    ],
    "toolsUsed": [
      "Anyaman daun kelapa cora",
      "Kukusan bambu",
      "Kuali batu"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengolah Kaopi Singkong",
        "description": "Parutan singkong diperas kuat dengan kayu tindih selama semalam hingga kering remah, lalu diayak halus."
      },
      {
        "stepNumber": 2,
        "title": "Mencetak dalam Cora dan Mengukus",
        "description": "Masukkan remahan singkong ke dalam wadah cora daun kelapa, kukus di atas dandang uap air mendidih selama 20 menit."
      },
      {
        "stepNumber": 3,
        "title": "Membuat Kuah Asam Parende",
        "description": "Rebus potongan ikan kakap bersama irisan belimbing wuluh, kunyit geprek, dan cabai rawit hingga kaldu ikannya keluar bening segar."
      }
    ],
    "preservationAdvice": "Wa Ode Mardiana berpesan: \"Makan kasuami hangat dicelup kuah parende itu nikmat tak ada bandingannya. Jangan biarkan cora anyaman daun kelapa punah.\"",
    "estimatedEra": "Makanan resmi armada pelayaran Kesultanan Buton abad ke-16",
    "tags": [
      "Kasuami",
      "Parende",
      "Buton",
      "Keraton Wolio"
    ],
    "likesCount": 191
  },
  {
    "id": "buton-falsafah-keraton-wolio-18",
    "title": "Falsafah Keraton Buton: Yinda-yindamo Arata Somanamo Karo",
    "subtitle": "Hierarki Nilai Luhur: Harta Dikorbankan Demi Diri, Diri Demi Bangsa, Bangsa Demi Agama",
    "category": "bahasa",
    "province": "Sulawesi Tenggara",
    "tribe": "Buton",
    "regionDetail": "Benteng Keraton Wolio, Bau-Bau",
    "elderNarrator": {
      "name": "La Ode Aliman",
      "age": 83,
      "titleOrRole": "Bontona Keraton Kesultanan Buton",
      "location": "Bau-Bau, Buton"
    },
    "recordedBy": {
      "name": "Nurul Annisa",
      "schoolOrAffiliation": "SMA Negeri 2 Bau-Bau",
      "date": "14 Agustus 2024"
    },
    "summary": "Falsafah empat tingkatan pengorbanan moral manusia Wolio: (1) Yinda-yindamo arata somanamo karo (Korbankan harta demi keselamatan diri/martabat), (2) Yinda-yindamo karo somanamo lipu (Korbankan diri demi keselamatan negeri/bangsa), (3) Yinda-yindamo lipu somanamo sara (Korbankan negeri demi keselamatan hukum/keadilan), (4) Yinda-yindamo sara somanamo agama (Korbankan hukum demi keselamatan iman/nilai ketuhanan).",
    "philosophicalMeaning": "Puncak integritas kepemimpinan dunia. Menolak suap, memprioritaskan kepentingan rakyat jelata di atas keluarga raja, dan membentengi negeri dengan akhlak mulia.",
    "localTerms": [
      {
        "term": "Lipu",
        "meaning": "Negeri, tanah air, dan tumpah darah",
        "language": "Buton (Wolio)"
      },
      {
        "term": "Sara",
        "meaning": "Hukum dan pranata keadilan adat",
        "language": "Buton (Wolio)"
      },
      {
        "term": "Lambo",
        "meaning": "Kapal layar dagang kebanggaan maritim Buton",
        "language": "Buton (Wolio)"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Diajarkan dalam Naskah Kuno Murtabat Tujuh",
        "description": "Falsafah ini ditulis dalam naskah beraksara Wolio Arab Melayu dan dibacakan pada setiap pelantikan Sultan Buton."
      },
      {
        "stepNumber": 2,
        "title": "Penerapan Hidup Gotong Royong Posuo",
        "description": "Mendidik pemuda dan gadis Buton agar tangguh berintegritas menghadapi zaman serakah."
      }
    ],
    "preservationAdvice": "La Ode Aliman berpesan: \"Jangan tukar martabatmu dengan uang suap. Ingatlah wasiat leluhur Buton.\"",
    "estimatedEra": "Dirumuskan pada masa Sultan Buton ke-4, Sultan Dayanu Ikhsanuddin (abad ke-16)",
    "tags": [
      "Falsafah Buton",
      "Keraton Wolio",
      "Etika Bangsa"
    ],
    "likesCount": 254
  },
  {
    "id": "muna-layang-kaghati-kolope-19",
    "title": "Kaghati Kolope: Layang-Layang Tertua di Dunia Berbahan Daun Ubi Hutan",
    "subtitle": "Mahakarya Aerodinamika Prasejarah Berusia 4.000 Tahun dari Pulau Muna",
    "category": "permainan",
    "province": "Sulawesi Tenggara",
    "tribe": "Muna",
    "regionDetail": "Liangkobori & Kota Raha, Kabupaten Muna",
    "elderNarrator": {
      "name": "La Mina",
      "age": 79,
      "titleOrRole": "Maestro Pembuat Kaghati Kolope Tradisional",
      "location": "Desa Liang Kobori, Raha, Muna"
    },
    "recordedBy": {
      "name": "La Ode Asrul & Wa Ode Sitti",
      "schoolOrAffiliation": "SMA Negeri 1 Raha",
      "date": "06 Agustus 2024"
    },
    "summary": "Kaghati Kolope adalah layang-layang tradisional suku Muna yang terbukti secara arkeologis merupakan layang-layang tertua di dunia (tergambar pada lukisan cadas dinding Gua Sugipatani berusia 4.000 SM). Layang-layang ini dibuat dari jajaran daun ubi hutan (kolope) yang dirangkai bambu dan benang serat nanas.",
    "philosophicalMeaning": "Kaghati diterbangkan selama tujuh hari tujuh malam tanpa turun sebagai payung spiritual bagi jiwa petani dan pelindung panen jagung. Suara getaran pita daun arennya (kamumu) yang berdengung syahdu di angkasa mengusir mara bahaya.",
    "localTerms": [
      {
        "term": "Kaghati",
        "meaning": "Layang-layang tradisional khas suku Muna",
        "language": "Muna"
      },
      {
        "term": "Kolope",
        "meaning": "Daun tanaman ubi hutan gadung liar yang liat dan tahan air",
        "language": "Muna"
      },
      {
        "term": "Kamumu",
        "meaning": "Pita resonator bambu dan daun aren pembuat suara dengung di udara",
        "language": "Muna"
      },
      {
        "term": "Liku",
        "meaning": "Tali benang layangan dari serat nanas atau serat pisang hutan",
        "language": "Muna"
      }
    ],
    "ingredientsOrMaterials": [
      "Daun kolope (ubi hutan gadung) yang telah diasapi dan dikeringkan",
      "Kulit bambu kuning tipis lentur untuk kerangka",
      "Tali pilin serat nanas hutan",
      "Daun kelapa kering untuk pita kamumu"
    ],
    "toolsUsed": [
      "Pisau raut bambu",
      "Alat asap daun di atas perapian"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengasapi Daun Kolope",
        "description": "Petik daun kolope tua di hutan jati, asapi di atas perapian kayu selama beberapa hari agar daun menjadi liat, kedap air, dan tidak rapuh terkena angin badai."
      },
      {
        "stepNumber": 2,
        "title": "Menjahit Lembaran Daun dengan Lidi Bambu",
        "description": "Susun daun kolope secara tumpang tindih aerodinamis, jahit erat dengan tusuk lidi bambu halus."
      },
      {
        "stepNumber": 3,
        "title": "Merakit Kerangka dan Kamumu Berdengung",
        "description": "Ikat kerangka silang bambu dengan tali serat nanas. Pasang busur suara kamumu di bagian atas layang-layang."
      },
      {
        "stepNumber": 4,
        "title": "Menerbangkan ke Angkasa Menjaga Kampung",
        "description": "Terbangkan Kaghati di bukit terbuka; layang-layang akan bertahan terbang stabil siang malam membelah angin laut Flores."
      }
    ],
    "preservationAdvice": "La Mina berpesan: \"Dunia mengakui Kaghati Muna sebagai layangan tertua di bumi mendahului China. Anak Muna harus bangga dan jangan ganti daun kolope dengan plastik kresek.\"",
    "estimatedEra": "Prasejarah Neolitikum Gua Liangkobori (4.000 tahun Sebelum Masehi)",
    "tags": [
      "Kaghati Kolope",
      "Muna",
      "Layang-layang Tertua",
      "Gua Liangkobori"
    ],
    "likesCount": 342
  },
  {
    "id": "muna-kambuse-jagung-20",
    "title": "Kambuse: Olahan Jagung Pipil Kapur Sirih Warisan Pangan Muna",
    "subtitle": "Makanan Pokok Penakluk Tanah Karang dan Pesisir Pulau Muna",
    "category": "resep",
    "province": "Sulawesi Tenggara",
    "tribe": "Muna",
    "regionDetail": "Katobu & Tongkuno, Kabupaten Muna",
    "elderNarrator": {
      "name": "Wa Ode Fatimah",
      "age": 76,
      "titleOrRole": "Ibu Tani Jagung Tradisional",
      "location": "Tongkuno, Muna"
    },
    "recordedBy": {
      "name": "Wa Ode Risna",
      "schoolOrAffiliation": "SMA Negeri 2 Raha",
      "date": "27 Juli 2024"
    },
    "summary": "Kambuse adalah olahan bulir jagung kuning tua pipil yang direbus bersama air abu dapur atau kapur sirih agar kulit arinya terkelupas lembut. Dimasak hingga merekah empuk lalu dicampur garam dan parutan kelapa gurih, dinikmati bersama ikan bakar kenta mbaeno.",
    "philosophicalMeaning": "Masyarakat Muna hidup di atas pulau batu kapur (karst) yang minim air. Jagung adalah tanaman kesabaran yang mampu tumbuh di sela batu cadas, melambangkan keuletan watak manusia Muna yang pantang menyerah.",
    "localTerms": [
      {
        "term": "Kambuse",
        "meaning": "Jagung rebus kapur kelapa parut makanan pokok Muna",
        "language": "Muna"
      },
      {
        "term": "Kenta Mbaeno",
        "meaning": "Ikan asap kering kuah asam pedas khas Muna",
        "language": "Muna"
      },
      {
        "term": "Kalambe",
        "meaning": "Gadis muda penenun dan penjaga lumbung jagung",
        "language": "Muna"
      }
    ],
    "ingredientsOrMaterials": [
      "Biji jagung kering lokal Muna 500 gram",
      "Air endapan kapur sirih atau abu sabut kelapa",
      "Kelapa setengah tua parut gurih 1/2 butir",
      "Garam kristal laut"
    ],
    "toolsUsed": [
      "Kuali tanah rebusan",
      "Niru anyaman bambu untuk menampi kulit jagung"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Merebus Jagung dengan Air Kapur Sirih",
        "description": "Rebus biji jagung bersama air kapur sirih selama 1 jam hingga kulit ari terlepas."
      },
      {
        "stepNumber": 2,
        "title": "Mencuci dan Menampi Bersih",
        "description": "Bilas jagung di air mengalir sambil diremas-remas agar kulit luarnya hilang, tiriskan di niru bambu."
      },
      {
        "stepNumber": 3,
        "title": "Merebus Ulang hingga Merekah Mekar",
        "description": "Rebus kembali dengan air bersih hingga bulir jagung merekah pulen. Campur bersama kelapa parut dan garam gurih."
      }
    ],
    "preservationAdvice": "Wa Ode Fatimah: \"Banyak anak muda sekarang hanya makan mi instan dan nasi putih. Padahal kambuse jagung inilah yang membuat kakek-nenek Muna kuat bekerja sampai usia 90 tahun.\"",
    "estimatedEra": "Diwariskan sejak perladangan purba Muna ratusan tahun lalu",
    "tags": [
      "Kambuse",
      "Muna",
      "Jagung Leluhur",
      "Ketahanan Pangan"
    ],
    "likesCount": 165
  },
  {
    "id": "moronene-sinole-sagu-21",
    "title": "Sinole Sagu Sangrai Manis Gurih & Tradisi Mepokoaso",
    "subtitle": "Kearifan Suku Tertua Bumi Anoa di Padang Rumbia & Pegunungan Hukaea Laea",
    "category": "resep",
    "province": "Sulawesi Tenggara",
    "tribe": "Moronene",
    "regionDetail": "Rumbia, Poleang, & Taman Nasional Rawa Aopa Watumohai, Bombana",
    "elderNarrator": {
      "name": "Mokole Mansur Tobing",
      "age": 79,
      "titleOrRole": "Tetua Adat Komunitas Adat Terpencil Moronene Hukaea Laea",
      "location": "Hukaea Laea, Kabupaten Bombana"
    },
    "recordedBy": {
      "name": "Yusuf Moronene & Sitti Rahmi",
      "schoolOrAffiliation": "SMA Negeri 1 Rumbia",
      "date": "19 Juli 2024"
    },
    "summary": "Sinole adalah butiran sagu basah yang dicampur kelapa parut dan sedikit garam atau gula aren, lalu disangrai kering di atas wajan tanah liat tanpa minyak sambil terus diaduk hingga membentuk butiran-butiran kenyal keemasan yang manis gurih semerbak.",
    "philosophicalMeaning": "Suku Moronene adalah salah satu suku tertua di Sulawesi. Sinole melambangkan keselarasan suku Moronene dengan rimba sagu dan rawa Aopa. Butiran sinole yang menyatu melambangkan semangat \"Mepokoaso\" (bersatu dalam suka maupun duka melindungi hutan adat).",
    "localTerms": [
      {
        "term": "Sinole",
        "meaning": "Olahan butiran sagu sangrai kelapa khas Moronene",
        "language": "Moronene"
      },
      {
        "term": "Mepokoaso",
        "meaning": "Bersatu hati dan saling menopang satu sama lain",
        "language": "Moronene"
      },
      {
        "term": "Mokole",
        "meaning": "Pemimpin adat tertinggi pelindung wilayah Moronene",
        "language": "Moronene"
      },
      {
        "term": "Hukaea Laea",
        "meaning": "Kawasan hutan adat keramat suku Moronene",
        "language": "Moronene"
      }
    ],
    "ingredientsOrMaterials": [
      "Pati sagu basah alami dari rawa rumbia 500 gram",
      "Kelapa parut setengah tua 1 butir",
      "Gula aren asli Bombana sisir halus",
      "Garam secubit"
    ],
    "toolsUsed": [
      "Wajan tanah liat (Kowali)",
      "Spatula kayu aren pembalik sangrai"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengayak Remahan Sagu",
        "description": "Sagu basah diayak halus bersama kelapa parut dan secubit garam agar tercampur rata."
      },
      {
        "stepNumber": 2,
        "title": "Menyangrai Tanpa Minyak (Manggore)",
        "description": "Panaskan wajan tanah liat dengan api sedang. Masukkan adonan sagu sambil terus diputar dan diaduk secara konsisten."
      },
      {
        "stepNumber": 3,
        "title": "Membentuk Butiran Emas Renyah",
        "description": "Saat sagu mulai matang dan berbutir renyah, taburkan sisiran gula aren hingga meleleh wangi karamel."
      }
    ],
    "preservationAdvice": "Mokole Mansur Tobing berpesan: \"Hutan rawa sagu adalah ibu kandung suku Moronene. Jangan pernah menjual hutan adat demi tambang emas, karena emas akan habis tapi sagu memberi makan selamanya.\"",
    "estimatedEra": "Suku asli tertua Sulawesi Tenggara pra-kerajaan",
    "tags": [
      "Sinole",
      "Moronene",
      "Bombana",
      "Hutan Adat Hukaea"
    ],
    "likesCount": 215
  },
  {
    "id": "moronene-anyaman-kasab-kabaena-22",
    "title": "Kerajinan Anyaman Rotan & Tenun Kasab Kabaena Moronene",
    "subtitle": "Mahakarya Seni Serat Hutan Bambu dan Motif Flora Pulau Kabaena",
    "category": "kerajinan",
    "province": "Sulawesi Tenggara",
    "tribe": "Moronene",
    "regionDetail": "Pulau Kabaena, Kabupaten Bombana",
    "elderNarrator": {
      "name": "Wa Ode Kamaria",
      "age": 75,
      "titleOrRole": "Penenun Sepuh Adat Tokotu’a Kabaena",
      "location": "Kabaena Barat, Bombana"
    },
    "recordedBy": {
      "name": "Hendra Saputra",
      "schoolOrAffiliation": "SMA Negeri 1 Kabaena",
      "date": "02 Agustus 2024"
    },
    "summary": "Penenun wanita suku Moronene di Pulau Kabaena (Tokotu’a) menghasilkan kain tenun Kasab yang dipadukan dengan sulaman benang emas motif bunga melati dan pucuk rebung, serta anyaman wadah rotan hutan (Kambu) yang sangat halus dan tahan air.",
    "philosophicalMeaning": "Motif sulaman Kasab mencerminkan kehormatan perempuan Moronene yang memelihara keharmonisan rumah tangga dan menjaga rahasia adat leluhur.",
    "localTerms": [
      {
        "term": "Kasab",
        "meaning": "Kain tenun berhias sulaman benang berkilau khas Kabaena",
        "language": "Moronene"
      },
      {
        "term": "Tokotu’a",
        "meaning": "Sebutan adat leluhur untuk Pulau Kabaena",
        "language": "Moronene"
      },
      {
        "term": "Kambu",
        "meaning": "Wadah bakul anyaman rotan hutan serbaguna",
        "language": "Moronene"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mencari Rotan dan Pewarna Hutan",
        "description": "Mencari rotan hutan berkualitas di lereng Gunung Sambapolulu, merautnya menjadi bilah-bilah halus seukuran benang."
      },
      {
        "stepNumber": 2,
        "title": "Menenun Kain Dasar Hitam Kelam",
        "description": "Menenun kain katun hitam dengan alat tenun gedogan kayu tradisional."
      },
      {
        "stepNumber": 3,
        "title": "Menyulam Benang Emas Kasab",
        "description": "Menyulamkan benang emas bermotif bunga melati dengan jarum perak secara teliti helai demi helai."
      }
    ],
    "preservationAdvice": "Wa Ode Kamaria berpesan: \"Penenun muda di Kabaena kini semakin langka. Semoga aplikasi Warisan Digital ini bisa mengajari cucu-cucu kami di perantauan.\"",
    "estimatedEra": "Abad ke-17 era swapraja Kabaena Moronene",
    "tags": [
      "Kasab",
      "Kabaena",
      "Moronene",
      "Tenun Emas"
    ],
    "likesCount": 148
  },
  {
    "id": "minahasa-tinutuan-bubur-manado-21",
    "title": "Tinutuan Asli (Bubur Manado Daun Gedi & Labu Kuning)",
    "subtitle": "Kearifan Pangan Nabati Bergizi Tinggi & Falsafah Kerukunan Si Tou Timou Tumou Tou",
    "category": "resep",
    "province": "Sulawesi Utara",
    "tribe": "Minahasa",
    "regionDetail": "Kota Manado, Tomohon, & Minahasa",
    "elderNarrator": {
      "name": "Oma Elsje Polii",
      "age": 78,
      "titleOrRole": "Tetua Dapur Komunitas Adat Minahasa",
      "location": "Tomohon, Sulawesi Utara"
    },
    "recordedBy": {
      "name": "Christian Pangemanan & Brenda Wenas",
      "schoolOrAffiliation": "SMA Negeri 1 Tomohon",
      "date": "12 September 2024"
    },
    "summary": "Tinutuan adalah bubur kaya sayuran nabati khas suku Minahasa yang dimasak dari beras, labu kuning pulen (sambiki), ubi jalar manis, jagung manis pipil, daun gedi berlendir alami, kangkung air, kemangi wangi, dan daun bayam. Disajikan bersama sambal roa asap, perkedel jagung (nike), dan tahu goreng.",
    "philosophicalMeaning": "Tinutuan melambangkan keberagaman yang menyatu harmonis. Falsafah leluhur Minahasa \"Si Tou Timou Tumou Tou\" (Manusia hidup untuk memanusiakan dan menghidupkan orang lain) tercermin dari kebiasaan saling mengantarkan semangkuk Tinutuan hangat kepada tetangga yang sakit atau sedang berduka.",
    "localTerms": [
      {
        "term": "Tinutuan",
        "meaning": "Bubur campur aneka hasil bumi nabati khas Minahasa",
        "language": "Minahasa"
      },
      {
        "term": "Daun Gedi",
        "meaning": "Daun berlendir herbal kaya serat pengental alami bubur",
        "language": "Minahasa"
      },
      {
        "term": "Sambiki",
        "meaning": "Labu kuning manis pemberi warna keemasan alami",
        "language": "Minahasa"
      },
      {
        "term": "Si Tou Timou Tumou Tou",
        "meaning": "Manusia hidup untuk memanusiakan sesamanya",
        "language": "Minahasa"
      },
      {
        "term": "Mapalus",
        "meaning": "Tradisi gotong royong tolong-menolong suku Minahasa",
        "language": "Minahasa"
      }
    ],
    "ingredientsOrMaterials": [
      "Beras putih pulen lokal Minahasa 200 gram",
      "Labu kuning (sambiki) kukus lumat 250 gram",
      "Ubi jalar kuning/ungu potong dadu 150 gram",
      "Jagung manis pipil segar 2 tongkol",
      "Pucuk daun gedi segar iris kasar 1 ikat",
      "Daun kemangi (balakama) harum & kangkung",
      "Serai geprek, jahe, garam laut Likupang",
      "Ikan roa asap tumbuk untuk sambal"
    ],
    "toolsUsed": [
      "Panci tembikar tanah liat",
      "Sendok kayu kelapa (sendok rumbia)"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mendidihkan Bubur Beras dan Umbi",
        "description": "Rebus beras bersama serai dan jahe hingga butiran beras pecah lembut, lalu masukkan potongan ubi jalar dan jagung manis pipil."
      },
      {
        "stepNumber": 2,
        "title": "Memasukkan Labu Sambiki dan Daun Gedi",
        "description": "Masukkan labu kuning yang telah dilumatkan hingga bubur berubah warna kuning cerah keemasan. Tambahkan daun gedi dan aduk perlahan; lendir alami daun gedi akan membuat tekstur bubur lembut kental tanpa tepung maizena."
      },
      {
        "stepNumber": 3,
        "title": "Menambahkan Sayuran Hijau dan Kemangi",
        "description": "Terakhir masukkan kangkung dan daun kemangi wangi sesaat sebelum api dimatikan agar aroma tetap segar dan daun tidak layu gelap."
      },
      {
        "stepNumber": 4,
        "title": "Menyajikan Bersama Sambal Roa",
        "description": "Tuang Tinutuan panas ke dalam mangkuk porselen, dampingi dengan sambal dabu-dabu roa pedas gurih serta perkedel ikan nike Danau Tondano."
      }
    ],
    "preservationAdvice": "Oma Elsje berpesan: \"Daun gedi sekarang jarang ditanam anak muda di pekarangan. Tanamlah pohon gedi di depan rumahmu, karena itulah rahasia kesehatan panjang umur orang tua Minahasa.\"",
    "estimatedEra": "Diwariskan sejak abad ke-16 masa awal komunitas adat Minahasa",
    "tags": [
      "Tinutuan",
      "Bubur Manado",
      "Daun Gedi",
      "Minahasa",
      "Mapalus"
    ],
    "likesCount": 242,
    "audioNoteDuration": "05:14"
  },
  {
    "id": "minahasa-kolintang-kayu-cempaka-22",
    "title": "Alat Musik Kolintang Kayu Cempaka & Tradisi Mapalus",
    "subtitle": "Melodi Bilah Kayu Bernada Merdu Pengiring Doa Syukur & Gotong Royong",
    "category": "kerajinan",
    "province": "Sulawesi Utara",
    "tribe": "Minahasa",
    "regionDetail": "Kawangkoan & Minahasa Utara",
    "elderNarrator": {
      "name": "Opa Frans Wewengkang",
      "age": 75,
      "titleOrRole": "Pande Kolintang (Pembuat & Penyelaras Nada)",
      "location": "Kawangkoan, Minahasa"
    },
    "recordedBy": {
      "name": "Gabriella Sompie",
      "schoolOrAffiliation": "SMA Negeri 1 Airmadidi",
      "date": "18 Agustus 2024"
    },
    "summary": "Kolintang adalah ansambel alat musik perkusi bernada khas Minahasa yang terbuat dari bilah-bilah kayu cempaka, bandaran, atau wenuang yang dikeringkan bertahun-tahun lalu diselaraskan nada oktafnya. Dimainkan bersama dalam harmoni kerukunan Mapalus.",
    "philosophicalMeaning": "Nama Kolintang berasal dari bunyi \"Tong\" (nada rendah), \"Ting\" (nada tinggi), dan \"Tang\" (nada tengah). Ajakan leluhur \"Maimo Kumolintang\" bermakna mari kita bersama-sama menghasilkan harmoni indah meski memiliki perbedaan latar belakang.",
    "localTerms": [
      {
        "term": "Kolintang",
        "meaning": "Instrumen bilah kayu perkusi bernada khas Minahasa",
        "language": "Minahasa"
      },
      {
        "term": "Maimo Kumolintang",
        "meaning": "Mari kita bersama-sama memainkan nada indah",
        "language": "Minahasa"
      },
      {
        "term": "Kayu Wenuang / Cempaka",
        "meaning": "Kayu berserat lurus dan ringan dengan resonansi suara jernih",
        "language": "Minahasa"
      }
    ],
    "ingredientsOrMaterials": [
      "Kayu cempaka hutan atau kayu bandaran tua kering",
      "Peti resonansi kayu penopang bilah",
      "Karet alam untuk pembalut stik pemukul"
    ],
    "toolsUsed": [
      "Gergaji tangan manual",
      "Pahat lurus",
      "Tuner garputala tala nada"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengeringkan Kayu di Atas Tungku",
        "description": "Batang kayu cempaka dipotong sesuai ukuran lalu diasapi di atas para-para tungku dapur selama 6 bulan agar kadar air nol dan kayu tidak melengkung."
      },
      {
        "stepNumber": 2,
        "title": "Memotong dan Memahat Bilah Nada",
        "description": "Memotong bilah semakin pendek untuk nada tinggi dan semakin panjang tebal untuk nada rendah bass."
      },
      {
        "stepNumber": 3,
        "title": "Menyelaraskan Nada (Tuning)",
        "description": "Mengerik bagian tengah bilah bawah untuk merendahkan nada atau memotong ujung bilah untuk menaikkan nada hingga getarannya pas berdenting."
      }
    ],
    "preservationAdvice": "Opa Frans berpesan: \"Kolintang adalah jiwa orang Minahasa. Jangan biarkan anak-anak kita hanya mengenal alat musik digital luar negeri, peganglah stik kolintang ini.\"",
    "estimatedEra": "Tradisi kuno Minahasa yang telah diakui Warisan Budaya Takbenda Dunia",
    "tags": [
      "Kolintang",
      "Minahasa",
      "Musik Tradisional",
      "Kayu Cempaka"
    ],
    "likesCount": 215
  },
  {
    "id": "sangihe-kue-tamo-upacara-tulude-23",
    "title": "Kue Tamo & Upacara Adat Tulude Sangihe",
    "subtitle": "Roti Kerucut Sakral Pelepasan Tahun & Falsafah Persatuan Somahe Kai Kehage",
    "category": "resep",
    "province": "Sulawesi Utara",
    "tribe": "Sangihe",
    "regionDetail": "Tahuna, Kepulauan Sangihe",
    "elderNarrator": {
      "name": "Mayore Labo (Bapak Yohanis Manoppo)",
      "age": 82,
      "titleOrRole": "Tetua Adat Upacara Tulude",
      "location": "Tahuna, Kepulauan Sangihe"
    },
    "recordedBy": {
      "name": "Stevano Makasunggal",
      "schoolOrAffiliation": "SMA Negeri 1 Tahuna",
      "date": "31 Januari 2024"
    },
    "summary": "Kue Tamo adalah kue kerucut raksasa khas suku Sangihe berbahan dasar beras ketan, gula aren asli pulau Siau, santan kental, dan rempah kenari yang dibakar lalu diarak dalam upacara adat Tulude. Upacara Tulude adalah ritual pelepasan tahun lama dan permohonan selamat kepada Mawu Ruata Ghenggona Langi (Tuhan Semesta Alam).",
    "philosophicalMeaning": "Falsafah kepulauan Sangihe \"Somahe Kai Kehage\" (Makin diterjang badai ombak, makin pantang mundur). Pemotongan Kue Tamo oleh tetua adat melambangkan pembagian berkah rezeki yang adil dan pembersihan hati dari segala perselisihan masa lalu.",
    "localTerms": [
      {
        "term": "Tulude",
        "meaning": "Upacara adat tolak bala dan rasa syukur pergantian tahun suku Sangihe",
        "language": "Sangihe"
      },
      {
        "term": "Kue Tamo",
        "meaning": "Kue tumpeng sakral berbahan ketan, kenari, dan gula aren",
        "language": "Sangihe"
      },
      {
        "term": "Somahe Kai Kehage",
        "meaning": "Makin keras badai menghadang, makin gigih kita maju",
        "language": "Sangihe"
      },
      {
        "term": "Kain Koffo",
        "meaning": "Kain tenun kuno dari serat pisang abaka hutan Kepulauan Sangihe",
        "language": "Sangihe"
      }
    ],
    "ingredientsOrMaterials": [
      "Beras ketan putih giling halus 5 kg",
      "Gula aren cokelat pekat asli Siau 3 kg",
      "Biji kenari sangrai cincang kasar 1 kg",
      "Santan kelapa tua pekat, kayu manis, pala bubuk",
      "Janur kelapa kuning untuk hiasan kerucut tahta"
    ],
    "toolsUsed": [
      "Kuali tembaga raksasa",
      "Cetakan kerucut bambu sakral"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mendidihkan Larutan Gula Aren dan Kenari",
        "description": "Rebus gula aren Siau bersama santan, kayu manis, dan biji kenari sangrai hingga mengental karamel beraroma wangi semerbak."
      },
      {
        "stepNumber": 2,
        "title": "Mengaduk Adonan Ketan Tamo",
        "description": "Masukkan tepung ketan ke dalam cairan gula mendidih, diaduk kuat oleh pemuda desa secara bergantian (Gotong Royong Mebalu) selama 4 jam hingga liat mengkilap."
      },
      {
        "stepNumber": 3,
        "title": "Mencetak Kerucut dan Membakar di Tungku Khusus",
        "description": "Tuang ke dalam cetakan kerucut tumpeng, bakar dengan bara tempurung kelapa hingga bagian kulitnya renyah karamel."
      },
      {
        "stepNumber": 4,
        "title": "Arak-arakan Adat dan Pemotongan Puncak",
        "description": "Diiringi tetabuhan tambur dan tari gunde, Kue Tamo diarak ke rumah adat. Tetua adat memotong ujung kerucut seraya mengucapkan doa keselamatan seluruh pulau."
      }
    ],
    "preservationAdvice": "Bapak Yohanis Manoppo berpesan: \"Tulude dan Kue Tamo menjaga persaudaraan orang pulau di tengah luasnya samudra Pasifik. Jangan sampai generasi baru lupa bahasa Sasahara leluhur kita.\"",
    "estimatedEra": "Diwariskan sejak masa Kerajaan Tampungang Lawo abad ke-16",
    "tags": [
      "Kue Tamo",
      "Tulude",
      "Sangihe",
      "Somahe Kai Kehage",
      "Bahari"
    ],
    "likesCount": 198
  },
  {
    "id": "bolmong-alangan-falsafah-mototompiaan-24",
    "title": "Falsafah Mototompiaan & Resep Alangan Padi Gunung",
    "subtitle": "Trilogi Budi Pekerti Leluhur Mongondow & Padi Aromatik Lereng Ambang",
    "category": "bahasa",
    "province": "Sulawesi Utara",
    "tribe": "Bolaang Mongondow",
    "regionDetail": "Kotamobagu & Kabupaten Bolaang Mongondow",
    "elderNarrator": {
      "name": "Ki Papa Deni Mokodongan",
      "age": 76,
      "titleOrRole": "Tokoh Lembaga Adat Bolaang Mongondow",
      "location": "Kotamobagu, Bolaang Mongondow"
    },
    "recordedBy": {
      "name": "Nur Fadilah Mokoginta",
      "schoolOrAffiliation": "SMA Negeri 1 Kotamobagu",
      "date": "04 Oktober 2024"
    },
    "summary": "Suku Bolaang Mongondow memiliki pegangan hidup luhur yang dikenal sebagai \"Mototompiaan, Mototabian, bo Mototanoban\" (Saling memperbaiki, saling mengasihi, dan saling merindukan dalam kebaikan). Tradisi ini dipraktikkan saat menanam dan memanen padi gunung di lereng Danau Moat.",
    "philosophicalMeaning": "Trilogi budi pekerti ini melarang fitnah dan dendam, mengutamakan rekonsiliasi musyawarah kekeluargaan, serta saling membantu ketika ada keluarga desa yang tertimpa musibah.",
    "localTerms": [
      {
        "term": "Mototompiaan",
        "meaning": "Saling memperbaiki dan saling mengingatkan jalan kebenaran",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Mototabian",
        "meaning": "Saling mencintai dan mengasihi tanpa memandang derajat",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Mototanoban",
        "meaning": "Saling merindukan dan mengenang budi baik sesama",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Alangan",
        "meaning": "Lumbung padi tradisional bambu panggung tahan tikus",
        "language": "Bolaang Mongondow"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Musyawarah Mododatu",
        "description": "Tetua desa dan pemuda berkumpul di balai adat menentukan awal musim tanam padi gunung berdasarkan peredaran bintang."
      },
      {
        "stepNumber": 2,
        "title": "Menerapkan Sikap Mototompiaan dalam Bekerja",
        "description": "Warga saling bergantian mencangkul ladang saudara tanpa meminta upah uang, diakhiri dengan makan bersama nasi jagung dan ikan air tawar bakar Danau Moat."
      }
    ],
    "preservationAdvice": "Ki Papa Deni Mokodongan: \"Pegang teguh Mototompiaan Mototabian bo Mototanoban. Tiga kata ini yang membuat tanah Mongondow selalu damai dan sejuk.\"",
    "estimatedEra": "Diwariskan sejak masa Datu-Datu Kerajaan Manoppo abad ke-15",
    "tags": [
      "Bolaang Mongondow",
      "Mototompiaan",
      "Kotamobagu",
      "Falsafah Luhur"
    ],
    "likesCount": 164
  },
  {
    "id": "gorontalo-binte-biluhuta-25",
    "title": "Binte Biluhuta (Milu Siram Jagung Manis Cakalang Asap)",
    "subtitle": "Sup Jagung Putih Pulen Kaya Rempah Kelapa & Falsafah Adat Bersendi Syara’",
    "category": "resep",
    "province": "Gorontalo",
    "tribe": "Gorontalo",
    "regionDetail": "Kota Gorontalo & Kabupaten Bone Bolango",
    "elderNarrator": {
      "name": "Ti Nenek Hasna Monoarfa",
      "age": 79,
      "titleOrRole": "Pewaris Resep Tradisional Dapur Dulohupa",
      "location": "Kota Gorontalo"
    },
    "recordedBy": {
      "name": "Mohamad Rifki Daud & Putri Salsabila",
      "schoolOrAffiliation": "SMA Negeri 1 Gorontalo",
      "date": "16 Juli 2024"
    },
    "summary": "Binte Biluhuta (atau Milu Siram) adalah hidangan sup tradisional kebanggaan Gorontalo berbahan dasar jagung putih pulen (binthe kiki) yang dipipil lalu direbus bersama suwiran ikan cakalang asap, udang segar, kelapa setengah tua parut memanjang, kemangi, daun bawang, serta siraman jeruk nipis dan cabai rawit pedas menggelegar.",
    "philosophicalMeaning": "Jagung adalah simbol kesuburan dan ketahanan pangan bumi Serambi Madinah Gorontalo. Paduan rasa manis jagung, gurih kelapa, asam jeruk, dan pedas cabai mengajarkan bahwa hidup harus dilalui dengan sabar menerima segala macam rasa takdir kehidupan.",
    "localTerms": [
      {
        "term": "Binte Biluhuta",
        "meaning": "Jagung yang disiram kuah gurih ikan dan rempah",
        "language": "Gorontalo"
      },
      {
        "term": "Binthe Kiki",
        "meaning": "Varietas jagung putih lokal pulen berbutir kecil khas Gorontalo",
        "language": "Gorontalo"
      },
      {
        "term": "Adati Hula-Hulaa to Saraa",
        "meaning": "Falsafah adat Gorontalo: Adat bersendikan syara’, syara’ bersendikan Kitabullah",
        "language": "Gorontalo"
      },
      {
        "term": "Hulonthalo",
        "meaning": "Sebutan bahasa asli tanah dan masyarakat Gorontalo",
        "language": "Gorontalo"
      }
    ],
    "ingredientsOrMaterials": [
      "Jagung putih lokal Gorontalo pipil 4 tongkol",
      "Ikan cakalang asap suwir halus 300 gram",
      "Udang kupas segar 200 gram",
      "Kelapa parut setengah tua memanjang 1/2 butir",
      "Daun kemangi (balakama) segar 2 ikat",
      "Jeruk nipis pemeras segar 3 buah",
      "Cabai rawit ulek kasar, bawang merah Gorontalo iris, daun bawang"
    ],
    "toolsUsed": [
      "Kuali tanah liat bertutup",
      "Sendok sayur batok kelapa"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Merebus Jagung Pipil Pulen",
        "description": "Rebus biji jagung putih dalam air mendidih hingga empuk kenyal dan mengeluarkan aroma manis pati jagung alami."
      },
      {
        "stepNumber": 2,
        "title": "Memasukkan Ikan Asap dan Udang",
        "description": "Masukkan suwiran ikan cakalang asap yang memberi aroma smoky khas pesisir Teluk Tomini bersama udang segar dan irisan bawang merah."
      },
      {
        "stepNumber": 3,
        "title": "Mencampurkan Kelapa Parut dan Sayur Wangi",
        "description": "Masukkan parutan kelapa muda memanjang, daun kemangi, dan daun bawang. Aduk perlahan hingga semua rempah menyatu tanpa santan kental."
      },
      {
        "stepNumber": 4,
        "title": "Penyajian dengan Kucuran Jeruk Nipis",
        "description": "Sajikan selagi panas mengepul, beri perasan jeruk nipis dan ulekan cabai rawit sesuai selera kepedasan."
      }
    ],
    "preservationAdvice": "Ti Nenek Hasna berpesan: \"Binte Biluhuta asli harus pakai jagung putih lokal Gorontalo dan ikan cakalang asap kayu, jangan diganti jagung kaleng manis karena rasanya akan hambar.\"",
    "estimatedEra": "Diwariskan sejak masa Lima Pohala’a (abad ke-15) di Gorontalo",
    "tags": [
      "Binte Biluhuta",
      "Milu Siram",
      "Gorontalo",
      "Jagung Pulen",
      "Hulonthalo"
    ],
    "likesCount": 236,
    "audioNoteDuration": "04:48"
  },
  {
    "id": "gorontalo-sulam-karawo-26",
    "title": "Kain Sulam Karawo: Mahakarya Cabut Benang dengan Ketelitian Milimeter",
    "subtitle": "Seni Rupa Kain Leluhur Wanita Gorontalo Lambang Kesabaran & Ketabahan Jiwa",
    "category": "kerajinan",
    "province": "Gorontalo",
    "tribe": "Gorontalo",
    "regionDetail": "Kabupaten Gorontalo & Bone Bolango",
    "elderNarrator": {
      "name": "Ti Nenek Ramlah Modanggu",
      "age": 74,
      "titleOrRole": "Maestro Pengrajin Sulam Karawo",
      "location": "Telaga, Kabupaten Gorontalo"
    },
    "recordedBy": {
      "name": "Fauzan Hasyim & Anisa Hippy",
      "schoolOrAffiliation": "SMA Negeri 1 Telaga",
      "date": "22 Agustus 2024"
    },
    "summary": "Karawo adalah seni kriya sulaman khas Gorontalo yang sangat unik dan langka. Dibuat dengan cara mengiris dan mencabut serat benang kain tenun satu per satu secara teliti menggunakan silet dan jarum jahit hingga membentuk kisi-kisi kotak jala berpori, lalu disulam kembali dengan benang aneka warna mengikuti motif khas bungalo dan mahkota adat.",
    "philosophicalMeaning": "Kata Karawo berasal dari \"Mokarawo\" yang berarti mengiris dan menyulam dengan kesabaran luar biasa. Untuk membuat sehelai kain bisa memakan waktu 1 hingga 3 bulan. Menjadi simbol ketabahan, kesucian, dan keanggunan perempuan Gorontalo.",
    "localTerms": [
      {
        "term": "Karawo",
        "meaning": "Seni menyulam kain dengan mencabut benang lalu menyulamnya kembali",
        "language": "Gorontalo"
      },
      {
        "term": "Mokarawo",
        "meaning": "Proses mencabut dan mengikat benang helai demi helai",
        "language": "Gorontalo"
      },
      {
        "term": "Bantayo Poboide",
        "meaning": "Gedung musyawarah adat tetua Gorontalo",
        "language": "Gorontalo"
      }
    ],
    "ingredientsOrMaterials": [
      "Kain katun atau sutra polos berserat rapat lurus",
      "Benang sulam sutra warna-warni mengkilap",
      "Malam lilin penanda garis motif"
    ],
    "toolsUsed": [
      "Jarum sulam baja runcing mini",
      "Silet pemotong serat helai",
      "Pembidang kayu rotan (pemegang kain)"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menggambar Sketsa Pola Geometris Adat",
        "description": "Pengrajin menggambar motif bunga atau sulur adat pada kertas berpetak milimeter."
      },
      {
        "stepNumber": 2,
        "title": "Mencabut Benang Kain (Mokarawo)",
        "description": "Dengan ketelitian tingkat tinggi dan penglihatan tajam, helai benang kain dipotong dan ditarik keluar satu demi satu membentuk kisi-kisi lubang teratur."
      },
      {
        "stepNumber": 3,
        "title": "Menyulam dan Mengikat Kisi (Makarawo)",
        "description": "Jarum benang sutra disusupkan mengikat kolom-kolom serat yang tersisa hingga motif timbul memukau di atas kain tembus pandang."
      }
    ],
    "preservationAdvice": "Ti Nenek Ramlah berpesan: \"Karawo ini dikerjakan dengan mata dan hati nurani. Jangan sampai cucu-cucu perempuan Gorontalo enggan belajar mencabut benang, karena kain ini adalah kebanggaan martabat kita.\"",
    "estimatedEra": "Tercatat sejak zaman Kesultanan Gorontalo abad ke-17",
    "tags": [
      "Karawo",
      "Sulam Karawo",
      "Gorontalo",
      "Kriya Sulam",
      "Hulonthalo"
    ],
    "likesCount": 284
  },
  {
    "id": "bugis-cerita-sawerigading-danau-matano",
    "title": "Epos I La Galigo: Legenda Sawerigading & Danau Matano",
    "subtitle": "Kisah Turunnya Tomanurung, Perahu Raksasa Welenrengnge, dan Asal-Usul Tanah Luwu Kuno",
    "category": "cerita_sejarah",
    "province": "Sulawesi Selatan",
    "tribe": "Bugis",
    "regionDetail": "Kedatuan Luwu & Danau Matano",
    "elderNarrator": {
      "name": "Puang Sanro Opu Daeng Mattappa",
      "age": 86,
      "titleOrRole": "Penutur Sastra Lontara & Tetua Adat Luwu",
      "location": "Watu Bone & Danau Matano"
    },
    "recordedBy": {
      "name": "Andi Tenri & Tim Peneliti Bahasa Bugis",
      "schoolOrAffiliation": "Fakultas Ilmu Budaya Unhas",
      "date": "12 Agustus 2024"
    },
    "summary": "I La Galigo adalah naskah wiracarita terpanjang di dunia (lebih dari 300.000 baris) yang menceritakan petualangan epik Sawerigading. Kisah berpusat pada penjelajahan samudra, pertarungan ksatria, pembuatan perahu sakral dari pohon raksasa Welenrengnge, dan penciptaan keteraturan kosmis antara Boting Langiq (dunia atas) dan Buri Liu (dunia bawah).",
    "philosophicalMeaning": "Mengajarkan penghormatan mendalam pada alam gaib dan ekologi hutan. Penebangan pohon raksasa Welenrengnge yang menumbangkan sarang burung pipit dan meremukkan desa mengajarkan bahwa tindakan manusia mengeksploitasi alam selalu membawa konsekuensi kosmis yang harus ditebus dengan kesadaran tobat moral.",
    "localTerms": [
      {
        "term": "I La Galigo",
        "meaning": "Epos mitologi penciptaan dan kepahlawanan Bugis purba",
        "language": "Bugis",
        "pronunciationTip": "I La Ga-li-go"
      },
      {
        "term": "Sawerigading",
        "meaning": "Tokoh ksatria penjelajah legendaris Luwu pembawa hukum adat",
        "language": "Bugis"
      },
      {
        "term": "Welenrengnge",
        "meaning": "Pohon mitis raksasa penyangga bumi yang dijadikan lunas perahu sakral",
        "language": "Bugis"
      },
      {
        "term": "Tomanurung",
        "meaning": "Makhluk mulia yang turun dari langit untuk mengakhiri zaman kekacauan anarki (sianre-bale)",
        "language": "Bugis"
      },
      {
        "term": "Boting Langiq",
        "meaning": "Dunia atas kahyangan tempat bersemayam para dewa",
        "language": "Bugis"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Zaman Kekacauan Anarki Sianre-Bale",
        "description": "Dunia mengalami zaman kegelapan di mana yang kuat memangsa yang lemah laksana ikan di laut (sianre-bale). Para dewa di Boting Langiq memutuskan menurunkan Tomanurung Batara Guru ke Bumi Luwu untuk mendirikan tatanan hukum beradab."
      },
      {
        "stepNumber": 2,
        "title": "Kelahiran Sawerigading dan We Cudai",
        "description": "Dari trah keturunan Batara Guru lahirlah Sawerigading yang dianugerahi ketangkasan ilmu bahari dan keberanian menantang gelombang. Namun ia diuji oleh takdir cinta terlarang hingga harus berlayar jauh ke negeri Tiongkok mencari Putri We Cudai."
      },
      {
        "stepNumber": 3,
        "title": "Penebangan Pohon Sakral Welenrengnge",
        "description": "Untuk membuat perahu layar yang mampu mengarungi samudra terluas, ditebanglah pohon raksasa Welenrengnge. Saat pohon itu tumbang ke Danau Matano, getarannya mengguncang bumi dan melahirkan ribuan pulau karang serta mata air jernih."
      },
      {
        "stepNumber": 4,
        "title": "Pesan Terakhir di Danau Purba",
        "description": "Setelah menyelesaikan misinya, Sawerigading tidak wafat melainkan moksa turun ke dunia bawah (Buri Liu), meninggalkan titah agar keturunan Bugis selalu berlayar dengan kejujuran (lempu) dan keberanian martabat (siriq)."
      }
    ],
    "preservationAdvice": "Puang Sanro berpesan: \"La Galigo bukan sekadar dongeng pengantar tidur. Di dalamnya tersimpan panduan menjaga hutan bakau, danau purba Matano, dan etika bahari pelaut Bugis. Anak muda harus membaca Lontara agar tidak kehilangan kompas identitas.\"",
    "estimatedEra": "Sastra lisan prasejarah terhimpun sejak abad ke-14",
    "tags": [
      "La Galigo",
      "Sawerigading",
      "Cerita Leluhur",
      "Mitologi Bugis",
      "Luwu"
    ],
    "likesCount": 312
  },
  {
    "id": "bugis-bahasa-kajao-laliddong",
    "title": "Pappaseng & Ungkapan Bijak Kajao Laliddong",
    "subtitle": "Falsafah Integritas Perkataan \"Taro Ada Taro Gau\" & Aksara Lontara Bugis",
    "category": "bahasa",
    "province": "Sulawesi Selatan",
    "tribe": "Bugis",
    "regionDetail": "Watampone, Kabupaten Bone",
    "elderNarrator": {
      "name": "Puang Arung Marampeng",
      "age": 81,
      "titleOrRole": "Filolog Aksara Lontara & Budayawan Bone",
      "location": "Watampone, Bone"
    },
    "recordedBy": {
      "name": "Andi Muh. Fajar & Siti Fauziah",
      "schoolOrAffiliation": "SMA Negeri 1 Watampone",
      "date": "18 September 2024"
    },
    "summary": "Kajao Laliddong adalah penasihat agung Raja Bone ke-6 La Uliyo Bote’e pada abad ke-16. Ia mewariskan ribuan untaian kata mutiara lisan (pappaseng) tentang kenegarawanan, keadilan sosial, dan integritas moral yang kini terukir abadi dalam aksara Lontara Bugis.",
    "philosophicalMeaning": "\"Taro ada taro gau\" artinya: satukanlah perkataan dengan perbuatan. Pemimpin sejati diibaratkan tiang rumah yang lurus; jika tiang itu bengkok, seluruh istana akan roboh menimpa rakyat jelata.",
    "localTerms": [
      {
        "term": "Taro Ada Taro Gau",
        "meaning": "Integritas tertinggi: perkataan yang diucapkan wajib dibuktikan dalam tindakan nyata",
        "language": "Bugis",
        "pronunciationTip": "Ta-ro A-da Ta-ro Ga-u"
      },
      {
        "term": "Lempu",
        "meaning": "Kejujuran tanpa pamrih dan ketulusan hati",
        "language": "Bugis"
      },
      {
        "term": "Getteng",
        "meaning": "Ketegasan memegang prinsip hukum tanpa pandang bulu",
        "language": "Bugis"
      },
      {
        "term": "Ada Tongeng",
        "meaning": "Perkataan yang benar dan membawa kemaslahatan bersama",
        "language": "Bugis"
      },
      {
        "term": "Temmapasilasae",
        "meaning": "Keadilan yang tidak memihak kepada sanak saudara atau orang kaya",
        "language": "Bugis"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Empat Syarat Pemimpin yang Dihormati Rakyat",
        "description": "Kajao Laliddong merumuskan: Malempu (jujur), Magetteng (tegas), Macca (cerdas berpengetahuan), dan Warani (berani membela kebenaran). Jika keempatnya bersatu, negeri akan makmur sentosa."
      },
      {
        "stepNumber": 2,
        "title": "Ibarat Kayu Lurus Rumah Saoraja",
        "description": "\"Aju maluruemi riyala parewa bola\" (Hanya kayu lurus yang dapat dijadikan bahan rumah tiang panggung). Begitu pula hanya orang jujur yang pantas memegang amanah jabatan publik."
      },
      {
        "stepNumber": 3,
        "title": "Mewariskan Lewat Daun Lontar",
        "description": "Petuah ini digoreskan dengan kalam ijuk aren pada helai daun lontar kering (leko’ tala), lalu dilantunkan secara berirama dalam pertemuan adat tudang sipulung desa."
      }
    ],
    "preservationAdvice": "Puang Arung Marampeng berpesan: \"Ketikkanlah pappaseng leluhur ini di status gawaimu, wahai anak muda. Jangan jadikan janji manis sebagai kebohongan, pegang teguh taro ada taro gau di manapun kakimu berpijak.\"",
    "estimatedEra": "Era Kedatuan Bone abad ke-16",
    "tags": [
      "Bahasa Bugis",
      "Pappaseng",
      "Lontara",
      "Taro Ada Taro Gau",
      "Kajao Laliddong"
    ],
    "likesCount": 268
  },
  {
    "id": "makassar-cerita-datu-museng-maipa",
    "title": "Hikayat Datu Museng & Maipa Deapati di Benteng Somba Opu",
    "subtitle": "Kisah Kesetiaan Cinta, Sumpah Ksatria, dan Pertahanan Heroik Kerajaan Gowa",
    "category": "cerita_sejarah",
    "province": "Sulawesi Selatan",
    "tribe": "Makassar",
    "regionDetail": "Benteng Somba Opu & Gowa",
    "elderNarrator": {
      "name": "Daeng Jarre",
      "age": 79,
      "titleOrRole": "Pencerita Sejarah Lisan Gowa-Tallo",
      "location": "Somba Opu, Gowa"
    },
    "recordedBy": {
      "name": "Ilham Syahputra & Nur Madani",
      "schoolOrAffiliation": "SMK Negeri 1 Somba Opu",
      "date": "05 Agustus 2024"
    },
    "summary": "Kisah epik kepahlawanan dan romantisme tragis abad ke-17 di Kerajaan Gowa. Datu Museng, seorang panglima ksatria sakti, bersama istrinya Maipa Deapati putri bangsawan Sumbawa, mempertahankan kehormatan dan kedaulatan Benteng Somba Opu dari kepungan armada penjajah kolonial.",
    "philosophicalMeaning": "Mengajarkan nilai kesetiaan tanpa batas dan martabat harga diri (Siri’ na Pacce). Lebih mulia gugur bersanding dengan kehormatan suci di tanah pusaka daripada hidup tertunduk tunduk di bawah telapak kaki tirani.",
    "localTerms": [
      {
        "term": "Datu Museng",
        "meaning": "Panglima ksatria sakti pelindung kedaulatan tanah Somba Opu",
        "language": "Makassar"
      },
      {
        "term": "Maipa Deapati",
        "meaning": "Putri rupawan bangsawan lambang keteguhan janji cinta suci",
        "language": "Makassar"
      },
      {
        "term": "Siri’ Dandanan",
        "meaning": "Kehormatan keluarga dan tanah tumpah darah yang wajib dibela mati-matian",
        "language": "Makassar"
      },
      {
        "term": "Tubarania",
        "meaning": "Pasukan pemberani tanpa rasa takut di garda depan pertempuran",
        "language": "Makassar"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Pertemuan di Tanah Sumbawa dan Janji Suci",
        "description": "Datu Museng yang merantau menuntut ilmu bela diri dan agama terpikat pada Maipa Deapati. Keduanya mengikat sumpah setia sehidup semati meski menghadapi rintangan intrik istana."
      },
      {
        "stepNumber": 2,
        "title": "Panggilan Tanah Air Somba Opu",
        "description": "Ketika genderang perang berdentang di Selat Makassar dan Benteng Somba Opu diserang armada kolonial, Datu Museng terpanggil pulang memimpin laskar Tubarania."
      },
      {
        "stepNumber": 3,
        "title": "Pertempuran Sengit Membela Benteng",
        "description": "Dengan badik terhunus dan ilmu kebal pusaka, Datu Museng memukul mundur gelombang serangan musuh demi melindungi gerbang benteng perniagaan rempah Makassar."
      },
      {
        "stepNumber": 4,
        "title": "Sumpah Abadi Sang Kekasih",
        "description": "Ketika kepungan kian menjepit dan Maipa terancam ditawan musuh yang ingin merebutnya, Maipa meminta Datu Museng sendiri yang mengakhiri hayatnya demi menjaga kehormatan kesuciannya (Siri’). Datu Museng lalu menerjang ke tengah musuh hingga syahid menjemput."
      }
    ],
    "preservationAdvice": "Daeng Jarre menasihati: \"Cinta sejati bukan sekadar kata-kata di layar ponsel. Cinta sejati menuntut pengorbanan budi pekerti dan kehormatan siri’. Ceritakanlah kisah Datu Museng kepada anak cucumu agar mereka tahu arti kesetiaan.\"",
    "estimatedEra": "Perang Makassar abad ke-17 (sekitar 1667-1669 Masehi)",
    "tags": [
      "Datu Museng",
      "Maipa Deapati",
      "Somba Opu",
      "Cerita Leluhur",
      "Makassar"
    ],
    "likesCount": 295
  },
  {
    "id": "makassar-bahasa-kelong-kualleangi",
    "title": "Kelong Sastra Lisan & Sumpah: Kualleangi Tallanga Na Toalia",
    "subtitle": "Puisi Pantun Bertutur 8-8-5-8 & Petuah Keteguhan Mental Pelaut Samudera",
    "category": "bahasa",
    "province": "Sulawesi Selatan",
    "tribe": "Makassar",
    "regionDetail": "Kota Makassar & Takalar",
    "elderNarrator": {
      "name": "Daeng Mangngassai",
      "age": 77,
      "titleOrRole": "Maestro Kelong & Pelaut Gaek Galesong",
      "location": "Galesong, Takalar"
    },
    "recordedBy": {
      "name": "Fadli Rahman & Rina Melati",
      "schoolOrAffiliation": "SMA Negeri 1 Galesong",
      "date": "25 Juli 2024"
    },
    "summary": "Kelong adalah genre puisi lisan tradisional suku Makassar yang memiliki pola metrum ketat (baris 1: 8 suku kata, baris 2: 8 suku kata, baris 3: 5 suku kata, baris 4: 8 suku kata). Kelong didendangkan saat mendayung perahu, memanen padi, mengantar pengantin, atau mengobarkan keberanian ksatria mengarungi samudra.",
    "philosophicalMeaning": "\"Kualleangi tallanga na toalia\" (Lebih kupilih tenggelam di dasar samudra daripada kembali surut tanpa hasil). Mengajarkan tekad baja, konsistensi perjuangan, dan pantang putus asa dalam menghadapi tantangan hidup.",
    "localTerms": [
      {
        "term": "Kelong",
        "meaning": "Puisi lisan empat baris berirama khas bahasa Makassar",
        "language": "Makassar",
        "pronunciationTip": "Ke-long"
      },
      {
        "term": "Kualleangi tallanga na toalia",
        "meaning": "Lebih baik tenggelam daripada surut langkah ke belakang",
        "language": "Makassar"
      },
      {
        "term": "Kelong Pangujuki",
        "meaning": "Kelong bujukan asmara dan sanjungan keluhuran wanita",
        "language": "Makassar"
      },
      {
        "term": "Kelong Pammopprang",
        "meaning": "Kelong perpisahan penuh haru saat hendak berlayar jauh",
        "language": "Makassar"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengenal Ritme Metrum 8-8-5-8",
        "description": "Setiap baris kelong dihitung ketukan suku katanya: \"Kualleangi tallanga\" (8), \"na toalia ri laukang\" (8), \"sombere’ baji’\" (5), \"na kuampa’ sallang battu\" (8). Ketukan ini menyatu dengan ayunan dayung para nelayan."
      },
      {
        "stepNumber": 2,
        "title": "Mendendangkan Kelong di Tengah Ombak",
        "description": "Para pelaut melantunkan kelong bersahut-sahutan di malam hari saat bintang pari terbit di ufuk selatan untuk mengusir rasa kantuk dan rasa takut pada badai."
      },
      {
        "stepNumber": 3,
        "title": "Penerapan Mental Pantang Menyerah di Era Modern",
        "description": "Semboyan \"Kualleangi tallanga na toalia\" kini menjadi etos kerja anak muda Makassar: bila sudah bertekad menempuh pendidikan atau usaha yang halal, tuntaskanlah hingga berhasil."
      }
    ],
    "preservationAdvice": "Daeng Mangngassai berpesan: \"Anak muda jangan malu berbahasa Makassar. Dengarkan nada kelong kakekmu, karena di dalamnya tersimpan ketangguhan jiwa yang tak mudah goyah oleh badai zaman.\"",
    "estimatedEra": "Warisan lisan maritim Kesultanan Tallo & Gowa abad ke-16",
    "tags": [
      "Kelong",
      "Bahasa Makassar",
      "Sumpah Pelaut",
      "Kualleangi Tallanga",
      "Sastra Lisan"
    ],
    "likesCount": 247
  },
  {
    "id": "toraja-cerita-banua-deata",
    "title": "Mitos Tongkonan Pertama: Banua Ba’ba Deata di Puncak Kandora",
    "subtitle": "Kisah Puang Tamborolangi’ Turun Membawa Rancangan Rumah Beratap Perahu Langit",
    "category": "cerita_sejarah",
    "province": "Sulawesi Selatan",
    "tribe": "Toraja",
    "regionDetail": "Kandora, Mengkendek & Kete Kesu",
    "elderNarrator": {
      "name": "Ne’ Pong Rantetoding",
      "age": 84,
      "titleOrRole": "To Parengnge’ (Pemangku Adat Utama) Tongkonan Kua",
      "location": "Kandora, Tana Toraja"
    },
    "recordedBy": {
      "name": "Yulius Rante & Martha Sambo",
      "schoolOrAffiliation": "SMA Katolik Rantepao",
      "date": "16 Juli 2024"
    },
    "summary": "Menurut keyakinan Aluk Todolo, rumah adat Tongkonan bukan diciptakan oleh manusia fana semata, melainkan dirancang langsung di kahyangan oleh Puang Matua. Nenek moyang pertama Toraja, Puang Tamborolangi’, turun membawa model rumah \"Banua Ba’ba Deata\" (Rumah Berpintu Gerbang Dewa) yang diletakkan di puncak Gunung Kandora.",
    "philosophicalMeaning": "Atap melengkung menyerupai perahu mengingatkan suku Toraja bahwa nenek moyang mereka tiba di pulau ini melintasi samudra luas. Tongkonan menghadap ke utara (Ulunna Langi’) melambangkan rasa syukur dan doa agar kehidupan selalu dialiri berkah air sungai dan cahaya fajar.",
    "localTerms": [
      {
        "term": "Banua Ba’ba Deata",
        "meaning": "Tongkonan pertama asal segala tongkonan bermula",
        "language": "Toraja",
        "pronunciationTip": "Ba-nu-a Ba'-ba De-a-ta"
      },
      {
        "term": "Puang Tamborolangi’",
        "meaning": "Manurung pertama di Toraja yang turun di Gunung Kandora",
        "language": "Toraja"
      },
      {
        "term": "Alang Sura’",
        "meaning": "Lumbung padi berukir di hadapan tongkonan simbol ketahanan pangan",
        "language": "Toraja"
      },
      {
        "term": "A’pa’ Oto’na",
        "meaning": "Empat pilar utama penyangga adat kehidupan Toraja",
        "language": "Toraja"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Turunnya Tangga Bambu Kahyangan (Eran di Langi’)",
        "description": "Kisah menceritakan dahulu kala ada tangga bambu bertatahkan pelangi yang menghubungkan bumi dan langit di puncak Kandora, tempat manusia dan dewa saling bertukar kabar."
      },
      {
        "stepNumber": 2,
        "title": "Membangun Banua Ba’ba Deata",
        "description": "Puang Tamborolangi’ mengumpulkan kayu uru pilihan dan ijuk aren hitam. Ia menegakkan tiang tengah utama (A’riri Posi’) yang menjadi pusar keseimbangan rumah adat."
      },
      {
        "stepNumber": 3,
        "title": "Mengukir Passura’ dengan Pewarna Alami",
        "description": "Dinding tongkonan diukir empat warna kosmis: kuning (damai dan berkat), merah (darah dan keberanian manusia), hitam (kegelapan kematian), dan putih (tulang dan kesucian niat)."
      },
      {
        "stepNumber": 4,
        "title": "Pemisahan Langit dan Bumi",
        "description": "Setelah manusia melanggar sumpah pamali, tangga kahyangan runtuh. Sejak saat itu, setiap keturunan Toraja wajib memelihara tongkonan keluarga sebagai tempat berkumpul dan berdamai."
      }
    ],
    "preservationAdvice": "Ne’ Pong Rantetoding berpesan: \"Walaupun engkau sukses bersekolah hingga ke Eropa atau Amerika, jangan lupakan Tongkonan tempat ari-arimu dikubur. Pulanglah saat Rambu Solo’ untuk memeluk kembali keluargamu.\"",
    "estimatedEra": "Mitos awal peradaban Toraja Kuno (abad ke-10 atau lebih purba)",
    "tags": [
      "Tongkonan",
      "Banua Ba'ba Deata",
      "Puang Tamborolangi",
      "Mitologi Toraja",
      "Kete Kesu"
    ],
    "likesCount": 304
  },
  {
    "id": "toraja-bahasa-singgi-sastra-adat",
    "title": "Singgi’ & Kada Rao-Rao: Sastra Lisan Sakral Upacara Toraja",
    "subtitle": "Seni Retorika Kiasan Berbahasa Toraja Tinggi yang Dilantunkan Para To Parengnge’",
    "category": "bahasa",
    "province": "Sulawesi Selatan",
    "tribe": "Toraja",
    "regionDetail": "Rantepao & Makale",
    "elderNarrator": {
      "name": "Puang Ambe’ Sanggalangi’",
      "age": 82,
      "titleOrRole": "To Minaa (Pakar Sastra Kuno & Doa Aluk Todolo)",
      "location": "Kesu’, Toraja Utara"
    },
    "recordedBy": {
      "name": "Yosias Tandilangi’",
      "schoolOrAffiliation": "Institut Agama Kristen Toraja",
      "date": "28 Agustus 2024"
    },
    "summary": "Singgi’ adalah sastra lisan berpantun kiasan tingkat tinggi dalam bahasa Toraja Kuno (Kada Tominaa). Diucapkan oleh pemuka adat pada pembukaan pesta syukur Rambu Tuka’ maupun kedukaan Rambu Solo’. Untaian kata-katanya penuh metafora puitis yang menceritakan silsilah leluhur, kemuliaan budi pekerti, dan harapan panen melimpah.",
    "philosophicalMeaning": "Menjunjung prinsip \"Kandean sanglalan, inuam sangtetesan\" (Satu suap senasib, satu tetes air minum sepenanggungan). Kata-kata dalam Singgi’ tidak boleh mengandung kesombongan atau merendahkan klan keluarga lain.",
    "localTerms": [
      {
        "term": "Singgi’",
        "meaning": "Sastra lisan orasi pujian berirama tinggi di hadapan masyarakat adat",
        "language": "Toraja",
        "pronunciationTip": "Sing-gi'"
      },
      {
        "term": "Kada Rao-Rao",
        "meaning": "Kata-kata halus bermajas perumpamaan yang menyejukkan hati",
        "language": "Toraja"
      },
      {
        "term": "To Parengnge’",
        "meaning": "Pemimpin adat yang memangku amanah tongkonan",
        "language": "Toraja"
      },
      {
        "term": "Misa’ Kada Dipotuo",
        "meaning": "Kesepakatan bersama yang memberi hidup",
        "language": "Toraja"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mempersiapkan Suara dan Pikiran Jernih",
        "description": "Seorang To Minaa berpuasa berbicara kotor sebelum upacara, meminum tuak manis segar untuk melembutkan pita suara, dan memusatkan batin pada Sang Pencipta."
      },
      {
        "stepNumber": 2,
        "title": "Melantunkan Singgi’ dari Atas Panggung Bala’kayu",
        "description": "Dengan intonasi yang mengayun laksana desir angin di pucuk pohon pinus, To Minaa melafalkan bait-bait silsilah keluarga tanpa membaca teks secarik pun."
      },
      {
        "stepNumber": 3,
        "title": "Pemberian Restu kepada Seluruh Tamu",
        "description": "Kata penutup Singgi’ selalu diakhiri dengan doa keselamatan agar padi di lumbung penuh dan anak cucu hidup dalam persaudaraan rukun."
      }
    ],
    "preservationAdvice": "Puang Sanggalangi’ memperingatkan: \"Kada Tominaa kini tinggal dihafal oleh segelintir kakek-kakek tua. Rekamlah di aplikasi ini wahai pelajar, sebelum bahasa para dewa ini lenyap ditelan zaman.\"",
    "estimatedEra": "Tradisi lisan turun-temurun sejak era megalitik Toraja",
    "tags": [
      "Singgi",
      "Bahasa Toraja",
      "Sastra Lisan",
      "Rambu Tuka",
      "Rambu Solo"
    ],
    "likesCount": 221
  },
  {
    "id": "mandar-cerita-sandeq-todilaling",
    "title": "Hikayat I Manyambungi Todilaling & Sejarah Perahu Sandeq Mandar",
    "subtitle": "Kisah Maraqdia Balanipa Pertama Menyatukan Tujuh Muara Pesisir Pitu Baqbana Binanga",
    "category": "cerita_sejarah",
    "province": "Sulawesi Barat",
    "tribe": "Mandar",
    "regionDetail": "Balanipa, Majene & Polewali",
    "elderNarrator": {
      "name": "Puang Maraqdia Kakanna Bahar",
      "age": 81,
      "titleOrRole": "Tetua Keturunan Adat Balanipa Mandar",
      "location": "Balanipa, Majene"
    },
    "recordedBy": {
      "name": "Muhammad Asri & Nurfaidah",
      "schoolOrAffiliation": "SMA Negeri 1 Balanipa",
      "date": "03 Agustus 2024"
    },
    "summary": "I Manyambungi bergelar Todilaling adalah pahlawan pendiri Kerajaan Balanipa pada abad ke-16. Ia menyatukan persekutuan pesisir \"Pitu Baqbana Binanga\" (Tujuh Muara Sungai) dan persekutuan pegunungan \"Pitu Ulunna Salu\". Dari kepiawaian pelaut Balanipa inilah disempurnakan lambung perahu Sandeq—perahu layar cadik paling ramping dan tercepat di Nusantara.",
    "philosophicalMeaning": "Mengajarkan kepemimpinan yang berlandaskan hukum mufakat dan penghormatan timbal balik antara orang pesisir dan orang gunung. Keduanya saling melengkapi seperti halnya lambung perahu dan cadik penyeimbangnya.",
    "localTerms": [
      {
        "term": "Todilaling",
        "meaning": "Gelar I Manyambungi, pendiri dan Maraqdia Balanipa pertama yang agung",
        "language": "Mandar"
      },
      {
        "term": "Pitu Baqbana Binanga",
        "meaning": "Persekutuan tujuh kerajaan muara pantai di Mandar",
        "language": "Mandar"
      },
      {
        "term": "Pitu Ulunna Salu",
        "meaning": "Persekutuan tujuh kerajaan hulu sungai di pegunungan Mamasa",
        "language": "Mandar"
      },
      {
        "term": "Maraqdia",
        "meaning": "Raja atau pemimpin yang memegang amanat keadilan rakyat Mandar",
        "language": "Mandar"
      },
      {
        "term": "Sandeq",
        "meaning": "Perahu cadik tajam runcing pelari cepat penakluk Selat Makassar",
        "language": "Mandar"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Masa Penindasan dan Bangkitnya Sang Kesatria",
        "description": "Rakyat pesisir Mandar dahulu kerap diganggu bajak laut dan tirani penguasa sewenang-wenang. I Manyambungi yang berguru ilmu silat dan kepemimpinan di tanah Gowa kembali untuk membebaskan rakyatnya."
      },
      {
        "stepNumber": 2,
        "title": "Perjanjian Damai Allamungan Batu di Luyo",
        "description": "Di bawah naungan pohon rindang di Luyo, para pemuka adat mengubur sebongkah batu besar sebagai sumpah sakral: selama batu itu tidak terapung, persekutuan Pitu Baqbana Binanga tak boleh saling mengkhianati."
      },
      {
        "stepNumber": 3,
        "title": "Lahirnya Armada Perahu Sandeq Putih",
        "description": "Para tukang kayu merancang perahu yang tidak membutuhkan dayung banyak, melainkan mengandalkan sayap angin dengan layar segitiga sombaq tanja’. Perahu Sandeq melesat bagai anak panah melintasi Selat Makassar hingga perairan Kalimantan."
      },
      {
        "stepNumber": 4,
        "title": "Amanah Sipamandar",
        "description": "Todilaling menegaskan bahwa orang Mandar wajib saling tolong-menolong (Sipamandar), pantang berbohong, dan pantang merendahkan orang miskin."
      }
    ],
    "preservationAdvice": "Puang Maraqdia Bahar berpesan: \"Perahu Sandeq adalah martabat orang Mandar di atas laut. Jangan biarkan anak cucu kita hanya menonton Sandeq di festival wisata; mereka harus tahu filosofi keberanian Todilaling di baliknya.\"",
    "estimatedEra": "Awal abad ke-16 (era perjanjian Allamungan Batu di Luyo)",
    "tags": [
      "Todilaling",
      "Balanipa",
      "Sandeq",
      "Mandar",
      "Cerita Leluhur",
      "Pitu Baqbana Binanga"
    ],
    "likesCount": 279
  },
  {
    "id": "mandar-bahasa-kalindaqdaq",
    "title": "Kalindaqdaq Mandar: Puisi Lisan Pelaut Penakluk Ombak",
    "subtitle": "Sastra Bertutur Empat Baris Berima Sarat Nasihat Asmara, Adab, dan Ketabahan Jiwa",
    "category": "bahasa",
    "province": "Sulawesi Barat",
    "tribe": "Mandar",
    "regionDetail": "Polewali Mandar & Majene",
    "elderNarrator": {
      "name": "Kakanna Suriati",
      "age": 73,
      "titleOrRole": "Pewaris Tembang Kalindaqdaq Pesisir Pambusuang",
      "location": "Pambusuang, Polewali Mandar"
    },
    "recordedBy": {
      "name": "Firman Syarif & Wardani",
      "schoolOrAffiliation": "SMA Negeri 1 Tinambung",
      "date": "09 Juli 2024"
    },
    "summary": "Kalindaqdaq adalah sastra puisi lisan empat baris khas masyarakat Mandar yang memiliki aturan rima suku kata (8-7-5-7). Puisi ini menjadi media bertutur yang sangat luwes: digunakan oleh pelaut untuk mengirim pesan rindu ke daratan, pemuda meminang pujaan hati, hingga tetua menasihati calon pemimpin kampung.",
    "philosophicalMeaning": "Mengajarkan adab kesopanan tingkat tinggi (Malaqbi). Orang Mandar pantang berkata kasar secara vulgar; segala teguran atau kritik sosial selalu dibungkus dalam metafora Kalindaqdaq yang anggun dan berkelas.",
    "localTerms": [
      {
        "term": "Kalindaqdaq",
        "meaning": "Puisi pantun lisan empat baris berima khas suku Mandar",
        "language": "Mandar",
        "pronunciationTip": "Ka-lin-daq-daq"
      },
      {
        "term": "Malaqbi",
        "meaning": "Anggun budi pekerti, luhur perkataan, dan sopan tindak tanduk",
        "language": "Mandar"
      },
      {
        "term": "Posaraq",
        "meaning": "Adat sopan santun ketimuran yang wajib dijaga dalam pergaulan",
        "language": "Mandar"
      },
      {
        "term": "Passangkayang",
        "meaning": "Pelaut juru mudi yang memegang kendali arah perahu",
        "language": "Mandar"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengenal Susunan Struktur Bait 8-7-5-7",
        "description": "Contoh bait Kalindaqdaq: \"Makarana bombing tallu\" (8), \"Pangilona sandeqku\" (7), \"Daiq di polo\" (5), \"Nangissangngi tangnga lita\" (7). Setiap hentakan baris mencerminkan irama ombak laut Mandar."
      },
      {
        "stepNumber": 2,
        "title": "Tradisi Berbalas Kalindaqdaq di Malam Sayyang Pattu’du",
        "description": "Saat festival kuda menari (Sayyang Pattu’du), pemuda dan tetua saling melontarkan bait Kalindaqdaq memuji kecerdasan anak-anak yang menamatkan bacaan Al-Qur’an."
      },
      {
        "stepNumber": 3,
        "title": "Menyimpan Petuah Moral ke Generasi Digital",
        "description": "Sastra Kalindaqdaq mengajari pelajar menulis karya puitis yang mendidik jiwa, menjauhkan ujaran kebencian di media daring."
      }
    ],
    "preservationAdvice": "Kakanna Suriati berpesan: \"Kalau bahasa Mandar dan Kalindaqdaq hilang, maka hilanglah roh kelembutan watak perempuan Mandar. Jangan malu bersenandung di beranda rumah panggung.\"",
    "estimatedEra": "Tumbuh sejak era Kesultanan Balanipa abad ke-16",
    "tags": [
      "Kalindaqdaq",
      "Bahasa Mandar",
      "Puisi Lisan",
      "Malaqbi",
      "Sastra Nusantara"
    ],
    "likesCount": 236
  },
  {
    "id": "kaili-cerita-uwentira-lindu",
    "title": "Legenda Lembah Palu, Pohon Uwentira & Danau Lindu",
    "subtitle": "Cerita Tetua tentang Pue Nggari, Danau Purba di Atas Awan, dan Pantangan Menjaga Hutan Adat",
    "category": "cerita_sejarah",
    "province": "Sulawesi Tengah",
    "tribe": "Kaili",
    "regionDetail": "Lembah Palu & Dataran Tinggi Kulawi",
    "elderNarrator": {
      "name": "Papangge Nggari Arsam",
      "age": 80,
      "titleOrRole": "Pencerita Tutur Adat Kaili Ledo",
      "location": "Kulawi & Sigi Biromaru"
    },
    "recordedBy": {
      "name": "Rivaldi & Salsabila",
      "schoolOrAffiliation": "SMA Negeri 2 Palu",
      "date": "14 September 2024"
    },
    "summary": "Mitos sakral masyarakat Kaili menceritakan asal-usul tanah lembah Palu yang dahulu berupa lautan luas sebelum airnya surut dan menyisakan hamparan tanah subur. Di kawasan pegunungan berhawa sejuk bersemayam Danau Lindu yang dijaga oleh kekuatan kosmis pohon Uwentira. Cerita ini memuat hukum adat perlindungan mata air dan larangan merusak pepohonan penjaga lereng gunung.",
    "philosophicalMeaning": "Falsafah \"Nosarara Nosabatutu\" (Kita semua bersaudara dan bersatu) dipadukan dengan penghormatan pada \"Ngata\" (kampung halaman). Barangsiapa menebang pohon beringin atau mencemari mata air Lindu, akan mendatangkan petaka gempa dan longsor (nalodo).",
    "localTerms": [
      {
        "term": "Uwentira",
        "meaning": "Hutan purba dan peradaban mistis penjaga kelestarian alam Kaili",
        "language": "Kaili"
      },
      {
        "term": "Danau Lindu",
        "meaning": "Danau tektonik di atas awan tempat leluhur Kaili mengairi sawah lembah",
        "language": "Kaili"
      },
      {
        "term": "Pue Nggari",
        "meaning": "Tokoh arif pemersatu suku Kaili yang mengajarkan tata cara menanam padi",
        "language": "Kaili"
      },
      {
        "term": "Nosarara Nosabatutu",
        "meaning": "Satu tali persaudaraan erat tanpa membedakan asal klan",
        "language": "Kaili"
      },
      {
        "term": "Nalodo",
        "meaning": "Bencana tanah amblas bila manusia serakah merusak keseimbangan alam",
        "language": "Kaili"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Masa Ketika Lembah Berupa Lautan Teluk",
        "description": "Kisah menceritakan dahulu air laut menutupi hingga ke kaki Gunung Gawalise. Nenek moyang Kaili tinggal di perbukitan gua karst sebelum air surut membentuk lembah Palu."
      },
      {
        "stepNumber": 2,
        "title": "Petuah Pue Nggari di Danau Lindu",
        "description": "Pue Nggari membimbing masyarakat membuka sawah bertingkat di lembah Kulawi dengan perjanjian: separuh rimba pegunungan wajib dibiarkan liar sebagai rumah hewan hutan."
      },
      {
        "stepNumber": 3,
        "title": "Misteri Pohon Uwentira Penyeimbang Bumi",
        "description": "Pohon purba Uwentira dipercaya menembus perut bumi menahan pergeseran sesar tanah. Masyarakat dilarang keras menebang pohon besar di jalur sesar palu koro."
      },
      {
        "stepNumber": 4,
        "title": "Pemberian Sumpah Ngata",
        "description": "Tetua adat mengesahkan musyawarah di Souraja (rumah besar adat) bahwa kedamaian lembah hanya bisa bertahan jika warga saling menolong dalam tradisi Sintuwu."
      }
    ],
    "preservationAdvice": "Papangge Arsam berpesan: \"Tanah lembah Palu ini dinamis. Leluhur kami sudah ratusan tahun berpesan lewat dongeng agar anak cucu tidak sembrono membangun rumah di jalur tanah liat berair. Dengarkanlah tanda-tanda alam.\"",
    "estimatedEra": "Tradisi lisan megalitik Lembah Palu & Kulawi",
    "tags": [
      "Lembah Palu",
      "Uwentira",
      "Danau Lindu",
      "Cerita Leluhur",
      "Kaili",
      "Nosarara Nosabatutu"
    ],
    "likesCount": 288
  },
  {
    "id": "kaili-bahasa-vula-nggau",
    "title": "Vula Nggau & Kosa Kata Bahasa Kaili Ledo",
    "subtitle": "Tutur Sastra Petuah Orang Tua untuk Menjaga Keharmonisan Pergaulan Tanpa Caci Maki",
    "category": "bahasa",
    "province": "Sulawesi Tengah",
    "tribe": "Kaili",
    "regionDetail": "Kota Palu & Kabupaten Donggala",
    "elderNarrator": {
      "name": "Tina Nggari Nurhaeni",
      "age": 76,
      "titleOrRole": "Guru Bahasa Daerah Kaili & Penutur Lisan",
      "location": "Kawatuna, Palu"
    },
    "recordedBy": {
      "name": "Mohammad Farhan & Nur Annisa",
      "schoolOrAffiliation": "FKIP Universitas Tadulako",
      "date": "21 Agustus 2024"
    },
    "summary": "Bahasa Kaili memiliki beberapa dialek (Ledo, Tara, Rai, Ija, Unde). Salah satu warisan sastranya adalah Vula Nggau—ungkapan nasihat santun yang dibisikkan ibu kepada anaknya sebelum tidur. Ajaran intinya adalah Nosimparumpu (berkumpul saling menguatkan) dan menjauhi perkataan kasar yang dapat melukai harga diri sesama.",
    "philosophicalMeaning": "\"Nompakabelo ngatata\" bermakna berbuat kebajikan untuk kemuliaan kampung halaman. Orang Kaili diajarkan bahwa kemajuan suatu daerah tidak diukur dari megahnya bangunan, melainkan dari kebersihan hati dan kelemahlembutan tutur warganya.",
    "localTerms": [
      {
        "term": "Vula Nggau",
        "meaning": "Nasihat tutur lisan bijak orang tua yang disampaikan penuh kasih sayang",
        "language": "Kaili",
        "pronunciationTip": "Vu-la Nggau"
      },
      {
        "term": "Nosimparumpu",
        "meaning": "Duduk berkumpul bersama merajut tali silaturahmi yang renggang",
        "language": "Kaili"
      },
      {
        "term": "Nompakabelo",
        "meaning": "Memperbaiki, memperindah, dan menata kehidupan menuju kebaikan",
        "language": "Kaili"
      },
      {
        "term": "Kaili Ledo",
        "meaning": "Dialek suku Kaili yang menggunakan kata \"Ledo\" untuk menyatakan \"Tidak\"",
        "language": "Kaili"
      },
      {
        "term": "Banua Mbaso",
        "meaning": "Rumah musyawarah adat tempat tetua menyelesaikan perkara secara damai",
        "language": "Kaili"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Penuturan Vula Nggau di Malam Hari",
        "description": "Ibu dan nenek menidurkan anak dengan senandung petuah agar mimpi anak dipenuhi rasa aman dan budi pekerti luhur."
      },
      {
        "stepNumber": 2,
        "title": "Praktek Berbicara Santun di Pasar dan Kebun",
        "description": "Saat berdagang bawang goreng atau hasil kebun, orang Kaili menggunakan sapaan kekeluargaan \"Ompi\" (saudara) untuk mencairkan suasana."
      },
      {
        "stepNumber": 3,
        "title": "Mendokumentasikan Dialek Kaili di Era Modern",
        "description": "Mengajarkan kosa kata Kaili kepada generasi gawai agar kata-kata seperti Nosimparumpu tidak terkubur oleh bahasa gaul asing."
      }
    ],
    "preservationAdvice": "Tina Nurhaeni berpesan: \"Bila anak-anak Palu lupa kata Ledo dan Nosimparumpu, maka dinginlah jiwa lembah ini. Pakailah bahasa ibumu dengan bangga.\"",
    "estimatedEra": "Turun-temurun peradaban lembah Palu Kuno",
    "tags": [
      "Bahasa Kaili",
      "Vula Nggau",
      "Kaili Ledo",
      "Palu",
      "Sastra Tutur"
    ],
    "likesCount": 215
  },
  {
    "id": "pamona-cerita-danau-poso",
    "title": "Legenda Danau Poso & Persaudaraan Sembilan Anak Suku",
    "subtitle": "Asal Mula Danau Berpasir Kuning Tentena dan Larangan Merusak Hulu Air Watu Morondo",
    "category": "cerita_sejarah",
    "province": "Sulawesi Tengah",
    "tribe": "Pamona",
    "regionDetail": "Tentena & Danau Poso",
    "elderNarrator": {
      "name": "Papa Nelce Tawo",
      "age": 75,
      "titleOrRole": "Pencatat Sejarah Lisan Pamona Bare’e",
      "location": "Tentena, Danau Poso"
    },
    "recordedBy": {
      "name": "Kristian Rompas & Debora",
      "schoolOrAffiliation": "SMA Kristen Tentena",
      "date": "11 Agustus 2024"
    },
    "summary": "Legenda Danau Poso mengisahkan zaman dahulu ketika lembah Tentena masih berupa hutan belantara yang dialiri sungai kecil jernih. Terjadilah perselisihan perebutan sumber air hingga seorang tetua bijak menancapkan tongkat sakral di batu Watu Morondo. Dari batu itulah memancar air suci yang meluap menjadi Danau Poso seluas 32.000 hektar berpasir kuning keemasan, dan menyatukan sembilan sub-etnis Pamona dalam sumpah persaudaraan abadi.",
    "philosophicalMeaning": "Melahirkan semboyan luhur \"Mosintuwu kita maroso, morambanga kita marisi\" (Bersatu kita teguh kokoh, bersama-sama kita hidup sejahtera). Danau Poso dipandang sebagai rahim ibu pertiwi yang menghidupi semua orang tanpa memandang klan.",
    "localTerms": [
      {
        "term": "Watu Morondo",
        "meaning": "Batu purba tempat perjanjian damai dan pemancaran air Danau Poso",
        "language": "Pamona"
      },
      {
        "term": "Mosintuwu Maroso",
        "meaning": "Bersatu kita teguh dan kuat dalam ikatan persaudaraan sejati",
        "language": "Pamona",
        "pronunciationTip": "Mo-sin-tu-wu Ma-ro-so"
      },
      {
        "term": "Kayori",
        "meaning": "Kidung nyanyian berbalas pantun adat Danau Poso",
        "language": "Pamona"
      },
      {
        "term": "Tanambose",
        "meaning": "Tradisi mendayung perahu bersama melintasi perairan danau",
        "language": "Pamona"
      },
      {
        "term": "Sugili",
        "meaning": "Ikan sidat raksasa purba penghuni kedalaman Danau Poso yang dijaga kelestariannya",
        "language": "Pamona"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Masa Dahaga dan Perebutan Mata Air",
        "description": "Kekeringan panjang melanda pedalaman Sulawesi Tengah. Kesembilan anak suku Pamona gelisah mencari air bersih hingga berkumpul di bukit Tentena."
      },
      {
        "stepNumber": 2,
        "title": "Mufakat Musyawarah di Batu Watu Morondo",
        "description": "Para tetua adat menolak pertumpahan darah. Mereka berdoa bersama meminta karunia langit sembari berjanji akan menjaga sumber air bersama-sama."
      },
      {
        "stepNumber": 3,
        "title": "Terciptanya Danau Poso Berpasir Kuning",
        "description": "Mata air raksasa menyembur deras mengisi cekungan lembah. Airnya jernih hingga dasar danau terlihat dengan ikan sidat sugili yang berenang bebas di antara bebatuan karang."
      },
      {
        "stepNumber": 4,
        "title": "Perayaan Padungku Syukuran Panen",
        "description": "Setiap tahun sesudah panen padi, masyarakat menggelar Padungku, membuka pintu rumah bagi siapa saja yang lewat untuk makan beras wangi baru bersama."
      }
    ],
    "preservationAdvice": "Papa Nelce Tawo menegaskan: \"Danau Poso bukan tempat membuang limbah tambang atau pabrik. Danau ini adalah air mata karunia nenek moyang Pamona. Jaga kejernihannya sampai akhir zaman.\"",
    "estimatedEra": "Mitos purba pembentukan Danau Poso berabad-abad silam",
    "tags": [
      "Danau Poso",
      "Tentena",
      "Pamona",
      "Sintuwu Maroso",
      "Cerita Leluhur",
      "Sugili"
    ],
    "likesCount": 264
  },
  {
    "id": "buton-cerita-ratu-wakaaka",
    "title": "Legenda Ratu Wa Kaa Kaa & Asal Mula Keraton Buton",
    "subtitle": "Kisah Putri Bermahkota Emas dari Buluh Bambu Kuning Gading di Bukit Wolio",
    "category": "cerita_sejarah",
    "province": "Sulawesi Tenggara",
    "tribe": "Buton",
    "regionDetail": "Benteng Keraton Wolio, Bau-Bau",
    "elderNarrator": {
      "name": "La Ode Siradjuddin",
      "age": 84,
      "titleOrRole": "Perangkat Lembaga Adat Kesultanan Buton",
      "location": "Keraton Wolio, Kota Bau-Bau"
    },
    "recordedBy": {
      "name": "Wa Ode Sitti Rahmah & La Ode Irwan",
      "schoolOrAffiliation": "SMA Negeri 1 Bau-Bau",
      "date": "07 Juli 2024"
    },
    "summary": "Legenda agung Kesultanan Buton menceritakan masa ketika empat pemuka suku asli (Si Limbona: Dungcukang, Kalampa, Kumbewaha, dan Todanga) mencari sosok pemimpin berjiwa suci untuk mendirikan negeri berdaulat. Mereka menemukan seorang bayi perempuan cantik bermahkota kemilau di dalam rumpun bambu kuning gading di bukit Wolio, yang kelak dinobatkan sebagai Raja Buton Pertama bergelar Ratu Wa Kaa Kaa (abad ke-14).",
    "philosophicalMeaning": "Kelahiran dari bambu kuning melambangkan pemimpin yang tidak membawa beban klan nepotisme pribadi; ia adalah karunia murni untuk mengayomi seluruh golongan rakyat tanpa sekat.",
    "localTerms": [
      {
        "term": "Wa Kaa Kaa",
        "meaning": "Ratu perempuan pertama pendiri Kerajaan Buton yang adil dan bijaksana",
        "language": "Buton",
        "pronunciationTip": "Wa Ka-a Ka-a"
      },
      {
        "term": "Wolio",
        "meaning": "Bukit batu karst tempat dibangunnya benteng keraton terluas di dunia",
        "language": "Buton"
      },
      {
        "term": "Si Limbona",
        "meaning": "Empat dewan tetua suku asli Buton penegak kedaulatan tanah adat",
        "language": "Buton"
      },
      {
        "term": "Batu Popaua",
        "meaning": "Batu keramat tempat penobatan raja dan sultan Buton menginjakkan kaki pertama kali",
        "language": "Buton"
      },
      {
        "term": "Murtabat Tujuh",
        "meaning": "Undang-undang konstitusi ketatanegaraan Kesultanan Buton berlandaskan sufisme etika luhur",
        "language": "Buton"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Pencarian Pemimpin Adil oleh Dewan Si Limbona",
        "description": "Empat pemuka suku bertapa di perbukitan Wolio memohon petunjuk agar pulau Buton dikaruniai ratu yang berhati seputih kain kafan dan berpikiran setajam pedang keadilan."
      },
      {
        "stepNumber": 2,
        "title": "Cahaya Kemilau di Rumpun Bambu Kuning",
        "description": "Terdengar suara tangisan merdu di antara belukar bambu gading. Saat dibuka perlahan, tampaklah bayi perempuan bermahkota telur emas yang memancarkan aroma bunga melati hutan."
      },
      {
        "stepNumber": 3,
        "title": "Penobatan di Atas Batu Popaua",
        "description": "Setelah beranjak dewasa dengan kecerdasan luar biasa, Wa Kaa Kaa dinobatkan di atas Batu Popaua di hadapan ribuan rakyat, meletakkan fondasi hukum persatuan Buton."
      },
      {
        "stepNumber": 4,
        "title": "Pembangunan Benteng Batu Karst Wolio",
        "description": "Dipimpin oleh penerusnya, rakyat menyusun batu kapur gunung tanpa semen menggunakan perekat putih telur dan getah pohon, membentuk benteng keraton terluas di dunia."
      }
    ],
    "preservationAdvice": "La Ode Siradjuddin berpesan: \"Keraton Wolio berdiri kokoh bukan karena keangkuhan senjata, melainkan karena keadilan Ratu Wa Kaa Kaa dan undang-undang Murtabat Tujuh. Wahai generasi muda Buton, peliharalah kejujuran jiwa ini.\"",
    "estimatedEra": "Sekitar abad ke-14 Masehi (awal berdirinya Kerajaan Buton)",
    "tags": [
      "Wa Kaa Kaa",
      "Keraton Buton",
      "Wolio",
      "Bau-Bau",
      "Cerita Leluhur",
      "Batu Popaua"
    ],
    "likesCount": 320
  },
  {
    "id": "muna-cerita-liang-kabori-kolope",
    "title": "Misteri Gua Liang Kabori & Manusia Purba Pembuat Layang-Layang",
    "subtitle": "Jejak Peradaban Bertinta Merah Oker 4.000 Tahun Silam di Dinding Cadas Karst Muna",
    "category": "cerita_sejarah",
    "province": "Sulawesi Tenggara",
    "tribe": "Muna",
    "regionDetail": "Liang Kabori, Kabupaten Muna",
    "elderNarrator": {
      "name": "La Kimi",
      "age": 77,
      "titleOrRole": "Juru Kunci & Penjaga Situs Gua Liang Kabori",
      "location": "Desa Liang Kabori, Raha, Muna"
    },
    "recordedBy": {
      "name": "La Ode Muhammad Rizal & Wa Ode Ayu",
      "schoolOrAffiliation": "SMA Negeri 1 Raha",
      "date": "19 Juli 2024"
    },
    "summary": "Gua Liang Kabori (Gua Tulis Berukir) menyimpan ratusan lukisan dinding purba bertinta oker merah alami dari getah pohon dan darah hewan. Salah satu lukisan paling menggemparkan dunia arkeologi adalah gambar manusia purba menerbangkan layang-layang daun kolope dengan tali serat nanas hutan—menjadi bukti tak terbantahkan bahwa nenek moyang suku Muna adalah penemu layang-layang tertua di muka bumi, mendahului peradaban Tiongkok kuno.",
    "philosophicalMeaning": "Layang-layang Kaghati Kolope diterbangkan bukan sekadar permainan iseng anak-anak, melainkan ritual sakral penghubung doa bumi ke langit. Ketika layang-layang melayang tenang tujuh hari tujuh malam di angkasa, ia memandu jiwa manusia menuju Sang Maha Pencipta (Omputo Ghoera).",
    "localTerms": [
      {
        "term": "Liang Kabori",
        "meaning": "Gua bertuliskan gambar purba bersejarah cagar budaya dunia",
        "language": "Muna",
        "pronunciationTip": "Li-ang Ka-bo-ri"
      },
      {
        "term": "Kaghati Kolope",
        "meaning": "Layang-layang berbahan daun ubi hutan kering khas suku Muna tertua di dunia",
        "language": "Muna"
      },
      {
        "term": "Omputo Ghoera",
        "meaning": "Tuhan Yang Maha Kuasa Penguasa Alam Semesta dalam keyakinan purba Muna",
        "language": "Muna"
      },
      {
        "term": "Pomani",
        "meaning": "Ritual persaudaraan dan gotong royong mengolah kebun karang",
        "language": "Muna"
      },
      {
        "term": "Ghoera",
        "meaning": "Hukum moral menjaga hutan karst dari kerusakan tangan manusia",
        "language": "Muna"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Perjalanan Menembus Dinding Tebing Karst",
        "description": "Memasuki mulut gua yang terlindung stalaktit ribuan tahun, tampak goresan tangan manusia purba pemburu rusa, kano bercadik, dan sosok yang memegang tali layang-layang."
      },
      {
        "stepNumber": 2,
        "title": "Meracik Tinta Merah Abadi Oker Getah",
        "description": "Nenek moyang Muna menumbuk batu mineral besi merah dicampur getah pohon hutan dan lemak hewan, menghasilkan pigmen yang tidak luntur meski dilewati kelembapan ribuan tahun."
      },
      {
        "stepNumber": 3,
        "title": "Menerbangkan Doa Bersama Kaghati",
        "description": "Ketika musim angin timur berembus dari Laut Flores, daun kolope yang telah diasapi dirangkai dengan serat nanas dan bambu hutan, lalu diterbangkan hingga menjulang tinggi tak terlihat mata."
      },
      {
        "stepNumber": 4,
        "title": "Pesan Perdamaian Dopomasi-masiho",
        "description": "Tetua suku Muna mewariskan bahwa tali layang-layang adalah ibarat tali silaturahmi: jangan terlalu ditarik kencang hingga putus, jangan pula terlalu dikendurkan hingga jatuh terhempas."
      }
    ],
    "preservationAdvice": "La Kimi berpesan: \"Dinding gua ini jangan dicorat-coret dengan cat semprot atau tip-ex oleh wisatawan. Ini adalah buku sejarah tertulis nenek moyangmu yang diakui dunia internasional.\"",
    "estimatedEra": "Lukisan cadas prasejarah diperkirakan berusia 4.000 SM",
    "tags": [
      "Liang Kabori",
      "Kaghati Kolope",
      "Gua Purba",
      "Muna",
      "Cerita Leluhur",
      "Arkeologi"
    ],
    "likesCount": 298
  },
  {
    "id": "minahasa-cerita-toar-lumimuut",
    "title": "Legenda Toar & Lumimuut di Batu Pinawetengan",
    "subtitle": "Asal Mula Leluhur Bangsa Minahasa & Musyawarah Agung Pembagian Sembilan Pakasa’an",
    "category": "cerita_sejarah",
    "province": "Sulawesi Utara",
    "tribe": "Minahasa",
    "regionDetail": "Watu Pinawetengan, Tompaso & Minahasa",
    "elderNarrator": {
      "name": "Opa Bertus Wenas",
      "age": 82,
      "titleOrRole": "Tetua Budaya & Penjaga Situs Watu Pinawetengan",
      "location": "Tompaso, Minahasa"
    },
    "recordedBy": {
      "name": "Gisella Manoppo & Daniel Roring",
      "schoolOrAffiliation": "SMA Negeri 1 Kawangkoan",
      "date": "15 Agustus 2024"
    },
    "summary": "Legenda fundamental suku Minahasa berpusat pada tokoh leluhur pertama Lumimuut (Ibu pertiwi yang lahir dari buih gelombang samudra yang disinari matahari fajar) dan Toar (putranya yang perkasa). Ketika populasi keturunan mereka berkembang pesat di lereng Gunung Soputan, para pemuka berkumpul di sebongkah batu besar bernama Watu Pinawetengan (Batu Tempat Pembagian) untuk membagi wilayah pemukiman sembilan sub-etnis secara damai tanpa peperangan.",
    "philosophicalMeaning": "Mengajarkan nilai demokrasi musyawarah mufakat tertua di Nusantara. Perbedaan sub-etnis (Tombulu, Tontemboan, Tonsea, Tolour, Pasan, Ponosakan, dll.) disatukan dalam satu ikatan janji: \"Mina-esa\" (Menjadi satu kesatuan yang bersaudara).",
    "localTerms": [
      {
        "term": "Toar & Lumimuut",
        "meaning": "Sepasang tokoh leluhur primordial pencipta peradaban suku Minahasa",
        "language": "Minahasa",
        "pronunciationTip": "To-ar & Lu-mi-mu-ut"
      },
      {
        "term": "Watu Pinawetengan",
        "meaning": "Batu megalitik tempat pembagian batas wilayah dan hukum adat Minahasa",
        "language": "Minahasa"
      },
      {
        "term": "Mina-esa",
        "meaning": "Asal kata Minahasa yang berarti bersatu menjadi satu tubuh persaudaraan",
        "language": "Minahasa"
      },
      {
        "term": "Mapalus",
        "meaning": "Sistem kerja sama gotong royong sukarela tanpa upah demi kepentingan bersama",
        "language": "Minahasa"
      },
      {
        "term": "Pakasa’an",
        "meaning": "Kesatuan wilayah genealogis sub-etnis adat Minahasa",
        "language": "Minahasa"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Kelahiran Lumimuut dari Buih Laut Selatan",
        "description": "Kisah mitologis menceritakan angin barat berhembus kencang menerpa batu cadas di pantai, melahirkan Lumimuut yang disucikan oleh air embun pegunungan."
      },
      {
        "stepNumber": 2,
        "title": "Berkembangnya Keturunan di Tanah Malesung",
        "description": "Keluarga Toar dan Lumimuut membuka kebun di tanah subur Malesung (nama kuno Minahasa). Mereka mengajarkan cara bercocok tanam jagung, padi gunung, dan memelihara mata air."
      },
      {
        "stepNumber": 3,
        "title": "Musyawarah Akbar di Watu Pinawetengan",
        "description": "Ketika tanah mulai sempit dan ada potensi gesekan perebutan ladang, Tona’as (pemimpin adat) memukul gong memanggil semua kepala klan berkumpul mengelilingi batu besar Pinawetengan."
      },
      {
        "stepNumber": 4,
        "title": "Goresan Garis Pembagian Tanah Damai",
        "description": "Di atas permukaan batu cadas itu digoreskan garis-garis pembagian wilayah: siapa yang mengelola pesisir, siapa yang menjaga rimba gunung, dengan sumpah bersama menjaga persatuan Minahasa."
      }
    ],
    "preservationAdvice": "Opa Bertus Wenas berpesan: \"Watu Pinawetengan mengajarkan bahwa perbedaan pendapat harus diselesaikan dengan duduk bicara melingkar, bukan dengan pedang. Anak muda Minahasa harus hidup rukun dengan sesama anak bangsa.\"",
    "estimatedEra": "Megalitikum Minahasa (sekitar abad ke-7 hingga ke-10 Masehi)",
    "tags": [
      "Toar Lumimuut",
      "Watu Pinawetengan",
      "Minahasa",
      "Cerita Leluhur",
      "Mina-esa",
      "Tompaso"
    ],
    "likesCount": 310
  },
  {
    "id": "bolmong-cerita-gumalangit",
    "title": "Legenda Gumalangit & Tendeduata di Puncak Gunung Kabela",
    "subtitle": "Kisah Nenek Moyang Pembawa Benih Kehidupan Lembah Dumoga & Semboyan Mototompiaan",
    "category": "cerita_sejarah",
    "province": "Sulawesi Utara",
    "tribe": "Bolaang Mongondow",
    "regionDetail": "Kotamobagu & Lembah Dumoga",
    "elderNarrator": {
      "name": "Ki Guhanga Mokodompit",
      "age": 79,
      "titleOrRole": "Tetua Adat Komalig Bolaang Mongondow",
      "location": "Kotamobagu, Bolaang Mongondow"
    },
    "recordedBy": {
      "name": "Rifki Paputungan & Meisya Mokoginta",
      "schoolOrAffiliation": "SMA Negeri 1 Kotamobagu",
      "date": "22 Agustus 2024"
    },
    "summary": "Mitos sakral suku Bolaang Mongondow (Bolmong) menceritakan sepasang manusia pertama ciptaan Ompu Duata (Tuhan Pencipta), yaitu Gumalangit (ia yang turun dari langit dengan pelindung kilat) dan Tendeduata (wanita yang memancarkan cahaya kasih). Mereka bermukim di lereng Gunung Kabela dan menurunkan raja-raja serta para Bogani—pahlawan ksatria pelindung rakyat yang arif dan sakti.",
    "philosophicalMeaning": "Mewariskan trilogi moral agung Bolaang Mongondow: \"Mototompiaan\" (saling memperbaiki kesalahan dengan kasih), \"Mototabian\" (saling mencintai tanpa pamrih), dan \"Mototanoban\" (saling merindukan dalam kebaikan). Siapa yang hidup memegang tiga pedoman ini akan dijauhkan dari marabahaya.",
    "localTerms": [
      {
        "term": "Gumalangit & Tendeduata",
        "meaning": "Leluhur pertama suku Bolaang Mongondow pembawa benih peradaban",
        "language": "Bolaang Mongondow",
        "pronunciationTip": "Gu-ma-la-ngit & Ten-de-du-a-ta"
      },
      {
        "term": "Bogani",
        "meaning": "Sosok ksatria pelindung rakyat yang berani, jujur, kuat, dan berbelas kasih",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Ompu Duata",
        "meaning": "Tuhan Yang Maha Esa Sang Pencipta Langit dan Bumi dalam bahasa Mongondow kuno",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Komalig",
        "meaning": "Istana rumah adat tempat bermusyawarah raja dan tetua rakyat",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Dega Niondon",
        "meaning": "Ucapan selamat datang yang tulus dari lubuk sanubari terdalam",
        "language": "Bolaang Mongondow"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Turunnya Api Kehidupan di Gunung Kabela",
        "description": "Kisah menceritakan fajar merekah diiringi kilat lembut tanpa guruh di puncak Kabela, menghadirkan Gumalangit dan Tendeduata yang membawa benih padi merah dan jagung manis."
      },
      {
        "stepNumber": 2,
        "title": "Membimbing Rakyat Membuka Lembah Dumoga",
        "description": "Lembah Dumoga yang subur dialiri sungai-sungai jernih ditanami tanaman pangan dengan aturan ketat: mata air di hulu bukit tidak boleh ditebangi pohonnya."
      },
      {
        "stepNumber": 3,
        "title": "Kelahiran Kaum Ksatria Bogani",
        "description": "Dari trah mereka lahirlah para Bogani pembela kebenaran. Menjadi Bogani bukan karena keturunan raja, melainkan melalui ujian kesabaran mengendalikan amarah dan membela fakir miskin."
      },
      {
        "stepNumber": 4,
        "title": "Sumpah Mototompiaan bo Mototanoban",
        "description": "Sebelum wafat, leluhur mengikat janji suci: \"Biarlah bumi Mongondow subur makmur, asalkan anak cucu tidak saling mendengki dan selalu saling memaafkan kesalahan sesama.\""
      }
    ],
    "preservationAdvice": "Ki Guhanga Mokodompit berpesan: \"Semboyan Mototompiaan, Mototabian, bo Mototanoban jangan hanya jadi slogan spanduk pilkada. Praktikkanlah di ruang kelas dan tempat bermainmu, wahai cucu-cucu Bolmong.\"",
    "estimatedEra": "Mitos awal berdirinya peradaban Mongondow kuno",
    "tags": [
      "Gumalangit",
      "Bogani",
      "Bolaang Mongondow",
      "Mototompiaan",
      "Cerita Leluhur",
      "Kotamobagu"
    ],
    "likesCount": 245
  },
  {
    "id": "sangihe-cerita-gumansalangi",
    "title": "Hikayat Gumansalangi & Ilmu Bintang Penakluk Badai Samudera",
    "subtitle": "Kisah Raja Pertama Sangihe Talaud yang Mewariskan Kompas Rasi Bintang dan Nyanyian Sasambo",
    "category": "cerita_sejarah",
    "province": "Sulawesi Utara",
    "tribe": "Sangihe",
    "regionDetail": "Tahuna, Kepulauan Sangihe",
    "elderNarrator": {
      "name": "Opa Jopie Tatengkeng",
      "age": 76,
      "titleOrRole": "Maestro Pelaut Adat & Budayawan Sangihe",
      "location": "Tahuna, Kepulauan Sangihe"
    },
    "recordedBy": {
      "name": "Glenn Makasenda & Maria Derek",
      "schoolOrAffiliation": "SMA Negeri 1 Tahuna",
      "date": "17 Agustus 2024"
    },
    "summary": "Hikayat maritim Kepulauan Sangihe berakar pada sosok Gumansalangi dan permaisurinya Bae Boki Konda pada abad ke-14. Dengan mengendarai perahu layar bercadik ganda menembus badai Samudra Pasifik, ia mendirikan pemukiman pertama di kaki Gunung Awu dan mewariskan ilmu falak membaca rasi bintang (Orion, Salib Selatan, Bintang Pari) serta seni kidung Sasambo untuk menenangkan ombak liar lautan utara Nusantara.",
    "philosophicalMeaning": "Melahirkan jiwa ksatria bahari \"Somahe Kai Kehage\" (Makin keras badai dan ombak menerjang, makin kokoh dan pantang surut langkah kita). Bagi orang Sangihe, laut bukanlah pemisah pulau-pulau, melainkan jalan raya persaudaraan.",
    "localTerms": [
      {
        "term": "Gumansalangi",
        "meaning": "Raja agung perintis kedatuan peradaban Kepulauan Sangihe",
        "language": "Sangihe",
        "pronunciationTip": "Gu-man-sa-la-ngi"
      },
      {
        "term": "Somahe Kai Kehage",
        "meaning": "Makin deras badai menerjang makin tangguh jiwa pantang menyerah",
        "language": "Sangihe"
      },
      {
        "term": "Sasambo",
        "meaning": "Kidung nyanyian vokal lisan berharmoni tanpa alat musik pengiring",
        "language": "Sangihe"
      },
      {
        "term": "Sekhe",
        "meaning": "Kearifan tradisi penangkapan ikan komunal ramah lingkungan terumbu karang",
        "language": "Sangihe"
      },
      {
        "term": "Kue Tamo",
        "meaning": "Tumpeng sakral berbahan ketan gula aren pengiring upacara syukuran Tulude",
        "language": "Sangihe"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengarungi Samudra Menatap Rasi Bintang Pari",
        "description": "Gumansalangi menolak bergantung pada kompas besi. Ia mengajari anak buahnya melihat letak Bintang Salib Selatan di langit malam sebagai penunjuk arah utara-selatan yang abadi."
      },
      {
        "stepNumber": 2,
        "title": "Mendarat di Teluk Tahuna di Kaki Gunung Awu",
        "description": "Perahu mendarat di pantai berpasir hitam terlindung teluk. Gumansalangi menancapkan tombak perdamaian dan berjanji merawat pulau dari amukan letusan gunung."
      },
      {
        "stepNumber": 3,
        "title": "Melantunkan Kidung Harmoni Sasambo",
        "description": "Ketika badai angin laut utara menderu, para pendayung serentak menyanyikan Sasambo dengan pembagian suara alto, tenor, dan bas yang bergetar menghangatkan dada di tengah dinginnya samudra."
      },
      {
        "stepNumber": 4,
        "title": "Pesta Tulude Penutup Tahun",
        "description": "Sebagai ucapan terima kasih kepada Mawu Ruata (Tuhan Pencipta), digelar upacara Tulude memotong kue Tamo dan melepaskan perahu sesaji kecil ke laut lepas untuk membuang segala kesialan masa lalu."
      }
    ],
    "preservationAdvice": "Opa Jopie Tatengkeng berpesan: \"Anak cucu pulau Sangihe jangan takut pada laut. Laut ini warisan Gumansalangi. Pelajari navigasi bintang dan jagalah terumbu karang kita dengan tradisi Sekhe.\"",
    "estimatedEra": "Kedatuan Sangihe Kuno abad ke-14 Masehi",
    "tags": [
      "Gumansalangi",
      "Sangihe",
      "Somahe Kai Kehage",
      "Sasambo",
      "Cerita Leluhur",
      "Tulude"
    ],
    "likesCount": 271
  },
  {
    "id": "gorontalo-cerita-lahilote-danau-limboto",
    "title": "Legenda Lahilote & Jejak Bidadari di Danau Limboto",
    "subtitle": "Kisah Pemuda Berhati Bersih, Bidadari Boyilode Delemango, dan Telapak Kaki Raksasa",
    "category": "cerita_sejarah",
    "province": "Gorontalo",
    "tribe": "Gorontalo",
    "regionDetail": "Danau Limboto & Telaga, Gorontalo",
    "elderNarrator": {
      "name": "Ti Baabu Hamzah Puluhulawa",
      "age": 83,
      "titleOrRole": "Pencerita Cerita Rakyat Lisan Hulontalo",
      "location": "Telaga, Danau Limboto, Gorontalo"
    },
    "recordedBy": {
      "name": "Mohammad Faris & Siti Rahmawati",
      "schoolOrAffiliation": "SMA Negeri 1 Limboto",
      "date": "10 September 2024"
    },
    "summary": "Legenda paling populer masyarakat Gorontalo (Hulonthalo) tentang Lahilote—seorang pemuda pemburu yang jujur dan gagah perkasa yang tinggal di tepi Danau Limboto purba. Suatu hari ia menyaksikan tujuh bidadari kayangan turun mandi di mata air telaga. Lahilote menyembunyikan selendang terbang milik bidadari bungsu Boyilode Delemango, hingga keduanya menikah rukun. Legenda ini diabadikan melalui situs batu cadas berbentuk telapak kaki raksasa di pesisir pantai Lahilote Pohe.",
    "philosophicalMeaning": "Mengingatkan manusia tentang konsekuensi kejujuran dalam berumah tangga dan larangan melanggar janji amanah. Cerita ini juga menjadi pengingat ekologis turun-temurun bahwa Danau Limboto adalah jantung kehidupan Gorontalo yang airnya wajib dijaga dari pendangkalan sedimentasi.",
    "localTerms": [
      {
        "term": "Lahilote",
        "meaning": "Tokoh ksatria pemuda perkasa berhati mulia dalam legenda rakyat Gorontalo",
        "language": "Gorontalo",
        "pronunciationTip": "La-hi-lo-te"
      },
      {
        "term": "Boyilode Delemango",
        "meaning": "Bidadari kayangan lambang keanggunan dan kesucian batin",
        "language": "Gorontalo"
      },
      {
        "term": "Bulalo Limboto",
        "meaning": "Danau Limboto, danau pusaka tempat berkembangnya peradaban Hulontalo",
        "language": "Gorontalo"
      },
      {
        "term": "Pohe Lahilote",
        "meaning": "Batu telapak kaki raksasa di tepi laut peninggalan sang legenda",
        "language": "Gorontalo"
      },
      {
        "term": "Bite",
        "meaning": "Perahu lesung tradisional nelayan Danau Limboto",
        "language": "Gorontalo"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mata Air Telaga Tujuh Bidadari",
        "description": "Di bawah gemericik pohon hutan Danau Limboto yang tenang, Lahilote terpesona melihat tujuh selendang berwarna-warni diletakkan di atas batu kali saat para bidadari bersenda gurau."
      },
      {
        "stepNumber": 2,
        "title": "Kehidupan Bahagia dan Rahasia Bambu",
        "description": "Lahilote menyembunyikan selendang terbang di dalam buluh bambu di loteng rumah panggungnya. Keduanya hidup rukun bertani jagung binthe kiki dan menangkap ikan di danau."
      },
      {
        "stepNumber": 3,
        "title": "Terbang Kembali ke Kayangan",
        "description": "Suatu hari saat mengambil beras di lumbung, Boyilode Delemango tanpa sengaja menemukan kembali selendang sayapnya. Dengan rasa sedih namun terikat pada takdir langit, ia terbang pulang ke kahyangan."
      },
      {
        "stepNumber": 4,
        "title": "Pencarian Lahilote dan Telapak Kaki Raksasa",
        "description": "Dengan cinta membara, Lahilote memohon bantuan rotan gaib merambat ke langit untuk menyusul sang kekasih. Namun karena melanggar pantangan menatap ke bawah, ia terhempas kembali ke bumi dan menghentakkan kakinya di batu Pohe hingga membekas abadi."
      }
    ],
    "preservationAdvice": "Ti Baabu Hamzah berpesan: \"Danau Limboto kini kian mendangkal karena enceng gondok dan lumpur. Cerita Lahilote mengingatkan kita bahwa danau ini sakral. Jangan biarkan anak cucu Gorontalo hanya mengenal Danau Limboto dari buku dongeng.\"",
    "estimatedEra": "Cerita rakyat lisan prasejarah suku Gorontalo",
    "tags": [
      "Lahilote",
      "Danau Limboto",
      "Gorontalo",
      "Hulontalo",
      "Cerita Leluhur",
      "Pohe"
    ],
    "likesCount": 305
  },
  {
    "id": "gorontalo-bahasa-tanggomo-balada",
    "title": "Tanggomo: Sastra Balada Lisan Beritme Cepat Pelipur Duka Hulontalo",
    "subtitle": "Seni Mendongeng Berirama Syair Puitis Tanpa Teks yang Ditembangkan Pencerita Keliling",
    "category": "bahasa",
    "province": "Gorontalo",
    "tribe": "Gorontalo",
    "regionDetail": "Kota Gorontalo & Suwawa",
    "elderNarrator": {
      "name": "Ti Baabu Kasim Botutihe",
      "age": 78,
      "titleOrRole": "Ta Motaanggomo (Pewaris Terakhir Balada Tanggomo Gorontalo)",
      "location": "Suwawa, Bone Bolango, Gorontalo"
    },
    "recordedBy": {
      "name": "Zulkifli Daud & Nurjanah Uno",
      "schoolOrAffiliation": "Universitas Negeri Gorontalo (UNG)",
      "date": "04 September 2024"
    },
    "summary": "Tanggomo adalah sastra lisan jurnalistik bertutur asli suku Gorontalo. Ditembangkan oleh seorang penutur (Ta Motaanggomo) secara spontan tanpa naskah tertulis dengan tempo cepat dan intonasi melodius yang memukau. Tanggomo merekam segala peristiwa penting masyarakat: mulai dari sejarah kepahlawanan melawan penjajah, bencana alam, kabar panen jagung, hingga petuah moral agar rakyat memegang teguh hukum adat dan agama.",
    "philosophicalMeaning": "Mewujudkan prinsip keterbukaan informasi dan pertanggungjawaban sosial: \"Tuwoto liyo to bibi, amalo to batanga\" (Tanda cinta terucap di bibir, bukti nyata diamalkan oleh tubuh tindakan).",
    "localTerms": [
      {
        "term": "Tanggomo",
        "meaning": "Sastra lisan balada berirama cepat pencerita sejarah Gorontalo",
        "language": "Gorontalo",
        "pronunciationTip": "Tang-go-mo"
      },
      {
        "term": "Ta Motaanggomo",
        "meaning": "Seniman maestro penutur kidung tanggomo tanpa teks",
        "language": "Gorontalo"
      },
      {
        "term": "Dulohupa",
        "meaning": "Musyawarah adat mufakat di balai persidangan kesultanan",
        "language": "Gorontalo"
      },
      {
        "term": "Aadati to Saraa",
        "meaning": "Hukum adat yang selalu bersanding serasi dengan hukum syariat agama",
        "language": "Gorontalo"
      },
      {
        "term": "Pohala’a",
        "meaning": "Perserikatan kekerabatan lima negeri bersaudara di Gorontalo",
        "language": "Gorontalo"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengingat Ribuan Baris Syair di Luar Kepala",
        "description": "Seorang Ta Motaanggomo memiliki daya ingat luar biasa. Ia merangkai rima kata dalam bahasa Gorontalo kuno secara spontan mengikuti tempo ketukan jemari."
      },
      {
        "stepNumber": 2,
        "title": "Berdendang di Hadapan Warga Kampung",
        "description": "Dahulu sehabis salat isya di beranda rumah panggung atau balai desa, warga berkumpul melingkar mendengarkan lantunan Tanggomo yang menyentuh kalbu."
      },
      {
        "stepNumber": 3,
        "title": "Merekam Sejarah Perjuangan Merdeka Nani Wartabone",
        "description": "Tanggomo menjadi saksi lisan peristiwa patriotik 23 Januari 1942 ketika rakyat Gorontalo mengusir penjajah sebelum proklamasi kemerdekaan Republik Indonesia."
      }
    ],
    "preservationAdvice": "Ti Baabu Kasim Botutihe berpesan: \"Penutur Tanggomo kini tinggal hitungan jari tangan. Wahai mahasiswa dan pelajar, rekamlah suara kami. Jangan biarkan syair berharga ini terkubur bersama jasad kami di pemakaman.\"",
    "estimatedEra": "Berkembang pesat sejak abad ke-16 di tanah Pohala’a Gorontalo",
    "tags": [
      "Tanggomo",
      "Bahasa Gorontalo",
      "Sastra Lisan",
      "Hulontalo",
      "Balada Tradisional"
    ],
    "likesCount": 252
  },
  {
    "id": "sulsel-permainan-mallogo-bugis",
    "title": "Mallogo: Permainan Ketangkasan Tempurung Segitiga Bugis",
    "subtitle": "Adu Akurasi Menjentik Keping Tempurung Segitiga Menggunakan Tongkat Bambu Chaq",
    "category": "permainan",
    "province": "Sulawesi Selatan",
    "tribe": "Bugis",
    "regionDetail": "Kabupaten Bone & Soppeng",
    "elderNarrator": {
      "name": "Puang Daeng Mattotorang",
      "age": 77,
      "titleOrRole": "Tokoh Pelestari Permainan Tradisional Bone",
      "location": "Watampone, Bone"
    },
    "recordedBy": {
      "name": "Andi Firman & Nurul Aulia",
      "schoolOrAffiliation": "SMA Negeri 1 Watampone",
      "date": "16 September 2024"
    },
    "summary": "Mallogo adalah permainan rakyat Bugis yang menggunakan keping tempurung kelapa tua yang diampelas membentuk segitiga sama sisi (disebut Logo) dan sebilah bambu pengungkit (disebut Chaq). Pemain berdiri di garis lempar (posko) lalu menjentikkan logonya untuk merobohkan barisan logo lawan di seberang lapangan berpasir.",
    "philosophicalMeaning": "Mengajarkan nilai kejujuran (Lempu), fokus ketenangan batin, dan kepatuhan pada aturan adat (Ade’). Keping logo yang tetap berdiri tegak melambangkan ketegasan pendirian (Getteng) yang pantang goyah oleh godaan.",
    "localTerms": [
      {
        "term": "Logo",
        "meaning": "Keping segitiga tempurung kelapa tua yang diampelas halus berkilau",
        "language": "Bugis",
        "pronunciationTip": "Lo-go"
      },
      {
        "term": "Chaq",
        "meaning": "Bilah bambu petung panjang 40 cm sebagai tuas pelontar keping logo",
        "language": "Bugis",
        "pronunciationTip": "Chaq"
      },
      {
        "term": "Posko",
        "meaning": "Garis batas lempar awal tempat pemain membidik sasaran",
        "language": "Bugis"
      },
      {
        "term": "Mappalogo",
        "meaning": "Aktivitas bermain adu ketangkasan logo bersama kawan di lapangan",
        "language": "Bugis"
      }
    ],
    "toolsUsed": [
      "Keping tempurung kelapa (Logo)",
      "Tongkat pengungkit bambu petung (Chaq)",
      "Garis kapur batas lempar"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menyiapkan Garis Sasaran dan Garis Posko",
        "description": "Buat dua garis sejajar berjarak 10-15 meter di tanah lapang berpasir halus yang rata."
      },
      {
        "stepNumber": 2,
        "title": "Menegakkan Barisan Logo Lawan",
        "description": "Tegakkan keping logo tim bertahan di atas gundukan pasir kecil agar posisinya stabil."
      },
      {
        "stepNumber": 3,
        "title": "Teknik Menjentik dengan Chaq Bambu",
        "description": "Jepit keping logo pada pangkal chaq bambu, arahkan mata ke sasaran, lalu lenturkan bambu dan lepaskan sentakan seketika hingga logo meluncur terbang deras."
      },
      {
        "stepNumber": 4,
        "title": "Penghitungan Poin dan Sportivitas",
        "description": "Setiap logo lawan yang berhasil dirobohkan bernilai 1 poin. Tim yang mengumpulkan poin tertinggi menyambut tim lawan dengan salam persaudaraan Sipakalebbi."
      }
    ],
    "preservationAdvice": "Puang Daeng Mattotorang berpesan: \"Anak-anak jangan cuma main game di telepon seluler. Mallogo melatih ketajaman mata, kelenturan jemari, dan rasa bersahabat di dunia nyata.\"",
    "estimatedEra": "Dimainkan sejak era kejayaan Kerajaan Bone abad ke-16",
    "tags": [
      "Mallogo",
      "Permainan Tradisional",
      "Bugis",
      "Sulawesi Selatan",
      "Ketangkasan"
    ],
    "likesCount": 288
  },
  {
    "id": "sulsel-permainan-araga-makassar",
    "title": "A’raga: Akrobatik Sepak Raga Bola Rotan Tiga Lapis Makassar",
    "subtitle": "Seni Menimang Bola Rotan Menggunakan Tumit, Paha, dan Kepala Berbalut Sarung Sutra",
    "category": "permainan",
    "province": "Sulawesi Selatan",
    "tribe": "Makassar",
    "regionDetail": "Gowa & Takalar",
    "elderNarrator": {
      "name": "Daeng Pabeta",
      "age": 75,
      "titleOrRole": "Maestro Pemain A’raga Galesong",
      "location": "Galesong, Takalar"
    },
    "recordedBy": {
      "name": "Rahmat Hidayat & Sri Wahyuni",
      "schoolOrAffiliation": "SMA Negeri 1 Galesong",
      "date": "14 Agustus 2024"
    },
    "summary": "A’raga adalah permainan ketangkasan bola rotan tradisional suku Makassar yang dimainkan oleh 5-7 pemuda membentuk lingkaran terbuka. Para pemain mengenakan busana adat passapu dan melilitkan sarung sutra (lipa’ sabbe). Bola rotan tiga lapis (bula raga) ditimang ke udara menggunakan tendangan tumit, paha, bahu, dan kepala tanpa boleh menyentuh tanah.",
    "philosophicalMeaning": "Mencerminkan nilai kebersamaan kolektif tanpa rasa ingin menonjolkan diri sendiri. Bola yang melayang di angkasa diibaratkan amanah kehormatan keluarga (Siri’); bila bola jatuh terabaikan, seluruh lingkaran ikut menanggung malu.",
    "localTerms": [
      {
        "term": "A’raga",
        "meaning": "Kesenian olahraga akrobatik menimang bola rotan khas Makassar",
        "language": "Makassar",
        "pronunciationTip": "A'-ra-ga"
      },
      {
        "term": "Bula Raga",
        "meaning": "Bola anyaman bilah rotan tiga lapis yang berongga lentur",
        "language": "Makassar"
      },
      {
        "term": "Passapu",
        "meaning": "Ikat kepala segitiga kain merah lambang keberanian ksatria",
        "language": "Makassar"
      },
      {
        "term": "Pataq",
        "meaning": "Gerakan akrobatik menahan bola rotan di atas telapak kaki atau bahu seimbang",
        "language": "Makassar"
      }
    ],
    "toolsUsed": [
      "Bola anyam rotan berongga (Bula Raga)",
      "Sarung sutra Lipa’ Sabbe",
      "Ikat kepala Passapu"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membentuk Formasi Lingkaran Terbuka",
        "description": "Pemain berdiri melingkar dengan jarak 2 meter antarpemain, siap menyambut operan dengan posisi lutut sedikit menekuk lentur."
      },
      {
        "stepNumber": 2,
        "title": "Melambungkan Bola Pembuka (Anjala Bula)",
        "description": "Pemain pertama menendang bola ke angkasa setinggi 3 meter menggunakan punggung kaki yang dibalut sarung."
      },
      {
        "stepNumber": 3,
        "title": "Variasi Akrobatik Tumit dan Pundak",
        "description": "Secara bergantian, bola dioper menggunakan tumit belakang (sepak cakang), paha, atau ditahan di belakang leher sambil meliukkan tubuh."
      },
      {
        "stepNumber": 4,
        "title": "Iringan Tabuhan Gendang Bulo",
        "description": "Permainan semakin seru saat diiringi tabuhan ritmis gandrang Makassar yang memacu detak semangat pemain dan sorak penonton."
      }
    ],
    "preservationAdvice": "Daeng Pabeta berpesan: \"A’raga mengajarkan anak muda Makassar agar gesit, lentur, dan setia kawan. Jangan biarkan anyaman rotan ini digantikan oleh bola plastik pabrikan.\"",
    "estimatedEra": "Peninggalan pasukan pengawal Kerajaan Gowa abad ke-16",
    "tags": [
      "A’raga",
      "Sepak Raga",
      "Makassar",
      "Sulawesi Selatan",
      "Bola Rotan"
    ],
    "likesCount": 315
  },
  {
    "id": "sulsel-permainan-sisemba-toraja",
    "title": "Sisemba’: Adu Ketangkasan Tendangan Kaki Pesta Panen Toraja",
    "subtitle": "Permainan Ketahanan Fisik di Pematang Sawah Tanpa Dendam Usai Musim Menuai Padi",
    "category": "permainan",
    "province": "Sulawesi Selatan",
    "tribe": "Toraja",
    "regionDetail": "Sangalla’ & Mengkendek, Tana Toraja",
    "elderNarrator": {
      "name": "Ne’ Pong Pasande",
      "age": 81,
      "titleOrRole": "Tetua Adat Upacara Panen Toraja",
      "location": "Sangalla’, Tana Toraja"
    },
    "recordedBy": {
      "name": "Marthen Ponglabba & Yanti Rante",
      "schoolOrAffiliation": "SMA Negeri 1 Rantepao",
      "date": "02 Oktober 2024"
    },
    "summary": "Sisemba’ adalah permainan adu kekuatan fisik massal yang digelar suku Toraja di atas petak sawah berlumpur sehabis panen raya padi. Para pemuda dari dua kampung bertetangga saling berhadapan dengan bergandengan tangan erat membentuk barisan benteng manusia, lalu saling mengayunkan tendangan kaki untuk menguji ketangkasan dan pertahanan lawan.",
    "philosophicalMeaning": "Mengajarkan bahwa benturan fisik dalam kompetisi tidak boleh meninggalkan dendam di hati. Seusai peluit tetua berbunyi, seluruh peserta saling berpelukan dan menyantap nasi beras merah baru bersama di bawah lumbung Alang Sura’.",
    "localTerms": [
      {
        "term": "Sisemba’",
        "meaning": "Permainan saling menendang kaki secara massal dengan bergandengan tangan",
        "language": "Toraja",
        "pronunciationTip": "Si-sem-ba'"
      },
      {
        "term": "Simanganda’",
        "meaning": "Posisi bergandengan tangan erat mengunci kekuatan antarkawan",
        "language": "Toraja"
      },
      {
        "term": "Pa’semba",
        "meaning": "Pemain ksatria yang berada di garis depan adu tendangan",
        "language": "Toraja"
      },
      {
        "term": "Pesta Panen",
        "meaning": "Ungkapan syukur atas berlimpahnya berkah panen padi tongkonan",
        "language": "Toraja"
      }
    ],
    "toolsUsed": [
      "Petak sawah jerami berlumpur",
      "Tali pengikat celana jerami",
      "Peluit bambu tanda jeda"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mempersiapkan Barisan Bergandengan Tangan",
        "description": "Kelompok pemuda saling mengunci jari dan lengan dengan sangat erat agar tidak terputus saat menerima benturan."
      },
      {
        "stepNumber": 2,
        "title": "Maju Bersama Menghentak Pematang Sawah",
        "description": "Kedua barisan maju perlahan diiringi sorak sorai penonton dari lereng bukit."
      },
      {
        "stepNumber": 3,
        "title": "Mengayunkan Tendangan Kaki Tangkas",
        "description": "Pemain mengayunkan tendangan ke arah kaki dan paha lawan dengan tetap menjaga keseimbangan kawan di sisi kiri dan kanan."
      },
      {
        "stepNumber": 4,
        "title": "Deklarasi Damai dan Makan Bersama",
        "description": "Pertandingan diakhiri saat kedua belah pihak sama-sama puas. Mereka mencuci kaki di pancuran bambu lalu makan Pa’piong bersama."
      }
    ],
    "preservationAdvice": "Ne’ Pong Pasande berpesan: \"Sisemba’ melatih nyali dan persatuan desa. Aturan terpenting adalah: tangan tidak boleh memukul dan hati tidak boleh menyimpan amarah.\"",
    "estimatedEra": "Tradisi agraris kuno Aluk Todolo berabad-abad silam",
    "tags": [
      "Sisemba",
      "Toraja",
      "Sulawesi Selatan",
      "Pesta Panen",
      "Permainan Rakyat"
    ],
    "likesCount": 274
  },
  {
    "id": "sulbar-permainan-tilako-mandar",
    "title": "Tilako: Permainan Egrang Bambu Pesisir Mandar",
    "subtitle": "Adu Keseimbangan Melintasi Pasir Pantai Berombak & Lumpur Muara Balanipa",
    "category": "permainan",
    "province": "Sulawesi Barat",
    "tribe": "Mandar",
    "regionDetail": "Pambusuang & Balanipa, Majene",
    "elderNarrator": {
      "name": "Kakanna Darwis",
      "age": 72,
      "titleOrRole": "Tokoh Permainan Tradisional Pesisir Mandar",
      "location": "Tinambung, Polewali Mandar"
    },
    "recordedBy": {
      "name": "M. Rizal & Husnul Khatimah",
      "schoolOrAffiliation": "SMA Negeri 1 Tinambung",
      "date": "19 September 2024"
    },
    "summary": "Tilako adalah sepasang tongkat egrang yang dibuat dari pohon bambu betung tua berdinding tebal dengan pijakan kaki dari kayu balok yang dipasak kuat. Anak-anak pesisir Mandar memainkannya di sepanjang garis pantai saat air laut surut, berlomba lari cepat melintasi pasir basah dan saling menyenggolkan ujung tongkat tanpa boleh terjatuh.",
    "philosophicalMeaning": "Melatih keberanian berdiri tegap menatap ke depan dan tidak gentar pada guncangan ombak (Malaqbi). Jika jatuh dari egrang, pemain diajarkan untuk bangkit tersenyum dan membetulkan pijakannya kembali.",
    "localTerms": [
      {
        "term": "Tilako",
        "meaning": "Alat permainan egrang bambu berpijakan tinggi khas Mandar",
        "language": "Mandar",
        "pronunciationTip": "Ti-la-ko"
      },
      {
        "term": "Bulu’ Petung",
        "meaning": "Bambu petung berduri yang kuat dan tahan menopang berat badan",
        "language": "Mandar"
      },
      {
        "term": "Mappatilako",
        "meaning": "Aktivitas bermain adu cepat menaiki egrang bambu",
        "language": "Mandar"
      }
    ],
    "toolsUsed": [
      "Dua batang bambu petung panjang 2,5 meter",
      "Pasak kayu bitti sebagai pijakan kaki",
      "Tali rotan pengikat"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Memilih dan Melubangi Bambu Betung",
        "description": "Pilih bambu lurus yang sudah tua. Lubangi buku bambu pada ketinggian 60-80 cm untuk memasukkan pasak pijakan."
      },
      {
        "stepNumber": 2,
        "title": "Teknik Naik dan Menjaga Titik Keseimbangan",
        "description": "Pegang kedua tiang bambu sejajar dada, injakkan satu kaki ke pasak lalu dorong badan ke atas dengan tumpuan berat badan ke depan."
      },
      {
        "stepNumber": 3,
        "title": "Balapan Cepat di Garis Pantai",
        "description": "Anak-anak melangkah dengan langkah panjang laksana burung bangau mencari ikan di tepi ombak Selat Makassar."
      }
    ],
    "preservationAdvice": "Kakanna Darwis berpesan: \"Dahulu Tilako dimainkan sambil menunggu bapak pulang melaut dengan Sandeq. Permainan sederhana ini mengajarkan ketangguhan kaki anak-anak pesisir.\"",
    "estimatedEra": "Diwariskan sejak masa kemaharajaan pesisir Pitu Baqbana Binanga abad ke-17",
    "tags": [
      "Tilako",
      "Egrang",
      "Mandar",
      "Sulawesi Barat",
      "Permainan Pesisir"
    ],
    "likesCount": 239
  },
  {
    "id": "sulbar-permainan-magasing-mamasa",
    "title": "Ma’gasing Kayu Uru & Pulu-Pulu Dataran Tinggi Mamasa",
    "subtitle": "Adu Putaran Gasing Berporos Paku Baja di Halaman Rumah Adat Banua Olang",
    "category": "permainan",
    "province": "Sulawesi Barat",
    "tribe": "Mamasa",
    "regionDetail": "Balla & Gandangdewata, Mamasa",
    "elderNarrator": {
      "name": "Ambe’ Demmatande",
      "age": 76,
      "titleOrRole": "Pande Gasing & Tetua Adat Ballapeu",
      "location": "Desa Balla Pepek, Mamasa"
    },
    "recordedBy": {
      "name": "Debora Malillin & Yunus Sambo",
      "schoolOrAffiliation": "SMA Negeri 1 Mamasa",
      "date": "24 Agustus 2024"
    },
    "summary": "Ma’gasing di pegunungan Mamasa dimainkan menggunakan gasing yang dipahat manual dari bongkahan kayu uru tua yang sangat padat dan berat. Dililit menggunakan tali pintalan serat nanas hutan atau kulit kayu kendur. Para pemuda saling melempar gasing untuk membelah (uri) gasing lawan yang sedang berputar kencang di atas tanah keras.",
    "philosophicalMeaning": "Gasing yang berputar tegak tanpa goyah melambangkan tekad bulat mufakat \"Mesa Kada Dipotuo\". Bila gasing bergoyang hilang poros, ia akan terlempar keluar lingkaran, mengajarkan manusia agar tidak goyah dari norma moral adat.",
    "localTerms": [
      {
        "term": "Ma’gasing",
        "meaning": "Permainan adu gasing kayu tradisional berporos paku",
        "language": "Mamasa",
        "pronunciationTip": "Ma'-ga-sing"
      },
      {
        "term": "Kayu Uru",
        "meaning": "Kayu hutan pegunungan yang sangat keras dan berserat rapat",
        "language": "Mamasa"
      },
      {
        "term": "Pulu-Pulu",
        "meaning": "Istilah gerakan memukul dan membelah gasing lawan saat berputar",
        "language": "Mamasa"
      }
    ],
    "toolsUsed": [
      "Gasing kayu uru berpaku baja runcing",
      "Tali serat kulit kayu / benang nanas hutan 1,5 meter"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Melilit Tali pada Kepala Gasing",
        "description": "Lilitkan tali serat nanas dengan rapat dan kuat dari poros paku bawah hingga ke leher kepala gasing."
      },
      {
        "stepNumber": 2,
        "title": "Melempar dengan Hentakan Pergelangan Tangan",
        "description": "Lemparkan gasing ke tanah sambil menarik tali sentak seketika agar gasing berputar seimbang dengan dengungan nyaring."
      },
      {
        "stepNumber": 3,
        "title": "Babak Memukul Gasing Lawan (Pulu-Pulu)",
        "description": "Pemain kedua membidik gasing lawan yang sedang berputar di lingkaran untuk menghentikan putarannya atau memecahnya."
      }
    ],
    "preservationAdvice": "Ambe’ Demmatande berpesan: \"Membuat gasing kayu ini butuh kesabaran memahat berhari-hari. Jangan biarkan tangan terampil pemuda Mamasa lupa cara memegang tatah pahat.\"",
    "estimatedEra": "Tradisi bermain di kaki Gunung Gandangdewata berabad-abad lampau",
    "tags": [
      "Ma’gasing",
      "Mamasa",
      "Sulawesi Barat",
      "Kayu Uru",
      "Permainan Rakyat"
    ],
    "likesCount": 226
  },
  {
    "id": "sulteng-permainan-nogalacang-kaili",
    "title": "Nogalacang: Congklak Biji Buah Asam Papan Lesung Kaili",
    "subtitle": "Permainan Strategi Matematika Tradisional Mengisi 16 Lumbung Mini Lembah Palu",
    "category": "permainan",
    "province": "Sulawesi Tengah",
    "tribe": "Kaili",
    "regionDetail": "Lembah Palu & Donggala",
    "elderNarrator": {
      "name": "Tina Marhama",
      "age": 74,
      "titleOrRole": "Nenek Penjaga Tradisi Lisan Kawatuna",
      "location": "Kawatuna, Kota Palu"
    },
    "recordedBy": {
      "name": "Fikri & Nurhaliza",
      "schoolOrAffiliation": "SMA Negeri 2 Palu",
      "date": "11 September 2024"
    },
    "summary": "Nogalacang adalah permainan tradisional suku Kaili sejenis congklak yang menggunakan sebatang kayu bundar dipahat memanjang dengan 14 lubang anak dan 2 lubang lumbung induk (Banua Mbaso) di kedua ujungnya. Biji yang digunakan adalah biji buah asam jawa tua (biji kalibamba) atau kerikil sungai yang dihitung cepat bergantian.",
    "philosophicalMeaning": "Mengajarkan anak-anak seni mengelola hasil panen dan tidak bersifat serakah. Biji yang disemai satu demi satu ke tiap lubang melambangkan keadilan sosial: siapa yang menabur dengan bijak, lumbungnya akan penuh saat musim kemarau tiba.",
    "localTerms": [
      {
        "term": "Nogalacang",
        "meaning": "Permainan menabur dan menghitung biji congklak khas Kaili",
        "language": "Kaili",
        "pronunciationTip": "No-ga-la-cang"
      },
      {
        "term": "Banua Mbaso",
        "meaning": "Lubang lumbung besar di ujung papan tempat menyimpan kekayaan biji",
        "language": "Kaili"
      },
      {
        "term": "Biji Kalibamba",
        "meaning": "Biji buah asam jawa hitam yang licin dan bundar sempurna",
        "language": "Kaili"
      }
    ],
    "toolsUsed": [
      "Papan kayu lesung berukir 16 lubang",
      "98 butir biji asam jawa (kalibamba) / kerikil"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengisi Tiap Lubang Anak dengan 7 Biji",
        "description": "Dua pemain duduk berhadapan mengisi masing-masing 7 lubang anak dengan 7 butir biji asam jawa."
      },
      {
        "stepNumber": 2,
        "title": "Menabur Biji Searah Jarum Jam",
        "description": "Pemain mengambil semua biji di satu lubang miliknya lalu menyebarkannya satu per satu ke lubang berikutnya termasuk lumbung induknya."
      },
      {
        "stepNumber": 3,
        "title": "Menembak Lumbung Kosong Lawan",
        "description": "Bila biji terakhir jatuh di lubang kosong di sisi sendiri, pemain berhak \"menembak\" dan mengambil seluruh biji di lubang lawan yang berhadapan."
      }
    ],
    "preservationAdvice": "Tina Marhama berpesan: \"Nogalacang mengajari anak perempuan dan laki-laki Kaili berhitung cerdas tanpa kalkulator, sambil duduk santai bercengkerama rukun di sore hari.\"",
    "estimatedEra": "Peninggalan era Kerajaan Palu abad ke-17",
    "tags": [
      "Nogalacang",
      "Congklak",
      "Kaili",
      "Sulawesi Tengah",
      "Lembah Palu"
    ],
    "likesCount": 241
  },
  {
    "id": "sulteng-permainan-metingke-pamona",
    "title": "Metingke: Lomba Egrang Tempurung Kelapa Danau Poso",
    "subtitle": "Adu Kecepatan Anak-Anak Pesisir Tentena Menggunakan Tempurung Kelapa Bertali Ijuk",
    "category": "permainan",
    "province": "Sulawesi Tengah",
    "tribe": "Pamona",
    "regionDetail": "Tentena, Kabupaten Poso",
    "elderNarrator": {
      "name": "Papa Yanto Lemba",
      "age": 71,
      "titleOrRole": "Tetua Komunitas Danau Poso",
      "location": "Tentena, Danau Poso"
    },
    "recordedBy": {
      "name": "Melisa & Kevin",
      "schoolOrAffiliation": "SMA Kristen Tentena",
      "date": "08 Agustus 2024"
    },
    "summary": "Metingke adalah permainan ketangkasan suku Pamona di tepian Danau Poso. Menggunakan dua belahan tempurung kelapa tua kering yang dilubangi di tengahnya dan dipasangi tali ijuk atau serat rotan. Pemain menjepit tali di antara ibu jari dan telunjuk kaki lalu berlari di atas hamparan pasir kuning danau sambil mengendalikan ketegangan tali dengan kedua tangan.",
    "philosophicalMeaning": "Mengajarkan keselarasan antara gerak tangan dan langkah kaki. Di dalam prinsip Sintuwu Maroso, perlombaan ini tidak mencari siapa yang tercepat untuk menyombongkan diri, melainkan melatih kekompakan tawa riang anak-anak kampung tanpa perselisihan.",
    "localTerms": [
      {
        "term": "Metingke",
        "meaning": "Permainan berjalan cepat beralaskan tempurung kelapa bertali",
        "language": "Pamona",
        "pronunciationTip": "Me-ting-ke"
      },
      {
        "term": "Watu Nunu",
        "meaning": "Batu tempat start lomba di tepi perairan jernih Danau Poso",
        "language": "Pamona"
      },
      {
        "term": "Sintuwu Maroso",
        "meaning": "Kebersamaan persaudaraan yang kuat dan gembira",
        "language": "Pamona"
      }
    ],
    "toolsUsed": [
      "Dua belahan tempurung kelapa tua kering",
      "Tali ijuk aren / tambang rami panjang 1,5 meter"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membersihkan dan Mengamplas Tempurung",
        "description": "Sabut kelapa dibersihkan hingga batok licin mengkilap, lalu dilubangi dengan paku panas."
      },
      {
        "stepNumber": 2,
        "title": "Menjepit Tali dan Menarik Kencang",
        "description": "Jepit tali di antara celah jemari kaki, tarik tali ke atas hingga tempurung menempel erat pada telapak kaki."
      },
      {
        "stepNumber": 3,
        "title": "Berlari Cepat di Atas Pasir Danau",
        "description": "Suara klotak-klotak tempurung beradu dengan pasir kuning danau saat anak-anak saling berpacu mencapai garis finis."
      }
    ],
    "preservationAdvice": "Papa Yanto berpesan: \"Metingke adalah suara tawa masa kecil di Danau Poso. Di era telepon pintar ini, ajaklah anak-anak keluar rumah merasakan hangatnya pasir dan angin danau.\"",
    "estimatedEra": "Tradisi rakyat Danau Poso turun-temurun",
    "tags": [
      "Metingke",
      "Tempurung Kelapa",
      "Pamona",
      "Danau Poso",
      "Sulawesi Tengah"
    ],
    "likesCount": 258
  },
  {
    "id": "sultra-permainan-metumbu-kalego-tolaki",
    "title": "Metumbu & Kalego: Permainan Lempar Bilah Tempurung Tolaki",
    "subtitle": "Uji Akurasi Ketapel Kaki Menjatuhkan Sasaran di Ranah Adat Konawe",
    "category": "permainan",
    "province": "Sulawesi Tenggara",
    "tribe": "Tolaki",
    "regionDetail": "Konawe & Kolaka",
    "elderNarrator": {
      "name": "Mokole La Tondong",
      "age": 78,
      "titleOrRole": "Tetua Lembaga Adat Konawe Tolaki",
      "location": "Unaaha, Konawe"
    },
    "recordedBy": {
      "name": "Andri & Fitriani",
      "schoolOrAffiliation": "SMA Negeri 1 Unaaha",
      "date": "27 Juli 2024"
    },
    "summary": "Kalego (atau Metumbu) adalah olahraga tradisional suku Tolaki yang menggunakan potongan tempurung kelapa berbentuk bulat pipih seukuran telapak tangan. Pemain menjepit keping tempurung menggunakan jemari kaki sambil berdiri dengan satu kaki, lalu melontarkannya ke arah tempurung lawan yang dipasang tegak berderet di tanah.",
    "philosophicalMeaning": "Keseimbangan berdiri dengan satu kaki mengajarkan keteguhan prinsip hidup manusia Tolaki dalam memegang amanah Kalo Sara. Setiap pelanggaran batas lemparan didenda secara kekeluargaan untuk mendidik kedisiplinan sejak dini.",
    "localTerms": [
      {
        "term": "Kalego",
        "meaning": "Keping tempurung kelapa bundar untuk permainan lempar kaki",
        "language": "Tolaki",
        "pronunciationTip": "Ka-le-go"
      },
      {
        "term": "Metumbu",
        "meaning": "Aksi menjentikkan tempurung dengan hentakan ujung jemari kaki",
        "language": "Tolaki"
      },
      {
        "term": "Kalo Sara",
        "meaning": "Lingkaran rotan simbol keadilan dan hukum adat tertinggi Tolaki",
        "language": "Tolaki"
      }
    ],
    "toolsUsed": [
      "Keping tempurung kelapa bundar (Kalego)",
      "Garis tanah batas lemparan"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menancapkan Sasaran Kalego Lawan",
        "description": "Tancapkan tempurung tim bertahan separuh badan di tanah agar posisinya tegak berdiri berderet."
      },
      {
        "stepNumber": 2,
        "title": "Posisi Berdiri Satu Kaki dan Menjepit Keping",
        "description": "Pemain penyerang menjepit kalego di jemari kaki kanan, bertumpu pada kaki kiri di belakang garis batas."
      },
      {
        "stepNumber": 3,
        "title": "Menghentakkan Tempurung dengan Sentakan Kaki",
        "description": "Ayunkan kaki ke depan dengan tenaga dorong pergelangan kaki hingga kalego melayang deras membentur sasaran."
      }
    ],
    "preservationAdvice": "Mokole La Tondong berpesan: \"Kalego melatih kejujuran dan keseimbangan raga. Permainan ini sarat nilai budi pekerti Tolaki yang harus dilestarikan di sekolah-sekolah.\"",
    "estimatedEra": "Diwariskan sejak era Kerajaan Konawe abad ke-15",
    "tags": [
      "Kalego",
      "Metumbu",
      "Tolaki",
      "Sulawesi Tenggara",
      "Konawe"
    ],
    "likesCount": 263
  },
  {
    "id": "sultra-permainan-kaghati-kolope-muna",
    "title": "Kaghati Kolope: Layang-Layang Purba Tertua di Dunia Asli Suku Muna",
    "subtitle": "Kearifan Aerodinamika Daun Ubi Hutan yang Mampu Mengangkasa 7 Hari 7 Malam Tanpa Jatuh",
    "category": "permainan",
    "province": "Sulawesi Tenggara",
    "tribe": "Muna",
    "regionDetail": "Raha & Gua Liang Kabori, Kabupaten Muna",
    "elderNarrator": {
      "name": "La Kimi & La Mando",
      "age": 76,
      "titleOrRole": "Maestro Pelestari Layang-Layang Kolope Purba Muna",
      "location": "Desa Liang Kabori, Muna"
    },
    "recordedBy": {
      "name": "La Ode Syahrul & Wa Ode Megawati",
      "schoolOrAffiliation": "SMA Negeri 1 Raha",
      "date": "03 September 2024"
    },
    "summary": "Kaghati Kolope adalah layang-layang tradisional suku Muna yang terbukti secara arkeologis di Gua Liang Kabori sebagai layang-layang tertua di dunia (4.000 SM). Dibuat bukan dari kertas atau kain, melainkan dari helaian daun ubi gadung hutan (kolope) yang diasapi hingga lentur kedap air, dirangkai dengan serat nanas hutan dan bilah bambu tipis. Mampu melayang tenang di angkasa tanpa goyah selama seminggu penuh.",
    "philosophicalMeaning": "Menerbangkan Kaghati Kolope dahulu merupakan ritual sakral memohon keselamatan dan perlindungan kepada Sang Pencipta (Omputo Ghoera). Tali layangan yang membubung tinggi dipandang sebagai jembatan spiritual doa manusia bumi menuju langit.",
    "localTerms": [
      {
        "term": "Kaghati Kolope",
        "meaning": "Layang-layang purba berbahan daun ubi gadung hutan khas Muna",
        "language": "Muna",
        "pronunciationTip": "Ka-gha-ti Ko-lo-pe"
      },
      {
        "term": "Daun Kolope",
        "meaning": "Daun tanaman umbi gadung hutan berduri yang diasapi tahan air",
        "language": "Muna"
      },
      {
        "term": "Kamumu",
        "meaning": "Tali layang-layang dari anyaman serat daun nanas hutan yang kuat",
        "language": "Muna"
      },
      {
        "term": "Liang Kabori",
        "meaning": "Situs gua prasejarah tempat lukisan manusia purba bermain layang-layang",
        "language": "Muna"
      }
    ],
    "toolsUsed": [
      "Helaian daun kolope asap",
      "Serat daun nanas hutan (kamumu)",
      "Bilah bambu hutan tipis",
      "Penyemat lidi enau"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengambil dan Mengasapi Daun Kolope",
        "description": "Petik daun gadung hutan yang tua, panaskan di atas asap belerang agar kadar airnya hilang dan daun menjadi liat lentur."
      },
      {
        "stepNumber": 2,
        "title": "Menjahit Helaian Daun dengan Lidi Enau",
        "description": "Susun daun kolope secara bertumpuk simetris, jahit menggunakan lidi enau halus membentuk bidang layang-layang belah ketupat."
      },
      {
        "stepNumber": 3,
        "title": "Memasang Rangka Bambu dan Tali Nanas",
        "description": "Ikat rangka bambu dengan tali serat nanas hutan yang tidak putus meski ditarik angin kencang berkecepatan tinggi."
      },
      {
        "stepNumber": 4,
        "title": "Menerbangkan di Musim Angin Timur",
        "description": "Lepaskan layang-layang di puncak bukit karst Liang Kabori. Layang-layang melayang tenang bagai elang menjaga pulau."
      }
    ],
    "preservationAdvice": "La Kimi berpesan: \"Dunia sudah mengakui Kaghati Muna sebagai layang-layang tertua manusia. Pemuda Muna harus bangga dan jangan sampai lupa teknik mengasapi daun kolope.\"",
    "estimatedEra": "Prasejarah dunia (berusia lebih dari 4.000 tahun SM)",
    "tags": [
      "Kaghati Kolope",
      "Layang-Layang Purba",
      "Muna",
      "Sulawesi Tenggara",
      "Liang Kabori"
    ],
    "likesCount": 342
  },
  {
    "id": "sultra-permainan-gasing-kurungi-buton",
    "title": "Ma’gasing Kurungi: Gasing Jambu Hutan Benteng Keraton Buton",
    "subtitle": "Pertarungan Sengit Gasing Bermata Paku Kuningan di Atas Pelataran Batu Karst Wolio",
    "category": "permainan",
    "province": "Sulawesi Tenggara",
    "tribe": "Buton",
    "regionDetail": "Keraton Wolio, Kota Bau-Bau",
    "elderNarrator": {
      "name": "La Ode Masri",
      "age": 73,
      "titleOrRole": "Pelatih Gasing Tradisional Kesultanan Buton",
      "location": "Keraton Wolio, Bau-Bau"
    },
    "recordedBy": {
      "name": "Wa Ode Nurlina & La Ode Farhan",
      "schoolOrAffiliation": "SMA Negeri 1 Bau-Bau",
      "date": "18 Agustus 2024"
    },
    "summary": "Ma’gasing Kurungi adalah permainan gasing tradisional masyarakat Buton yang dibuat dari kayu pohon jambu hutan (kayu kurungi) yang bertekstur liat dan tidak gampang retak saat berbenturan. Gasing berbadan bulat montok dengan kepala bermahkota dililit tali katun tebal, lalu dilemparkan ke arena lingkaran batu karang untuk menghentikan putaran gasing lawan.",
    "philosophicalMeaning": "Melambangkan ketahanan batin ksatria Buton menghadapi hantaman musuh. Sebagaimana kayu kurungi yang liat menahan benturan, manusia Buton diajarkan tetap kokoh memegang kejujuran jiwa (Murtabat Tujuh).",
    "localTerms": [
      {
        "term": "Gasing Kurungi",
        "meaning": "Gasing berbahan kayu pohon jambu hutan yang liat dan tahan banting",
        "language": "Buton",
        "pronunciationTip": "Ga-sing Ku-ru-ngi"
      },
      {
        "term": "Mangkaa",
        "meaning": "Aksi menjatuhkan dan memukul gasing musuh hingga terpental keluar",
        "language": "Buton"
      },
      {
        "term": "Wolio",
        "meaning": "Kawasan benteng keraton tempat berkumpulnya para pemain gasing sepuh",
        "language": "Buton"
      }
    ],
    "toolsUsed": [
      "Gasing kayu kurungi berpaku kuningan",
      "Tali katun pintal panjang 2 meter",
      "Arena lingkaran batu kapur"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membubut Kayu Jambu Hutan",
        "description": "Potongan kayu kurungi dibubut manual membentuk badan kerucut bulat sempurna dengan pusat gravitasi rendah."
      },
      {
        "stepNumber": 2,
        "title": "Melilit Tali Searah Jarum Jam",
        "description": "Lilitkan tali dengan kencang mulai dari ujung paku hingga bahu gasing."
      },
      {
        "stepNumber": 3,
        "title": "Melempar ke Tengah Arena Batu Wolio",
        "description": "Lemparkan gasing sekuat tenaga ke arah gasing lawan di dalam lingkaran. Benturan keras kedua gasing memicu sorak gembira penonton."
      }
    ],
    "preservationAdvice": "La Ode Masri berpesan: \"Permainan gasing kurungi ini mengasah kebersamaan rakyat di dalam benteng Wolio. Jangan biarkan pelataran keraton sepi dari dengungan gasing.\"",
    "estimatedEra": "Peninggalan Kesultanan Buton abad ke-17",
    "tags": [
      "Gasing Kurungi",
      "Buton",
      "Sulawesi Tenggara",
      "Keraton Wolio",
      "Permainan Rakyat"
    ],
    "likesCount": 231
  },
  {
    "id": "sulut-permainan-lompat-bambu-minahasa",
    "title": "Lompat Bambu Tarian Lalayaan: Permainan Ketangkasan Irama Minahasa",
    "subtitle": "Uji Kecepatan Kaki Melompati Silang Empat Batang Bambu Berdentang Pesta Syukuran",
    "category": "permainan",
    "province": "Sulawesi Utara",
    "tribe": "Minahasa",
    "regionDetail": "Tomohon & Minahasa",
    "elderNarrator": {
      "name": "Oma Meiske Supit",
      "age": 74,
      "titleOrRole": "Penggiat Kesenian Tradisional Tomohon",
      "location": "Tomohon, Sulawesi Utara"
    },
    "recordedBy": {
      "name": "Christian Lengkey & Jessica Runtu",
      "schoolOrAffiliation": "SMA Negeri 1 Tomohon",
      "date": "10 September 2024"
    },
    "summary": "Lompat Bambu (kerap dimainkan dalam ragam tari Lalayaan atau Magunatip) adalah permainan ketangkasan ritmis suku Minahasa. Empat orang pemegang bambu duduk berlutut berhadapan memegang dua pasang bilah bambu panjang, lalu menghentakkannya ke balok kayu dengan ketukan irama 4/4 yang kian cepat. Para pelompat masuk dan keluar di antara bilah bambu yang membuka dan menutup tanpa boleh terjepit.",
    "philosophicalMeaning": "Mencerminkan nilai luhur gotong royong Mapalus: saling percaya pada ketukan kawan, menjaga ritme harmoni kehidupan, dan melatih kewaspadaan pikiran serta kelincahan raga dalam suasana sukacita kekeluargaan.",
    "localTerms": [
      {
        "term": "Lalayaan",
        "meaning": "Kesenian permainan melompat ritmis di sela bambu berdentang",
        "language": "Minahasa",
        "pronunciationTip": "La-la-ya-an"
      },
      {
        "term": "Mapalus",
        "meaning": "Semangat tolong-menolong dan kerja sama tanpa pamrih",
        "language": "Minahasa"
      },
      {
        "term": "Wulu",
        "meaning": "Batang bambu panjang berdinding tebal yang menghasilkan bunyi nyaring",
        "language": "Minahasa"
      }
    ],
    "toolsUsed": [
      "Empat batang bambu panjang 3 meter",
      "Dua balok kayu penahan lantai",
      "Gong pengiring ketukan"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menata Posisi Pemegang Bambu",
        "description": "Empat orang pemegang bambu duduk berhadapan memegang ujung bambu, memulai ketukan buka-tutup berirama konstan."
      },
      {
        "stepNumber": 2,
        "title": "Pelompat Memasuki Sela Bambu",
        "description": "Pelompat melangkah dengan riang melompat satu kaki dan dua kaki di sela bambu saat posisi bambu sedang terbuka lebar."
      },
      {
        "stepNumber": 3,
        "title": "Meningkatkan Tempo Ketukan Musik",
        "description": "Irama ketukan bambu dipercepat secara bertahap hingga menguji refleks lompatan dan ketenangan konsentrasi para pemain."
      }
    ],
    "preservationAdvice": "Oma Meiske Supit berpesan: \"Lompat bambu mengajarkan kita bahwa hidup ini penuh irama buka-tutup. Kalau kita fokus dan percaya pada sesama, kita tidak akan pernah terjepit masalah.\"",
    "estimatedEra": "Permainan pesta panen Minahasa sejak abad ke-16",
    "tags": [
      "Lompat Bambu",
      "Minahasa",
      "Sulawesi Utara",
      "Lalayaan",
      "Mapalus"
    ],
    "likesCount": 308
  },
  {
    "id": "sulut-permainan-lepa-tempurung-sangihe",
    "title": "Lari Tempurung Sapa & Pacu Dayung Lepa-Lepa Sangihe",
    "subtitle": "Olahraga Ketangkasan Bahari Anak-Anak Pesisir Kepulauan Perbatasan Laut Pasifik",
    "category": "permainan",
    "province": "Sulawesi Utara",
    "tribe": "Sangihe",
    "regionDetail": "Tahuna, Kepulauan Sangihe",
    "elderNarrator": {
      "name": "Opa Benhur Mandak",
      "age": 75,
      "titleOrRole": "Nelayan Sepuh & Tokoh Bahari Teluk Tahuna",
      "location": "Tahuna, Sangihe"
    },
    "recordedBy": {
      "name": "Gloria Sasamu & Rendy Makahekung",
      "schoolOrAffiliation": "SMA Negeri 1 Tahuna",
      "date": "20 Agustus 2024"
    },
    "summary": "Di kepulauan Sangihe, anak-anak pesisir memiliki permainan dwilomba tradisional: lomba lari tempurung kelapa di atas pasir pantai hitam berbatu kerikil (disebut Sapa), dilanjutkan seketika dengan balapan mendayung sampan lesung kecil tanpa mesin (Lepa-lepa) di teluk laut yang tenang.",
    "philosophicalMeaning": "Mewujudkan semboyan ksatria bahari \"Somahe Kai Kehage\": melatih anak-anak sejak usia belia agar tidak takut pada asinnya air laut dan kerasnya karang perbatasan.",
    "localTerms": [
      {
        "term": "Sapa",
        "meaning": "Permainan berjalan cepat di atas tempurung kelapa pesisir Sangihe",
        "language": "Sangihe"
      },
      {
        "term": "Lepa-Lepa",
        "meaning": "Sampan kecil dari kayu utuh tanpa mesin yang didayung lincah",
        "language": "Sangihe"
      },
      {
        "term": "Somahe Kai Kehage",
        "meaning": "Pantang mundur sebelum berhasil melintasi gelombang",
        "language": "Sangihe"
      }
    ],
    "toolsUsed": [
      "Tempurung kelapa tua bertali sabut",
      "Sampan lesung kayu lepa-lepa",
      "Dayung kayu pipih"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Adu Cepat Tempurung di Pasir Pantai",
        "description": "Peserta berlari menaiki batok kelapa dari garis batas pohon kelapa menuju bibir air laut."
      },
      {
        "stepNumber": 2,
        "title": "Melompat ke Dalam Sampan Lepa-Lepa",
        "description": "Menanggalkan tempurung dan langsung menaiki sampan kecil yang tertambat di air dangkal."
      },
      {
        "stepNumber": 3,
        "title": "Mendayung Melintasi Pelampung Teluk",
        "description": "Mengayuh dayung kayu membelah riak air teluk Tahuna dengan ketangkasan membaca arus laut."
      }
    ],
    "preservationAdvice": "Opa Benhur berpesan: \"Anak pulau harus bisa mendayung lepa-lepa sebelum bisa mengendarai sepeda motor. Laut inilah lumbung hidup kita.\"",
    "estimatedEra": "Tradisi maritim Kepulauan Sangihe Talaud berabad-abad lampau",
    "tags": [
      "Lepa-Lepa",
      "Sangihe",
      "Sulawesi Utara",
      "Permainan Bahari",
      "Somahe Kai Kehage"
    ],
    "likesCount": 247
  },
  {
    "id": "gorontalo-permainan-tengge-tengge",
    "title": "Tengge-Tengge: Egrang Bambu Kuning Hulonthalo",
    "subtitle": "Adu Keseimbangan dan Kelincahan Pemuda di Lapangan Rumput Balai Dulohupa",
    "category": "permainan",
    "province": "Gorontalo",
    "tribe": "Gorontalo",
    "regionDetail": "Limboto & Kota Gorontalo",
    "elderNarrator": {
      "name": "Ti Baabu Usman Monoarfa",
      "age": 77,
      "titleOrRole": "Pelestari Permainan Tradisional Gorontalo",
      "location": "Limboto, Gorontalo"
    },
    "recordedBy": {
      "name": "Riski Mahmud & Annisa Gobel",
      "schoolOrAffiliation": "SMA Negeri 1 Limboto",
      "date": "14 September 2024"
    },
    "summary": "Tengge-Tengge adalah egrang tradisional masyarakat Gorontalo yang terbuat dari dua batang bambu kuning (patodu) berdinding tebal dengan tumpuan kaki terbuat dari bilah kayu papan setinggi 80-120 cm. Dimainkan di tanah lapang desa saat sore hari, para pemuda berlomba adu cepat dan saling menyenggol bahu bambu secara tangkas tanpa boleh menyentuhkan kaki ke tanah.",
    "philosophicalMeaning": "Menjaga kehormatan diri agar selalu berpijak tinggi di atas jalan kebenaran (saraa) dan tidak jatuh ke dalam lumpur kekhilafan. Ketinggian pijakan menuntut kewaspadaan penuh dan kejernihan pikiran.",
    "localTerms": [
      {
        "term": "Tengge-Tengge",
        "meaning": "Permainan egrang bambu tinggi tradisional Gorontalo",
        "language": "Gorontalo",
        "pronunciationTip": "Teng-ge-Teng-ge"
      },
      {
        "term": "Patodu",
        "meaning": "Jenis bambu kuning keras pilihan untuk tiang egrang",
        "language": "Gorontalo"
      },
      {
        "term": "Dulohupa",
        "meaning": "Musyawarah mufakat di balai adat pertemuan desa",
        "language": "Gorontalo"
      }
    ],
    "toolsUsed": [
      "Dua batang bambu kuning patodu",
      "Pasak kayu penahan kaki",
      "Tali pengaman"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menyiapkan Batang Bambu Patodu",
        "description": "Pilih bambu kuning yang lurus dan kuat, pasang pasak tumpuan kaki dengan pasak kayu keras tahan patah."
      },
      {
        "stepNumber": 2,
        "title": "Menaiki Egrang dengan Tumpuan Kuat",
        "description": "Pegang tiang bambu setinggi dada, langkahkan kaki dengan tenang menjaga titik berat tubuh."
      },
      {
        "stepNumber": 3,
        "title": "Permainan Saling Menyenggol (Mopulito)",
        "description": "Dua pemain saling bermanuver di lapangan menyenggol tiang lawan untuk menguji siapa yang paling kukuh keseimbangannya."
      }
    ],
    "preservationAdvice": "Ti Baabu Usman berpesan: \"Tengge-tengge melatih anak-anak Gorontalo agar berani melihat dunia dari tempat yang tinggi dengan hati yang tetap membumi.\"",
    "estimatedEra": "Peninggalan Kesultanan Gorontalo era Pohala’a abad ke-17",
    "tags": [
      "Tengge-Tengge",
      "Egrang",
      "Gorontalo",
      "Permainan Tradisional",
      "Hulonthalo"
    ],
    "likesCount": 269
  },
  {
    "id": "gorontalo-permainan-ponti-karet",
    "title": "Ponti: Permainan Adu Biji Buah Karet & Kemiri Hutan Gorontalo",
    "subtitle": "Adu Akurasi Menembak Biji Buah Hutan di Garis Lingkaran Tanah Liat",
    "category": "permainan",
    "province": "Gorontalo",
    "tribe": "Gorontalo",
    "regionDetail": "Suwawa, Bone Bolango, Gorontalo",
    "elderNarrator": {
      "name": "Ti Nenek Maryam Daud",
      "age": 72,
      "titleOrRole": "Tetua Kampung Suwawa Gorontalo",
      "location": "Suwawa, Bone Bolango"
    },
    "recordedBy": {
      "name": "Fadel Mohammad & Rahmiati Uno",
      "schoolOrAffiliation": "SMA Negeri 1 Suwawa",
      "date": "05 September 2024"
    },
    "summary": "Ponti adalah permainan ketepatan membidik yang menggunakan biji buah karet hutan (atau buah kemiri tua) yang bundar keras mengkilap. Biji-biji disusun di dalam lingkaran tanah liat bergaris tengah 1 meter, lalu tiap pemain membidik dari jarak 5 meter menggunakan biji jagoannya (disebut Gaco) dengan teknik sentilan jari telunjuk yang bertenaga.",
    "philosophicalMeaning": "Mengajarkan perhitungan presisi, kesabaran menahan emosi, dan kejujuran menghitung perolehan. Tidak boleh berlaku curang atau menggeser garis batas.",
    "localTerms": [
      {
        "term": "Ponti",
        "meaning": "Permainan adu ketangkasan kelereng biji buah karet hutan khas Gorontalo",
        "language": "Gorontalo",
        "pronunciationTip": "Pon-ti"
      },
      {
        "term": "Gaco",
        "meaning": "Biji buah jagoan pilihan yang paling padat dan berat untuk menembak",
        "language": "Gorontalo"
      },
      {
        "term": "Buluwa",
        "meaning": "Garis batas lingkaran tempat menyusun biji taruhan",
        "language": "Gorontalo"
      }
    ],
    "toolsUsed": [
      "Biji buah karet hutan tua keras",
      "Garis lingkaran tanah liat",
      "Biji gaco pemberat"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menggambar Lingkaran Buluwa di Tanah",
        "description": "Goreskan lingkaran di tanah halaman rumah panggung, susun biji karet masing-masing pemain di tengah."
      },
      {
        "stepNumber": 2,
        "title": "Menentukan Urutan Menembak dari Garis Start",
        "description": "Pemain melempar gaco ke garis batas; siapa yang paling dekat berhak menembak pertama kali."
      },
      {
        "stepNumber": 3,
        "title": "Menyentil Biji Sasaran Keluar Lingkaran",
        "description": "Sentil gaco dengan jentikan jempol dan telunjuk. Setiap biji yang terpental keluar menjadi hak milik penembak."
      }
    ],
    "preservationAdvice": "Ti Nenek Maryam berpesan: \"Ponti mengajarkan anak-anak berkumpul rukun di bawah pohon rindang tanpa mengeluarkan biaya sepeser pun. Alam menyediakan segalanya untuk bermain.\"",
    "estimatedEra": "Berkembang sejak era perkebunan tradisional Gorontalo abad ke-18",
    "tags": [
      "Ponti",
      "Biji Karet",
      "Gorontalo",
      "Permainan Anak",
      "Ketangkasan"
    ],
    "likesCount": 224
  },
  {
    "id": "gorontalo-permainan-alanggaya-limboto",
    "title": "Alanggaya: Layang-Layang Berdengung Bunyi Buluh Bambu Gorontalo",
    "subtitle": "Kesenian Menerbangkan Layang-Layang Bersuara Merdu di Atas Persawahan Danau Limboto",
    "category": "permainan",
    "province": "Gorontalo",
    "tribe": "Gorontalo",
    "regionDetail": "Telaga & Danau Limboto, Gorontalo",
    "elderNarrator": {
      "name": "Ti Baabu Ridwan Katili",
      "age": 76,
      "titleOrRole": "Maestro Pembuat Alanggaya Tradisional",
      "location": "Telaga, Danau Limboto"
    },
    "recordedBy": {
      "name": "Zulkifli Hippy & Maya Puluhulawa",
      "schoolOrAffiliation": "SMA Negeri 1 Telaga",
      "date": "12 September 2024"
    },
    "summary": "Alanggaya adalah layang-layang tradisional suku Gorontalo yang memiliki ciri khas unik: di bagian atas kepalanya dipasangi busur pita getar daun pandan atau bilah bambu tipis (disebut Dengu). Saat layang-layang melayang tinggi tertiup angin persawahan Danau Limboto, pita getar tersebut bergetar menghasilkan bunyi dengungan melodis merdu yang terdengar hingga radius satu kilometer.",
    "philosophicalMeaning": "Dengungan suara Alanggaya menghibur para petani yang lelah menjaga sawah dari serangan burung pipit sekaligus menjadi penanda datangnya musim angin timur yang sejuk dan berkah panen jagung.",
    "localTerms": [
      {
        "term": "Alanggaya",
        "meaning": "Layang-layang tradisional berbunyi khas dengung masyarakat Gorontalo",
        "language": "Gorontalo",
        "pronunciationTip": "A-lang-ga-ya"
      },
      {
        "term": "Dengu",
        "meaning": "Busur pita getar daun pandan penghasil suara dengungan merdu di angkasa",
        "language": "Gorontalo"
      },
      {
        "term": "Bulalo Limboto",
        "meaning": "Danau Limboto tempat hamparan angin layang-layang bertiup kencang",
        "language": "Gorontalo"
      }
    ],
    "toolsUsed": [
      "Bilah bambu apus halus",
      "Kertas minyak warna-warni motif jagung",
      "Busur pita daun pandan berdengung (Dengu)",
      "Gulungan tali nilon / rami"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Meraut Rangka Bambu Fleksibel",
        "description": "Raut bilah bambu dengan ketebalan merata agar kedua sayap layang-layang memiliki kelenturan seimbang."
      },
      {
        "stepNumber": 2,
        "title": "Memasang Busur Dengu Penghasil Suara",
        "description": "Pasang pita daun pandan kering yang ditegangkan dengan tali tipis di atas kepala layang-layang."
      },
      {
        "stepNumber": 3,
        "title": "Menerbangkan di Hamparan Sawah Limboto",
        "description": "Saat angin sore bertiup dari arah danau, lepaskan Alanggaya membubung ke angkasa menyenandungkan kidung damai bagi warga desa."
      }
    ],
    "preservationAdvice": "Ti Baabu Ridwan Katili berpesan: \"Suara dengungan Alanggaya adalah nyanyian kedamaian tanah Gorontalo. Jangan sampai langit Limboto sunyi karena anak-anak kita lupa cara menerbangkan layangan bambu.\"",
    "estimatedEra": "Tradisi agraris masyarakat Danau Limboto abad ke-18",
    "tags": [
      "Alanggaya",
      "Layang-Layang Berdengung",
      "Gorontalo",
      "Danau Limboto",
      "Permainan Rakyat"
    ],
    "likesCount": 292
  },
  {
    "id": "sultra-permainan-mekolalo-moronene",
    "title": "Mekolalo: Permainan Menjentik Bilah Pelepah Sagu Suku Moronene",
    "subtitle": "Adu Ketangkasan Menjatuhkan Sasaran Pelepah Rumbia di Rimba Rawa Aopa Watumohai & Kabaena",
    "category": "permainan",
    "province": "Sulawesi Tenggara",
    "tribe": "Moronene",
    "regionDetail": "Rawa Aopa & Kabaena, Bombana",
    "elderNarrator": {
      "name": "Mokole Waworaha",
      "age": 79,
      "titleOrRole": "Tetua Adat Komunitas Hukaea Laea Moronene",
      "location": "Rawa Aopa, Bombana"
    },
    "recordedBy": {
      "name": "Fikram & Sitti Nurhalisa",
      "schoolOrAffiliation": "SMA Negeri 1 Bombana",
      "date": "17 September 2024"
    },
    "summary": "Mekolalo adalah permainan tradisional anak-anak dan pemuda suku asli Moronene di pedalaman Bombana dan Pulau Kabaena. Menggunakan bilah pelepah pohon sagu (rumbia) tua yang dipotong persegi panjang seukuran sejengkal dan keping kayu pohon bitti pipih sebagai pelontar. Pemain saling melempar keping pelontar untuk merobohkan barisan pelepah sagu lawan yang ditancapkan di atas tanah gambut kering.",
    "philosophicalMeaning": "Mengajarkan penghormatan mendalam pada pohon sagu rumbia sebagai sumber kehidupan leluhur Moronene. Nilai Mepokoaso (satu hati dan satu jiwa) tercermin saat anak-anak bermain tanpa mengenal pertengkaran dan bersama-sama merawat hutan adat.",
    "localTerms": [
      {
        "term": "Mekolalo",
        "meaning": "Permainan tradisional adu ketangkasan menjatuhkan bilah pelepah sagu",
        "language": "Moronene",
        "pronunciationTip": "Me-ko-la-lo"
      },
      {
        "term": "Pelepah Tawaloho",
        "meaning": "Pelepah daun pohon rumbia tua yang keras dan berserat kuat",
        "language": "Moronene"
      },
      {
        "term": "Mepokoaso",
        "meaning": "Falsafah kebersamaan satu hati dan satu jiwa masyarakat Moronene",
        "language": "Moronene"
      }
    ],
    "toolsUsed": [
      "Potongan pelepah sagu kering",
      "Keping kayu pelontar pipih bundar",
      "Garis batas tanah"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Memotong Pelepah Sagu Rumbia",
        "description": "Pilih pelepah sagu yang sudah jatuh kering alami, potong rapi sepanjang 20 cm sebanyak 5 bilah."
      },
      {
        "stepNumber": 2,
        "title": "Menancapkan Barisan Pelepah Sasaran",
        "description": "Tancapkan bilah pelepah secara berjajar dengan jarak sejengkal di atas tanah lapang kampung."
      },
      {
        "stepNumber": 3,
        "title": "Membidik dari Jarak Sepuluh Langkah",
        "description": "Lemparkan keping kayu pelontar dengan teknik menyusur tanah untuk merobohkan barisan pelepah sagu lawan."
      }
    ],
    "preservationAdvice": "Mokole Waworaha berpesan: \"Mekolalo mengajarkan anak cucu Moronene mencintai hutan sagu. Kalau pohon sagu habis dibabat, hilanglah permainan dan makanan pokok kita.\"",
    "estimatedEra": "Tradisi suku tertua Sulawesi sejak era swapraja Moronene kuno",
    "tags": [
      "Mekolalo",
      "Moronene",
      "Sulawesi Tenggara",
      "Rawa Aopa",
      "Pelepah Sagu"
    ],
    "likesCount": 244
  },
  {
    "id": "sulut-permainan-monangga-bolmong",
    "title": "Monangga-Nangga & Tongkilibu: Permainan Ketangkasan Bolmong",
    "subtitle": "Lomba Melompati Rintangan Batang Bambu & Adu Putaran Gasing Kayu Kopi di Kotamobagu",
    "category": "permainan",
    "province": "Sulawesi Utara",
    "tribe": "Bolaang Mongondow",
    "regionDetail": "Kotamobagu & Lembah Dumoga",
    "elderNarrator": {
      "name": "Ki Guhanga Mokoginta",
      "age": 75,
      "titleOrRole": "Pemerhati Budaya & Tetua Adat Bolmong",
      "location": "Kotamobagu, Bolaang Mongondow"
    },
    "recordedBy": {
      "name": "Ryan Paputungan & Novita Mokodompit",
      "schoolOrAffiliation": "SMA Negeri 1 Kotamobagu",
      "date": "15 September 2024"
    },
    "summary": "Masyarakat adat Bolaang Mongondow memiliki permainan tradisional Monangga-Nangga (permainan ketangkasan melompati rintangan batang bambu yang disusun bertingkat) dan Tongkilibu (permainan gasing kayu kopi berpaku baja). Kedua permainan ini digelar pemuda di halaman rumah adat Komalig saat musim pascapanen jagung dan kopi di perbukitan Kotamobagu.",
    "philosophicalMeaning": "Mengajarkan keberanian menembus rintangan hidup laksana ksatria Bogani yang tangguh, serta menumbuhkan keakraban persaudaraan tanpa dengki berlandaskan trilogi budi pekerti \"Mototompiaan, Mototabian, bo Mototanoban\".",
    "localTerms": [
      {
        "term": "Monangga-Nangga",
        "meaning": "Permainan adu kelincahan melompati susunan batang rintangan bambu",
        "language": "Bolaang Mongondow",
        "pronunciationTip": "Mo-nang-ga Nang-ga"
      },
      {
        "term": "Tongkilibu",
        "meaning": "Gasing kayu pohon kopi tua yang diputar dengan tali serat nanas",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Mototompiaan",
        "meaning": "Saling menyayangi dan memperbaiki kesalahan dengan penuh kasih",
        "language": "Bolaang Mongondow"
      }
    ],
    "toolsUsed": [
      "Batang bambu lurus berjenjang",
      "Gasing kayu kopi berpaku runcing (Tongkilibu)",
      "Tali pintal serat alam"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menyusun Rintangan Bambu Bertingkat",
        "description": "Batang bambu disusun mulai dari setinggi lutut hingga setinggi dada untuk dilewati dengan lompatan kijang ksatria Bogani."
      },
      {
        "stepNumber": 2,
        "title": "Adu Putaran Gasing Tongkilibu",
        "description": "Para pemain memutar gasing kayu kopi secara serempak di atas tanah liat yang dipadatkan; gasing yang berputar paling lama menjadi pemenang."
      },
      {
        "stepNumber": 3,
        "title": "Sorak Bergembira Bersama Tetua Adat",
        "description": "Pemenang mendapat tepuk tangan dan menikmati sajian jagung bakar serta kue Alingkoge bersama para tetua kampung."
      }
    ],
    "preservationAdvice": "Ki Guhanga Mokoginta berpesan: \"Anak-anak Bolmong harus lincah dan berjiwa ksatria Bogani. Mainkanlah permainan leluhur ini agar badan sehat dan persaudaraan kampung makin erat.\"",
    "estimatedEra": "Diwariskan sejak era kemaharajaan Bolaang Mongondow abad ke-17",
    "tags": [
      "Monangga-Nangga",
      "Tongkilibu",
      "Bolaang Mongondow",
      "Sulawesi Utara",
      "Permainan Rakyat"
    ],
    "likesCount": 261
  },
  {
    "id": "bugis-cerita-keluarga-sompa-mappasitengngah",
    "title": "Cerita Keluarga Bugis: We Dalatutu & Nilai Mappasitengngah",
    "subtitle": "Petuah Nenek Indo’ Sengngeng tentang Adab Perkawinan Sompa dan Keharmonisan Kekerabatan",
    "category": "cerita_keluarga",
    "province": "Sulawesi Selatan",
    "tribe": "Bugis",
    "regionDetail": "Wajo & Soppeng",
    "elderNarrator": {
      "name": "Nenek Petta Sengngeng",
      "age": 82,
      "titleOrRole": "Sesepuh Adat Keluarga Rumpun Wajo",
      "location": "Sengkang, Wajo"
    },
    "recordedBy": {
      "name": "Andi Nurhaliza & Fadli Akbar",
      "schoolOrAffiliation": "SMA Negeri 1 Wajo",
      "date": "14 Agustus 2024"
    },
    "summary": "Dalam keluarga Bugis kuno, pernikahan bukan sekadar penyatuan dua insan, melainkan \"Mabbodong-bodong\" (mengikat dua rumpun besar menjadi satu keluarga inti). Petuah Nenek menceritakan kisah We Dalatutu yang mengajarkan bahwa mahar (Sompa) bukanlah harga perempuan, melainkan lambang kesanggupan lelaki memuliakan martabat istri dan menjamin ketenangan bahtera rumah tangga.",
    "philosophicalMeaning": "Nilai \"Mappasitengngah\" (berlaku adil di tengah keluarga tanpa memihak) dan \"Sipakaraja\" (saling menghormati martabat orang tua dan mertua). Kerukunan rumah tangga menjadi pondasi tegaknya harkat keluarga di masyarakat.",
    "localTerms": [
      {
        "term": "Sompa",
        "meaning": "Harta seserahan sakral lambang kesiapan memuliakan calon istri",
        "language": "Bugis"
      },
      {
        "term": "Mappasitengngah",
        "meaning": "Sikap adil dan bijaksana mendamaikan urusan keluarga",
        "language": "Bugis"
      },
      {
        "term": "Sipakaraja",
        "meaning": "Saling memuliakan martabat antara menantu dan mertua",
        "language": "Bugis"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mappese-pese: Penjajakan Silaturahmi Keluarga",
        "description": "Pihak keluarga lelaki datang bertamu dengan tutur kata santun untuk menanyakan kesediaan keluarga perempuan."
      },
      {
        "stepNumber": 2,
        "title": "Mappetuada: Musyawarah Kesepakatan Bersama",
        "description": "Kedua keluarga besar duduk bersama bermusyawarah menetapkan waktu dan pembagian tanggung jawab pesta."
      },
      {
        "stepNumber": 3,
        "title": "Pesan Mappasitengngah di Ruang Tengah",
        "description": "Nenek membisikkan nasihat pada mempelai: \"Jangan biarkan amarah matahari siang terbawa hingga terbenam di peraduan.\""
      }
    ],
    "preservationAdvice": "Nenek Petta berpesan: \"Zaman modern boleh maju, tetapi jangan sampai anak cucu Bugis melupakan rasa hormat kepada orang tua dan kehangatan ruang tengah rumah panggung.\"",
    "estimatedEra": "Diwariskan turun-temurun sejak era Dinasti Luwu & Bone abad ke-17",
    "tags": [
      "Bugis",
      "Cerita Keluarga",
      "Sompa",
      "Mappasitengngah",
      "Sulawesi Selatan"
    ],
    "likesCount": 318
  },
  {
    "id": "makassar-cerita-keluarga-pangngadakkang-bainea",
    "title": "Cerita Keluarga Makassar: Pangngadakkang Bainea & Kasih Ibu",
    "subtitle": "Wejangan Daeng Te’ne tentang Mendidik Anak dengan Siri’ na Pacce di Bilik Rumah Panggung",
    "category": "cerita_keluarga",
    "province": "Sulawesi Selatan",
    "tribe": "Makassar",
    "regionDetail": "Gowa & Sanrobone",
    "elderNarrator": {
      "name": "Daeng Te’ne Sitti Maryam",
      "age": 78,
      "titleOrRole": "Tetua Keluarga Rumpun Sanrobone",
      "location": "Sungguminasa, Gowa"
    },
    "recordedBy": {
      "name": "Muh. Rian Ramadhan & Aisyah Putri",
      "schoolOrAffiliation": "MAN 1 Gowa",
      "date": "18 Agustus 2024"
    },
    "summary": "Di bilik rumah panggung Balla Lompoa, seorang ibu Makassar memegang peran sentral sebagai \"Bainea\" penjaga kehormatan dan budi pekerti anak-anak. Daeng Te’ne menuturkan bagaimana para ibu menyanyikan kelong pengantar tidur yang menyiratkan ajaran agar anak laki-laki menjadi pemberani pembela kaum lemah dan anak perempuan menjadi pribadi yang anggun dan berharga diri luhur.",
    "philosophicalMeaning": "Keluarga adalah madrasah pertama penanaman \"Siri’\" (harga diri yang suci) dan \"Pacce\" (kelembutan hati nurani untuk saling membela saudara seibu).",
    "localTerms": [
      {
        "term": "Bainea",
        "meaning": "Ibu atau figur perempuan pelindung kehangatan keluarga",
        "language": "Makassar"
      },
      {
        "term": "Pangngadakkang",
        "meaning": "Tatanan adab dan norma kesantunan keluarga turun-temurun",
        "language": "Makassar"
      },
      {
        "term": "Kelong Panrannuang",
        "meaning": "Syair senandung doa ibu pengantar tidur penuh harapan",
        "language": "Makassar"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Senandung Kelong di Ayunan Sarung Sutra",
        "description": "Ibu mengayunkan anak di atas sarung sutra Mandar sambil melantunkan doa keselamatan dan keberkahan budi."
      },
      {
        "stepNumber": 2,
        "title": "Makan Bersama di Dulang Kuningan (Kande-Kandea)",
        "description": "Seluruh anak makan bersama dari wadah kuningan yang sama untuk memupuk rasa senasib sepenanggungan."
      },
      {
        "stepNumber": 3,
        "title": "Petuah Menjelang Perantauan Anak",
        "description": "Ayah memberikan sebilah badik pusaka dan ibu membekali sebungkus tanah halaman sebagai pengingat asal-usul."
      }
    ],
    "preservationAdvice": "Daeng Te’ne berpesan: \"Rumah tangga tanpa kelembutan ibu akan kehilangan arah. Rawatlah tutur kata manis kepada orang tua setiap hari.\"",
    "estimatedEra": "Tradisi lisan keluarga Makassar abad ke-16",
    "tags": [
      "Makassar",
      "Cerita Keluarga",
      "Pangngadakkang",
      "Siri na Pacce",
      "Sulawesi Selatan"
    ],
    "likesCount": 295
  },
  {
    "id": "toraja-cerita-keluarga-parapuan-tongkonan",
    "title": "Cerita Keluarga Toraja: Silsilah Pa’rapuan & Kasih Nenek Pong Massangka",
    "subtitle": "Pilar Kekerabatan Turun-Temurun Berpusat pada Bilik Tongkonan Layuk",
    "category": "cerita_keluarga",
    "province": "Sulawesi Selatan",
    "tribe": "Toraja",
    "regionDetail": "Kete Kesu & Sangalla, Tana Toraja",
    "elderNarrator": {
      "name": "Nenek Lai’ Rante",
      "age": 84,
      "titleOrRole": "Nenek Penjaga Silsilah Pa’rapuan Kete Kesu",
      "location": "Kete Kesu, Toraja Utara"
    },
    "recordedBy": {
      "name": "Melania Parinding & David Sampe",
      "schoolOrAffiliation": "SMA Kristen Rantepao",
      "date": "22 Agustus 2024"
    },
    "summary": "Bagi orang Toraja, keluarga bukanlah sebatas bapak, ibu, dan anak, melainkan rumpun \"Pa’rapuan\" besar yang berakar dari satu tongkonan leluhur. Nenek menceritakan kisah kakek buyut Pong Massangka yang rela memikul beban berat demi menyekolahkan adik-adik dan keponakannya, mengajari bahwa tiang rumah tongkonan tak boleh retak karena perselisihan warisan.",
    "philosophicalMeaning": "Falsafah \"Misa’ Kada Dipotuo, Pantan Kada Dipomate\" dan ikatan \"Kaboro’ Sangpa’rapuan\" (kasih persaudaraan tak terputus). Tongkonan adalah tempat pulang bagi semua anak rantau.",
    "localTerms": [
      {
        "term": "Pa’rapuan",
        "meaning": "Rumpun keluarga besar seketurunan dari satu tongkonan asal",
        "language": "Toraja"
      },
      {
        "term": "Tongkonan Layuk",
        "meaning": "Rumah adat tertinggi tempat musyawarah silsilah keluarga",
        "language": "Toraja"
      },
      {
        "term": "Kaboro’",
        "meaning": "Cinta kasih dan kepedulian yang tulus antar-saudara",
        "language": "Toraja"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menceritakan Pohon Silsilah di Depan Alang Lumbung",
        "description": "Saat upacara adat, kakek mengumpulkan cucu-cucu dan menerangkan asal-usul garis keturunan hingga 7 lapis generasi."
      },
      {
        "stepNumber": 2,
        "title": "Kombongan Sangpa’rapuan: Musyawarah Keluarga",
        "description": "Keluarga besar berkumpul memecahkan masalah salah satu kerabat yang membutuhkan bantuan biaya pendidikan."
      },
      {
        "stepNumber": 3,
        "title": "Menyalakan Api Tungku Dapur Tongkonan",
        "description": "Nenek merebus kopi arabika Toraja dan membagikan kue Deppa Tori kepada seluruh cucu sebagai lambang kehangatan."
      }
    ],
    "preservationAdvice": "Nenek Lai’ berpesan: \"Ke mana pun anak Toraja merantau ke ujung dunia, ingatlah ukiran Pa’barre Allo di tongkonanmu. Jangan pernah putuskan tali darah.\"",
    "estimatedEra": "Pewarisan lisan adat Aluk Todolo sejak abad ke-15",
    "tags": [
      "Toraja",
      "Cerita Keluarga",
      "Parapuan",
      "Tongkonan",
      "Sulawesi Selatan"
    ],
    "likesCount": 340
  },
  {
    "id": "mandar-cerita-keluarga-sayyang-pattudu-kasih-ibu",
    "title": "Cerita Keluarga Mandar: Tradisi Sayyang Pattu’du & Kasih Sayang Ibu Penenun Sa’be",
    "subtitle": "Nasihat Kakek Daeng Maroa tentang Syukur Khatam Al-Qur’an dan Bakti Anak kepada Orang Tua",
    "category": "cerita_keluarga",
    "province": "Sulawesi Barat",
    "tribe": "Mandar",
    "regionDetail": "Balanipa, Polewali Mandar",
    "elderNarrator": {
      "name": "Kakek Daeng Maroa",
      "age": 80,
      "titleOrRole": "Pawang Kuda Menari Sayyang Pattu’du & Tetua Kampung",
      "location": "Desa Karama, Balanipa, Polman"
    },
    "recordedBy": {
      "name": "Nur Fadilah & Riswan",
      "schoolOrAffiliation": "SMA Negeri 1 Tinambung",
      "date": "25 Agustus 2024"
    },
    "summary": "Di tanah Mandar, perayaan khatam Al-Qur’an anak diarak menunggangi kuda menari (Sayyang Pattu’du). Kakek menceritakan kisah perjuangan seorang ibu penenun sarung sutra Sa’be Mandar yang menabung helai benang demi membiayai pesta kelulusan ngaji putranya, menunjukkan betapa sucinya doa dan pengorbanan orang tua Mandar bagi pendidikan rohani anak.",
    "philosophicalMeaning": "Nilai \"Malaqbi ri Pa’mai\" (kemuliaan hati budi pekerti) dan bakti tertinggi kepada kedua orang tua yang telah mendidik anak mengenal firman Tuhan dan sopan santun adat.",
    "localTerms": [
      {
        "term": "Sayyang Pattu’du",
        "meaning": "Kuda menari pengarak anak yang khatam Al-Qur’an",
        "language": "Mandar"
      },
      {
        "term": "Sa’be Mandar",
        "meaning": "Kain sarung sutra tenun tangan warisan kebanggaan keluarga",
        "language": "Mandar"
      },
      {
        "term": "Malaqbi ri Pa’mai",
        "meaning": "Keluarga yang memiliki keanggunan pekerti dan hati mulia",
        "language": "Mandar"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Ibu Menenun Sa’be di Bawah Kolong Rumah",
        "description": "Terdengar bunyi ketukan alat tenun gedogan tanda kasih ibu yang tak kenal lelah demi masa depan anak."
      },
      {
        "stepNumber": 2,
        "title": "Anak Sungkem di Hadapan Kedua Orang Tua",
        "description": "Sebelum menaiki kuda Sayyang Pattu’du, sang anak mencium tangan ibu dan ayah sambil memohon ridha dan doa restu."
      },
      {
        "stepNumber": 3,
        "title": "Arakan Rebana Parrawana Keliling Kampung",
        "description": "Warga sekampung bersorak gembira merayakan keberhasilan anak yang saleh, mempererat rasa persaudaraan warga Mandar."
      }
    ],
    "preservationAdvice": "Kakek Daeng Maroa berpesan: \"Hormati ibumu yang kakinya menginjak injakan tenun. Tanpa doa ibu penenun, tak ada nakhoda Sandeq yang berhasil menaklukkan ombak.\"",
    "estimatedEra": "Diwariskan sejak masuknya Islam di Balanipa Mandar abad ke-16",
    "tags": [
      "Mandar",
      "Cerita Keluarga",
      "Sayyang Pattudu",
      "Balanipa",
      "Sulawesi Barat"
    ],
    "likesCount": 312
  },
  {
    "id": "mamasa-cerita-keluarga-banua-sibarrung",
    "title": "Cerita Keluarga Mamasa: Kehangatan Banua Sibarrung & Tradisi Ma’kombongan",
    "subtitle": "Nenek Indo’ Alik Menuturkan Petuah Didikan Anak di Dapur Rumah Kembar Pegunungan",
    "category": "cerita_keluarga",
    "province": "Sulawesi Barat",
    "tribe": "Mamasa",
    "regionDetail": "Kecamatan Tawalian & Sumarorong, Mamasa",
    "elderNarrator": {
      "name": "Nenek Indo’ Alik",
      "age": 76,
      "titleOrRole": "Tetua Rumpun Banua Sibarrung",
      "location": "Tawalian, Mamasa"
    },
    "recordedBy": {
      "name": "Kornelius Demmassangka & Maria Ulfa",
      "schoolOrAffiliation": "SMK Negeri 1 Mamasa",
      "date": "28 Agustus 2024"
    },
    "summary": "Rumah adat Mamasa Banua Sibarrung adalah rumah kembar berdampingan yang melambangkan sepasang suami istri yang saling menopang beban hidup. Nenek menceritakan masa kecilnya di sekitar perapian dapur (Dapo’), di mana orang tua mengajarkan anak-anak menanam kopi, memintal serat nanas, dan tidak boleh tidur sebelum memastikan ternak tetangga aman dari dinginnya kabut malam.",
    "philosophicalMeaning": "Kasih kekeluargaan Mamasa didasari kesetiaan suami-istri dan kejujuran tanpa pamrih. Keluarga yang kokoh adalah benteng utama kampung dari perpecahan.",
    "localTerms": [
      {
        "term": "Banua Sibarrung",
        "meaning": "Rumah adat berpasangan lambang kesetiaan suami istri",
        "language": "Mamasa"
      },
      {
        "term": "Dapo’",
        "meaning": "Tungku perapian dapur tempat berkumpul dan berpetuah di malam dingin",
        "language": "Mamasa"
      },
      {
        "term": "Ma’kombongan",
        "meaning": "Musyawarah keluarga untuk saling menguatkan dalam duka dan suka",
        "language": "Mamasa"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Duduk Melingkar di Sekitar Dapo’ Perapian",
        "description": "Anak-cucu menikmati rebusan ubi manis dan kopi Mamasa sembari mendengarkan petuah kakek tentang kejujuran."
      },
      {
        "stepNumber": 2,
        "title": "Mamballa: Membantu Saudara Membuka Kebun Kopi",
        "description": "Bila salah satu anggota keluarga sakit, kerabat satu rumpun menggantikan merawat kebun kopi tanpa meminta upah."
      },
      {
        "stepNumber": 3,
        "title": "Menyimpan Hasil Panen di Rante Padi Bersama",
        "description": "Padi ketan hasil panen disisihkan sebagian untuk membantu saudara yang belum berkecukupan."
      }
    ],
    "preservationAdvice": "Nenek Indo’ Alik berpesan: \"Dinginnya kabut Mamasa tak akan menusuk tulang jika perapian kasih sayang di rumahmu tetap menyala.\"",
    "estimatedEra": "Diwariskan secara lisan sejak abad ke-17",
    "tags": [
      "Mamasa",
      "Cerita Keluarga",
      "Banua Sibarrung",
      "Dapo",
      "Sulawesi Barat"
    ],
    "likesCount": 275
  },
  {
    "id": "kaili-cerita-keluarga-sintuvu-lembah-palu",
    "title": "Cerita Keluarga Kaili: Semangat Sintuvu & Didikan Nenek Daeng Masola",
    "subtitle": "Kisah Gotong Royong Keluarga di Rumah Souraja saat Menghadapi Bencana dan Kemarau Lembah Palu",
    "category": "cerita_keluarga",
    "province": "Sulawesi Tengah",
    "tribe": "Kaili",
    "regionDetail": "Lembah Palu & Sigi",
    "elderNarrator": {
      "name": "Nenek Daeng Masola",
      "age": 81,
      "titleOrRole": "Tetua Adat Perempuan Rumpun Souraja Palu",
      "location": "Kelurahan Lere, Palu Barat"
    },
    "recordedBy": {
      "name": "Bayu Prasetyo & Siti Fatimah",
      "schoolOrAffiliation": "Universitas Tadulako Palu",
      "date": "02 September 2024"
    },
    "summary": "Di Lembah Palu yang beriklim kering, keluarga Kaili bertahan selama berabad-abad berkat tradisi \"Sintuvu\" (kebersamaan sehati). Nenek menuturkan kisah keluarganya saat terjadi gempa dan kemarau panjang tempo dulu: seluruh rumpun berkumpul di bawah tiang Souraja, saling membagi stok kaledo dan jagung pulut, serta saling menjaga anak-anak yatim piatu laksana anak kandung sendiri.",
    "philosophicalMeaning": "Falsafah \"Topo Maeda\" dan \"Nosimpotove\" (saling mengasihi sesama saudara sedarah dan sesama tetangga). Tidak ada keluarga Kaili yang boleh lapar sendirian sementara tetangganya berlebih.",
    "localTerms": [
      {
        "term": "Sintuvu",
        "meaning": "Rasa kebersamaan, persatuan, dan tolong-menolong tanpa pamrih",
        "language": "Kaili"
      },
      {
        "term": "Nosimpotove",
        "meaning": "Saling menyayangi dan melindungi antar-anggota keluarga",
        "language": "Kaili"
      },
      {
        "term": "Souraja",
        "meaning": "Rumah panggung besar tempat bernaung rumpun keluarga besar",
        "language": "Kaili"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Musyawarah di Gandaria (Bilik Depan)",
        "description": "Paman dan bibi berkumpul merencanakan bantuan bagi kerabat yang hendak melangsungkan hajatan pernikahan."
      },
      {
        "stepNumber": 2,
        "title": "Membagi Air Irigasi Gumbasa Bersama Saudara",
        "description": "Keluarga saling bergantian mengalirkan air ke petak sawah saudara tanpa pernah berebut di malam hari."
      },
      {
        "stepNumber": 3,
        "title": "Tradisi Mombondau: Menghibur Keluarga yang Berduka",
        "description": "Kerabat datang membawakan beras pulut dan kue tradisional untuk mendampingi keluarga yang berduka cita."
      }
    ],
    "preservationAdvice": "Nenek Daeng Masola mengingatkan: \"Palu pernah diuji gempa dahsyat, tetapi yang membuat kita tegak kembali adalah doa ibu dan rasa Sintuvu keluarga kita.\"",
    "estimatedEra": "Diwariskan sejak era Kerajaan Palu abad ke-18",
    "tags": [
      "Kaili",
      "Cerita Keluarga",
      "Sintuvu",
      "Souraja",
      "Sulawesi Tengah"
    ],
    "likesCount": 308
  },
  {
    "id": "pamona-cerita-keluarga-lobo-kasintuwu-poso",
    "title": "Cerita Keluarga Pamona: Kekerabatan Lobo & Asuhan Nenek di Tepi Danau Poso",
    "subtitle": "Nasihat Kakek Tua Bo’o tentang Menjaga Kerukunan Sampu’u dan Tradisi Padungku Pesta Panen",
    "category": "cerita_keluarga",
    "province": "Sulawesi Tengah",
    "tribe": "Pamona",
    "regionDetail": "Tentena & Danau Poso",
    "elderNarrator": {
      "name": "Kakek Tua Bo’o (Opa Alex)",
      "age": 79,
      "titleOrRole": "Penutur Adat Sampu’u Pamona Danau Poso",
      "location": "Tentena, Pamona Puselemba, Poso"
    },
    "recordedBy": {
      "name": "Grace Waworundeng & Hendra Taula",
      "schoolOrAffiliation": "SMA Kristen Tentena",
      "date": "04 September 2024"
    },
    "summary": "Keluarga Pamona di perbukitan Tentena memiliki ikatan \"Sampu’u\" (satu garis keturunan leluhur). Kakek menceritakan tradisi keluarga berkumpul di rumah adat Lobo saat musim panen padi ladang Padungku. Seluruh rumpun memasak beras baru di dalam bambu (Inuyu) dan anak-anak diajarkan menghormati orang yang lebih tua dengan menundukkan kepala saat melintas.",
    "philosophicalMeaning": "Semboyan \"Napa Moiko Kita Tuwu Sampu’u\" (Alangkah indahnya kita hidup rukun sekeluarga). Kedamaian rumah tangga adalah cerminan tenangnya air Danau Poso yang biru jernih.",
    "localTerms": [
      {
        "term": "Sampu’u",
        "meaning": "Satu tali persaudaraan sedarah dari satu nenek moyang",
        "language": "Pamona"
      },
      {
        "term": "Inuyu",
        "meaning": "Nasi ketan bakar dalam bambu sajian syukur bersama keluarga",
        "language": "Pamona"
      },
      {
        "term": "Lobo",
        "meaning": "Balai musyawarah sakral tempat mempererat silaturahmi keluarga",
        "language": "Pamona"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membakar Inuyu di Halaman Belakang",
        "description": "Anak-anak bersama kakek memotong bambu hutan dan mengisinya dengan beras pulut dan santan kelapa harum."
      },
      {
        "stepNumber": 2,
        "title": "Makan Bersama di Atas Daun Pisang Lebar",
        "description": "Ikan sidat sogili bakar disajikan di tengah tikar, dimakan bersama dengan senyum dan tawa keakraban."
      },
      {
        "stepNumber": 3,
        "title": "Doa Syukur dan Berkat dari Tetua",
        "description": "Kakek meletakkan tangan di atas kepala cucu-cucunya seraya mendoakan agar menjadi anak yang berbakti pada tanah Poso."
      }
    ],
    "preservationAdvice": "Kakek Opa Alex berpesan: \"Jangan biarkan perbedaan merusak persaudaraan Sampu’u. Kalau ada masalah keluarga, selesaikanlah dengan hati dingin seperti air Danau Poso.\"",
    "estimatedEra": "Diwariskan lisan sejak abad ke-16",
    "tags": [
      "Pamona",
      "Cerita Keluarga",
      "Danau Poso",
      "Tentena",
      "Sulawesi Tengah"
    ],
    "likesCount": 289
  },
  {
    "id": "tolaki-cerita-keluarga-komali-kalo-sara",
    "title": "Cerita Keluarga Tolaki: Rumah Komali & Pranata Kalo Sara dalam Mendidik Anak",
    "subtitle": "Petuah Ine Mbu’i tentang Kesucian Pernikahan dan Budi Pekerti Anak Tolaki di Unaaha",
    "category": "cerita_keluarga",
    "province": "Sulawesi Tenggara",
    "tribe": "Tolaki",
    "regionDetail": "Unaaha & Lambuya, Konawe",
    "elderNarrator": {
      "name": "Ine Mbu’i Ratna",
      "age": 75,
      "titleOrRole": "Sesepuh Adat Perempuan Tolaki Konawe",
      "location": "Unaaha, Kabupaten Konawe"
    },
    "recordedBy": {
      "name": "Dewi Lestari & Ardiansyah",
      "schoolOrAffiliation": "SMA Negeri 1 Unaaha",
      "date": "07 September 2024"
    },
    "summary": "Dalam rumah adat Komali, keluarga Tolaki meletakkan rotan melingkar Kalo Sara di tempat paling terhormat. Ine Mbu’i menuturkan bahwa setiap ada perselisihan suami-istri atau antar-saudara kandung, Kalo Sara diletakkan di tengah tikar. Melihat rotan tanpa ujung itu, kedua pihak wajib saling memaafkan dan mengingat sumpah pernikahan leluhur.",
    "philosophicalMeaning": "Keluarga Tolaki menjunjung tinggi kesetiaan, kesederhanaan, dan larangan keras bertengkar di depan anak-anak. Kalo Sara menjadi pedoman moral bahwa damai lebih tinggi daripada harta benda.",
    "localTerms": [
      {
        "term": "Ine Mbu’i",
        "meaning": "Panggilan takzim untuk ibu/nenek yang bijaksana",
        "language": "Tolaki"
      },
      {
        "term": "Komali",
        "meaning": "Rumah panggung keluarga bernaung para pemangku adat",
        "language": "Tolaki"
      },
      {
        "term": "Medulu",
        "meaning": "Kerukunan bersaudara saling topang dalam kesusahan",
        "language": "Tolaki"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mendengarkan Kisah Nenek saat Memintal Benang",
        "description": "Cucu-cucu duduk di dekat peraduan mendengarkan dongeng kepahlawanan Mokole Lakidende yang adil membela kaum lemah."
      },
      {
        "stepNumber": 2,
        "title": "Menyajikan Sinonggi Sagu Panas di Dulang",
        "description": "Ibu mengaduk sagu molulu dengan sumpit bambu o-sampe dan membagikan kuah ikan kapurung dengan kasih sayang."
      },
      {
        "stepNumber": 3,
        "title": "Pemberian Nasihat Menjelang Dewasa",
        "description": "Ayah mengajarkan anak laki-laki cara menjaga kehormatan saudara perempuannya dari perlakuan tidak sopan."
      }
    ],
    "preservationAdvice": "Ine Mbu’i berpesan: \"Anak Tolaki jangan mudah marah. Lihatlah rotan Kalo Sara yang lentur tapi tak bisa dipatahkan, begitulah kasih dalam keluarga.\"",
    "estimatedEra": "Diwariskan sejak masa Kerajaan Konawe abad ke-17",
    "tags": [
      "Tolaki",
      "Cerita Keluarga",
      "Konawe",
      "Kalo Sara",
      "Sulawesi Tenggara"
    ],
    "likesCount": 310
  },
  {
    "id": "buton-cerita-keluarga-posuo-kamali-wolio",
    "title": "Cerita Keluarga Buton: Tradisi Posuo & Budi Pekerti Ibu di Benteng Wolio",
    "subtitle": "Nenek Wa Ode Sarina Mengisahkan Pingitan Gadis Remaja Menuju Kedewasaan Berakhlak Mulia",
    "category": "cerita_keluarga",
    "province": "Sulawesi Tenggara",
    "tribe": "Buton",
    "regionDetail": "Keraton Wolio, Kota Bau-Bau",
    "elderNarrator": {
      "name": "Wa Ode Sarina",
      "age": 83,
      "titleOrRole": "Tetua Adat Posuo Keraton Buton",
      "location": "Kelurahan Melai, Benteng Keraton Buton, Bau-Bau"
    },
    "recordedBy": {
      "name": "La Ode Fikri & Wa Ode Nurul",
      "schoolOrAffiliation": "Universitas Dayanu Ikhsanuddin Bau-Bau",
      "date": "10 September 2024"
    },
    "summary": "Di dalam benteng batu kapur Keraton Wolio, keluarga Buton menjalankan tradisi sakral \"Posuo\" (pingitan 4 hingga 8 hari bagi anak gadis yang beranjak dewasa). Nenek menceritakan bagaimana di dalam bilik khusus, anak gadis dibimbing oleh para sesepuh wanita tentang adab berbicara, kebersihan batin, kesabaran, serta doa-doa zikir agar menjadi tiang keluarga yang salehah dan tegar.",
    "philosophicalMeaning": "Filosofi \"Bula Malino\" (hati yang bening laksana bulan purnama). Gadis yang keluar dari Posuo dianggap terlahir kembali dengan budi pekerti yang harum bagi keluarga dan masyarakat.",
    "localTerms": [
      {
        "term": "Posuo",
        "meaning": "Ritual pembersihan batin dan pendidikan kedewasaan putri Buton",
        "language": "Buton (Wolio)"
      },
      {
        "term": "Wa Ode",
        "meaning": "Gelar kehormatan wanita bangsawan Buton berbudi pekerti mulia",
        "language": "Buton (Wolio)"
      },
      {
        "term": "Bula Malino",
        "meaning": "Falsafah ketenangan jiwa dan kejernihan nurani",
        "language": "Buton (Wolio)"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Masuk Bilik Pingitan Posuo",
        "description": "Gadis remaja diisolasi dari keramaian dunia luar untuk merenungi tujuan hidup dan mendekatkan diri pada Tuhan."
      },
      {
        "stepNumber": 2,
        "title": "Mendapat Bimbingan Adab dari Sesepuh",
        "description": "Para nenek mengajarkan tata krama berjalan, bertutur kata lembut, menjaga kehormatan diri, dan seni mengelola rumah tangga."
      },
      {
        "stepNumber": 3,
        "title": "Malam Matana Kolo: Pembersihan dan Penampilan Baru",
        "description": "Gadis keluar dengan mengenakan pakaian adat kebesaran disambut tangis haru dan pelukan kedua orang tuanya."
      }
    ],
    "preservationAdvice": "Wa Ode Sarina berpesan: \"Posuo bukan sekadar adat kuno, ini benteng moral anak perempuan kita agar tak terombang-ambing di zaman modern.\"",
    "estimatedEra": "Masa Kesultanan Buton abad ke-16",
    "tags": [
      "Buton",
      "Cerita Keluarga",
      "Posuo",
      "Wolio",
      "Bau-Bau",
      "Sulawesi Tenggara"
    ],
    "likesCount": 335
  },
  {
    "id": "muna-cerita-keluarga-karia-nasihat-orang-tua",
    "title": "Cerita Keluarga Muna: Tradisi Karia & Keteladanan Orang Tua di Raha",
    "subtitle": "Kakek La Ode Kasim Menuturkan Pengorbanan Ayah Membimbing Anak Menjadi Pribadi Jujur dan Mandiri",
    "category": "cerita_keluarga",
    "province": "Sulawesi Tenggara",
    "tribe": "Muna",
    "regionDetail": "Kota Raha & Kontunaga, Pulau Muna",
    "elderNarrator": {
      "name": "Kakek La Ode Kasim",
      "age": 78,
      "titleOrRole": "Tokoh Adat Budaya Muna",
      "location": "Kontunaga, Kabupaten Muna"
    },
    "recordedBy": {
      "name": "Wa Ode Rini & La Ode Syawal",
      "schoolOrAffiliation": "SMA Negeri 1 Raha",
      "date": "12 September 2024"
    },
    "summary": "Di Pulau Muna yang bertanah kapur, keluarga hidup dengan ketangguhan tinggi. Kakek menuturkan bagaimana orang tua mendidik anak lelakinya membuat layangan Kaghati dari daun kolope di hutan, melatih ketelitian dan kesabaran. Sementara anak perempuan menjalani tradisi Karia untuk pembekalan mental kedewasaan.",
    "philosophicalMeaning": "Falsafah hidup keluarga Muna \"Hansuru-hansuru kalambe\" (Rela berkorban demi kehormatan tanah tumpah darah dan kejujuran keluarga). Kasih sayang ayah diwujudkan dalam teladan kerja keras membanting tulang di ladang ubi kaopi.",
    "localTerms": [
      {
        "term": "Karia",
        "meaning": "Upacara inisiasi kedewasaan remaja perempuan Muna",
        "language": "Muna"
      },
      {
        "term": "Kaopi",
        "meaning": "Olahan singkong fermentasi tahan lama bekal keluarga di musim paceklik",
        "language": "Muna"
      },
      {
        "term": "Hansuru-hansuru kalambe",
        "meaning": "Pengorbanan suci demi kemaslahatan bersama",
        "language": "Muna"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membimbing Anak Memilih Daun Kolope di Hutan",
        "description": "Ayah mengajarkan anak mana daun umbi hutan yang cukup tua dan kuat untuk dijadikan sayap layang-layang."
      },
      {
        "stepNumber": 2,
        "title": "Mengolah Ubi Bersama Ibu di Halaman Rumah",
        "description": "Keluarga saling bantu mengupas singkong dan memeras airnya untuk disimpan di dalam tempayan batu."
      },
      {
        "stepNumber": 3,
        "title": "Malam Doa Restu Karia",
        "description": "Ayah dan ibu menyuapkan nasi kuning telur kepada anak seraya mendoakan agar menjadi manusia yang berguna bagi nusa bangsa."
      }
    ],
    "preservationAdvice": "Kakek La Ode Kasim berpesan: \"Tanah Muna ini keras berbatu karang, tapi jangan sampai hati anak-anak Muna menjadi keras dan melupakan baktinya kepada orang tua.\"",
    "estimatedEra": "Diwariskan sejak era Kerajaan Muna abad ke-15",
    "tags": [
      "Muna",
      "Cerita Keluarga",
      "Karia",
      "Raha",
      "Sulawesi Tenggara"
    ],
    "likesCount": 298
  },
  {
    "id": "moronene-cerita-keluarga-kehangatan-dapur-tobu",
    "title": "Cerita Keluarga Moronene: Kehangatan Dapur Rumah Tinggi Tobu",
    "subtitle": "Nenek Bua Aminah Mengisahkan Ajaran Kasih Sayang dan Ketulusan Menganyam Tikar Purun Bersama Anak Gadis",
    "category": "cerita_keluarga",
    "province": "Sulawesi Tenggara",
    "tribe": "Moronene",
    "regionDetail": "Rumbia & Rawa Aopa, Bombana",
    "elderNarrator": {
      "name": "Nenek Bua Aminah",
      "age": 80,
      "titleOrRole": "Sesepuh Perempuan Penganyam Purun Moronene",
      "location": "Kecamatan Rumbia, Bombana"
    },
    "recordedBy": {
      "name": "Siti Rahmawati & Ilham Ramli",
      "schoolOrAffiliation": "SMA Negeri 1 Rumbia",
      "date": "15 September 2024"
    },
    "summary": "Di atas rumah panggung tinggi bertiang kokoh (Tobu), keluarga Moronene berkumpul di sekitar perapian saat angin kencang bertiup melintasi padang sabana Bombana. Nenek menceritakan bagaimana seorang ibu Moronene mewariskan keahlian menganyam tikar purun dan memeras sagu molulu kepada putrinya sambil menanamkan nilai tidak boleh serakah mengambil hasil hutan.",
    "philosophicalMeaning": "Ajaran \"Mepokoaso\" bermula dari meja makan keluarga: apa yang didapat dari rawa dan sabana dibagi rata bersama paman, bibi, dan tetangga sepuh tanpa pamrih.",
    "localTerms": [
      {
        "term": "Tobu",
        "meaning": "Rumah adat panggung tinggi pelindung keluarga dari banjir rawa",
        "language": "Moronene"
      },
      {
        "term": "Purun",
        "meaning": "Tumbuhan rumput rawa yang diolah menjadi anyaman tikar halus",
        "language": "Moronene"
      },
      {
        "term": "Molulu",
        "meaning": "Proses mengendapkan sari pati tepung sagu basah segar",
        "language": "Moronene"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengumpulkan Batang Purun Bersama Ibu",
        "description": "Sejak fajar menyingsing, ibu dan anak gadis mendayung perahu sampan kecil menyusuri tepian Rawa Aopa."
      },
      {
        "stepNumber": 2,
        "title": "Menumbuk Batang Purun dengan Alung Kayu",
        "description": "Batang purun ditumbuk hingga pipih lalu dijemur di atas lantai bambu teras rumah Tobu."
      },
      {
        "stepNumber": 3,
        "title": "Anyaman Cinta Kasih di Malam Hari",
        "description": "Sambil menganyam motif tradisional, nenek menasihati cucunya agar selalu menjaga tutur kata dan kemurnian hati nurani."
      }
    ],
    "preservationAdvice": "Nenek Bua Aminah berpesan: \"Anyaman tikar purun ini menyatukan ribuan helai rumput menjadi kuat, persis seperti rasa cinta yang menyatukan keluarga Moronene.\"",
    "estimatedEra": "Pewarisan lisan tertua suku asli Bombana abad ke-15",
    "tags": [
      "Moronene",
      "Cerita Keluarga",
      "Purun",
      "Rawa Aopa",
      "Sulawesi Tenggara"
    ],
    "likesCount": 260
  },
  {
    "id": "minahasa-cerita-keluarga-rumah-woloan-mapalus",
    "title": "Cerita Keluarga Minahasa: Rumah Panggung Woloan & Kasih Oma Marie",
    "subtitle": "Keteladanan Gotong Royong Mapalus Dimulai dari Dapur dan Pekarangan Rumah Tangga Tomohon",
    "category": "cerita_keluarga",
    "province": "Sulawesi Utara",
    "tribe": "Minahasa",
    "regionDetail": "Woloan, Kota Tomohon",
    "elderNarrator": {
      "name": "Oma Marie Pangalila",
      "age": 81,
      "titleOrRole": "Sesepuh Keluarga Rumpun Tombulu",
      "location": "Kelurahan Woloan Satu, Tomohon Barat"
    },
    "recordedBy": {
      "name": "Christian Poluan & Jessica Sondakh",
      "schoolOrAffiliation": "SMA Negeri 1 Tomohon",
      "date": "17 September 2024"
    },
    "summary": "Di balik sejuknya udara kaki Gunung Lokon, keluarga Minahasa tinggal di rumah kayu panggung Woloan yang terkenal kokoh tahan gempa. Oma Marie mengisahkan bagaimana sejak dini anak-anak diajarkan prinsip \"Mapalus\": bila tetangga atau keluarga sedang membangun rumah atau memanen cengkih, seluruh anggota keluarga wajib turun tangan membantu tanpa memikirkan bayaran uang.",
    "philosophicalMeaning": "Pilar falsafah \"Si Tou Timou Tumou Tou\" (Manusia hidup untuk memanusiakan sesamanya) dipraktikkan langsung di lingkungan keluarga melalui keterbukaan pintu rumah bagi tamu dan kerabat.",
    "localTerms": [
      {
        "term": "Mapalus",
        "meaning": "Tradisi gotong royong tolong-menolong bergiliran antar-keluarga",
        "language": "Minahasa"
      },
      {
        "term": "Rumah Woloan",
        "meaning": "Rumah kayu panggung bongkar-pasang warisan arsitektur Minahasa",
        "language": "Minahasa"
      },
      {
        "term": "Kitorang Samua Basudara",
        "meaning": "Semboyan persaudaraan universal yang hangat tanpa memandang latar belakang",
        "language": "Minahasa / Melayu Manado"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Sarapan Bersama Tinutuan di Meja Panjang",
        "description": "Oma menyajikan bubur Manado panas bertabur daun gedi dan kemangi kepada seluruh anak dan menantu sebelum bekerja ke kebun."
      },
      {
        "stepNumber": 2,
        "title": "Membantu Kakek Memilih Balok Kayu Cempaka",
        "description": "Anak laki-laki belajar mengukur tiang kayu rumah panggung agar tegak lurus seimbang."
      },
      {
        "stepNumber": 3,
        "title": "Malam Puji-Pujian dan Doa Keluarga",
        "description": "Keluarga berkumpul menyanyikan lagu syukur dan opa memberikan nasihat adab pergaulan kepada para remaja."
      }
    ],
    "preservationAdvice": "Oma Marie berpesan: \"Pintu rumah Minahasa harus selalu terbuka bagi siapa saja yang haus dan lapar. Rawatlah kebiasaan kumpul keluarga di meja makan.\"",
    "estimatedEra": "Diwariskan sejak era kembalinya perantau Minahasa abad ke-18",
    "tags": [
      "Minahasa",
      "Cerita Keluarga",
      "Woloan",
      "Mapalus",
      "Tomohon",
      "Sulawesi Utara"
    ],
    "likesCount": 325
  },
  {
    "id": "bolmong-cerita-keluarga-komalig-mononggolipu",
    "title": "Cerita Keluarga Bolaang Mongondow: Rumah Komalig & Adat Mononggolipu",
    "subtitle": "Nenek Ki Guhanga Dondo Mengisahkan Tanggung Jawab Orang Tua Mendidik Generasi Berjiwa Ksatria Bogani",
    "category": "cerita_keluarga",
    "province": "Sulawesi Utara",
    "tribe": "Bolaang Mongondow",
    "regionDetail": "Kotamobagu & Lolayan",
    "elderNarrator": {
      "name": "Nenek Ki Guhanga Dondo Paputungan",
      "age": 79,
      "titleOrRole": "Pemerhati Adat Perkawinan & Keluarga Bolmong",
      "location": "Kotamobagu, Bolaang Mongondow"
    },
    "recordedBy": {
      "name": "Indra Mokodompit & Rahma Potabuga",
      "schoolOrAffiliation": "SMA Negeri 2 Kotamobagu",
      "date": "19 September 2024"
    },
    "summary": "Dalam keluarga Bolaang Mongondow, pernikahan dan kehidupan rumah tangga dipandu oleh adat \"Mononggolipu\" (menghormati tatanan negeri dan keluarga). Nenek menuturkan kisah para ksatria Bogani tempo dulu yang selalu meminta restu ibu sebelum melangkah keluar rumah, karena doa seorang ibu dipercaya memiliki berkah gaib yang menolak bala petaka.",
    "philosophicalMeaning": "Trilogi budi pekerti keluarga Bolmong: \"Mototompiaan\" (saling memperbaiki), \"Mototabian\" (saling mengasihi), dan \"Mototanoban\" (saling merindukan). Rumah tangga adalah surga kecil pembentuk budi pekerti.",
    "localTerms": [
      {
        "term": "Mononggolipu",
        "meaning": "Adat sopan santun dan tata krama dalam pergaulan keluarga besar",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Bogani",
        "meaning": "Ksatria pembela kebenaran pelindung tanah air dan keluarga",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Mototabian",
        "meaning": "Kasih sayang murni tanpa pamrih antar-saudara sekandung",
        "language": "Bolaang Mongondow"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menghidangkan Kue Alingkoge Bersama Kopi Kotamobagu",
        "description": "Ibu menyajikan kue ketan isi gula merah kepada tamu keluarga sebagai tanda ketulusan menyambut silaturahmi."
      },
      {
        "stepNumber": 2,
        "title": "Musyawarah Mupakat Keluarga Rumpun Paputungan",
        "description": "Para sesepuh duduk melingkar mendamaikan kesalahpahaman kecil antar-sepupu dengan penuh kelembutan."
      },
      {
        "stepNumber": 3,
        "title": "Membisikkan Petuah Bogani pada Cucu Lelaki",
        "description": "Kakek mengingatkan: \"Ksatria sejati bukan yang suka berkelahi, melainkan yang sanggup menahan amarah dan melindungi adik-adiknya.\""
      }
    ],
    "preservationAdvice": "Nenek Paputungan berpesan: \"Pegang teguh Mototompiaan, Mototabian, bo Mototanoban. Kalau tiga kata ini hidup di dalam rumahmu, keluargamu tak akan pernah hancur.\"",
    "estimatedEra": "Diwariskan sejak masa kemaharajaan Manoppo abad ke-17",
    "tags": [
      "Bolaang Mongondow",
      "Cerita Keluarga",
      "Kotamobagu",
      "Mototompiaan",
      "Sulawesi Utara"
    ],
    "likesCount": 290
  },
  {
    "id": "sangihe-cerita-keluarga-banua-nelayan-pamo",
    "title": "Cerita Keluarga Sangihe: Ketabahan Rumah Nelayan Perahu Pamo",
    "subtitle": "Nenek Oma Elsye Mengisahkan Doa Ibu di Dermaga Tahuna Menyambut Kepulangan Suami dari Laut Bebas Pasifik",
    "category": "cerita_keluarga",
    "province": "Sulawesi Utara",
    "tribe": "Sangihe",
    "regionDetail": "Tahuna & Kepulauan Marore, Sangihe",
    "elderNarrator": {
      "name": "Oma Elsye Makasenda",
      "age": 82,
      "titleOrRole": "Sesepuh Keluarga Nelayan Tradisional Tahuna",
      "location": "Tahuna, Kepulauan Sangihe"
    },
    "recordedBy": {
      "name": "Steven Gaghana & Priskila Hontong",
      "schoolOrAffiliation": "SMA Negeri 1 Tahuna",
      "date": "21 September 2024"
    },
    "summary": "Kehidupan keluarga suku Sangihe ditempa oleh deburan ombak Samudra Pasifik. Oma Elsye menceritakan bagaimana seorang ibu nelayan menjaga rumah dan mendidik anak-anak saat sang ayah berhari-hari berlayar mencari ikan malalugis menggunakan perahu Pamo. Setiap petang, lentera minyak dinyalakan di beranda tepi pantai sebagai penuntun arah pulang bagi perahu sang suami.",
    "philosophicalMeaning": "Prinsip \"Somahe Kai Kehage\" (Tangguh menghadapi badai) diajarkan pertama kali di dalam keluarga: anak-anak diajarkan tidak mudah menangis saat kekurangan, melainkan bersyukur atas apa pun hasil laut yang dibawa ayah ke rumah.",
    "localTerms": [
      {
        "term": "Perahu Pamo",
        "meaning": "Perahu cadik ramping nelayan laut dalam suku Sangihe",
        "language": "Sangihe"
      },
      {
        "term": "Somahe Kai Kehage",
        "meaning": "Ketabahan dan keberanian pantang menyerah di tengah kesulitan",
        "language": "Sangihe"
      },
      {
        "term": "Sasambo",
        "meaning": "Nyanyian puitis lisan yang didendangkan ibu penghibur anak",
        "language": "Sangihe"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menyalakan Lentera Penuntun di Tepi Pantai",
        "description": "Anak-anak bersama ibu berdiri di bibir karang menunggu bayangan layar perahu pamo ayah muncul di ufuk senja."
      },
      {
        "stepNumber": 2,
        "title": "Menyanyikan Sasambo Doa Laut Tenang",
        "description": "Ibu mendendangkan syair kuno memohon kepada Tuhan agar meredakan gelombang pasang di perairan perbatasan."
      },
      {
        "stepNumber": 3,
        "title": "Membagi Ikan Segar kepada Tetangga Janda dan Yatim",
        "description": "Sebelum ikan dijual ke pasar, keranjang pertama selalu disisihkan untuk tetangga lansia yang tidak bisa lagi melaut."
      }
    ],
    "preservationAdvice": "Oma Elsye berpesan: \"Anak pulau harus tangguh seperti karang, tapi hatinya harus selalu lembut pada ibu yang tak pernah tidur mendoakan keselamatannya.\"",
    "estimatedEra": "Diwariskan turun-temurun sejak era kerajaan Tampungang Lawo abad ke-16",
    "tags": [
      "Sangihe",
      "Cerita Keluarga",
      "Tahuna",
      "Somahe Kai Kehage",
      "Sulawesi Utara"
    ],
    "likesCount": 304
  },
  {
    "id": "gorontalo-cerita-keluarga-dulohupa-momeati",
    "title": "Cerita Keluarga Gorontalo: Tradisi Momeati & Keteladanan Dulohupa",
    "subtitle": "Nenek Ti Nenek Maryam Monoarfa Mengisahkan Petuah Adat Menjelang Kedewasaan Anak Gadis Hulonthalo",
    "category": "cerita_keluarga",
    "province": "Gorontalo",
    "tribe": "Gorontalo",
    "regionDetail": "Kota Gorontalo & Limboto",
    "elderNarrator": {
      "name": "Ti Nenek Maryam Monoarfa",
      "age": 80,
      "titleOrRole": "Pemangku Adat Momeati Gorontalo",
      "location": "Kelurahan Biawao, Kota Gorontalo"
    },
    "recordedBy": {
      "name": "Fauzan Habibie & Sri Rahayu Gobel",
      "schoolOrAffiliation": "MAN 1 Kota Gorontalo",
      "date": "23 September 2024"
    },
    "summary": "Di serambi rumah adat Dulohupa, keluarga Gorontalo menggelar upacara sakral \"Momeati\" (penyampaian nasihat dan sumpah kehormatan bagi anak perempuan yang menginjak masa baligh). Nenek menuturkan bahwa para orang tua dan pemangku syara’ membacakan bai’at adab agar sang anak selalu menjaga kehormatan diri, rajin beribadah, dan bertutur kata manis menyejukkan hati orang tua.",
    "philosophicalMeaning": "Prinsip \"Adati Hula-Hulaa to Saraa, Saraa Hula-Hulaa to Kuru’ani\" (Adat bersendi syara’, syara’ bersendi Kitabullah) terpatri sejak dini di sanubari anak. Keluarga adalah tempat menyemai ketakwaan dan budi pekerti luhur.",
    "localTerms": [
      {
        "term": "Momeati",
        "meaning": "Ritual pembai’atan nasihat budi pekerti bagi gadis yang beranjak dewasa",
        "language": "Gorontalo"
      },
      {
        "term": "Dulohupa",
        "meaning": "Musyawarah mufakat penuh kekeluargaan dan kasih sayang",
        "language": "Gorontalo"
      },
      {
        "term": "Hulonthalo",
        "meaning": "Sebutan luhur tanah leluhur Gorontalo",
        "language": "Gorontalo"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Duduk di Atas Pelaminan Tilabatayila",
        "description": "Anak gadis mengenakan busana Bili’u berwarna keemasan diapit kedua orang tua dan tetua adat perempuan."
      },
      {
        "stepNumber": 2,
        "title": "Pengucapan Bai’at Nasihat Momeati",
        "description": "Tetua adat melantunkan syair nasihat dalam bahasa Gorontalo halus tentang larangan berdusta dan pentingnya menjaga adab kesopanan."
      },
      {
        "stepNumber": 3,
        "title": "Sungkeman dan Suapan Nasi Pulut Bersama",
        "description": "Ayah dan ibu menyuapkan nasi pulut kuning (Milu Pulut) diiringi doa agar sang anak menjadi pelita kebanggaan keluarga."
      }
    ],
    "preservationAdvice": "Ti Nenek Maryam berpesan: \"Momeati adalah cermin kehormatan anak perempuan Gorontalo. Jangan sampai adat luhur ini pudar digilas pergaulan bebas zaman sekarang.\"",
    "estimatedEra": "Diwariskan sejak era Lima Kerajaan Serumpun (Limo Lo Pohalaa) abad ke-16",
    "tags": [
      "Gorontalo",
      "Cerita Keluarga",
      "Momeati",
      "Dulohupa",
      "Hulonthalo"
    ],
    "likesCount": 328
  },
  {
    "id": "mamasa-sejarah-kampung-balla-peu",
    "title": "Sejarah Kampung Adat Balla Peu & Lembah Mamasa",
    "subtitle": "Asal-Usul Permukiman Rumah Adat Banua Sura di Pegunungan Barat",
    "category": "cerita_sejarah",
    "province": "Sulawesi Barat",
    "tribe": "Mamasa",
    "regionDetail": "Kecamatan Balla, Kabupaten Mamasa",
    "elderNarrator": {
      "name": "Puang Tato Balla",
      "age": 79,
      "titleOrRole": "Tokoh Adat & Pemangku Sejarah Banua Sura",
      "location": "Desa Balla Peu, Mamasa"
    },
    "recordedBy": {
      "name": "Yohanes Pasolang & Kristin Tangdilintin",
      "schoolOrAffiliation": "SMA Negeri 1 Mamasa",
      "date": "12 Agustus 2024"
    },
    "summary": "Lembah Mamasa dibuka oleh leluhur Pongkapadang dan Torije’ne yang mendirikan permukiman awal di perbukitan sejuk Balla Peu. Rumah-rumah adat Banua Sura didirikan menghadap aliran sungai jernih dengan ukiran khas Tedong dan Sekong Kandoa, menandakan keharmonisan manusia dengan hutan lumut pegunungan tinggi.",
    "philosophicalMeaning": "Masyarakat Mamasa memegang teguh \"Mesa Kada Dipotuo, Pantan Kada Dipomate\" (Bersatu dalam mufakat kita hidup rukun, berselisih kita binasa). Rumah adat adalah lambang rahim keluarga yang wajib menjaga kedamaian persaudaraan.",
    "localTerms": [
      {
        "term": "Banua Sura",
        "meaning": "Rumah adat berukir warna-warni khas Mamasa",
        "language": "Mamasa"
      },
      {
        "term": "Balla Peu",
        "meaning": "Kampung tua di lereng bukit tempat musyawarah adat pertama",
        "language": "Mamasa"
      },
      {
        "term": "Mesa Kada Dipotuo",
        "meaning": "Falsafah musyawarah mufakat demi persatuan",
        "language": "Mamasa"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Kedatangan Pongkapadang di Lembah Hijau",
        "description": "Leluhur turun dari dataran tinggi mencari lembah subur yang berhawa sejuk dan berair melimpah untuk menanam padi ladang."
      },
      {
        "stepNumber": 2,
        "title": "Mendirikan Banua Sibarrung Pertama",
        "description": "Tiang-tiang kayu ulin hutan ditegakkan bersama secara gotong royong (Mamballa) tanpa paku besi."
      },
      {
        "stepNumber": 3,
        "title": "Ikrar Perdamaian Tondok Mamasa",
        "description": "Seluruh warga kampung berikrar menjaga mata air pegunungan dan melarang pertikaian antar-rumpun keluarga."
      }
    ],
    "preservationAdvice": "Puang Tato berpesan: \"Generasi muda Mamasa jangan lupakan kampung halamanmu di lembah ini. Jagalah Banua Sura dan hutan lindung Gandangdewata.\"",
    "estimatedEra": "Abad ke-15 Masehi",
    "tags": [
      "Mamasa",
      "Balla Peu",
      "Banua Sura",
      "Cerita Sejarah",
      "Sulawesi Barat"
    ],
    "likesCount": 287
  },
  {
    "id": "tolaki-sejarah-kampung-wawotobi-konawe",
    "title": "Sejarah Kampung Tua Wawotobi & Mokole Lakidende",
    "subtitle": "Kisah Asal-Usul Permukiman Sepanjang Sungai Konaweha",
    "category": "cerita_sejarah",
    "province": "Sulawesi Tenggara",
    "tribe": "Tolaki",
    "regionDetail": "Wawotobi, Kabupaten Konawe",
    "elderNarrator": {
      "name": "Ki Bokeo Mansur Saranani",
      "age": 77,
      "titleOrRole": "Pemerhati Sejarah Kerajaan Konawe & Adat Tolaki",
      "location": "Unaaha, Konawe"
    },
    "recordedBy": {
      "name": "Rahmat Hidayat & Nurfadillah",
      "schoolOrAffiliation": "Universitas Halu Oleo Kendari",
      "date": "20 Agustus 2024"
    },
    "summary": "Wawotobi adalah salah satu pusat permukiman tertua suku Tolaki di bantaran Sungai Konaweha. Di bawah kepemimpinan Mokole Lakidende, perkampungan ditata dengan prinsip Kalo Sara: lingkaran rotan perdamaian yang menjamin setiap warga kampung mendapat lahan sagu dan perlindungan dari kezaliman.",
    "philosophicalMeaning": "Semboyan \"Inae Konasara Iye Pinesara, Inae Liasara Iye Pinekasara\" (Siapa taat adat akan dimuliakan, siapa melanggar adat akan dihukum). Keadilan kampung bertumpu pada rotan Kalo Sara.",
    "localTerms": [
      {
        "term": "Wawotobi",
        "meaning": "Permukiman di tepi tanah tinggi subur bantaran sungai",
        "language": "Tolaki"
      },
      {
        "term": "Mokole",
        "meaning": "Raja atau pemimpin pengayom rakyat Tolaki",
        "language": "Tolaki"
      },
      {
        "term": "Kalo Sara",
        "meaning": "Anyaman rotan melingkar simbol hukum adat dan perdamaian",
        "language": "Tolaki"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Pertemuan Tetua di Bawah Pohon Beringin Konawe",
        "description": "Mokole Lakidende mengumpulkan para Ponggawa untuk menetapkan batas kampung dan wilayah hutan sagu rakyat."
      },
      {
        "stepNumber": 2,
        "title": "Penetapan Simbol Rotan Kalo Sara",
        "description": "Kalo Sara diletakkan di atas kain putih Siwoleu sebagai lambang bahwa hukum berlaku adil tanpa pandang bulu."
      },
      {
        "stepNumber": 3,
        "title": "Mekambo: Pesta Panen Bersama Warga Kampung",
        "description": "Seluruh warga makan sinonggi sagu bersama di halaman rumah panggung Komali untuk mensyukuri kemakmuran."
      }
    ],
    "preservationAdvice": "Ki Bokeo Mansur berpesan: \"Jangan sampai anak cucu Tolaki malu berbahasa Tolaki dan melupakan keagungan Kalo Sara.\"",
    "estimatedEra": "Era Kerajaan Konawe abad ke-17",
    "tags": [
      "Tolaki",
      "Wawotobi",
      "Konawe",
      "Kalo Sara",
      "Sulawesi Tenggara"
    ],
    "likesCount": 305
  },
  {
    "id": "moronene-sejarah-kampung-hukaea-laea",
    "title": "Sejarah Kampung Adat Hukaea Laea Rawa Aopa",
    "subtitle": "Asal-Usul Permukiman Purba Suku Moronene di Padang Sabana",
    "category": "cerita_sejarah",
    "province": "Sulawesi Tenggara",
    "tribe": "Moronene",
    "regionDetail": "Taman Nasional Rawa Aopa Watumohai, Bombana",
    "elderNarrator": {
      "name": "Mokole Mansur Tobu",
      "age": 73,
      "titleOrRole": "Tetua Adat Hukaea Laea Moronene",
      "location": "Lembah Rawa Aopa, Bombana"
    },
    "recordedBy": {
      "name": "Faisal Akbar & Tri Wahyuni",
      "schoolOrAffiliation": "Komunitas Pusaka Moronene Bombana",
      "date": "05 September 2024"
    },
    "summary": "Kampung Hukaea Laea adalah jantung permukiman tertua suku Moronene, salah satu suku asli paling tua di jazirah Sulawesi. Didirikan di perbatasan rawa purba dan sabana emas, nenek moyang Moronene hidup berdampingan dengan rusa, anoa, dan ratusan jenis burung air dengan menjaga sumpah pantangan merusak hutan sagu.",
    "philosophicalMeaning": "Falsafah \"Mepokoaso\" (bersatu hati menjaga tanah tumpah darah). Tanah dan rawa bukan milik perseorangan, melainkan titipan leluhur yang wajib diwariskan utuh tanpa tambang perusak.",
    "localTerms": [
      {
        "term": "Hukaea Laea",
        "meaning": "Kampung adat lembah berkabut tempat berteduh para leluhur",
        "language": "Moronene"
      },
      {
        "term": "Tobu",
        "meaning": "Rumah panggung tinggi bertiang kayu ulin hutan",
        "language": "Moronene"
      },
      {
        "term": "Mepokoaso",
        "meaning": "Satu hati satu rasa dalam membela kebenaran adat",
        "language": "Moronene"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Penjelajahan Rawa Aopa Purba",
        "description": "Para perintis Moronene menyusuri aliran sungai rawa mencari sumber air tawar dan pohon sagu hutan."
      },
      {
        "stepNumber": 2,
        "title": "Mendirikan Tiang Rumah Tinggi (Tobu)",
        "description": "Rumah panggung dibuat bertiang 3-4 meter untuk menghindari banjir musiman rawa dan binatang buas."
      },
      {
        "stepNumber": 3,
        "title": "Upacara Padendang Syukur Rawa",
        "description": "Lesung kayu dipukul berirama tanda syukur atas panen gabah ketan dan tepung sagu molulu."
      }
    ],
    "preservationAdvice": "Mokole Mansur menegaskan: \"Tanah adat Hukaea Laea ini nafas hidup kami. Cucu-cucu jangan pernah gadaikan hutan adat demi kesenangan sesaat.\"",
    "estimatedEra": "Masa Swapraja Kuno Moronene abad ke-14",
    "tags": [
      "Moronene",
      "Hukaea Laea",
      "Rawa Aopa",
      "Bombana",
      "Sulawesi Tenggara"
    ],
    "likesCount": 268
  },
  {
    "id": "mamasa-bahasa-falsafah-mesa-kada",
    "title": "Bahasa Mamasa & Falsafah: \"Mesa Kada Dipotuo, Pantan Kada Dipomate\"",
    "subtitle": "Kosa Kata Pusaka Adat Pegunungan dan Tuntunan Moral Musyawarah Mufakat",
    "category": "bahasa",
    "province": "Sulawesi Barat",
    "tribe": "Mamasa",
    "regionDetail": "Lembah Mamasa & Messawa",
    "elderNarrator": {
      "name": "Puang Semuel Tangdilintin",
      "age": 82,
      "titleOrRole": "Pencatat Sastra Lisan & Bahasa Daerah Mamasa",
      "location": "Kecamatan Mamasa"
    },
    "recordedBy": {
      "name": "Yustina Tandilangi & Markus Balla",
      "schoolOrAffiliation": "SMA Negeri 1 Mamasa",
      "date": "10 Agustus 2024"
    },
    "summary": "Bahasa Mamasa kaya akan diksi metaforis pegunungan dan tata krama berunding. Ungkapan \"Mesa Kada Dipotuo, Pantan Kada Dipomate\" adalah hukum tertinggi peradaban Mamasa: kata sepakat membawa kehidupan dan kesejahteraan, sedangkan perpecahan kata membawa kehancuran kampung.",
    "philosophicalMeaning": "Menjunjung tinggi kebenaran kata, pantang ingkar janji (Tontong Kada), dan menghormati keputusan bersama dalam balai adat Banua Sura.",
    "localTerms": [
      {
        "term": "Mesa Kada Dipotuo",
        "meaning": "Satu kata mufakat menghidupkan dan menyelamatkan masyarakat",
        "language": "Mamasa",
        "pronunciationTip": "Me-sa Ka-da Di-po-tu-o"
      },
      {
        "term": "Pantan Kada Dipomate",
        "meaning": "Bercerai-berai dan berselisih kata mendatangkan kebinasaan",
        "language": "Mamasa",
        "pronunciationTip": "Pan-tan Ka-da Di-po-ma-te"
      },
      {
        "term": "Tontong Kada",
        "meaning": "Kesetiaan memegang teguh janji sumpah adat",
        "language": "Mamasa"
      },
      {
        "term": "Kada Madodo",
        "meaning": "Tutur kata lembut dan sopan yang tidak menyinggung perasaan lawan bicara",
        "language": "Mamasa"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Manta’pa: Pembukaan Tutur Beradat",
        "description": "Sebelum menyampaikan pendapat di forum adat, penutur memohon maaf atas kekurangan kata dengan sikap hormat."
      },
      {
        "stepNumber": 2,
        "title": "Mendengarkan Giliran Bicara Tanpa Menyela",
        "description": "Setiap perwakilan rumpun didengar penuh hingga tuntas sebelum solusi mufakat dirumuskan bersama."
      },
      {
        "stepNumber": 3,
        "title": "Peneguhan Sumpah Persekutuan",
        "description": "Keputusan bersama disahkan dengan menyiram air suci pegunungan tanda kesucian niat."
      }
    ],
    "preservationAdvice": "Puang Semuel berpesan: \"Gunakan bahasa Mamasa di rumah dan pergaulan. Jangan malu bertutur kata leluhurmu.\"",
    "estimatedEra": "Diwariskan sejak persekutuan adat Pitu Ulunna Salu",
    "tags": [
      "Mamasa",
      "Bahasa Daerah",
      "Falsafah",
      "Mesa Kada",
      "Sulawesi Barat"
    ],
    "likesCount": 298
  },
  {
    "id": "pamona-bahasa-falsafah-kasintuwu",
    "title": "Bahasa Pamona & Falsafah: \"Napa Moiko Kita Tuwu Sampu’u\"",
    "subtitle": "Kosa Kata Danau Poso, Seni Berpantun Kayori, dan Nilai Kasintuwu Gotong Royong",
    "category": "bahasa",
    "province": "Sulawesi Tengah",
    "tribe": "Pamona",
    "regionDetail": "Danau Poso, Tentena & Lembah Bada",
    "elderNarrator": {
      "name": "Opa Derek Lumeno",
      "age": 76,
      "titleOrRole": "Pujangga Bahasa Pamona & Seniman Kayori",
      "location": "Tentena, Danau Poso"
    },
    "recordedBy": {
      "name": "Yosua Datu & Febe Taula",
      "schoolOrAffiliation": "SMA Kristen Tentena",
      "date": "14 Agustus 2024"
    },
    "summary": "Bahasa Pamona dituturkan di sekitar perairan biru Danau Poso dengan kekayaan seni puisi lisan \"Kayori\". Falsafah \"Napa Moiko Kita Tuwu Sampu’u\" (Alangkah indahnya kita hidup bersatu sekeluarga) adalah landasan solidaritas dan saling menolong (Kasintuwu) masyarakat Pamona.",
    "philosophicalMeaning": "Kesejukan kata laksana air danau, pantang memfitnah dan membesarkan fitnah. Menghargai persahabatan sejati dan kelestarian alam ciptaan.",
    "localTerms": [
      {
        "term": "Napa Moiko Kita Tuwu Sampu’u",
        "meaning": "Alangkah indahnya dan bahagianya kita hidup rukun bersaudara",
        "language": "Pamona",
        "pronunciationTip": "Na-pa Moi-ko Ki-ta Tu-wu Sam-pu-u"
      },
      {
        "term": "Kasintuwu",
        "meaning": "Jiwa gotong royong dan tolong-menolong tanpa memandang perbedaan",
        "language": "Pamona"
      },
      {
        "term": "Kayori",
        "meaning": "Syair pantun puitis lisan berisi nasihat budi pekerti",
        "language": "Pamona"
      },
      {
        "term": "Mosidondoi",
        "meaning": "Bekerja bersama membuka ladang saling bergantian",
        "language": "Pamona"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Melantunkan Kayori di Balai Lobo",
        "description": "Para sesepuh bersahut-sahutan melantunkan bait Kayori mengingatkan pemuda tentang adab kesantunan."
      },
      {
        "stepNumber": 2,
        "title": "Praktek Kasintuwu dalam Kehidupan Sehari-hari",
        "description": "Ketika ada warga tertimpa kemalangan, tetangga berbondong-bondong membawa kayu bakar dan bahan pangan."
      },
      {
        "stepNumber": 3,
        "title": "Mewariskan Bahasa Ibu kepada Anak Cucu",
        "description": "Kakek menceritakan dongeng hewan cerdas Danau Poso dalam bahasa Pamona menjelang tidur."
      }
    ],
    "preservationAdvice": "Opa Derek berpesan: \"Bila bahasa Pamona mati, maka lagu-lagu danau kita akan membisu. Bicaralah bahasa daerahmu dengan bangga.\"",
    "estimatedEra": "Diwariskan sejak peradaban megalitik Danau Poso",
    "tags": [
      "Pamona",
      "Bahasa Daerah",
      "Kayori",
      "Danau Poso",
      "Kasintuwu",
      "Sulawesi Tengah"
    ],
    "likesCount": 312
  },
  {
    "id": "muna-bahasa-falsafah-hansuru-kalambe",
    "title": "Bahasa Muna (Wuna) & Falsafah: \"Hansuru-hansuru kalambe, sumano kono kalambeno\"",
    "subtitle": "Sastra Lisan Kantola, Pepatah Adab Pulau Karang, dan Kosa Kata Pusaka Muna",
    "category": "bahasa",
    "province": "Sulawesi Tenggara",
    "tribe": "Muna",
    "regionDetail": "Kota Raha, Tongkuno & Tiworo",
    "elderNarrator": {
      "name": "La Ode Rahmat Kabora",
      "age": 77,
      "titleOrRole": "Pemerhati Bahasa Daerah Wuna & Sastra Kantola",
      "location": "Raha, Kabupaten Muna"
    },
    "recordedBy": {
      "name": "Wa Ode Sitti & La Ode Firman",
      "schoolOrAffiliation": "SMA Negeri 1 Raha",
      "date": "18 Agustus 2024"
    },
    "summary": "Bahasa Muna (Wuna) memiliki keunikan fonetik dan perbendaharaan kata filosofis yang berkaitan erat dengan batu karang dan laut. Falsafah luhur \"Hansuru-hansuru kalambe, sumano kono kalambeno\" mengajarkan bahwa biarlah kepentingan pribadi atau jasad kita hancur lebur, asalkan kehormatan negeri dan nilai kejujuran tetap tegak abadi.",
    "philosophicalMeaning": "Pengorbanan suci demi tanah air dan integritas moral. Sastra lisan Kantola mendidik generasi muda agar cerdas berolah vokal, santun menyanggah, dan jujur berbuat.",
    "localTerms": [
      {
        "term": "Hansuru-hansuru kalambe",
        "meaning": "Rela hancur lebur demi menjaga kehormatan dan kebenaran negeri",
        "language": "Muna",
        "pronunciationTip": "Han-su-ru Han-su-ru Ka-lam-be"
      },
      {
        "term": "Kantola",
        "meaning": "Seni berbalas pantun adat di malam bulan purnama",
        "language": "Muna"
      },
      {
        "term": "Pobhalabhalata",
        "meaning": "Saling menghormati martabat dan saling menjaga perasaan sesama",
        "language": "Muna"
      },
      {
        "term": "Dhadhia",
        "meaning": "Keikhlasan hati menjalani takdir dan pengabdian bagi orang banyak",
        "language": "Muna"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Kerapatan Pemuda di Bawah Rembulan (Kantola)",
        "description": "Dua kelompok pemuda dan pemudi berbalas bait pantun berirama indah menguji kecerdasan bahasa Wuna."
      },
      {
        "stepNumber": 2,
        "title": "Mempelajari Kosa Kata Kuno Tenun dan Ladang",
        "description": "Anak-anak mencatat istilah lokal alat tenun gedogan dan nama jenis ubi kaopi dari kakek-nenek."
      },
      {
        "stepNumber": 3,
        "title": "Menghayati Pesan Pengorbanan Kalambe",
        "description": "Guru adat menjelaskan bahwa membela kebenaran lebih mulia daripada mencari kekayaan yang merugikan rakyat."
      }
    ],
    "preservationAdvice": "La Ode Rahmat berpesan: \"Bahasa Wuna adalah jiwa orang Muna. Ajarkan anak-anak kita bertutur bahasa Muna di meja makan dan serambi rumah.\"",
    "estimatedEra": "Diwariskan sejak era Kerajaan Muna abad ke-14",
    "tags": [
      "Muna",
      "Bahasa Daerah",
      "Wuna",
      "Kantola",
      "Falsafah",
      "Sulawesi Tenggara"
    ],
    "likesCount": 295
  },
  {
    "id": "moronene-bahasa-falsafah-mepokoaso",
    "title": "Bahasa Moronene & Falsafah: \"Mepokoaso Hukaea Laea\"",
    "subtitle": "Kosa Kata Ekologis Rawa Aopa, Pepatah Menjaga Hutan Sagu, dan Sumpah Adat Moronene",
    "category": "bahasa",
    "province": "Sulawesi Tenggara",
    "tribe": "Moronene",
    "regionDetail": "Bombana & Kabaena",
    "elderNarrator": {
      "name": "Ki Mokole Arsyad",
      "age": 75,
      "titleOrRole": "Pemangku Bahasa Adat Moronene Bombana",
      "location": "Rumbia, Bombana"
    },
    "recordedBy": {
      "name": "Rian Saputra & Nurlina",
      "schoolOrAffiliation": "SMA Negeri 1 Poleang",
      "date": "22 Agustus 2024"
    },
    "summary": "Bahasa Moronene adalah salah satu bahasa tertua di Sulawesi Tenggara dengan keunikan istilah botani rawa dan sabana. Falsafah \"Mepokoaso\" mengajarkan persatuan sejati yang tak tergoyahkan dalam melindungi kelestarian alam dan menjaga martabat leluhur dari keserakahan.",
    "philosophicalMeaning": "Manusia dan alam adalah saudara sekandung. Bila pohon sagu ditebang sembarangan, maka manusia akan menuai kelaparan dan kutukan alam.",
    "localTerms": [
      {
        "term": "Mepokoaso",
        "meaning": "Satu tekad, satu jiwa, dan bersatu padu dalam kebaikan",
        "language": "Moronene",
        "pronunciationTip": "Me-po-ko-a-so"
      },
      {
        "term": "Mombowahu",
        "meaning": "Sistem kerja sama bergiliran membersihkan lahan pertanian",
        "language": "Moronene"
      },
      {
        "term": "Tawaro",
        "meaning": "Pohon sagu liar sumber kehidupan utama masyarakat adat",
        "language": "Moronene"
      },
      {
        "term": "Sampa",
        "meaning": "Tempat berteduh dan bermusyawarah di tengah hutan adat",
        "language": "Moronene"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mengenalkan Nama Tumbuhan Rawa kepada Anak",
        "description": "Tetua adat mengajak anak-anak menyusuri Rawa Aopa dan menyebutkan nama tanaman purun dan jenis ikan rawa."
      },
      {
        "stepNumber": 2,
        "title": "Musyawarah Mepokoaso di Pondok Kampung",
        "description": "Warga berkumpul mendiskusikan pelarangan penebangan pohon sagu di hulu sungai dengan bahasa Moronene murni."
      },
      {
        "stepNumber": 3,
        "title": "Pengucapan Ikrar Janji Persaudaraan",
        "description": "Tangan disatukan di atas mangkuk tembaga berisi air bersih tanda setia kawan lahir dan batin."
      }
    ],
    "preservationAdvice": "Ki Mokole Arsyad berpesan: \"Jangan biarkan bahasa Moronene punah tergilas tambang. Tuliskan kosa kata ini di buku sekolah anak-anak kita.\"",
    "estimatedEra": "Pewarisan lisan suku asli tertua Sulawesi sejak era purba",
    "tags": [
      "Moronene",
      "Bahasa Daerah",
      "Mepokoaso",
      "Rawa Aopa",
      "Bombana",
      "Sulawesi Tenggara"
    ],
    "likesCount": 278
  },
  {
    "id": "minahasa-bahasa-falsafah-sitou-timou",
    "title": "Bahasa Minahasa (Tontemboan & Tombulu) & Falsafah \"Si Tou Timou Tumou Tou\"",
    "subtitle": "Kosa Kata Mapalus, Kidung Rohani Mawale, dan Prinsip Hidup Memanusiakan Sesama",
    "category": "bahasa",
    "province": "Sulawesi Utara",
    "tribe": "Minahasa",
    "regionDetail": "Tomohon, Tondano & Minahasa Selatan",
    "elderNarrator": {
      "name": "Opa Bertus Wenas",
      "age": 80,
      "titleOrRole": "Pemerhati Bahasa Daerah Minahasa & Budayawan",
      "location": "Tomohon Tengah, Kota Tomohon"
    },
    "recordedBy": {
      "name": "Grace Rumagit & Michael Waworuntu",
      "schoolOrAffiliation": "SMA Negeri 1 Tomohon",
      "date": "26 Agustus 2024"
    },
    "summary": "Bahasa daerah Minahasa (terdiri atas sub-etnis Tontemboan, Tombulu, Tolour, Tonsea) menyimpan mahakarya falsafah dunia: \"Si Tou Timou Tumou Tou\" yang dipopulerkan oleh pahlawan nasional Sam Ratulangi. Ungkapan ini bermakna manusia baru hidup seutuhnya apabila ia berbuat kebajikan untuk menghidupkan dan mendidik orang lain.",
    "philosophicalMeaning": "Etika Mapalus (gotong royong tanpa sekat), kehausan akan ilmu pengetahuan, dan keterbukaan tangan menyambut siapa pun dengan kasih persaudaraan.",
    "localTerms": [
      {
        "term": "Si Tou Timou Tumou Tou",
        "meaning": "Manusia baru menjadi manusia ketika ia mendidik dan memanusiakan sesamanya",
        "language": "Minahasa",
        "pronunciationTip": "Si Tou Ti-mou Tu-mou Tou"
      },
      {
        "term": "Mapalus",
        "meaning": "Sistem kerja sama bergiliran saling membantu dengan ketulusan hati",
        "language": "Minahasa"
      },
      {
        "term": "Mawale",
        "meaning": "Mendirikan rumah tangga baru berlandaskan berkah para leluhur",
        "language": "Minahasa"
      },
      {
        "term": "Waraney",
        "meaning": "Ksatria gagah berani pelindung kampung dan penjaga kebenaran",
        "language": "Minahasa"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Melantunkan Kidung Mawale di Watu Pinawetengan",
        "description": "Tetua adat memanjatkan doa syukur dalam bahasa Tombulu halus di depan batu musyawarah leluhur."
      },
      {
        "stepNumber": 2,
        "title": "Menanamkan Nilai Mapalus kepada Pelajar",
        "description": "Generasi muda diajarkan saling membantu membersihkan lingkungan sekolah dan membantu petani cengkih."
      },
      {
        "stepNumber": 3,
        "title": "Latihan Berpidato Bahasa Daerah",
        "description": "Anak-anak berlatih mengucapkan salam \"I Yayat U Santi\" dengan penuh kebanggaan budaya."
      }
    ],
    "preservationAdvice": "Opa Bertus berpesan: \"Bicaralah bahasa Minahasa kepada anak cucumu di rumah. Tanpa bahasa daerah, kita akan kehilangan roh ksatria Waraney.\"",
    "estimatedEra": "Diikrarkan sejak musyawarah raya di Watu Pinawetengan abad ke-7",
    "tags": [
      "Minahasa",
      "Bahasa Daerah",
      "Tontemboan",
      "Tombulu",
      "Si Tou Timou",
      "Sulawesi Utara"
    ],
    "likesCount": 345
  },
  {
    "id": "sangihe-bahasa-falsafah-somahe-kai-kehage",
    "title": "Bahasa Sangihe & Falsafah: \"Somahe Kai Kehage\"",
    "subtitle": "Syair Sasambo Pelaut Samudra, Kidung Upacara Tulude, dan Kosa Kata Maritim Bahari Perbatasan",
    "category": "bahasa",
    "province": "Sulawesi Utara",
    "tribe": "Sangihe",
    "regionDetail": "Tahuna & Kepulauan Sangihe",
    "elderNarrator": {
      "name": "Opa Yesaya Paparang",
      "age": 78,
      "titleOrRole": "Penyair Sasambo & Tokoh Adat Upacara Tulude",
      "location": "Tahuna, Kepulauan Sangihe"
    },
    "recordedBy": {
      "name": "Debora Makasenda & Rendy Hontong",
      "schoolOrAffiliation": "SMA Negeri 1 Tahuna",
      "date": "28 Agustus 2024"
    },
    "summary": "Bahasa Sangihe lahir dari napas laut dan hembusan angin pasifik. Semboyan luhur \"Somahe Kai Kehage\" bermakna semakin besar gelombang badai yang menghadang, semakin kokoh dan berani tekad kita untuk menerobosnya. Diperkaya dengan puisi lisan Sasambo yang dinyanyikan saat mengarungi laut bebas dan ritual adat Tulude.",
    "philosophicalMeaning": "Keberanian tak gentar menghadapi ujian hidup, ketakwaan pada Tuhan Yang Maha Esa (Ghenggona Langi), dan kerukunan sehati menjaga pulau-pulau perbatasan utara nusantara.",
    "localTerms": [
      {
        "term": "Somahe Kai Kehage",
        "meaning": "Makin keras badai menghadang, makin gigih dan tangguh pantang mundur",
        "language": "Sangihe",
        "pronunciationTip": "So-ma-he Kai Ke-ha-ge"
      },
      {
        "term": "Tulude",
        "meaning": "Upacara menolak bala dan mensyukuri keselamatan bahari setahun penuh",
        "language": "Sangihe"
      },
      {
        "term": "Sasambo",
        "meaning": "Kidung lisan puitis sakral penyemangat pendayung dan pelaut samudra",
        "language": "Sangihe"
      },
      {
        "term": "Tamo",
        "meaning": "Kue adat kerucut lambang persatuan dan kemakmuran kepulauan",
        "language": "Sangihe"
      }
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Melantunkan Sasambo di Atas Perahu Cadik",
        "description": "Nelayan melantunkan bait suara tinggi mengiringi ayunan dayung menerjang ombak Selat Sangihe."
      },
      {
        "stepNumber": 2,
        "title": "Pemotongan Kue Adat Tamo saat Tulude",
        "description": "Pemimpin adat mengucapkan doa bahasa Sangihe memohon agar pulau terhindar dari mara bahaya erupsi Gunung Awu."
      },
      {
        "stepNumber": 3,
        "title": "Mengajarkan Istilah Rasi Bintang kepada Anak Muda",
        "description": "Tetua menunjukkan Bintang Walu dan arah angin muson dalam perbendaharaan bahasa pelaut Sangihe kuno."
      }
    ],
    "preservationAdvice": "Opa Yesaya berpesan: \"Anak Sangihe jangan takut pada ombak. Jagalah bahasa kepulauanmu dan lantunkan Sasambo agar samudramu tetap bertuah.\"",
    "estimatedEra": "Diwariskan sejak era Kerajaan Tampungang Lawo abad ke-15",
    "tags": [
      "Sangihe",
      "Bahasa Daerah",
      "Sasambo",
      "Tulude",
      "Somahe Kai Kehage",
      "Sulawesi Utara"
    ],
    "likesCount": 330
  },
  {
    "id": "bugis-tani-bahari-mappalili-pariama-amanna-gappa",
    "title": "Kearifan Tani & Bahari Bugis: Mappalili, Bintang Pariama & Ade’ Allamumpanua",
    "subtitle": "Pranata Musim Tanam Padi Sawah Kuno dan Hukum Laut Pelayaran Amanna Gappa",
    "category": "tani_bahari",
    "province": "Sulawesi Selatan",
    "tribe": "Bugis",
    "regionDetail": "Bone, Soppeng & Wajo",
    "elderNarrator": {
      "name": "Puang Matoa Saidi",
      "age": 84,
      "titleOrRole": "Pemangku Ritual Mappalili & Ahli Ilmu Perbintangan Bugis (Kutika)",
      "location": "Segeri & Bone"
    },
    "recordedBy": {
      "name": "Andi Muh. Yusuf & Nurul Hikmah",
      "schoolOrAffiliation": "Fakultas Pertanian Universitas Hasanuddin",
      "date": "02 September 2024"
    },
    "summary": "Peradaban Bugis memiliki dua pilar kearifan alam: di darat terdapat upacara \"Mappalili\" (pembajakan sawah perdana dengan bajak pusaka Rakki) yang dipandu terbitnya gugusan Bintang Pariama (Pleiades). Di laut, para nakhoda Bugis berpedoman pada \"Ade’ Allamumpanua Pabbahi-bahiang\" karya Amanna Gappa (1676), piagam hukum maritim modern tertua dunia yang mengatur asuransi kapal, sewa petak muatan, dan pembagian laba pelayaran.",
    "philosophicalMeaning": "Harmoni manusia dengan semesta: tanah sawah tidak boleh digarap sebelum bintang memberi restu musim hujan, dan lautan diarungi dengan kejujuran hukum Amanna Gappa demi keselamatan anak buah kapal.",
    "localTerms": [
      {
        "term": "Mappalili",
        "meaning": "Ritual bajak sawah serentak tanda dimulainya musim tanam padi",
        "language": "Bugis"
      },
      {
        "term": "Bintang Pariama",
        "meaning": "Gugus bintang Pleiades penentu datangnya musim hujan pertanian Bugis",
        "language": "Bugis"
      },
      {
        "term": "Amanna Gappa",
        "meaning": "Hukum adat pelayaran dan perdagangan laut Bugis abad ke-17",
        "language": "Bugis"
      },
      {
        "term": "Kutika",
        "meaning": "Kitab astronomi dan kalender musiman tradisional Lontara",
        "language": "Bugis"
      }
    ],
    "toolsUsed": [
      "Bajak sawah kayu pusaka (Rakki)",
      "Kompas perbintangan Lontara Kutika",
      "Bambu air irigasi sawah"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Melihat Posisi Bintang Pariama di Langit Timur",
        "description": "Tetua Matoa mengamati posisi Bintang Tujuh saat fajar menyingsing untuk menentukan tanggal baik turun sawah."
      },
      {
        "stepNumber": 2,
        "title": "Arak-arakan Bajak Rakki Mengelilingi Kampung",
        "description": "Bajak kayu diolesi minyak kelapa wangi dan diarak warga diiringi tabuhan gendang Mappadendang."
      },
      {
        "stepNumber": 3,
        "title": "Mappalili: Menorehkan Garis Bajak Pertama",
        "description": "Kerbau membalikkan tanah sawah perdana disambut doa bersama memohon dijauhkan dari hama tikus dan wereng."
      }
    ],
    "preservationAdvice": "Puang Matoa Saidi berpesan: \"Jangan tinggalkan Mappalili dan kalender bintang Pariama. Pertanian modern yang mengabaikan tanda alam akan menuai kekeringan dan gagal panen.\"",
    "estimatedEra": "Tercatat dalam manuskrip Lontara Kutika sejak abad ke-16",
    "tags": [
      "Bugis",
      "Mappalili",
      "Pariama",
      "Amanna Gappa",
      "Kearifan Tani Bahari",
      "Sulawesi Selatan"
    ],
    "likesCount": 360
  },
  {
    "id": "makassar-tani-bahari-pelaut-bira-tanra-lopi",
    "title": "Kearifan Bahari Makassar: Pelaut Bira, Bintang Tanra Lopi & Mantra Pagae",
    "subtitle": "Navigasi Samudra Tanpa Kompas dan Kearifan Menghormati Roh Laut Karaeng Lowita",
    "category": "tani_bahari",
    "province": "Sulawesi Selatan",
    "tribe": "Makassar",
    "regionDetail": "Bira, Bulukumba & Galesong, Takalar",
    "elderNarrator": {
      "name": "Puang Daeng Mangngitung",
      "age": 80,
      "titleOrRole": "Nakhoda Kawakan Perahu Layar Sompe & Tetua Bira",
      "location": "Tanjung Bira, Bulukumba"
    },
    "recordedBy": {
      "name": "Kamaluddin & St. Rahbiah",
      "schoolOrAffiliation": "Politeknik Ilmu Pelayaran Makassar",
      "date": "05 September 2024"
    },
    "summary": "Pelaut Makassar terkenal tangguh mengarungi Laut Jawa hingga Teluk Carpentaria Australia utara (mencari teripang). Mereka menguasai ilmu \"Tanra Lopi\" (membaca riak gelombang laut, bau angin garam, dan warna air laut) serta perbintangan Bintang Moncong dan Bintang Pari. Sebelum berlayar, nakhoda mempersembahkan dupa di haluan perahu memohon izin penguasa samudra agar laut teduh.",
    "philosophicalMeaning": "Prinsip pantang putar kemudi ke belakang sebelum pelabuhan tujuan tercapai (\"Ku alleangi tallanga na toalia\"). Menghormati laut bukan sebagai musuh yang ditaklukkan, melainkan ibu yang memberi rezeki nafkah.",
    "localTerms": [
      {
        "term": "Tanra Lopi",
        "meaning": "Ilmu firasat navigasi membaca tanda-tanda laut dan angin",
        "language": "Makassar"
      },
      {
        "term": "Ku alleangi tallanga na toalia",
        "meaning": "Lebih baik tenggelam daripada harus surut langkah pulang tanpa hasil",
        "language": "Makassar",
        "pronunciationTip": "Ku al-le-a-ngi tal-la-nga na to-a-li-a"
      },
      {
        "term": "Pagae",
        "meaning": "Tradisi penangkapan ikan pelagis malam hari menggunakan obor dan jaring lingkar",
        "language": "Makassar"
      }
    ],
    "toolsUsed": [
      "Kemudi samping ganda kayu besi",
      "Layar tanja dan layar sekoci Pinisi",
      "Lentera minyak penanda lambung"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membaca Arah Angin Muson Barat dan Timur",
        "description": "Nakhoda menjulurkan telapak tangan ke udara basah fajar untuk merasakan suhu angin peniup layar."
      },
      {
        "stepNumber": 2,
        "title": "Ritual Annyorong Lopi: Menurunkan Perahu ke Air Laut",
        "description": "Ratusan pemuda menarik tali perahu kayu ke pantai sambil melantunkan kelong penyemangat tenaga."
      },
      {
        "stepNumber": 3,
        "title": "Mengarahkan Kemudi Berpatokan pada Bintang Pari",
        "description": "Di tengah gulita malam lautan lepas, perahu diarahkan lurus menjaga haluan tanpa pernah tersesat."
      }
    ],
    "preservationAdvice": "Puang Mangngitung berpesan: \"Kompas mesin bisa rusak kehabisan baterai, tetapi bintang di langit Makassar tak pernah mati. Ajari pemuda kita ilmu Tanra Lopi.\"",
    "estimatedEra": "Diwariskan sejak ekspedisi pelaut Makassar ke Marege (Australia) abad ke-17",
    "tags": [
      "Makassar",
      "Pelaut Bira",
      "Tanra Lopi",
      "Kearifan Bahari",
      "Pinisi",
      "Sulawesi Selatan"
    ],
    "likesCount": 352
  },
  {
    "id": "toraja-tani-bahari-terasering-pabannang-merok",
    "title": "Kearifan Tani Toraja: Terasering Sesean, Kalender Pa’bannang & Upacara Ma’bua’",
    "subtitle": "Rekayasa Irigasi Alami Lereng Gunung dan Konservasi Tiga Tunas Kosmis (Tallu Lolona)",
    "category": "tani_bahari",
    "province": "Sulawesi Selatan",
    "tribe": "Toraja",
    "regionDetail": "Batutumonga, Lereng Gunung Sesean, Toraja Utara",
    "elderNarrator": {
      "name": "Ne’ Pong Sapan",
      "age": 83,
      "titleOrRole": "Pemangku Pertanian Tradisional Aluk Todolo",
      "location": "Batutumonga, Sesean Suloara’"
    },
    "recordedBy": {
      "name": "Yosep Rantetampang & Selvi Rombe",
      "schoolOrAffiliation": "SMK Pertanian Pulu Pulu Toraja",
      "date": "08 September 2024"
    },
    "summary": "Sawah terasering batu bertingkat di kaki Gunung Sesean adalah keajaiban agronomi Toraja. Menggunakan kalender bintang \"Pa’bannang\" dan perhitungan jatuhnya daun pohon hutan, petani Toraja menanam padi pulut lokal merah (Pare Lea) dan hitam tanpa pupuk kimia. Sistem pengairan bambu membagi air mata air pegunungan secara adil ke setiap petak sawah bertingkat.",
    "philosophicalMeaning": "Hukum kosmis \"Lolo Tanan\" (menghormati tunas tumbuhan) sebagai saudara manusia. Memanen padi dilakukan dengan ani-ani bambu kecil agar tangkai padi tidak merasa disakiti.",
    "localTerms": [
      {
        "term": "Pa’bannang",
        "meaning": "Kalender astronomi leluhur penentu daur tanam padi di lereng bukit",
        "language": "Toraja"
      },
      {
        "term": "Pare Lea",
        "meaning": "Padi ketan merah lokal bernilai sakral tinggi untuk upacara adat",
        "language": "Toraja"
      },
      {
        "term": "Lolo Tanan",
        "meaning": "Tunas tumbuhan ciptaan Puang Matua yang wajib dijaga kelestariannya",
        "language": "Toraja"
      }
    ],
    "toolsUsed": [
      "Ani-ani bambu pemetik malai padi",
      "Saluran air talang bambu gunung",
      "Alat tumbuk lesung lesung kayu (Asson)"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membaca Kalender Musim Pa’bannang",
        "description": "Tetua mengamati posisi rasi bintang Walu dan embun pagi pegunungan untuk menetapkan hari perendaman benih."
      },
      {
        "stepNumber": 2,
        "title": "Mangkombong: Gotong Royong Memperbaiki Tanggul Terasering",
        "description": "Batu-batu gunung disusun kembali membentuk dinding penahan longsor yang kokoh selama ratusan tahun."
      },
      {
        "stepNumber": 3,
        "title": "Ma’tudan: Upacara Memetik Malai Padi Pertama",
        "description": "Tangkai padi sulung dipotong dengan doa syukur lalu diikat dan ditaruh di lumbung Alang berukir Pa’tedong."
      }
    ],
    "preservationAdvice": "Ne’ Pong Sapan berpesan: \"Jangan biarkan bibit padi lokal Toraja punah diganti bibit instan. Padi inilah yang memberi makan jiwa leluhur kita sejak zaman purba.\"",
    "estimatedEra": "Sistem terasering batu sejak abad ke-14 Masehi",
    "tags": [
      "Toraja",
      "Terasering Sesean",
      "Pare Lea",
      "Pabannang",
      "Kearifan Tani",
      "Sulawesi Selatan"
    ],
    "likesCount": 375
  },
  {
    "id": "mamasa-tani-bahari-kopi-arabika-kalender-salu",
    "title": "Kearifan Tani Mamasa: Kopi Arabika Agroforestri & Kalender Salu Mamasa",
    "subtitle": "Budidaya Kopi Organik di Bawah Naungan Pohon Hutan Lindung Gandangdewata",
    "category": "tani_bahari",
    "province": "Sulawesi Barat",
    "tribe": "Mamasa",
    "regionDetail": "Messawa & Sumarorong, Lembah Mamasa",
    "elderNarrator": {
      "name": "Puang Markus Demmassangka",
      "age": 78,
      "titleOrRole": "Pelopor Petani Kopi Tradisional Rantelemo",
      "location": "Messawa, Mamasa"
    },
    "recordedBy": {
      "name": "Deby Palinggi & Daniel Balla",
      "schoolOrAffiliation": "Komunitas Tani Kopi Khas Pegunungan Mamasa",
      "date": "10 September 2024"
    },
    "summary": "Petani Mamasa mengembangkan sistem agroforestri kopi arabika terbaik di bawah naungan pohon kayu endemik lereng Gunung Gandangdewata. Berpedoman pada kalender aliran sungai \"Salu\", petani mengetahui kapan tanah siap disemai benih padi ladang gogo dan kapan buah kopi merah ranum siap dipetik tangan satu per satu tanpa merusak ranting tunas.",
    "philosophicalMeaning": "Prinsip \"Tondok Kadang\" (tanah pusaka leluhur pantang diracuni zat kimia buatan). Hutan lumut adalah tandon air abadi yang memberi makan seluruh sungai Sulawesi Barat.",
    "localTerms": [
      {
        "term": "Kopi Mamasa",
        "meaning": "Kopi arabika dataran tinggi beraroma rempah dan buah hutan",
        "language": "Mamasa"
      },
      {
        "term": "Salu",
        "meaning": "Aliran sungai pegunungan penanda siklus air tanah pertanian",
        "language": "Mamasa"
      },
      {
        "term": "Mamballa",
        "meaning": "Kerja bakti bersama membersihkan semak belukar kebun kopi keluarga",
        "language": "Mamasa"
      }
    ],
    "toolsUsed": [
      "Keranjang anyaman bambu rotan pemetik kopi (Bakul)",
      "Tampah penjemur kulit gabah kopi",
      "Tungku sangrai kuali tanah liat"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menanam Tanaman Pelindung Hutan",
        "description": "Pohon lamtoro dan dadap ditanam terlebih dahulu untuk menaungi perdu kopi dari terik matahari dan angin kencang."
      },
      {
        "stepNumber": 2,
        "title": "Petik Pilih Buah Merah Ranum",
        "description": "Hanya buah kopi yang benar-benar merah tua yang dipetik dengan jemari tangan secara cermat."
      },
      {
        "stepNumber": 3,
        "title": "Proses Fermentasi Air Mata Air Gunung",
        "description": "Biji kopi direndam dalam air pegunungan dingin mengalir selama 24 jam untuk menghasilkan cita rasa bersih dan harum."
      }
    ],
    "preservationAdvice": "Puang Markus berpesan: \"Jangan tebang pohon pelindung kopi demi lahan terbuka. Kopi Mamasa nikmat karena ia tumbuh di bawah keteduhan hutan leluhur.\"",
    "estimatedEra": "Tradisi kopi pegunungan sejak era pembukaan kebun awal abad ke-19",
    "tags": [
      "Mamasa",
      "Kopi Mamasa",
      "Gandangdewata",
      "Agroforestri",
      "Kearifan Tani",
      "Sulawesi Barat"
    ],
    "likesCount": 310
  },
  {
    "id": "kaili-tani-bahari-gumbasa-nelayan-teluk-palu",
    "title": "Kearifan Tani & Bahari Kaili: Irigasi Tradisional Lembah Palu & Nelayan Bagan Teluk Palu",
    "subtitle": "Pengelolaan Air Kemarau Lembah Palu dan Kearifan Membaca Angin Laut Fohn",
    "category": "tani_bahari",
    "province": "Sulawesi Tengah",
    "tribe": "Kaili",
    "regionDetail": "Lembah Palu, Sigi Biromaru & Donggala",
    "elderNarrator": {
      "name": "Pua Tua H. Ruslin",
      "age": 82,
      "titleOrRole": "Tetua Kelompok Tani Air Lembah Palu & Nelayan Pesisir Donggala",
      "location": "Dolo, Sigi & Donggala"
    },
    "recordedBy": {
      "name": "Mohammad Fikram & Fitriani",
      "schoolOrAffiliation": "Fakultas Pertanian Universitas Tadulako",
      "date": "12 September 2024"
    },
    "summary": "Lembah Palu adalah salah satu daerah dengan curah hujan terendah di Indonesia. Suku Kaili beradaptasi dengan menciptakan sistem kanal irigasi gravitasi \"Gumbasa\" membagi air Sungai Palu secara proporsional. Di Teluk Palu dan Donggala, nelayan Kaili menggunakan perahu bercadik ganda membaca tiupan Angin Wambue (angin panas fohn) untuk memprediksi kemunculan gerombolan ikan layang dan cakalang.",
    "philosophicalMeaning": "Nilai \"Sintuvu\" dalam pembagian air: air tidak boleh dijualbelikan atau ditahan secara zalim. Menjaga teluk dari pencemaran agar ikan tetap datang ke bibir pantai.",
    "localTerms": [
      {
        "term": "Wambue",
        "meaning": "Angin fohn hangat khas Lembah Palu yang menjadi penanda musim melaut",
        "language": "Kaili"
      },
      {
        "term": "Gumbasa",
        "meaning": "Sistem pembagian air sungai purba untuk membasahi petak sawah kering",
        "language": "Kaili"
      },
      {
        "term": "Bagan Tancap",
        "meaning": "Bangunan bambu tradisional di laut dangkal untuk memikat ikan teri",
        "language": "Kaili"
      }
    ],
    "toolsUsed": [
      "Pintu air kayu ulin (Tulakan)",
      "Perahu cadik bambu ganda Teluk Palu",
      "Jaring serok lambung bagan"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Mombondau Air: Pembagian Giliran Irigasi Malam",
        "description": "Petani bergiliran mengarahkan arus sungai ke sawah masing-masing dengan disaksikan tetua pengatur air."
      },
      {
        "stepNumber": 2,
        "title": "Mengamati Datangnya Burung Camar di Teluk",
        "description": "Nelayan pesisir Donggala bersiap melaut ketika melihat kawanan burung camar menukik ke permukaan laut."
      },
      {
        "stepNumber": 3,
        "title": "Menyalakan Lampu Minyak di Bagan",
        "description": "Cahaya lentera memikat ribuan ikan mairo dan cumi-cumi yang kemudian diserok dengan jaring halus."
      }
    ],
    "preservationAdvice": "Pua Tua Ruslin berpesan: \"Lembah Palu ini kering, jangan sekali-kali merusak hulu Sungai Sigi dan Teluk Donggala. Tanpa air dan laut itu, Palu akan kehilangan nafasnya.\"",
    "estimatedEra": "Sistem irigasi lembah sejak era Kerajaan Biromaru abad ke-17",
    "tags": [
      "Kaili",
      "Lembah Palu",
      "Gumbasa",
      "Teluk Palu",
      "Kearifan Tani Bahari",
      "Sulawesi Tengah"
    ],
    "likesCount": 320
  },
  {
    "id": "pamona-tani-bahari-wayamasapi-danau-poso",
    "title": "Kearifan Tani & Perikanan Pamona: Jebakan Ikan Masapi (Wayamasapi) & Pesta Padungku",
    "subtitle": "Teknologi Penangkapan Sidat Air Tawar Berkelanjutan dan Pranata Panen Raya Danau Poso",
    "category": "tani_bahari",
    "province": "Sulawesi Tengah",
    "tribe": "Pamona",
    "regionDetail": "Tentena, Muara Danau Poso & Saluopa",
    "elderNarrator": {
      "name": "Opa Frans Taula",
      "age": 79,
      "titleOrRole": "Maestro Pembuat Wayamasapi & Tetua Tani Padungku",
      "location": "Tentena, Pamona Puselemba, Poso"
    },
    "recordedBy": {
      "name": "Kristian Lumeno & Ester Sambeta",
      "schoolOrAffiliation": "SMA Kristen Tentena",
      "date": "15 September 2024"
    },
    "summary": "Masyarakat Pamona di Danau Poso memiliki kearifan perikanan dunia: \"Wayamasapi\" (pagar bambu penangkap ikan sidat purba berukuran raksasa / Anguilla marmorata). Pagar bambu dirancang dengan lubang kisi-kisi khusus sehingga hanya ikan sidat dewasa yang masuk ke corong jaring, sementara anak-anak ikan sidat lolos berenang ke hulu sungai untuk berkembang biak.",
    "philosophicalMeaning": "Etika konservasi alam leluhur: menangkap ikan tidak boleh serakah menghabiskan benih. Tradisi Padungku mengucap syukur kepada Sang Pencipta sembari membagikan hasil panen kepada seluruh tetangga desa.",
    "localTerms": [
      {
        "term": "Wayamasapi",
        "meaning": "Pagar bambu cerdik penangkap ikan sidat dewasa di muara Sungai Poso",
        "language": "Pamona"
      },
      {
        "term": "Masapi / Sogili",
        "meaning": "Ikan sidat air tawar raksasa khas Danau Poso yang sangat bergizi",
        "language": "Pamona"
      },
      {
        "term": "Padungku",
        "meaning": "Perayaan syukur akbar pascapanen padi ladang dan perikanan danau",
        "language": "Pamona"
      }
    ],
    "toolsUsed": [
      "Kisi-kisi bilah bambu belah (Waya)",
      "Perahu lesung kayu Danau Poso",
      "Corong jaring serat nilon ramah lingkungan"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Memasang Bilah Bambu Waya Menentang Arus",
        "description": "Bambu ditancapkan miring mengarahkan jalur renang sidat yang hendak bermigrasi ke samudra lepas."
      },
      {
        "stepNumber": 2,
        "title": "Pemeriksaan Kisi Ukuran Anak Sidat",
        "description": "Tetua memastikan jarak antar-bilah bambu tidak terlalu rapat agar anak sidat yang kecil tetap bebas melintas."
      },
      {
        "stepNumber": 3,
        "title": "Memasak Sogili Asap Bersama Beras Baru Inuyu",
        "description": "Ikan masapi dibakar di atas bara batok kelapa dan dinikmati bersama seluruh warga saat pesta Padungku."
      }
    ],
    "preservationAdvice": "Opa Frans berpesan: \"Wayamasapi ini bukti kakek buyut kita bukan perusak alam. Jangan pernah mencemari Danau Poso dengan racun atau limbah tambang.\"",
    "estimatedEra": "Diwariskan secara lisan dan dipraktikkan sejak abad ke-15",
    "tags": [
      "Pamona",
      "Danau Poso",
      "Wayamasapi",
      "Sogili",
      "Padungku",
      "Sulawesi Tengah"
    ],
    "likesCount": 340
  },
  {
    "id": "tolaki-tani-bahari-mombowahu-sagu-rawa-konawe",
    "title": "Kearifan Tani Tolaki: Tradisi Mombowahu & Budidaya Pohon Sagu Rawa Konawe",
    "subtitle": "Pengelolaan Hutan Rawa Gambut Berkelanjutan dan Kalender Musim Tanam Padi Ladang",
    "category": "tani_bahari",
    "province": "Sulawesi Tenggara",
    "tribe": "Tolaki",
    "regionDetail": "Bantaran Sungai Konaweha, Kabupaten Konawe",
    "elderNarrator": {
      "name": "Ki Bokeo Rustam Saranani",
      "age": 81,
      "titleOrRole": "Pemerhati Tani Tradisional & Pemangku Hutan Sagu Tolaki",
      "location": "Wawotobi, Konawe"
    },
    "recordedBy": {
      "name": "Ilyas Ramadhan & Selvi Anggraini",
      "schoolOrAffiliation": "Fakultas Kehutanan Universitas Halu Oleo",
      "date": "17 September 2024"
    },
    "summary": "Bagi suku Tolaki, pohon sagu (Tawaro) yang tumbuh di sepanjang rawa Sungai Konaweha adalah anugerah teragung pelindung dari kelaparan. Dalam menebang sagu, masyarakat menggelar \"Mombowahu\" (musyawarah kerja bakti bergiliran). Pohon sagu yang ditebang wajib pohon yang sudah berbunga matang (mewah), dan anakan tunas muda di sekelilingnya wajib disiangi agar terus bertunas membentuk rumpun baru abadi.",
    "philosophicalMeaning": "Hutan sagu adalah tandon air penahan banjir Konaweha. Memotong pohon sagu sembarangan adalah pelanggaran adat Kalo Sara yang didenda kain putih dan rotan damai.",
    "localTerms": [
      {
        "term": "Mombowahu",
        "meaning": "Kerja sama bergotong royong bergiliran memanen dan mengolah sagu",
        "language": "Tolaki"
      },
      {
        "term": "Tawaro",
        "meaning": "Pohon sagu sumber pangan pokok sinonggi masyarakat Tolaki",
        "language": "Tolaki"
      },
      {
        "term": "Ape",
        "meaning": "Alat peremas sari pati sagu tradisional beralas kain kasa kelambu",
        "language": "Tolaki"
      }
    ],
    "toolsUsed": [
      "Pangkur sagu dari kayu ulin dan mata besi runcing (Nani)",
      "Bak perendaman kulit kayu (Pene)",
      "Alat pemeras anyaman daun enau (Ape)"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menyeleksi Batang Sagu yang Siap Panen (Mewah)",
        "description": "Tetua mengetuk batang pohon sagu untuk mendengar kepadatan pati aci di dalam teras batangnya."
      },
      {
        "stepNumber": 2,
        "title": "Menyisakan Rumpun Anakan Tunas Baru",
        "description": "Tiga anakan tunas di sekeliling pohon induk dipelihara agar rumpun sagu tidak mati punah."
      },
      {
        "stepNumber": 3,
        "title": "Mengekstrak Tepung Sagu Segar Bersama Tetangga",
        "description": "Air sungai jernih disiramkan ke serat sagu sambil diinjak perlahan menghasilkan endapan tepung putih bersih."
      }
    ],
    "preservationAdvice": "Ki Rustam berpesan: \"Rawa sagu Konaweha ini benteng pangan kita saat musim kering melanda. Jangan babat rawa sagu demi sawit perusak air.\"",
    "estimatedEra": "Diwariskan sejak era kemaharajaan Konawe abad ke-16",
    "tags": [
      "Tolaki",
      "Sagu Konawe",
      "Mombowahu",
      "Sinonggi",
      "Kearifan Tani",
      "Sulawesi Tenggara"
    ],
    "likesCount": 315
  },
  {
    "id": "buton-tani-bahari-perahu-lambo-bintang-pari",
    "title": "Kearifan Bahari Buton: Perahu Layar Lambo & Navigasi Bintang Pari Samudra Banda",
    "subtitle": "Kejeniusan Maritim Kesultanan Wolio Mengarungi Rute Rempah Maluku hingga Papua",
    "category": "tani_bahari",
    "province": "Sulawesi Tenggara",
    "tribe": "Buton",
    "regionDetail": "Pulau Buton, Bau-Bau & Kepulauan Wakatobi",
    "elderNarrator": {
      "name": "La Ode Jafaruddin",
      "age": 82,
      "titleOrRole": "Nakhoda Veteran Perahu Lambo Buton & Penjaga Tradisi Maritim Wolio",
      "location": "Kelurahan Wameo, Bau-Bau"
    },
    "recordedBy": {
      "name": "La Ode Muhammad Ihsan & Wa Ode Suci",
      "schoolOrAffiliation": "Fakultas Perikanan & Kelautan Universitas Muhammadiyah Buton",
      "date": "18 September 2024"
    },
    "summary": "Perahu Layar Lambo Buton adalah puncak mahakarya perkapalan kayu suku Buton yang dirancang khusus untuk membelah ombak ganas Laut Banda dan Laut Arafura. Para pelaut Buton menguasai navigasi Bintang Pari dan arah hembusan angin laut muson tanpa kompas besi. Mereka membawa hasil bumi Buton (kelapa, tembakau, tenun) untuk ditukarkan dengan teripang, mutiara, dan rempah pala.",
    "philosophicalMeaning": "Prinsip ketaatan adat maritim Wolio: nakhoda dan awak kapal adalah satu tubuh (\"Yinda-yindamo karo somanamo lipu\"). Kejujuran membagi timbangan rezeki menjadi penentu keselamatan kapal dari badai topan.",
    "localTerms": [
      {
        "term": "Perahu Lambo",
        "meaning": "Kapal layar kayu khas Buton bertiang dua dengan buritan anggun",
        "language": "Buton (Wolio)"
      },
      {
        "term": "Bintang Pari",
        "meaning": "Gugus bintang penunjuk arah selatan di tengah samudra terbuka",
        "language": "Buton (Wolio)"
      },
      {
        "term": "Yinda-yindamo karo",
        "meaning": "Mengorbankan ego pribadi demi keselamatan dan martabat negeri",
        "language": "Buton (Wolio)"
      }
    ],
    "toolsUsed": [
      "Kayu besi ulin dan jati Buton",
      "Layar kain kanvas putih segitiga",
      "Kemudi pasak kayu pasak pasak tradisional"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membaca Gelombang Arus Selat Buton",
        "description": "Nakhoda memperhatikan perubahan warna air laut di dekat karang untuk menghindari pusaran arus balik."
      },
      {
        "stepNumber": 2,
        "title": "Doa Selamat Berlayar di Haluan Lambo",
        "description": "Imam masjid Keraton Buton memimpin doa zikir bersama keluarga sebelum tali tambat dilepaskan."
      },
      {
        "stepNumber": 3,
        "title": "Mengarungi Samudra Menatap Langit Malam",
        "description": "Juru mudi menyejajarkan ujung tiang layar dengan gugusan bintang penuntun arah pelabuhan tujuan."
      }
    ],
    "preservationAdvice": "La Ode Jafaruddin berpesan: \"Lambo Buton ini kebanggaan maritim nusantara. Jangan biarkan anak cucu Buton hanya jadi penonton di lautnya sendiri.\"",
    "estimatedEra": "Kejayaan niaga maritim Kesultanan Buton abad ke-16 hingga 18",
    "tags": [
      "Buton",
      "Perahu Lambo",
      "Navigasi Bintang",
      "Kearifan Bahari",
      "Laut Banda",
      "Sulawesi Tenggara"
    ],
    "likesCount": 348
  },
  {
    "id": "muna-tani-bahari-ubi-kaopi-layar-kolope-tiworo",
    "title": "Kearifan Tani & Bahari Muna: Lumbung Ubi Kaopi & Nelayan Selat Tiworo",
    "subtitle": "Ketahanan Pangan Tanah Kars Berbatu dan Kearifan Melaut Berkelanjutan",
    "category": "tani_bahari",
    "province": "Sulawesi Tenggara",
    "tribe": "Muna",
    "regionDetail": "Kontunaga, Tongkuno & Selat Tiworo, Muna",
    "elderNarrator": {
      "name": "La Ode Sabaruddin",
      "age": 79,
      "titleOrRole": "Tetua Tani Kaopi & Nelayan Tradisional Selat Tiworo",
      "location": "Tongkuno, Kabupaten Muna"
    },
    "recordedBy": {
      "name": "La Ode Rahman & Wa Ode Fatimah",
      "schoolOrAffiliation": "SMA Negeri 1 Tongkuno",
      "date": "20 September 2024"
    },
    "summary": "Daratan Pulau Muna didominasi perbukitan kars batu kapur kering. Nenek moyang suku Muna menciptakan teknologi pengolahan ubi kayu \"Kaopi\" (singkong direndam air laut atau air tawar, diperas, dan dikeringkan menjadi gaplek tahan simpan bertahun-tahun di lumbung). Di laut, nelayan Selat Tiworo menjaga gugusan pulau karang (Karampa) dan dilarang menangkap ikan dengan bahan kimia tuba.",
    "philosophicalMeaning": "Ketabahan dan kreativitas bertahan di tanah tandus: batu karang bukan penghalang kehidupan melainkan tempat bertumpunya kesabaran manusia.",
    "localTerms": [
      {
        "term": "Kaopi",
        "meaning": "Olahan singkong fermentasi tahan lama bekal hidup orang Muna di musim kering",
        "language": "Muna"
      },
      {
        "term": "Karampa",
        "meaning": "Gugusan terumbu karang dangkal tempat ikan karang bersarang dan bertelur",
        "language": "Muna"
      },
      {
        "term": "Katowalo",
        "meaning": "Kearifan menjaga wilayah penangkapan ikan secara lestari",
        "language": "Muna"
      }
    ],
    "toolsUsed": [
      "Kareke (alat parut ubi dari duri pohon hutan)",
      "Wadah perasan tempayan batu kapur",
      "Perahu lesung kayu dayung tunggal"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menanam Ubi di Celah Rekahan Batu Kars",
        "description": "Petani menyelipkan stek singkong di kantong tanah subur di sela-sela formasi batuan karang Muna."
      },
      {
        "stepNumber": 2,
        "title": "Perendaman dan Fermentasi Kaopi",
        "description": "Ubi kupas direndam di kolam batu alami selama 3 malam untuk menghilangkan zat pahit dan melunakkan seratnya."
      },
      {
        "stepNumber": 3,
        "title": "Menangkap Ikan di Jalur Alami Tiworo",
        "description": "Nelayan hanya menebarkan jaring hanyut ramah lingkungan di jalur arus bebas terumbu karang."
      }
    ],
    "preservationAdvice": "La Ode Sabaruddin berpesan: \"Kaopi telah menyelamatkan nenek kakek kita dari zaman penjajahan dan kemarau. Jangan sepelekan pangan lokal Muna.\"",
    "estimatedEra": "Diwariskan sejak peradaban manusia prasejarah Liang Kobori",
    "tags": [
      "Muna",
      "Kaopi",
      "Selat Tiworo",
      "Ketahanan Pangan",
      "Kearifan Tani Bahari",
      "Sulawesi Tenggara"
    ],
    "likesCount": 305
  },
  {
    "id": "moronene-tani-bahari-siklus-sagu-molulu-rawa-aopa",
    "title": "Kearifan Tani & Perairan Rawa Moronene: Siklus Sagu Molulu & Nelayan Rawa Aopa",
    "subtitle": "Ekologi Hutan Basah Purba dan Tata Cara Menjaga Keseimbangan Ekosistem Gambut Sabana",
    "category": "tani_bahari",
    "province": "Sulawesi Tenggara",
    "tribe": "Moronene",
    "regionDetail": "Lembah Rawa Aopa Watumohai, Bombana",
    "elderNarrator": {
      "name": "Ki Mokole Baso Hukaea",
      "age": 76,
      "titleOrRole": "Pawang Rawa Adat Moronene & Tetua Sagu Rawa",
      "location": "Hukaea Laea, Rawa Aopa, Bombana"
    },
    "recordedBy": {
      "name": "Feri Irawan & Nurlaila",
      "schoolOrAffiliation": "Fakultas Biologi Konservasi Universitas Halu Oleo",
      "date": "22 September 2024"
    },
    "summary": "Masyarakat Moronene di Rawa Aopa hidup dalam simbiosis sempurna dengan lahan basah purba. Dalam memanen sagu \"Molulu\", mereka mengamati musim migrasi burung pelikan Australia dan musim bertelur buaya muara. Menangkap ikan gabus rawa dan lele lokal dilakukan dengan jebakan anyaman bambu \"Bubu\" tanpa menguras tandon air rawa alami.",
    "philosophicalMeaning": "Falsafah \"Hutan Adat adalah Nafas Tubuh Moronene\". Mengambil secukupnya untuk kebutuhan hidup keluarga dan pantang meracuni perairan dengan tuba beluntas.",
    "localTerms": [
      {
        "term": "Molulu",
        "meaning": "Proses pemerasan sari sagu alami dengan air rawa yang disaring pasir bersih",
        "language": "Moronene"
      },
      {
        "term": "Bubu Rawa",
        "meaning": "Jebakan ikan anyaman rotan air dengan pintu perangkap satu arah",
        "language": "Moronene"
      },
      {
        "term": "Mepokoaso",
        "meaning": "Bersatu padu menjaga tanah ulayat dan rawa pusaka leluhur",
        "language": "Moronene"
      }
    ],
    "toolsUsed": [
      "Pangkur sagu kayu besi Moronene",
      "Perahu jukung lesung sempit penembus eceng gondok",
      "Bubu rotan air"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Membaca Pola Pasang Surut Air Rawa Aopa",
        "description": "Tetua menandai tiang rumah tobu untuk mengetahui apakah air rawa sedang surut atau naik menuju sabana."
      },
      {
        "stepNumber": 2,
        "title": "Memasang Bubu di Celah Batang Teratai Rawa",
        "description": "Jebakan dipasang senja hari di antara rumpun bunga teratai merah tempat ikan gabus mencari makan."
      },
      {
        "stepNumber": 3,
        "title": "Pengolahan Tepung Sagu Molulu Bersama Rumpun Keluarga",
        "description": "Pati sagu segar diendapkan di wadah kayu lalu dibungkus pelepah pinang untuk ketahanan bertahun-tahun."
      }
    ],
    "preservationAdvice": "Ki Mokole Baso menegaskan: \"Kalau rawa Aopa ini dikeringkan untuk perkebunan sawit, tamatlah riwayat suku Moronene. Pertahankan tanah air kita ini.\"",
    "estimatedEra": "Diwariskan secara turun-temurun sejak era purba Moronene",
    "tags": [
      "Moronene",
      "Rawa Aopa",
      "Sagu Molulu",
      "Bombana",
      "Kearifan Tani Bahari",
      "Sulawesi Tenggara"
    ],
    "likesCount": 298
  },
  {
    "id": "minahasa-tani-bahari-cengkih-kelapa-bintang-minahasa",
    "title": "Kearifan Tani Minahasa: Emas Hijau Cengkih, Kelapa Mapalus & Kalender Pertanian Kuno",
    "subtitle": "Pengelolaan Kebun Perbukitan Vulkanik Tomohon & Konservasi Sumber Mata Air Kaki Gunung Lokon",
    "category": "tani_bahari",
    "province": "Sulawesi Utara",
    "tribe": "Minahasa",
    "regionDetail": "Tomohon, Sonder & Minahasa Selatan",
    "elderNarrator": {
      "name": "Opa Willy Sumual",
      "age": 82,
      "titleOrRole": "Pakar Tani Cengkih Tradisional & Tokoh Mapalus Minahasa",
      "location": "Sonder, Minahasa"
    },
    "recordedBy": {
      "name": "Daniel Mandagi & Vania Supit",
      "schoolOrAffiliation": "Fakultas Pertanian Universitas Sam Ratulangi Manado",
      "date": "24 September 2024"
    },
    "summary": "Tanah vulkanik Minahasa di kaki Gunung Lokon dan Mahawu menghasilkan komoditas legendaris cengkih Zanzibar dan kelapa kopra. Petani Minahasa menjalankan tradisi \"Mapalus Tani\": kelompok tani bergilir memetik cengkih menggunakan tangga bambu tinggi (Alingkoge) tanpa mematahkan dahan cabang utama, menjaga pohon cengkih berumur hingga seratus tahun.",
    "philosophicalMeaning": "Pohon cengkih dan kelapa adalah pohon kehidupan keluarga Minahasa yang menyekolahkan ribuan sarjana. Rasa hormat pada tanah vulkanik diwujudkan dengan menjaga hutan lindung mata air desa.",
    "localTerms": [
      {
        "term": "Mapalus Tani",
        "meaning": "Sistem arisan tenaga kerja gotong royong memetik cengkih dan mengolah kopra",
        "language": "Minahasa"
      },
      {
        "term": "Pala & Cengkih Minahasa",
        "meaning": "Rempah bernilai tinggi lambang kemakmuran bumi Nyiur Melambai",
        "language": "Minahasa"
      },
      {
        "term": "Rurukan",
        "meaning": "Sistem terasering lereng gunung berbatu penahan erosi abu vulkanik",
        "language": "Minahasa"
      }
    ],
    "toolsUsed": [
      "Tangga bambu petik cengkih setinggi 12 meter (Alingkoge)",
      "Keranjang gantung rotan penampung cengkih",
      "Kuas perontok bunga cengkih"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menaiki Tangga Bambu dengan Keseimbangan Waraney",
        "description": "Pemetik memanjat tangga bambu tinggi sambil menyanyikan lagu riang penyemangat kawan di bawah."
      },
      {
        "stepNumber": 2,
        "title": "Memilih Bunga Cengkih yang Berwarna Merah Muda",
        "description": "Tangkai cengkih dipetik tepat di pangkal kuncup agar pohon terus bertunas lebat di musim berikutnya."
      },
      {
        "stepNumber": 3,
        "title": "Penjemuran Sinar Matahari Alami di Terpal Desa",
        "description": "Bunga cengkih dibolak-balik hingga berwarna cokelat berkilau dengan aroma minyak asiri yang semerbak."
      }
    ],
    "preservationAdvice": "Opa Willy berpesan: \"Tanah Minahasa ini tanah surga rempah-rempah. Jangan jual tanah kebunmu kepada orang asing, rawatlah pohon cengkih warisan opamu.\"",
    "estimatedEra": "Kejayaan perkebunan rempah Minahasa abad ke-18 dan 19",
    "tags": [
      "Minahasa",
      "Cengkih",
      "Kelapa",
      "Mapalus",
      "Tomohon",
      "Kearifan Tani",
      "Sulawesi Utara"
    ],
    "likesCount": 350
  },
  {
    "id": "bolmong-tani-bahari-lumbung-dumoga-kalender-ambang",
    "title": "Kearifan Tani Bolaang Mongondow: Lumbung Jagung & Padi Lembah Dumoga",
    "subtitle": "Siklus Musim Bintang Gunung Ambang dan Tradisi Gotong Royong Adat Mononggolipu",
    "category": "tani_bahari",
    "province": "Sulawesi Utara",
    "tribe": "Bolaang Mongondow",
    "regionDetail": "Lembah Dumoga & Kotamobagu",
    "elderNarrator": {
      "name": "Ki Guhanga Djafar Mokodompit",
      "age": 78,
      "titleOrRole": "Pemerhati Pranata Agraria Tradisional Bolmong",
      "location": "Dumoga Barat, Bolaang Mongondow"
    },
    "recordedBy": {
      "name": "Randi Manoppo & Fitria Damopolii",
      "schoolOrAffiliation": "SMA Negeri 1 Dumoga",
      "date": "25 September 2024"
    },
    "summary": "Lembah Dumoga adalah lumbung pangan utama Sulawesi Utara yang subur dialiri sungai-sungai berair jernih. Petani Bolaang Mongondow memadukan penanaman jagung kuning pulen dan padi sawah dengan memantau posisi kabut di puncak Gunung Ambang. Gotong royong \"Pogogutat\" (membantu ladang kerabat tanpa upah) menjamin tidak ada keluarga yang terlambat menanam benih sebelum hujan lebat datang.",
    "philosophicalMeaning": "Nilai \"Mototompiaan\" (saling memperbaiki kesalahan dalam pembagian air irigasi) dan menjaga hutan rimba Bogani Nani Wartabone agar mata air tidak mengering.",
    "localTerms": [
      {
        "term": "Pogogutat",
        "meaning": "Semangat persaudaraan sejati saling membantu mencangkul dan memanen ladang",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Lembah Dumoga",
        "meaning": "Hamparan dataran aluvial subur pusat lumbung beras Bolaang Mongondow",
        "language": "Bolaang Mongondow"
      },
      {
        "term": "Komalig Pangan",
        "meaning": "Lumbung kayu bertiang tinggi tempat menyimpan cadangan gabah dan jagung kering",
        "language": "Bolaang Mongondow"
      }
    ],
    "toolsUsed": [
      "Luku (alat bajak kayu ditarik sapi Bolmong)",
      "Ani-ani bambu pemanen bulir padi",
      "Alas jemur tikar pandan"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Melihat Arah Asap dan Kabut Gunung Ambang",
        "description": "Bila kabut putih turun menyelimuti kaki bukit di sore hari, pertanda musim tanam jagung telah tiba."
      },
      {
        "stepNumber": 2,
        "title": "Pogogutat: Membajak Sawah Secara Serentak",
        "description": "Puluhan pasang sapi membajak petak sawah secara beriringan menciptakan keindahan panorama pedesaan."
      },
      {
        "stepNumber": 3,
        "title": "Menyimpan Jagung Kering di Atas Perapian Dapur",
        "description": "Tongkol jagung diasapi tipis agar kebal terhadap kutu bubuk dan tahan bertahun-tahun sebagai bibit unggul."
      }
    ],
    "preservationAdvice": "Ki Guhanga Djafar berpesan: \"Lembah Dumoga adalah berkah Tuhan bagi anak Bolmong. Jangan biarkan racun tambang emas liar mencemari sungai-sungai kita.\"",
    "estimatedEra": "Diwariskan sejak pembukaan Lembah Dumoga masa Kerajaan Manoppo",
    "tags": [
      "Bolaang Mongondow",
      "Lembah Dumoga",
      "Pogogutat",
      "Jagung Bolmong",
      "Kearifan Tani",
      "Sulawesi Utara"
    ],
    "likesCount": 315
  },
  {
    "id": "sangihe-tani-bahari-navigasi-walu-seke-malalugis",
    "title": "Kearifan Bahari Sangihe: Navigasi Bintang Walu & Tradisi Jaring Bambu Seke Manumpa",
    "subtitle": "Teknologi Penangkapan Ikan Malalugis Ramah Lingkungan di Samudra Pasifik Perbatasan",
    "category": "tani_bahari",
    "province": "Sulawesi Utara",
    "tribe": "Sangihe",
    "regionDetail": "Kepulauan Sangihe & Perairan Marore",
    "elderNarrator": {
      "name": "Opa Markus Pontoh",
      "age": 80,
      "titleOrRole": "Panglima Laut Tradisional (Mayore Labo) & Pawang Seke Sangihe",
      "location": "Tahuna, Kepulauan Sangihe"
    },
    "recordedBy": {
      "name": "Julio Hontong & Fransiska Gaghana",
      "schoolOrAffiliation": "Politeknik Negeri Nusa Utara Tahuna",
      "date": "26 September 2024"
    },
    "summary": "Masyarakat Sangihe memiliki pranata bahari tertua di perbatasan Pasifik: \"Seke Manumpa\" (penangkapan gerombolan ikan malalugis menggunakan jaring anyaman bambu dan janur kelapa kuning yang dibentangkan di perairan laut dalam). Dipimpin oleh seorang \"Mayore Labo\" yang membaca arah arus laut dan rasi Bintang Walu, seluruh awak perahu bergerak serempak tanpa suara mesin agar ikan tidak panik.",
    "philosophicalMeaning": "Somahe Kai Kehage dalam menaklukkan ganasnya laut lepas: hasil tangkapan Seke dibagi rata kepada seluruh warga kampung pesisir, termasuk para janda dan anak yatim.",
    "localTerms": [
      {
        "term": "Seke Manumpa",
        "meaning": "Sistem penangkapan ikan komunal menggunakan jaring bambu ramah lingkungan",
        "language": "Sangihe"
      },
      {
        "term": "Mayore Labo",
        "meaning": "Panglima adat laut yang memimpin komando operasi penangkapan ikan",
        "language": "Sangihe"
      },
      {
        "term": "Ikan Malalugis",
        "meaning": "Ikan pelagis bergizi tinggi kebanggaan perairan Kepulauan Sangihe",
        "language": "Sangihe"
      }
    ],
    "toolsUsed": [
      "Jaring anyaman serat bambu dan janur kelapa kuning (Seke)",
      "Perahu cadik Pamo kayu pohon mangga hutan",
      "Pelampung kayu gabus laut"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Melihat Gelembung Air Kemunculan Malalugis",
        "description": "Mayore Labo menyelam tanpa alat melihat bayangan ribuan ikan yang berputar di kedalaman samudra."
      },
      {
        "stepNumber": 2,
        "title": "Membentangkan Rantai Janur Kuning Penuntun Ikan",
        "description": "Dua puluh perahu bergerak membentuk lingkaran raksasa mengarahkan ikan ke kantong jaring bambu Seke."
      },
      {
        "stepNumber": 3,
        "title": "Manumpa: Menaikkan Ikan ke Atas Perahu dengan Senandung Sasambo",
        "description": "Ikan dinaikkan bersama sorak gembira dan dibagikan secara adil di dermaga kampung saat matahari terbit."
      }
    ],
    "preservationAdvice": "Opa Markus Pontoh berpesan: \"Seke ini tidak merusak karang dan tidak memakai bom pukat harimau. Wariskanlah teknologi bersih ini kepada anak-anak muda kita.\"",
    "estimatedEra": "Diwariskan sejak peradaban maritim Raja Gumansalangi abad ke-15",
    "tags": [
      "Sangihe",
      "Seke Manumpa",
      "Mayore Labo",
      "Malalugis",
      "Kearifan Bahari",
      "Sulawesi Utara"
    ],
    "likesCount": 365
  },
  {
    "id": "gorontalo-tani-bahari-milu-jagung-manggabai-limboto",
    "title": "Kearifan Tani & Perikanan Gorontalo: Varietas Jagung Putih Pulut & Pelestarian Ikan Manggabai",
    "subtitle": "Pranata Agraria Hulonthalo dan Kearifan Ekologis Menjaga Rawa Danau Limboto",
    "category": "tani_bahari",
    "province": "Gorontalo",
    "tribe": "Gorontalo",
    "regionDetail": "Limboto, Batudaa & Bone Bolango, Gorontalo",
    "elderNarrator": {
      "name": "Ti Baabu Daud Monoarfa",
      "age": 81,
      "titleOrRole": "Tetua Adat Tani Dulohupa & Penjaga Tradisi Danau Limboto",
      "location": "Telaga, Danau Limboto, Gorontalo"
    },
    "recordedBy": {
      "name": "Rahmatia Gobel & Zulkifli Habibie",
      "schoolOrAffiliation": "Fakultas Pertanian Universitas Negeri Gorontalo",
      "date": "28 September 2024"
    },
    "summary": "Gorontalo adalah negeri jagung (Milu) yang termasyhur sejak berabad-abad lampau. Petani Gorontalo melestarikan varietas jagung putih lokal pulut (Binte Pulo) yang memiliki tekstur kenyal manis untuk sajian Binte Biluhuta. Di Danau Limboto, nelayan adat menjaga populasi ikan endemik \"Manggabai\" (Glossogobius giuris) dengan menetapkan wilayah suci terlarang tangkap (Watingo) di hulu danau.",
    "philosophicalMeaning": "Adati Hula-Hulaa to Saraa: mensyukuri anugerah bumi dengan tidak mengeksploitasi danau melampaui batas kemampuan pulihnya alam.",
    "localTerms": [
      {
        "term": "Milu / Binte",
        "meaning": "Jagung manis pulut putih pangan pokok dan kebanggaan budaya Gorontalo",
        "language": "Gorontalo"
      },
      {
        "term": "Manggabai",
        "meaning": "Ikan endemik purba Danau Limboto berdaging lembut penuh protein",
        "language": "Gorontalo"
      },
      {
        "term": "Watingo",
        "meaning": "Zona suci larangan penangkapan ikan demi menjaga siklus pemijahan telur",
        "language": "Gorontalo"
      }
    ],
    "toolsUsed": [
      "Alat pemipil jagung kayu tradisional",
      "Perahu lesung sampan Danau Limboto",
      "Jala lempar benang katun ramah ikan"
    ],
    "stepsOrNarrative": [
      {
        "stepNumber": 1,
        "title": "Menanam Binte Pulo saat Terbit Bintang Siang",
        "description": "Petani menanam 3 butir benih jagung putih di setiap lubang tanah sambil memanjatkan doa berkah panen."
      },
      {
        "stepNumber": 2,
        "title": "Menjaga Kebersihan Aliran Masuk Danau Limboto",
        "description": "Warga membersihkan eceng gondok secara berkala agar air danau tetap beroksigen cukup bagi ikan manggabai."
      },
      {
        "stepNumber": 3,
        "title": "Memasak Binte Biluhuta Hasil Panen Pertama",
        "description": "Jagung dipipil segar, direbus bersama suwiran cakalang asap dan daun kemangi harum, dibagikan ke tetangga sekampung."
      }
    ],
    "preservationAdvice": "Ti Baabu Daud berpesan: \"Danau Limboto ini jantung hidup Gorontalo. Jangan biarkan ia mendangkal dan mati, rawatlah pohon-pohon di hulu bukit perbatasan.\"",
    "estimatedEra": "Diwariskan sejak masa kemaharajaan Limo Lo Pohalaa abad ke-16",
    "tags": [
      "Gorontalo",
      "Binte Biluhuta",
      "Milu Pulut",
      "Danau Limboto",
      "Manggabai",
      "Kearifan Tani Bahari"
    ],
    "likesCount": 338
  },
];

export const SULAWESI_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    question: 'Apakah makna dari falsafah luhur suku Bugis "Sipakatau, Sipakalebbi, Sipakainge"?',
    options: [
      'Berlayar ke laut lepas mencari ikan mairo',
      'Saling memanusiakan, saling memuliakan martabat, dan saling mengingatkan dalam kebaikan',
      'Membangun rumah panggung tanpa paku besi',
      'Menyimpan padi di lumbung alang tongkonan',
    ],
    answerIndex: 1,
    explanation:
      'Sipakatau (memanusiakan manusia), Sipakalebbi (saling menghargai martabat), dan Sipakainge (saling mengingatkan dalam kebaikan) adalah fondasi etika sosial suku Bugis.',
    tribe: 'Bugis',
    province: 'Sulawesi Selatan',
  },
  {
    question: 'Perahu layar bercadik tertipis dan tercepat di dunia yang menjadi kebanggaan suku Mandar tanpa menggunakan mesin adalah...',
    options: ['Kapal Pinisi', 'Perahu Sandeq', 'Perahu Lambo', 'Perahu Lepa-Lepa'],
    answerIndex: 1,
    explanation:
      'Perahu Sandeq suku Mandar mampu melesat 20-30 knot hanya dengan layar segitiga dan cadik penyeimbang, menjadi bukti kejeniusan aerodinamika pelaut Mandar.',
    tribe: 'Mandar',
    province: 'Sulawesi Barat',
  },
  {
    question: 'Bahan alami apa yang digunakan suku Muna untuk membuat layang-layang purba tertua di dunia "Kaghati Kolope"?',
    options: [
      'Daun kolope (ubi hutan gadung) diasapi dan serat nanas',
      'Kertas semen bekas dan tali rafia',
      'Daun jati muda dan getah karet',
      'Kain sutra Danau Tempe',
    ],
    answerIndex: 0,
    explanation:
      'Kaghati Kolope suku Muna dibuat dari daun kolope (ubi hutan) yang diasapi hingga kedap air dan dirangkai serat nanas, terbukti di lukisan Gua Liangkobori berusia 4.000 tahun!',
    tribe: 'Muna',
    province: 'Sulawesi Tenggara',
  },
  {
    question: 'Kain Fuya dari suku Pamona di sekitar Danau Poso memiliki keistimewaan luar biasa karena terbuat dari...',
    options: [
      'Kapas impor India',
      'Ketukan serat bagian dalam kulit pohon nunu/ivo dengan batu ike berpahat',
      'Plastik daur ulang danau',
      'Pintalan bulu domba pegunungan',
    ],
    answerIndex: 1,
    explanation:
      'Kain Fuya suku Pamona adalah warisan tekstil prasejarah Nusantara tertua yang dibuat dari ketukan kulit kayu pohon nunu menggunakan batu pemukul bergaris (ike).',
    tribe: 'Pamona',
    province: 'Sulawesi Tengah',
  },
  {
    question: 'Simbol tertinggi hukum adat perdamaian suku Tolaki yang berwujud seutas lingkaran rotan di atas kain putih dinamakan...',
    options: ['Badik Gecong', 'Kalo Sara', 'Tongkonan', 'Passura'],
    answerIndex: 1,
    explanation:
      'Kalo Sara adalah lingkaran rotan tanpa sudut kebencian, lambang musyawarah damai dan hukum adat tertinggi suku Tolaki di Sulawesi Tenggara.',
    tribe: 'Tolaki',
    province: 'Sulawesi Tenggara',
  },
  {
    question: 'Sajian makanan pokok suku Buton yang terbuat dari singkong kukus berbentuk kerucut tumpeng mini daun kelapa adalah...',
    options: ['Kasuami', 'Sinonggi', 'Kapurung', 'Kaledo'],
    answerIndex: 0,
    explanation:
      'Kasuami adalah singkong parut fermentasi kukus berbentuk kerucut mini (cora) yang menjadi bekal tahan lama pelaut Kesultanan Buton.',
    tribe: 'Buton',
    province: 'Sulawesi Tenggara',
  },
  {
    question: 'Kuliner khas suku Kaili di lembah Palu & Donggala yang menyajikan sup kaki sapi bertulang sumsum pedas asam jawa adalah...',
    options: ['Coto Makassar', 'Kaledo', 'Pa’piong', 'Nasu Palekko'],
    answerIndex: 1,
    explanation:
      'Kaledo (Kaki Lembu Donggala) adalah sup kaki sapi dengan sumsum lembut kuah asam jawa mentah dan cabai rawit hijau khas suku Kaili.',
    tribe: 'Kaili',
    province: 'Sulawesi Tengah',
  },
  {
    question: 'Teknik memasak tradisional Toraja menggunakan buluh bambu talang muda yang diisi daging dan remasan daun mayana lalu dipanggang di atas bara disebut...',
    options: ['Pa’piong', 'Inuyu', 'Sinole', 'Jepa'],
    answerIndex: 0,
    explanation:
      'Pa’piong adalah hidangan sakral suku Toraja yang dipanggang lambat dalam buluh bambu talang bersama daun mayana dan cabai katokkon.',
    tribe: 'Toraja',
    province: 'Sulawesi Selatan',
  },
  {
    question: 'Bubur nabati khas suku Minahasa di Sulawesi Utara yang menggunakan daun gedi sebagai pengental alami dan disajikan dengan sambal roa adalah...',
    options: ['Tinutuan (Bubur Manado)', 'Binte Biluhuta', 'Sinonggi', 'Inuyu'],
    answerIndex: 0,
    explanation:
      'Tinutuan adalah bubur kaya nutrisi khas Minahasa dengan campuran labu kuning, jagung, ubi, dan daun gedi berlendir alami yang menyehatkan lambung.',
    tribe: 'Minahasa',
    province: 'Sulawesi Utara',
  },
  {
    question: 'Karya seni kriya kebanggaan wanita Gorontalo yang dibuat dengan cara mencabut serat benang kain satu per satu lalu menyulamnya kembali adalah...',
    options: ['Batik Prada', 'Sulam Karawo', 'Tenun Walida', 'Kain Fuya'],
    answerIndex: 1,
    explanation:
      'Karawo (atau Mokarawo) adalah seni sulam unik Gorontalo yang memerlukan ketabahan dan ketelitian milimeter mencabut benang kain sebelum diikat sulaman bermotif indah.',
    tribe: 'Gorontalo',
    province: 'Gorontalo',
  },
  {
    question: 'Upacara adat suku Sangihe di Sulawesi Utara untuk tolak bala pergantian tahun dengan memotong kue tumpeng raksasa disebut...',
    options: ['Upacara Tulude & Kue Tamo', 'Rambu Solo', 'Padungku', 'Mosehe Wonua'],
    answerIndex: 0,
    explanation:
      'Tulude adalah upacara adat bahari sakral suku Sangihe yang ditandai dengan arak-arakan dan pemotongan Kue Tamo tumpeng beras ketan gula aren Siau.',
    tribe: 'Sangihe',
    province: 'Sulawesi Utara',
  },
  {
    question: 'Sup jagung putih pulen pipil berkuah cakalang asap dan kemangi yang menjadi hidangan pusaka masyarakat Gorontalo adalah...',
    options: ['Kaledo', 'Binte Biluhuta (Milu Siram)', 'Kapurung', 'Jepa'],
    answerIndex: 1,
    explanation:
      'Binte Biluhuta (Milu Siram) adalah sup jagung putih binthe kiki khas Gorontalo yang dipadukan dengan cakalang asap, udang, parutan kelapa, dan kucuran jeruk nipis segar.',
    tribe: 'Gorontalo',
    province: 'Gorontalo',
  },
  {
    question: 'Permainan ketangkasan tradisional suku Bugis yang menggunakan keping tempurung kelapa segitiga dan pengungkit bilah bambu chaq dinamakan...',
    options: ['Mallogo', 'A’raga', 'Tilako', 'Nogalacang'],
    answerIndex: 0,
    explanation:
      'Mallogo adalah permainan adu akurasi suku Bugis menjentikkan keping segitiga tempurung kelapa (logo) dengan bilah bambu petung (chaq) untuk merobohkan barisan logo lawan.',
    tribe: 'Bugis',
    province: 'Sulawesi Selatan',
  },
  {
    question: 'Permainan akrobatik suku Makassar yang menimang bola rotan tiga lapis di udara tanpa boleh menyentuh tanah sambil memakai sarung sutra adalah...',
    options: ['Sisemba’', 'A’raga (Sepak Raga)', 'Metingke', 'Ponti'],
    answerIndex: 1,
    explanation:
      'A’raga adalah kesenian sepak raga akrobatik Makassar menimang bola rotan berongga (bula raga) dengan tumit, bahu, dan kepala sambil mengenakan lipa’ sabbe (sarung sutra).',
    tribe: 'Makassar',
    province: 'Sulawesi Selatan',
  },
  {
    question: 'Permainan egrang bambu kuning dengan tumpuan kaki tinggi yang populer di tanah Gorontalo adalah...',
    options: ['Tengge-Tengge', 'Tilako', 'Metingke', 'Lalayaan'],
    answerIndex: 0,
    explanation:
      'Tengge-Tengge adalah permainan egrang bambu patodu khas Gorontalo yang dimainkan di lapangan terbuka untuk melatih keseimbangan dan ketangkasan fisik pemuda.',
    tribe: 'Gorontalo',
    province: 'Gorontalo',
  },
];
