export type Province =
  | 'Sulawesi Selatan'
  | 'Sulawesi Barat'
  | 'Sulawesi Tengah'
  | 'Sulawesi Tenggara'
  | 'Sulawesi Utara'
  | 'Gorontalo';

export type Tribe =
  | 'Bugis'
  | 'Makassar'
  | 'Toraja'
  | 'Mandar'
  | 'Mamasa'
  | 'Kaili'
  | 'Pamona'
  | 'Tolaki'
  | 'Buton'
  | 'Muna'
  | 'Moronene'
  | 'Minahasa'
  | 'Bolaang Mongondow'
  | 'Sangihe'
  | 'Gorontalo';

export type HeritageCategory =
  | 'resep'
  | 'bahasa'
  | 'kerajinan'
  | 'tani_bahari'
  | 'permainan'
  | 'cerita_sejarah'
  | 'cerita_keluarga';

export interface LocalTerm {
  term: string;
  meaning: string;
  language: string;
  script?: string; // e.g. Lontara characters
  pronunciationTip?: string;
}

export interface StepOrNarrative {
  stepNumber?: number;
  title: string;
  description: string;
  photoHint?: string;
}

export interface HeritageItem {
  id: string;
  title: string;
  subtitle: string;
  category: HeritageCategory;
  province: Province;
  tribe: Tribe;
  regionDetail: string; // e.g. "Kabupaten Luwu & Bone", "Tana Toraja", "Balanipa, Majene", "Donggala & Palu", "Poso", "Konawe", "Bau-Bau", "Raha - Muna", "Bombana & Kabaena"
  elderNarrator: {
    name: string;
    age?: number;
    titleOrRole: string; // e.g. "Nenek Penenun Adat", "Tetua Adat Sanro", "Petani Padi Gunung"
    location: string;
  };
  recordedBy: {
    name: string;
    schoolOrAffiliation: string;
    date: string;
  };
  summary: string;
  philosophicalMeaning: string;
  localTerms: LocalTerm[];
  ingredientsOrMaterials?: string[];
  toolsUsed?: string[];
  stepsOrNarrative: StepOrNarrative[];
  preservationAdvice: string;
  estimatedEra: string;
  tags: string[];
  isUserCreated?: boolean;
  likesCount?: number;
  badge?: string;
  audioNoteDuration?: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  tribe: Tribe;
  province: Province;
}
