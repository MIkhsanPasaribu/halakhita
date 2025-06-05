// stores/useAppStore.ts - Main Application Store

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  BatakCharacter,
  User,
  UserProgress,
  Lesson,
  QuizResult,
} from "@/types";

interface AppState {
  // User state
  currentUser: User | null;
  userProgress: UserProgress | null;

  // Learning state
  currentLesson: Lesson | null;
  selectedCharacter: BatakCharacter | null;

  // UI state
  sidebarOpen: boolean;
  currentView: "home" | "learning" | "converter" | "practice" | "gallery";

  // Quiz state
  currentQuiz: {
    questions: BatakCharacter[];
    currentIndex: number;
    answers: string[];
    startTime: Date | null;
  } | null;

  // Converter state
  converterInput: string;
  converterOutput: string;
  converterMode: "latin-to-batak" | "batak-to-latin";

  // Actions
  setCurrentUser: (user: User | null) => void;
  updateUserProgress: (progress: Partial<UserProgress>) => void;
  setCurrentLesson: (lesson: Lesson | null) => void;
  setSelectedCharacter: (character: BatakCharacter | null) => void;
  setSidebarOpen: (open: boolean) => void;
  setCurrentView: (view: AppState["currentView"]) => void;

  // Quiz actions
  startQuiz: (characters: BatakCharacter[]) => void;
  submitQuizAnswer: (answer: string) => void;
  nextQuizQuestion: () => void;
  finishQuiz: () => QuizResult | null;

  // Converter actions
  setConverterInput: (input: string) => void;
  setConverterOutput: (output: string) => void;
  setConverterMode: (mode: "latin-to-batak" | "batak-to-latin") => void;
  convertText: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      // Initial state
      currentUser: null,
      userProgress: null,
      currentLesson: null,
      selectedCharacter: null,
      sidebarOpen: false,
      currentView: "home",
      currentQuiz: null,
      converterInput: "",
      converterOutput: "",
      converterMode: "latin-to-batak",

      // User actions
      setCurrentUser: (user) => set({ currentUser: user }),

      updateUserProgress: (progress) =>
        set((state) => ({
          userProgress: state.userProgress
            ? { ...state.userProgress, ...progress }
            : (progress as UserProgress),
        })),

      // Learning actions
      setCurrentLesson: (lesson) => set({ currentLesson: lesson }),
      setSelectedCharacter: (character) =>
        set({ selectedCharacter: character }),

      // UI actions
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      setCurrentView: (view) => set({ currentView: view }),

      // Quiz actions
      startQuiz: (characters) =>
        set({
          currentQuiz: {
            questions: [...characters].sort(() => Math.random() - 0.5), // Shuffle
            currentIndex: 0,
            answers: [],
            startTime: new Date(),
          },
        }),

      submitQuizAnswer: (answer) =>
        set((state) => {
          if (!state.currentQuiz) return state;

          const newAnswers = [...state.currentQuiz.answers, answer];
          return {
            currentQuiz: {
              ...state.currentQuiz,
              answers: newAnswers,
            },
          };
        }),

      nextQuizQuestion: () =>
        set((state) => {
          if (!state.currentQuiz) return state;

          return {
            currentQuiz: {
              ...state.currentQuiz,
              currentIndex: state.currentQuiz.currentIndex + 1,
            },
          };
        }),

      finishQuiz: () => {
        const state = get();
        if (!state.currentQuiz || !state.currentUser) return null;

        const { questions, answers, startTime } = state.currentQuiz;
        let correctAnswers = 0;

        questions.forEach((question, index) => {
          if (answers[index] === question.latinChar) {
            correctAnswers++;
          }
        });

        const result: QuizResult = {
          id: `quiz_${Date.now()}`,
          userId: state.currentUser.id,
          score: correctAnswers,
          totalQuestions: questions.length,
          completedAt: new Date(),
          timeSpent: startTime
            ? Math.floor((Date.now() - startTime.getTime()) / 1000)
            : 0,
        };

        // Reset quiz state
        set({ currentQuiz: null });

        return result;
      },

      // Converter actions
      setConverterInput: (input) => set({ converterInput: input }),
      setConverterOutput: (output) => set({ converterOutput: output }),
      setConverterMode: (mode) => set({ converterMode: mode }),

      convertText: () => {
        const { converterInput, converterMode } = get();

        // Simple conversion logic (to be enhanced)
        let output = "";

        if (converterMode === "latin-to-batak") {
          // Basic Latin to Batak conversion
          const latinToBatak: Record<string, string> = {
            ha: "ᯂ",
            na: "ᯉ",
            ca: "ᯎ",
            ra: "ᯒ",
            ka: "ᯋ",
            da: "ᯑ",
            ta: "ᯖ",
            sa: "ᯘ",
            pa: "ᯇ",
            wa: "ᯠ",
            la: "ᯝ",
            ma: "ᯔ",
            ga: "ᯄ",
            ja: "ᯐ",
            nya: "ᯘᯰ",
            nga: "ᯅ",
            ba: "ᯆ",
            ya: "ᯨ",
          };

          const words = converterInput.toLowerCase().split(" ");
          output = words
            .map((word) => {
              let batakWord = "";
              let i = 0;
              while (i < word.length) {
                let found = false;
                // Check for longer matches first
                for (let len = 3; len >= 1; len--) {
                  const substr = word.substring(i, i + len);
                  if (latinToBatak[substr]) {
                    batakWord += latinToBatak[substr];
                    i += len;
                    found = true;
                    break;
                  }
                }
                if (!found) {
                  batakWord += word[i];
                  i++;
                }
              }
              return batakWord;
            })
            .join(" ");
        } else {
          // Basic Batak to Latin conversion
          const batakToLatin: Record<string, string> = {
            ᯂ: "ha",
            ᯉ: "na",
            ᯎ: "ca",
            ᯒ: "ra",
            ᯋ: "ka",
            ᯑ: "da",
            ᯖ: "ta",
            ᯘ: "sa",
            ᯇ: "pa",
            ᯠ: "wa",
            ᯝ: "la",
            ᯔ: "ma",
            ᯄ: "ga",
            ᯐ: "ja",
            ᯅ: "nga",
            ᯆ: "ba",
            "ᯨ": "ya",
          };

          output = converterInput
            .split("")
            .map((char) => batakToLatin[char] || char)
            .join("");
        }

        set({ converterOutput: output });
      },
    }),
    {
      name: "halakhita-storage",
      partialize: (state) => ({
        currentUser: state.currentUser,
        userProgress: state.userProgress,
        converterMode: state.converterMode,
      }),
    }
  )
);
