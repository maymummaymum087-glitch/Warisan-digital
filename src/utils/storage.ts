import { HeritageItem } from '../types/heritage';
import { INITIAL_HERITAGE_ITEMS } from '../data/sulawesiHeritageData';
import {
  fetchAllHeritageItemsFromSupabase,
  insertItemToSupabase,
  testSupabaseConnection,
} from './supabase';

const STORAGE_KEY = 'warisan_digital_sulawesi_items';
const BOOKMARKS_KEY = 'warisan_digital_bookmarks';

export function getSavedHeritageItems(): HeritageItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_HERITAGE_ITEMS));
      return INITIAL_HERITAGE_ITEMS;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_HERITAGE_ITEMS));
      return INITIAL_HERITAGE_ITEMS;
    }

    // Merge any missing initial items
    const existingIds = new Set(parsed.map((item: any) => item.id));
    const missingSeedItems = INITIAL_HERITAGE_ITEMS.filter((item) => !existingIds.has(item.id));
    if (missingSeedItems.length > 0) {
      const merged = [...parsed, ...missingSeedItems];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return merged;
    }

    return parsed;
  } catch (e) {
    console.error('Error reading localStorage:', e);
    return INITIAL_HERITAGE_ITEMS;
  }
}

/**
 * Saves a new heritage item to local storage AND sends it to Supabase database.
 */
export function saveHeritageItem(newItem: HeritageItem): HeritageItem[] {
  try {
    const current = getSavedHeritageItems();
    const updated = [newItem, ...current.filter((x) => x.id !== newItem.id)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));

    // Asynchronously sync to Supabase Cloud Database
    insertItemToSupabase(newItem).catch((err) => {
      console.warn('Background Supabase save notification:', err);
    });

    return updated;
  } catch (e) {
    console.error('Error saving item:', e);
    return getSavedHeritageItems();
  }
}

/**
 * Syncs database items from Supabase and merges them into state.
 */
export async function syncItemsFromSupabase(): Promise<{
  items: HeritageItem[];
  source: 'supabase' | 'local';
  count: number;
}> {
  try {
    const cloudItems = await fetchAllHeritageItemsFromSupabase();
    if (cloudItems && cloudItems.length > 0) {
      const local = getSavedHeritageItems();
      const cloudIds = new Set(cloudItems.map((c) => c.id));
      const localOnly = local.filter((l) => !cloudIds.has(l.id));

      const merged = [...cloudItems, ...localOnly];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
      return { items: merged, source: 'supabase', count: cloudItems.length };
    }
  } catch (e) {
    console.warn('Sync from Supabase fallback to local:', e);
  }

  const local = getSavedHeritageItems();
  return { items: local, source: 'local', count: local.length };
}

export function getBookmarkedIds(): string[] {
  try {
    const raw = localStorage.getItem(BOOKMARKS_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function toggleBookmark(id: string): string[] {
  const current = getBookmarkedIds();
  const next = current.includes(id) ? current.filter((x) => x !== id) : [...current, id];
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next));
  } catch {}
  return next;
}

export function speakText(text: string, onEnd?: () => void) {
  if (!('speechSynthesis' in window)) {
    console.warn('SpeechSynthesis not supported');
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'id-ID';
  utterance.rate = 0.95;
  if (onEnd) {
    utterance.onend = onEnd;
    utterance.onerror = onEnd;
  }
  window.speechSynthesis.speak(utterance);
}

export function stopSpeaking() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
