# Copilot Instructions for HalakHita Project

<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

## Project Overview
HalakHita is a web platform for learning Batak script (Aksara Batak) with the tagline "Menulis Aksara, Menjaga Warisan" (Writing Script, Preserving Heritage).

## Technical Stack
- Framework: Next.js 14 with App Router
- Language: TypeScript
- Styling: Tailwind CSS
- State Management: Zustand
- Animation: Framer Motion
- Canvas Drawing: Fabric.js or Konva.js
- Database: PostgreSQL with Prisma ORM
- Authentication: NextAuth.js

## Color Palette
```css
/* Primary Colors */
--merah-ulos: #8B1A1A;      /* Deep red from ulos */
--hitam-batak: #1A1A1A;     /* Deep black */
--putih-tenun: #FAFAF8;     /* Soft cream white */

/* Secondary Colors */
--emas-ornamen: #D4A574;    /* Gold for accents */
--coklat-kayu: #6B4423;     /* Wood brown from traditional houses */

/* Supporting Colors */
--abu-netral: #E5E5E5;      /* Neutral background */
--hijau-toba: #2C5F2D;      /* Lake Toba green */
```

## Code Style Guidelines
- Use modular programming - separate each feature into different files
- Follow TypeScript best practices
- Use Tailwind CSS utility classes
- Implement responsive design
- Apply atomic design principles for components
- Use descriptive variable names, preferably in Indonesian/Batak context

## Key Features to Implement
1. Basic Learning (Pembelajaran Dasar)
2. Script Converter (Konverter Aksara)
3. Interactive Practice (Latihan Interaktif)
4. Gallery & References (Galeri & Referensi)
5. Multi-platform support with PWA

## File Structure Convention
- Components: `/src/components/`
- Pages: `/src/app/`
- Utilities: `/src/lib/`
- Types: `/src/types/`
- Stores: `/src/stores/`
- Data: `/src/data/`
- Styles: `/src/styles/`
