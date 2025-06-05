// types/index.ts - HalakHita Main Types

export interface BatakCharacter {
  id: string;
  batakChar: string;
  latinChar: string;
  pronunciation: string;
  strokeOrder: string[];
  description?: string;
  category: "vowel" | "consonant" | "modifier";
}

export interface User {
  id: string;
  name: string;
  email: string;
  progress: UserProgress;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserProgress {
  lessonsCompleted: string[];
  quizScores: QuizResult[];
  writingPracticeCount: number;
  totalTimeSpent: number; // in minutes
  currentLevel: "beginner" | "intermediate" | "advanced";
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  difficulty: "easy" | "medium" | "hard";
  order: number;
  estimatedDuration: number; // in minutes
  characters: BatakCharacter[];
  completed?: boolean;
}

export interface QuizResult {
  id: string;
  userId: string;
  score: number;
  totalQuestions: number;
  lessonId?: string;
  completedAt: Date;
  timeSpent: number; // in seconds
}

export interface ConversionResult {
  input: string;
  output: string;
  type: "latin-to-batak" | "batak-to-latin";
  timestamp: Date;
}

export interface WritingPractice {
  id: string;
  userId: string;
  characterId: string;
  canvasData: string; // JSON string of canvas drawing
  accuracy?: number; // 0-100 percentage
  completedAt: Date;
}

export interface ManuscriptReference {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  source: string;
  dateCreated?: string;
  location?: string;
  tags: string[];
}
