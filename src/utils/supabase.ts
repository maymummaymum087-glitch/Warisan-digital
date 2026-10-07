import { createClient, SupabaseClient } from '@supabase/supabase-js';
import { HeritageItem } from '../types/heritage';
import { INITIAL_HERITAGE_ITEMS } from '../data/sulawesiHeritageData';

// User provided credentials
const DEFAULT_SUPABASE_URL =
  import.meta.env.VITE_SUPABASE_URL || 'https://xjdbpqmjdcbhtszsaafq.supabase.co';

const DEFAULT_SUPABASE_ANON_KEY =
  (import.meta.env.VITE_SUPABASE_ANON_KEY ||
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqZGJwcW1qZGNiaHRzenNhYWZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA3MTgwMjQsImV4cCI6MjEwNjI5NDAyNH0.c-5A7skwfvDHl7fhI9uz9upu1fbn_-I0w5io0bn_LHQ'
  ).replace(/\s+/g, '');

// Alternate URL provided by user in prompt
export const ALTERNATE_SUPABASE_URL = 'https://bcrsqzmantitndqtnecs.supabase.co';

let clientInstance: SupabaseClient | null = null;
let currentActiveUrl = DEFAULT_SUPABASE_URL;

export function getSupabaseClient(customUrl?: string, customKey?: string): SupabaseClient {
  const urlToUse = customUrl || currentActiveUrl;
  const keyToUse = (customKey || DEFAULT_SUPABASE_ANON_KEY).replace(/\s+/g, '');

  if (!clientInstance || currentActiveUrl !== urlToUse) {
    clientInstance = createClient(urlToUse, keyToUse, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    });
    currentActiveUrl = urlToUse;
  }
  return clientInstance;
}

export function getActiveSupabaseConfig() {
  return {
    url: currentActiveUrl,
    anonKey: DEFAULT_SUPABASE_ANON_KEY,
    alternateUrl: ALTERNATE_SUPABASE_URL,
    projectRef: 'xjdbpqmjdcbhtszsaafq',
  };
}

export function setActiveSupabaseUrl(url: string) {
  currentActiveUrl = url.trim();
  clientInstance = null; // force recreation
}

export interface SupabaseHealthResult {
  connected: boolean;
  tableReady: boolean;
  activeUrl: string;
  rowCount: number;
  message: string;
  error?: string;
}

/**
 * Checks connection to Supabase and verifies if the 'heritage_items' table exists.
 */
export async function testSupabaseConnection(overrideUrl?: string): Promise<SupabaseHealthResult> {
  const targetUrl = overrideUrl || currentActiveUrl;
  try {
    const client = getSupabaseClient(targetUrl);
    const { data, count, error } = await client
      .from('heritage_items')
      .select('id', { count: 'exact', head: true });

    if (error) {
      // PGRST205 indicates table does not exist in schema cache
      if (error.code === 'PGRST205' || error.message.includes('heritage_items')) {
        return {
          connected: true,
          tableReady: false,
          activeUrl: targetUrl,
          rowCount: 0,
          message: 'Terhubung ke Supabase! Namun tabel "heritage_items" belum dibuat di database.',
          error: error.message,
        };
      }
      return {
        connected: false,
        tableReady: false,
        activeUrl: targetUrl,
        rowCount: 0,
        message: `Gagal mengakses database Supabase: ${error.message}`,
        error: error.message,
      };
    }

    return {
      connected: true,
      tableReady: true,
      activeUrl: targetUrl,
      rowCount: count ?? 0,
      message: `Database Supabase Aktif & Siap! (${count ?? 0} data warisan tersimpan di cloud)`,
    };
  } catch (err: any) {
    return {
      connected: false,
      tableReady: false,
      activeUrl: targetUrl,
      rowCount: 0,
      message: `Koneksi ke Supabase gagal: ${err.message || 'Network error'}`,
      error: err.message,
    };
  }
}

/**
 * Fetch all heritage items from Supabase.
 * Returns null if table is not yet created or connection fails.
 */
export async function fetchAllHeritageItemsFromSupabase(): Promise<HeritageItem[] | null> {
  try {
    const client = getSupabaseClient();
    const { data, error } = await client
      .from('heritage_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (error || !data) {
      return null;
    }

    // Convert from db row to HeritageItem
    return data.map((row: any) => ({
      id: row.id,
      title: row.title,
      subtitle: row.subtitle,
      category: row.category,
      province: row.province,
      tribe: row.tribe,
      regionDetail: row.region_detail || row.regionDetail,
      elderNarrator: row.elder_narrator || row.elderNarrator,
      recordedBy: row.recorded_by || row.recordedBy,
      summary: row.summary,
      philosophicalMeaning: row.philosophical_meaning || row.philosophicalMeaning,
      localTerms: row.local_terms || row.localTerms || [],
      stepsOrNarrative: row.steps_or_narrative || row.stepsOrNarrative || [],
      ingredientsOrMaterials: row.ingredients_or_materials || row.ingredientsOrMaterials,
      toolsUsed: row.tools_used || row.toolsUsed,
      preservationAdvice: row.preservation_advice || row.preservationAdvice,
      estimatedEra: row.estimated_era || row.estimatedEra,
      tags: row.tags || [],
      likesCount: row.likes_count ?? row.likesCount ?? 0,
      audioNoteDuration: row.audio_note_duration || row.audioNoteDuration,
    }));
  } catch (err) {
    console.warn('Could not fetch from Supabase:', err);
    return null;
  }
}

/**
 * Inserts or upserts a single heritage item into Supabase.
 */
export async function insertItemToSupabase(item: HeritageItem): Promise<boolean> {
  try {
    const client = getSupabaseClient();
    const payload = {
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      category: item.category,
      province: item.province,
      tribe: item.tribe,
      region_detail: item.regionDetail,
      elder_narrator: item.elderNarrator,
      recorded_by: item.recordedBy,
      summary: item.summary,
      philosophical_meaning: item.philosophicalMeaning,
      local_terms: item.localTerms || [],
      steps_or_narrative: item.stepsOrNarrative || [],
      ingredients_or_materials: item.ingredientsOrMaterials || null,
      tools_used: item.toolsUsed || null,
      preservation_advice: item.preservationAdvice || null,
      estimated_era: item.estimatedEra || null,
      tags: item.tags || [],
      likes_count: item.likesCount ?? 0,
      audio_note_duration: item.audioNoteDuration || null,
    };

    const { error } = await client.from('heritage_items').upsert(payload, { onConflict: 'id' });
    if (error) {
      console.warn('Supabase upsert warning:', error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.warn('Supabase insert exception:', err);
    return false;
  }
}

/**
 * Bulk seeds all heritage items into Supabase.
 */
export async function seedAllItemsToSupabase(
  onProgress?: (current: number, total: number) => void
): Promise<{ success: boolean; inserted: number; error?: string }> {
  try {
    const client = getSupabaseClient();
    const total = INITIAL_HERITAGE_ITEMS.length;
    let inserted = 0;

    // Insert in batches of 15 to stay within payload limits
    const batchSize = 15;
    for (let i = 0; i < total; i += batchSize) {
      const slice = INITIAL_HERITAGE_ITEMS.slice(i, i + batchSize);
      const rows = slice.map((item) => ({
        id: item.id,
        title: item.title,
        subtitle: item.subtitle,
        category: item.category,
        province: item.province,
        tribe: item.tribe,
        region_detail: item.regionDetail,
        elder_narrator: item.elderNarrator,
        recorded_by: item.recordedBy,
        summary: item.summary,
        philosophical_meaning: item.philosophicalMeaning,
        local_terms: item.localTerms || [],
        steps_or_narrative: item.stepsOrNarrative || [],
        ingredients_or_materials: item.ingredientsOrMaterials || null,
        tools_used: item.toolsUsed || null,
        preservation_advice: item.preservationAdvice || null,
        estimated_era: item.estimatedEra || null,
        tags: item.tags || [],
        likes_count: item.likesCount ?? 0,
        audio_note_duration: item.audioNoteDuration || null,
      }));

      const { error } = await client.from('heritage_items').upsert(rows, { onConflict: 'id' });
      if (error) {
        throw new Error(error.message);
      }

      inserted += slice.length;
      if (onProgress) {
        onProgress(inserted, total);
      }
    }

    return { success: true, inserted };
  } catch (err: any) {
    return { success: false, inserted: 0, error: err.message };
  }
}

/**
 * Complete SQL Migration Script ready to paste in Supabase SQL Editor.
 */
export const SUPABASE_SQL_SCHEMA = `-- ============================================================
-- SKRIP DATABASE SUPABASE: PLATFORM WARISAN DIGITAL SULAWESI
-- Jalankan skrip ini di SQL Editor Dashboard Supabase Anda:
-- https://supabase.com/dashboard/project/xjdbpqmjdcbhtszsaafq/sql
-- ============================================================

-- 1. Buat Tabel Utama untuk Seluruh Khasanah Budaya 15 Suku
CREATE TABLE IF NOT EXISTS public.heritage_items (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    subtitle TEXT NOT NULL,
    category TEXT NOT NULL,          -- resep, bahasa, kerajinan, tani_bahari, permainan, cerita_sejarah, cerita_keluarga
    province TEXT NOT NULL,          -- 6 Provinsi Sulawesi
    tribe TEXT NOT NULL,             -- 15 Suku Adat Sulawesi
    region_detail TEXT NOT NULL,
    elder_narrator JSONB NOT NULL,   -- { name, age, titleOrRole, location }
    recorded_by JSONB NOT NULL,      -- { name, schoolOrAffiliation, date }
    summary TEXT NOT NULL,
    philosophical_meaning TEXT NOT NULL,
    local_terms JSONB DEFAULT '[]'::jsonb,
    steps_or_narrative JSONB DEFAULT '[]'::jsonb,
    ingredients_or_materials JSONB DEFAULT '[]'::jsonb,
    tools_used JSONB DEFAULT '[]'::jsonb,
    preservation_advice TEXT,
    estimated_era TEXT,
    tags JSONB DEFAULT '[]'::jsonb,
    likes_count INTEGER DEFAULT 0,
    audio_note_duration TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Aktifkan Row Level Security (RLS)
ALTER TABLE public.heritage_items ENABLE ROW LEVEL SECURITY;

-- 3. Kebijakan Keamanan (RLS Policies)
-- Kebijakan A: Semua pengunjung (anonim/publik) dapat membaca data
DROP POLICY IF EXISTS "Publik dapat membaca warisan budaya" ON public.heritage_items;
CREATE POLICY "Publik dapat membaca warisan budaya"
    ON public.heritage_items
    FOR SELECT
    USING (true);

-- Kebijakan B: Pelajar/Pengguna dapat menyimpan cerita baru dari Perekam Wawancara
DROP POLICY IF EXISTS "Publik dapat menambahkan arsip warisan" ON public.heritage_items;
CREATE POLICY "Publik dapat menambahkan arsip warisan"
    ON public.heritage_items
    FOR INSERT
    WITH CHECK (true);

-- Kebijakan C: Pengguna dapat memperbarui data (seperti tombol like & apresiasi)
DROP POLICY IF EXISTS "Publik dapat memperbarui warisan budaya" ON public.heritage_items;
CREATE POLICY "Publik dapat memperbarui warisan budaya"
    ON public.heritage_items
    FOR UPDATE
    USING (true);

-- 4. Indeks Pencarian Cepat
CREATE INDEX IF NOT EXISTS idx_heritage_category ON public.heritage_items(category);
CREATE INDEX IF NOT EXISTS idx_heritage_tribe ON public.heritage_items(tribe);
CREATE INDEX IF NOT EXISTS idx_heritage_province ON public.heritage_items(province);
CREATE INDEX IF NOT EXISTS idx_heritage_created ON public.heritage_items(created_at DESC);

-- Selesai! Tabel siap digunakan oleh aplikasi Warisan Digital Sulawesi.
`;
