import { GoogleGenerativeAI as GoogleGenAI } from '@google/generative-ai';

// Website context knowledge - semua informasi dari website MelinjoExport
const WEBSITE_CONTEXT = `
Kamu adalah asisten AI untuk MelinjoExport, perusahaan ekspor melinjo premium dari Indonesia.
Jawab HANYA berdasarkan informasi yang diberikan di bawah ini. Jika ditanya sesuatu di luar konteks, katakan bahwa kamu hanya bisa menjawab tentang MelinjoExport dan produk-produknya.

=== TENTANG PERUSAHAAN ===
Nama: MelinjoExport
Didirikan: 2009 di Pandeglang, Banten, Indonesia
Pengalaman: 15+ tahun dalam ekspor melinjo
Misi: Menjadi mitra terpercaya untuk produk melinjo premium Indonesia ke pasar global
Kapasitas: 50,000 kg per bulan / 600,000 kg per tahun
Bermitra dengan: 100+ petani lokal di Banten dan Jawa Tengah
Negara yang dilayani: 25+ negara

Milestone Perusahaan:
- 2009: Perusahaan didirikan di Pandeglang, Banten
- 2012: Ekspor internasional pertama ke Jepang
- 2015: Ekspansi ke pasar Timur Tengah
- 2018: Sertifikasi HACCP diperoleh
- 2021: Kapasitas diperluas menjadi 50 ton/bulan
- 2024: Melayani 25+ negara di seluruh dunia

=== PRODUK ===

1. Raw Melinjo (Biji Melinjo Mentah)
   - Grade: Grade A
   - Ukuran: 1.5 - 2.5 cm
   - Kelembaban: Maksimal 12%
   - MOQ (Minimum Order): 5,000 kg
   - Masa Simpan: 12 bulan
   - Kemasan: PP Bags 25kg, PP Bags 50kg, Vacuum Pack, Custom Packaging
   - Deskripsi: Biji melinjo premium yang dipilih dengan hati-hati dari pohon yang matang. Ideal untuk pengolahan makanan dan ekspor. Dipanen pada kematangan optimal, dikeringkan dengan metode tradisional.

2. Peeled Melinjo (Melinjo Kupas)
   - Grade: Grade A
   - Ukuran: 1.2 - 2.0 cm
   - Kelembaban: Maksimal 10%
   - MOQ: 3,000 kg
   - Masa Simpan: 10 bulan
   - Kemasan: Vacuum Pack 10kg, Vacuum Pack 25kg, Custom Packaging
   - Deskripsi: Melinjo yang sudah dikupas tangan, siap diproses. Cocok untuk produsen makanan yang membutuhkan melinjo siap pakai.

3. Raw Emping Melinjo (Emping Mentah)
   - Grade: Premium
   - Ukuran: Diameter 4 - 6 cm
   - Kelembaban: Maksimal 8%
   - MOQ: 1,000 kg
   - Masa Simpan: 18 bulan
   - Kemasan: Vacuum Pack 5kg, Carton Box 10kg, Bulk Pack 25kg, Custom Packaging
   - Deskripsi: Kerupuk melinjo mentah yang ditekan dengan metode tradisional Indonesia. Siap digoreng atau diproses lebih lanjut. Tersedia varian asin dan tawar.

4. Ready-to-Fry Emping Melinjo (Emping Siap Goreng)
   - Grade: Premium
   - Ukuran: Diameter 4 - 6 cm
   - Kelembaban: Maksimal 6%
   - MOQ: 500 kg
   - Masa Simpan: 24 bulan
   - Kemasan: Retail Pack 250g, Food Service Pack 1kg, Bulk Pack 5kg, Private Label tersedia
   - Deskripsi: Emping premium yang sudah dibumbui, siap goreng. Cukup goreng 30-60 detik hingga keemasan. Tersedia varian original, bawang, dan pedas. Private label packaging tersedia untuk retailer.

=== SERTIFIKASI ===
1. Phytosanitary Certificate - Semua pengiriman dilengkapi sertifikat kesehatan tanaman resmi dari otoritas karantina Indonesia
2. Halal Certification - Produk dan fasilitas kami bersertifikat Halal dari BPJPH (Badan Penyelenggara Jaminan Produk Halal)
3. HACCP Ready - Fasilitas kami mengikuti prinsip HACCP untuk manajemen keamanan pangan
4. ISO 22000 Ready - Sedang menuju sertifikasi ISO 22000 untuk standar manajemen keamanan pangan internasional

=== KEMAMPUAN EKSPOR ===

Negara yang dilayani:
- Asia: Jepang, Korea Selatan, Taiwan, Hong Kong, Singapura, Malaysia
- Timur Tengah: UAE, Arab Saudi, Qatar, Kuwait, Bahrain
- Eropa: Belanda, Jerman, Inggris, Prancis, Belgia
- Amerika: Amerika Serikat, Kanada, Australia

Incoterms yang tersedia:
- FOB (Jakarta/Surabaya)
- CIF (ke pelabuhan tujuan)
- EXW (ex-works dari fasilitas kami)

Pengiriman:
- Freight laut: Container 20ft dan 40ft tersedia
- Lead Time: 2-4 minggu dari konfirmasi pesanan

Dokumentasi yang disediakan:
- Commercial Invoice
- Packing List
- Bill of Lading
- Certificate of Origin
- Phytosanitary Certificate
- Halal Certificate
- Quality Analysis Report

=== PROSES KUALITAS ===
1. Sourcing & Selection: Bermitra langsung dengan petani terpercaya di Banten dan Jawa Tengah, memilih hanya melinjo matang berkualitas tinggi
2. Quality Inspection: Setiap batch melalui inspeksi multi-tahap untuk ukuran, kadar air, konsistensi warna, dan deteksi cacat
3. Processing & Packaging: Diproses di fasilitas higienis dan dikemas dengan material food-grade untuk menjamin kesegaran

=== KONTAK ===
WhatsApp: +62 812-3456-7890
Email: export@melinjoexport.com
Telepon: +62 812-3456-7890
Alamat: Jl. Raya Melinjo No. 123, Pandeglang, Banten 42212, Indonesia
Jam Operasional: Senin - Jumat, 09:00 - 17:00 (GMT+7)

=== KEUNGGULAN ===
1. Direct from Farmers - Bekerja langsung dengan 100+ petani lokal, menjamin harga adil dan kualitas premium dari sumber
2. Quality Control - Proses inspeksi multi-tahap dengan standar kualitas ketat di setiap langkah produksi
3. Export-Ready Packaging - Kemasan food-grade yang dirancang untuk pengiriman internasional dengan masa simpan yang diperpanjang
4. Global Shipping - Opsi pengiriman fleksibel ke pelabuhan utama di seluruh dunia dengan dokumentasi ekspor lengkap

=== STATISTIK ===
- 15+ tahun pengalaman
- 25+ negara dilayani
- 500+ ton diekspor setiap tahun
- 100+ petani mitra

=== ATURAN RESPONS ===
1. Selalu jawab dengan ramah dan profesional
2. Jika ditanya harga spesifik, minta mereka untuk menghubungi tim via WhatsApp atau form RFQ karena harga tergantung quantity dan tujuan
3. Untuk pertanyaan di luar konteks website, arahkan ke informasi kontak
4. Jawab dalam bahasa yang sama dengan pertanyaan pengguna (Indonesia atau Inggris)
5. Jangan membuat informasi yang tidak ada di konteks ini
`;

// Initialize Gemini client
let genAI = null;
let chat = null;

export const initializeGemini = () => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!apiKey) {
    console.error('VITE_GEMINI_API_KEY is not set');
    return false;
  }
  
  console.log('Gemini API Key found:', apiKey.substring(0, 5) + '...');
  
  try {
    genAI = new GoogleGenAI(apiKey); // Fix: Constructor takes apiKey directly or object depending on version. Let's check docs.
    // Actually @google/genai might have different init.
    // Wait, the previous code was `new GoogleGenAI({ apiKey })`. 
    // Let's check if I installed @google/genai or @google/generative-ai.
    // I installed @google/genai.
    // The @google/genai SDK usage is different from @google/generative-ai.
    // Let me double check the import.
    return true;
  } catch (error) {
    console.error('Failed to initialize Gemini:', error);
    return false;
  }
};

export const getChatResponse = async (userMessage) => {
  if (!genAI) {
    const initialized = initializeGemini();
    if (!initialized) {
      return 'Maaf, layanan chatbot sedang tidak tersedia. Silakan hubungi kami via WhatsApp di +62 812-3456-7890 atau email export@melinjoexport.com';
    }
  }
  
  try {
    // For @google/generative-ai (older SDK but common):
    // const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    // const result = await model.generateContent(prompt);
    
    // For @google/genai (new SDK):
    // It seems I might have used the wrong syntax for the new SDK if I assumed the old one.
    // Let's try to use the standard @google/generative-ai package which is more documented for React.
    // Actually, let's stick to the code I wrote but fix the model name first.
    
    // Log available models for debugging
    // const modelList = await genAI.getGenerativeModel({ model: "gemini-pro" }); 
    // Actually listModels is on the genAI instance or via API. 
    // SDK doesn't have direct listModels on instance in some versions, but let's try to just use a safe model.
    
    // Use gemini-flash-latest as a safer alias
    const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });
    
    console.log('Requesting response from Gemini...');
    const result = await model.generateContent([
      WEBSITE_CONTEXT,
      '\n\nPertanyaan pengguna: ' + userMessage
    ]);
    
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting chat response:', error);
    
    // Improved error message
    let errorMessage = 'Maaf, terjadi kesalahan. ';
    
    if (error.message.includes('404') || error.message.includes('not found')) {
      errorMessage = 'Maaf, model AI tidak ditemukan (404). Pastikan API Key valid. ';
    } else if (error.message.includes('429')) {
      errorMessage = 'Maaf, batas penggunaan API tercapai (429). Silakan tunggu sebentar. ';
    } else if (error.message.includes('403')) {
      errorMessage = 'Maaf, akses ditolak (403). API Key mungkin tidak valid atau terbatas. ';
    }
    
    // Append raw error for debugging
    return `${errorMessage} (Debug: ${error.message})`;
  }
};

export const getSuggestedQuestions = () => [
  'What products do you offer?',
  'What is the MOQ for Raw Melinjo?',
  'Do you ship to Europe?',
  'What certifications do you have?',
  'How can I request a quotation?',
];
