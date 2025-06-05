# HalakHita - Platform Pembelajaran Aksara Batak

**Tagline: "Menulis Aksara, Menjaga Warisan"** (Writing Script, Preserving Heritage)

HalakHita adalah platform web interaktif untuk mempelajari Aksara Batak, membantu pelestarian warisan budaya Batak melalui teknologi modern.

## ✨ Fitur Utama

### 🎓 **Pembelajaran Dasar (Basic Learning)**

- Tabel karakter Aksara Batak lengkap dengan huruf Latin
- Panduan pronunciation untuk setiap karakter
- Animasi interaktif untuk pemahaman yang lebih baik

### 🔄 **Konverter Aksara (Script Converter)**

- Konversi bidirectional: Latin ↔ Aksara Batak
- Antarmuka yang intuitif dengan contoh teks
- Referensi karakter yang dapat diklik
- Fitur copy-paste untuk kemudahan penggunaan

### 📝 **Latihan Interaktif (Interactive Practice)**

- Quiz dengan berbagai mode latihan
- Sistem scoring dan progress tracking
- Canvas untuk berlatih menulis tangan
- Feedback real-time untuk pembelajaran

### 🖼️ **Galeri & Referensi (Gallery & References)**

- Koleksi manuskrip Batak bersejarah
- Referensi budaya dan konteks penggunaan
- Download font Aksara Batak
- Materi pembelajaran tambahan

### 📱 **Multi-platform Support**

- Responsive design untuk desktop dan mobile
- Progressive Web App (PWA) ready
- Touch support untuk handwriting practice

## 🛠️ Tech Stack

- **Framework**: Next.js 14 dengan App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS dengan palet warna khas Batak
- **State Management**: Zustand
- **Animation**: Framer Motion
- **Canvas Drawing**: Fabric.js dan Konva.js
- **Future**: PostgreSQL + Prisma ORM, NextAuth.js

## 🎨 Palet Warna

Terinspirasi dari budaya Batak tradisional:

```css
/* Primary Colors */
--merah-ulos: #8b1a1a; /* Deep red from ulos */
--hitam-batak: #1a1a1a; /* Deep black */
--putih-tenun: #fafaf8; /* Soft cream white */

/* Secondary Colors */
--emas-ornamen: #d4a574; /* Gold for accents */
--coklat-kayu: #6b4423; /* Wood brown from traditional houses */

/* Supporting Colors */
--abu-netral: #e5e5e5; /* Neutral background */
--hijau-toba: #2c5f2d; /* Lake Toba green */
```

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Run development server:**

   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── features/          # Main feature components
│   ├── layout/            # Layout components
│   └── ui/                # Reusable UI components
├── data/                  # Static data (Batak characters)
├── lib/                   # Utility functions
├── stores/                # Zustand state management
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

## 🎯 Status Implementasi

### ✅ Selesai

- ✅ Setup project dengan Next.js 14 + TypeScript
- ✅ Konfigurasi Tailwind CSS dengan tema Batak
- ✅ Struktur data karakter Aksara Batak
- ✅ Komponen Header dengan navigasi responsif
- ✅ HomePage dengan hero section
- ✅ Learning module dengan tabel karakter interaktif
- ✅ Converter untuk konversi Latin ↔ Batak
- ✅ Practice module dengan quiz system
- ✅ Gallery untuk referensi dan manuskrip
- ✅ DrawingCanvas untuk latihan menulis
- ✅ State management dengan Zustand
- ✅ Routing system antar fitur

### 🔄 Dalam Pengembangan

- 🔄 Integrasi DrawingCanvas ke Practice
- 🔄 Audio pronunciation functionality
- 🔄 Database schema dan API endpoints
- 🔄 Authentication system
- 🔄 PWA configuration
- 🔄 Font files untuk Aksara Batak

## 🤝 Contributing

Kontribusi sangat diterima! Platform ini dibuat untuk melestarikan budaya Batak dan terbuka untuk pengembangan bersama.

## 📜 License

Project ini didedikasikan untuk pelestarian budaya Batak dan pembelajaran Aksara Batak.

---

**Horas!** 🙏 Mari bersama-sama melestarikan warisan budaya Batak melalui teknologi.
