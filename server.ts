import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: '15mb' }));

  const ai = process.env.GEMINI_API_KEY
    ? new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          },
        },
      })
    : null;

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      hasGemini: !!process.env.GEMINI_API_KEY,
      appName: 'Warisan Digital Sulawesi',
    });
  });

  // Story Structuring API: transform oral student interviews into structured digital heritage
  app.post('/api/structure-story', async (req, res) => {
    try {
      const {
        rawStory,
        elderName = 'Tetua Komunitas',
        elderAge = '',
        studentName = 'Pewaris Muda',
        region = 'Sulawesi Selatan',
        tribe = 'Bugis',
        categoryHint = 'resep',
      } = req.body;

      if (!rawStory || typeof rawStory !== 'string' || rawStory.trim().length === 0) {
        return res.status(400).json({ error: 'Cerita atau transkrip lisan tidak boleh kosong.' });
      }

      // If Gemini is available, use gemini-3.8-flash
      if (ai) {
        try {
          const prompt = `Anda adalah kurator dan arsiparis antropologi budaya Sulawesi untuk platform "Warisan Digital".
Tugas Anda adalah mentransformasikan rekaman cerita lisan bebas seorang tetua (kakek/nenek/tokoh adat) yang dicatat/diwawancarai oleh pelajar ke dalam format dokumentasi arsip terstruktur yang sangat rapi, mendalam, dan kaya nilai kearifan lokal.

Data Narasumber & Pewawancara:
- Tetua (Narasumber): ${elderName} ${elderAge ? `(${elderAge} tahun)` : ''}
- Pewawancara/Pencatat: ${studentName}
- Daerah: ${region}
- Suku: ${tribe}
- Dugaan Kategori: ${categoryHint}

Cerita / Transkrip Lisan Bebas:
"""
${rawStory}
"""

Tolong analisis teks di atas dan kembalikan struktur JSON murni sesuai format:
- title: Judul warisan yang menarik & berakar budaya (contoh: "Resep Kapurung Ikan Mairo Warisan Nenek Murni", "Falsafah Pasang ri Kajang", "Teknik Menenun Sa'be Mandar")
- category: Salah satu dari: "resep", "bahasa", "kerajinan", "tani_bahari", "permainan", "cerita_sejarah"
- summary: Ringkasan narasi (2-3 kalimat jelas tentang asal-usul dan signifikansinya)
- philosophicalMeaning: Makna filosofis, nilai budi pekerti luhur, atau pantangan (pamali) leluhur terkait warisan ini
- localTerms: Daftar istilah atau kosa kata bahasa daerah lokal yang terkandung atau relevan beserta artinya dan bahasa sukunya.
- ingredientsOrMaterials: Daftar bahan utama atau material yang dibutuhkan (jika resep / kerajinan tangan / alat)
- toolsUsed: Alat-alat tradisional yang digunakan
- stepsOrNarrative: Tahapan pembuatan / aturan bermain / urutan ritual / alur kisah sejarah yang terbagi dalam langkah-langkah terstruktur (minimal 3 langkah dengan judul dan deskripsi rinci)
- preservationAdvice: Pesan atau petuah leluhur untuk generasi muda agar warisan ini tidak punah
- estimatedEra: Perkiraan era atau akar tradisi (misal: "Turun-temurun sejak era Kedatuan Luwu / Kerajaan Gowa-Tallo / Buton / abad ke-18")`;

          const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: prompt,
            config: {
              responseMimeType: 'application/json',
              responseSchema: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  category: {
                    type: Type.STRING,
                    description: 'One of: resep, bahasa, kerajinan, tani_bahari, permainan, cerita_sejarah',
                  },
                  summary: { type: Type.STRING },
                  philosophicalMeaning: { type: Type.STRING },
                  localTerms: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        term: { type: Type.STRING },
                        meaning: { type: Type.STRING },
                        language: { type: Type.STRING },
                      },
                      required: ['term', 'meaning', 'language'],
                    },
                  },
                  ingredientsOrMaterials: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  toolsUsed: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  stepsOrNarrative: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        stepNumber: { type: Type.INTEGER },
                        title: { type: Type.STRING },
                        description: { type: Type.STRING },
                      },
                      required: ['title', 'description'],
                    },
                  },
                  preservationAdvice: { type: Type.STRING },
                  estimatedEra: { type: Type.STRING },
                },
                required: [
                  'title',
                  'category',
                  'summary',
                  'philosophicalMeaning',
                  'localTerms',
                  'stepsOrNarrative',
                  'preservationAdvice',
                ],
              },
            },
          });

          if (response.text) {
            const parsed = JSON.parse(response.text);
            return res.json({
              success: true,
              data: parsed,
              source: 'gemini',
            });
          }
        } catch (geminiError) {
          console.warn('Gemini structuring error, fallback to algorithmic parser:', geminiError);
        }
      }

      // Fallback algorithmic structurer (offline-first & robust)
      const lines = rawStory.split(/\n+/).map((l) => l.trim()).filter(Boolean);
      const firstLine = lines[0] || 'Warisan Tradisional';
      const title = firstLine.length < 60 ? firstLine : `Penuturan ${elderName}: Tradisi ${tribe}`;

      const fallbackStructured = {
        title: title.replace(/^[#\-\*\d\.\s]+/, ''),
        category: categoryHint || 'resep',
        summary: `Dokumentasi pengetahuan lokal dari ${elderName} (${region}, Suku ${tribe}) yang dicatat oleh ${studentName}. Menarasikan tradisi luhur yang diwariskan secara turun temurun.`,
        philosophicalMeaning: `Memegang teguh nilai kejujuran, kegotong-royongan (sintuwu/sipakatau), dan rasa hormat kepada alam serta para leluhur.`,
        localTerms: [
          { term: tribe, meaning: `Masyarakat adat suku ${tribe} di kawasan ${region}`, language: `Bahasa ${tribe}` },
          { term: 'Pamali / Pasang', meaning: 'Petuah atau pantangan leluhur yang wajib dihormati', language: `Bahasa ${tribe}` },
        ],
        ingredientsOrMaterials: lines.slice(1, 4).map((l) => l.replace(/^[#\-\*\d\.\s]+/, '')),
        toolsUsed: ['Peralatan tradisional bambu / gerabah / kayu'],
        stepsOrNarrative: lines.map((line, idx) => ({
          stepNumber: idx + 1,
          title: `Bagian ${idx + 1}`,
          description: line,
        })),
        preservationAdvice: `Pesan ${elderName}: "Jangan biarkan kearifan ini hilang ditelan zaman modern. Catat, praktikkan, dan ceritakan kepada anak cucu."`,
        estimatedEra: 'Diwariskan secara lisan selama beberapa generasi',
      };

      return res.json({
        success: true,
        data: fallbackStructured,
        source: 'heuristic',
      });
    } catch (error) {
      console.error('Error processing story:', error);
      res.status(500).json({ error: 'Gagal memproses cerita ke format terstruktur.' });
    }
  });

  // Quiz generator based on tribe and region
  app.post('/api/generate-quiz', async (req, res) => {
    try {
      const { tribe = 'Bugis', region = 'Sulawesi Selatan' } = req.body;

      if (ai) {
        try {
          const prompt = `Buatkan 3 soal kuis interaktif pilihan ganda tentang budaya dan kearifan suku ${tribe} di wilayah ${region}.
Topik mencakup: kuliner khas, bahasa/falsafah daerah, kerajinan tangan, teknik tani/bahari, atau permainan tradisional.
Format JSON: Array of objects dengan properti:
- question: Pertanyaan kuis
- options: 4 pilihan jawaban string
- answerIndex: indeks jawaban yang benar (0-3)
- explanation: penjelasan mendidik yang menarik`;

          const response = await ai.models.generateContent({
            model: 'gemini-3.8-flash',
            contents: prompt,
            config: {
              responseMimeType: 'application/json',
              responseSchema: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    question: { type: Type.STRING },
                    options: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                    answerIndex: { type: Type.INTEGER },
                    explanation: { type: Type.STRING },
                  },
                  required: ['question', 'options', 'answerIndex', 'explanation'],
                },
              },
            },
          });

          if (response.text) {
            return res.json({ success: true, questions: JSON.parse(response.text) });
          }
        } catch (e) {
          console.warn('Gemini quiz generation error, using curated questions:', e);
        }
      }

      // Default curated quiz
      res.json({
        success: true,
        questions: [
          {
            question: `Apakah falsafah luhur suku Bugis yang berarti saling menghargai, menghormati, dan mengingatkan?`,
            options: ['Siri na Pacce', 'Sipakatau, Sipakalebbi, Sipakainge', 'Nosarara Nosabatutu', 'Kalo Sara'],
            answerIndex: 1,
            explanation: 'Sipakatau (memanusiakan manusia), Sipakalebbi (saling menghargai martabat), dan Sipakainge (saling mengingatkan dalam kebaikan) adalah trias falsafah luhur Bugis.',
          },
        ],
      });
    } catch (e) {
      res.status(500).json({ error: 'Gagal membuat kuis.' });
    }
  });

  // Vite integration
  const isProd = process.env.NODE_ENV === 'production';
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files from dist
    app.use(express.static(path.join(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server Warisan Digital listening on http://0.0.0.0:${port}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
});
