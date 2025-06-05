// components/features/Practice.tsx - Interactive Practice Component

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  Star,
  PenTool,
  Brain,
} from "lucide-react";
import { batakCharacters } from "@/data/batakCharacters";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import DrawingCanvas from "./DrawingCanvas";

interface QuizQuestion {
  id: string;
  batak: string;
  correct: string;
  options: string[];
}

const Practice: React.FC = () => {
  const [practiceMode, setPracticeMode] = useState<"quiz" | "drawing">("quiz");
  const [currentQuestion, setCurrentQuestion] = useState<QuizQuestion | null>(
    null
  );
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [quizMode, setQuizMode] = useState<"latin" | "batak">("latin");

  const generateQuestion = useCallback(() => {
    const randomChar =
      batakCharacters[Math.floor(Math.random() * batakCharacters.length)];
    const otherChars = batakCharacters
      .filter((char) => char.id !== randomChar.id)
      .sort(() => Math.random() - 0.5)
      .slice(0, 3);

    const options = [randomChar, ...otherChars]
      .sort(() => Math.random() - 0.5)
      .map((char) => (quizMode === "latin" ? char.latinChar : char.batakChar));

    return {
      id: randomChar.id,
      batak: quizMode === "latin" ? randomChar.batakChar : randomChar.latinChar,
      correct:
        quizMode === "latin" ? randomChar.latinChar : randomChar.batakChar,
      options,
    };
  }, [quizMode]);

  const startNewQuestion = useCallback(() => {
    setCurrentQuestion(generateQuestion());
    setSelectedAnswer("");
    setIsAnswered(false);
    setShowResult(false);
  }, [generateQuestion]);

  const handleAnswer = (answer: string) => {
    if (isAnswered) return;

    setSelectedAnswer(answer);
    setIsAnswered(true);
    setTotalQuestions((prev) => prev + 1);

    if (answer === currentQuestion?.correct) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setShowResult(true);
    }, 1000);
  };

  const nextQuestion = () => {
    startNewQuestion();
  };

  const resetQuiz = () => {
    setScore(0);
    setTotalQuestions(0);
    startNewQuestion();
  };

  useEffect(() => {
    startNewQuestion();
  }, [startNewQuestion]);

  const accuracy =
    totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-putih-tenun to-abu-netral">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-hitam-batak mb-4">
            Latihan Aksara Batak
          </h1>
          <p className="text-lg text-coklat-kayu max-w-2xl mx-auto">
            Uji pengetahuan Anda tentang aksara Batak melalui kuis interaktif.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Practice Mode Selector */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-hitam-batak mb-4">
                Mode Latihan
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button
                  variant={practiceMode === "quiz" ? "default" : "outline"}
                  onClick={() => setPracticeMode("quiz")}
                  className="h-16"
                >
                  <div className="text-center">
                    <Brain className="h-6 w-6 mx-auto mb-1" />
                    <div className="font-semibold">Kuis</div>
                    <div className="text-sm opacity-80">Tebak Aksara</div>
                  </div>
                </Button>
                <Button
                  variant={practiceMode === "drawing" ? "default" : "outline"}
                  onClick={() => setPracticeMode("drawing")}
                  className="h-16"
                >
                  <div className="text-center">
                    <PenTool className="h-6 w-6 mx-auto mb-1" />
                    <div className="font-semibold">Menggambar</div>
                    <div className="text-sm opacity-80">Latihan Menulis</div>
                  </div>
                </Button>
              </div>

              {practiceMode === "quiz" && (
                <div className="grid grid-cols-2 gap-4">
                  <Button
                    variant={quizMode === "latin" ? "default" : "outline"}
                    onClick={() => {
                      setQuizMode("latin");
                      resetQuiz();
                    }}
                    className="h-16"
                  >
                    <div className="text-center">
                      <div className="font-semibold">Tebak Latin</div>
                      <div className="text-sm opacity-80">
                        Dari Aksara Batak
                      </div>
                    </div>
                  </Button>
                  <Button
                    variant={quizMode === "batak" ? "default" : "outline"}
                    onClick={() => {
                      setQuizMode("batak");
                      resetQuiz();
                    }}
                    className="h-16"
                  >
                    <div className="text-center">
                      <div className="font-semibold">Tebak Aksara</div>
                      <div className="text-sm opacity-80">Dari Huruf Latin</div>
                    </div>
                  </Button>
                </div>
              )}
            </Card>
          </motion.div>

          {practiceMode === "drawing" ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <DrawingCanvas width={600} height={400} />
            </motion.div>
          ) : (
            <>
              {/* Score Display */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Card className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-merah-ulos">
                          {score}
                        </div>
                        <div className="text-sm text-coklat-kayu">Benar</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-hitam-batak">
                          {totalQuestions}
                        </div>
                        <div className="text-sm text-coklat-kayu">Total</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-emas-ornamen">
                          {accuracy}%
                        </div>
                        <div className="text-sm text-coklat-kayu">Akurasi</div>
                      </div>
                    </div>
                    <Button variant="outline" onClick={resetQuiz}>
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                </Card>
              </motion.div>

              {/* Question Card */}
              <AnimatePresence mode="wait">
                {currentQuestion && (
                  <motion.div
                    key={currentQuestion.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Card className="p-8 mb-8">
                      <div className="text-center mb-8">
                        <h3 className="text-lg font-semibold text-hitam-batak mb-4">
                          {quizMode === "latin"
                            ? "Apa huruf Latin untuk aksara ini?"
                            : "Apa aksara Batak untuk huruf ini?"}
                        </h3>
                        <div className="w-32 h-32 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-merah-ulos to-coklat-kayu flex items-center justify-center">
                          <span
                            className="text-6xl font-bold text-putih-tenun"
                            style={{
                              fontFamily:
                                quizMode === "batak" ? "inherit" : "monospace",
                            }}
                          >
                            {currentQuestion.batak}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        {currentQuestion.options.map((option, index) => (
                          <motion.button
                            key={option}
                            onClick={() => handleAnswer(option)}
                            disabled={isAnswered}
                            className={cn(
                              "p-4 rounded-lg border-2 text-lg font-semibold transition-all duration-200",
                              !isAnswered && "hover:scale-105 cursor-pointer",
                              isAnswered &&
                                option === currentQuestion.correct &&
                                "border-green-500 bg-green-50 text-green-700",
                              isAnswered &&
                                option === selectedAnswer &&
                                option !== currentQuestion.correct &&
                                "border-red-500 bg-red-50 text-red-700",
                              !isAnswered &&
                                "border-abu-netral bg-putih-tenun text-hitam-batak hover:border-emas-ornamen",
                              isAnswered &&
                                option !== selectedAnswer &&
                                option !== currentQuestion.correct &&
                                "border-abu-netral bg-abu-netral/30 text-coklat-kayu"
                            )}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={!isAnswered ? { scale: 1.02 } : {}}
                            whileTap={!isAnswered ? { scale: 0.98 } : {}}
                          >
                            <div className="flex items-center justify-center space-x-2">
                              {isAnswered &&
                                option === currentQuestion.correct && (
                                  <CheckCircle className="h-6 w-6 text-green-500" />
                                )}
                              {isAnswered &&
                                option === selectedAnswer &&
                                option !== currentQuestion.correct && (
                                  <XCircle className="h-6 w-6 text-red-500" />
                                )}
                              <span
                                style={{
                                  fontFamily:
                                    quizMode === "latin"
                                      ? "inherit"
                                      : "monospace",
                                }}
                              >
                                {option}
                              </span>
                            </div>
                          </motion.button>
                        ))}
                      </div>

                      {showResult && (
                        <motion.div
                          className="mt-6 text-center"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <div
                            className={cn(
                              "inline-flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-semibold",
                              selectedAnswer === currentQuestion.correct
                                ? "bg-green-100 text-green-700"
                                : "bg-red-100 text-red-700"
                            )}
                          >
                            {selectedAnswer === currentQuestion.correct ? (
                              <>
                                <CheckCircle className="h-4 w-4" />
                                <span>Benar! Bagus sekali!</span>
                              </>
                            ) : (
                              <>
                                <XCircle className="h-4 w-4" />
                                <span>
                                  Jawaban yang benar: {currentQuestion.correct}
                                </span>
                              </>
                            )}
                          </div>

                          <Button
                            onClick={nextQuestion}
                            className="mt-4"
                            size="lg"
                          >
                            Soal Berikutnya
                          </Button>
                        </motion.div>
                      )}
                    </Card>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Achievement Section */}
              {totalQuestions > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <Card className="p-6">
                    <h3 className="text-lg font-semibold text-hitam-batak mb-4 flex items-center">
                      <Trophy className="h-5 w-5 mr-2 text-emas-ornamen" />
                      Pencapaian
                    </h3>
                    <div className="flex space-x-4">
                      {accuracy >= 80 && (
                        <div className="flex items-center space-x-2 text-emas-ornamen">
                          <Star className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            Ahli Aksara
                          </span>
                        </div>
                      )}
                      {totalQuestions >= 10 && (
                        <div className="flex items-center space-x-2 text-hijau-toba">
                          <Star className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            Tekun Berlatih
                          </span>
                        </div>
                      )}
                      {score >= 5 && (
                        <div className="flex items-center space-x-2 text-merah-ulos">
                          <Star className="h-4 w-4" />
                          <span className="text-sm font-medium">
                            Pembelajar Handal
                          </span>
                        </div>
                      )}
                    </div>
                  </Card>
                </motion.div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Practice;
