// data/batakCharacters.ts - Data Aksara Batak

import { BatakCharacter } from "@/types";

export const batakCharacters: BatakCharacter[] = [
  // Aksara Induk (Consonants)
  {
    id: "ha",
    batakChar: "ᯂ",
    latinChar: "ha",
    pronunciation: "/ha/",
    strokeOrder: ["horizontal-top", "vertical-left", "horizontal-middle"],
    description: "Aksara dasar Ha, sering digunakan sebagai awalan kata",
    category: "consonant",
  },
  {
    id: "na",
    batakChar: "ᯉ",
    latinChar: "na",
    pronunciation: "/na/",
    strokeOrder: ["vertical-left", "horizontal-top", "diagonal"],
    description: "Aksara Na, salah satu aksara paling umum",
    category: "consonant",
  },
  {
    id: "ca",
    batakChar: "ᯎ",
    latinChar: "ca",
    pronunciation: "/ʧa/",
    strokeOrder: ["curve-top", "vertical-center", "horizontal-bottom"],
    description: "Aksara Ca, digunakan untuk bunyi ch",
    category: "consonant",
  },
  {
    id: "ra",
    batakChar: "ᯒ",
    latinChar: "ra",
    pronunciation: "/ra/",
    strokeOrder: ["horizontal-top", "vertical-left", "curve-right"],
    description: "Aksara Ra",
    category: "consonant",
  },
  {
    id: "ka",
    batakChar: "ᯋ",
    latinChar: "ka",
    pronunciation: "/ka/",
    strokeOrder: ["vertical-left", "horizontal-top", "vertical-right"],
    description: "Aksara Ka",
    category: "consonant",
  },
  {
    id: "da",
    batakChar: "ᯑ",
    latinChar: "da",
    pronunciation: "/da/",
    strokeOrder: ["horizontal-top", "vertical-left", "horizontal-bottom"],
    description: "Aksara Da",
    category: "consonant",
  },
  {
    id: "ta",
    batakChar: "ᯖ",
    latinChar: "ta",
    pronunciation: "/ta/",
    strokeOrder: ["horizontal-top", "vertical-center", "horizontal-bottom"],
    description: "Aksara Ta",
    category: "consonant",
  },
  {
    id: "sa",
    batakChar: "ᯘ",
    latinChar: "sa",
    pronunciation: "/sa/",
    strokeOrder: ["curve-top", "vertical-left", "horizontal-bottom"],
    description: "Aksara Sa",
    category: "consonant",
  },
  {
    id: "pa",
    batakChar: "ᯇ",
    latinChar: "pa",
    pronunciation: "/pa/",
    strokeOrder: ["vertical-left", "horizontal-top", "horizontal-middle"],
    description: "Aksara Pa",
    category: "consonant",
  },
  {
    id: "wa",
    batakChar: "ᯠ",
    latinChar: "wa",
    pronunciation: "/wa/",
    strokeOrder: ["curve-left", "vertical-center", "curve-right"],
    description: "Aksara Wa",
    category: "consonant",
  },
  {
    id: "la",
    batakChar: "ᯝ",
    latinChar: "la",
    pronunciation: "/la/",
    strokeOrder: ["vertical-left", "curve-middle", "horizontal-bottom"],
    description: "Aksara La",
    category: "consonant",
  },
  {
    id: "ma",
    batakChar: "ᯔ",
    latinChar: "ma",
    pronunciation: "/ma/",
    strokeOrder: ["horizontal-top", "vertical-left", "curve-bottom"],
    description: "Aksara Ma",
    category: "consonant",
  },
  {
    id: "ga",
    batakChar: "ᯄ",
    latinChar: "ga",
    pronunciation: "/ga/",
    strokeOrder: ["curve-top", "vertical-left", "horizontal-middle"],
    description: "Aksara Ga",
    category: "consonant",
  },
  {
    id: "ja",
    batakChar: "ᯐ",
    latinChar: "ja",
    pronunciation: "/ʤa/",
    strokeOrder: ["horizontal-top", "curve-middle", "vertical-bottom"],
    description: "Aksara Ja",
    category: "consonant",
  },
  {
    id: "nya",
    batakChar: "ᯘᯰ",
    latinChar: "nya",
    pronunciation: "/ɲa/",
    strokeOrder: ["curve-top", "vertical-left", "dot-top"],
    description: "Aksara Nya",
    category: "consonant",
  },
  {
    id: "nga",
    batakChar: "ᯅ",
    latinChar: "nga",
    pronunciation: "/ŋa/",
    strokeOrder: ["curve-full", "vertical-center"],
    description: "Aksara Nga",
    category: "consonant",
  },
  {
    id: "ba",
    batakChar: "ᯆ",
    latinChar: "ba",
    pronunciation: "/ba/",
    strokeOrder: ["vertical-left", "horizontal-top", "curve-bottom"],
    description: "Aksara Ba",
    category: "consonant",
  },
  {
    id: "ya",
    batakChar: "ᯨ",
    latinChar: "ya",
    pronunciation: "/ja/",
    strokeOrder: ["curve-left", "vertical-right", "horizontal-bottom"],
    description: "Aksara Ya",
    category: "consonant",
  },

  // Anak Ni Surat (Vowel Modifiers)
  {
    id: "i",
    batakChar: "ᯤ",
    latinChar: "i",
    pronunciation: "/i/",
    strokeOrder: ["dot-top"],
    description: "Anak ni surat untuk bunyi i",
    category: "modifier",
  },
  {
    id: "o",
    batakChar: "ᯨ",
    latinChar: "o",
    pronunciation: "/o/",
    strokeOrder: ["curve-above"],
    description: "Anak ni surat untuk bunyi o",
    category: "modifier",
  },
  {
    id: "u",
    batakChar: "ᯩ",
    latinChar: "u",
    pronunciation: "/u/",
    strokeOrder: ["curve-below"],
    description: "Anak ni surat untuk bunyi u",
    category: "modifier",
  },
  {
    id: "e",
    batakChar: "᯦",
    latinChar: "e",
    pronunciation: "/e/",
    strokeOrder: ["horizontal-above"],
    description: "Anak ni surat untuk bunyi e",
    category: "modifier",
  },
];

export const getCharacterById = (id: string): BatakCharacter | undefined => {
  return batakCharacters.find((char) => char.id === id);
};

export const getCharactersByCategory = (
  category: BatakCharacter["category"]
): BatakCharacter[] => {
  return batakCharacters.filter((char) => char.category === category);
};

export const searchCharacters = (query: string): BatakCharacter[] => {
  const lowercaseQuery = query.toLowerCase();
  return batakCharacters.filter(
    (char) =>
      char.latinChar.toLowerCase().includes(lowercaseQuery) ||
      char.batakChar.includes(query) ||
      char.description?.toLowerCase().includes(lowercaseQuery)
  );
};
