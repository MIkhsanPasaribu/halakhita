// components/features/Learning.tsx - Learning Module Component

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2 } from "lucide-react";
import { batakCharacters } from "@/data/batakCharacters";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const Learning: React.FC = () => {
  const [selectedCharacter, setSelectedCharacter] = useState(
    batakCharacters[0]
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = (character: (typeof batakCharacters)[0]) => {
    // Placeholder for audio functionality
    setIsPlaying(true);
    setTimeout(() => setIsPlaying(false), 1000);
    console.log(
      `Playing audio for: ${character.latinChar} - ${character.pronunciation}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-putih-tenun to-abu-netral">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-hitam-batak mb-4">
            Pembelajaran Aksara Batak
          </h1>
          <p className="text-lg text-coklat-kayu max-w-2xl mx-auto">
            Pelajari aksara Batak dengan mudah melalui panduan interaktif, dari
            sejarah hingga cara penulisan yang benar.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Character Grid */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold text-hitam-batak mb-6">
                Tabel Aksara Batak
              </h2>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-3">
                {batakCharacters.map((character, index) => (
                  <motion.button
                    key={character.id}
                    onClick={() => setSelectedCharacter(character)}
                    className={cn(
                      "aspect-square rounded-lg border-2 flex flex-col items-center justify-center p-2 transition-all duration-200",
                      selectedCharacter.id === character.id
                        ? "border-merah-ulos bg-merah-ulos text-putih-tenun shadow-lg"
                        : "border-abu-netral bg-putih-tenun text-hitam-batak hover:border-emas-ornamen hover:shadow-md"
                    )}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {" "}
                    <span className="text-2xl font-bold mb-1">
                      {character.batakChar}
                    </span>
                    <span className="text-xs">{character.latinChar}</span>
                  </motion.button>
                ))}
              </div>
            </Card>
          </div>

          {/* Character Detail */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="text-center mb-6">
                <motion.div
                  className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-merah-ulos to-coklat-kayu flex items-center justify-center"
                  key={selectedCharacter.id}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {" "}
                  <span className="text-6xl font-bold text-putih-tenun">
                    {selectedCharacter.batakChar}
                  </span>
                </motion.div>{" "}
                <h3 className="text-2xl font-bold text-hitam-batak">
                  {selectedCharacter.latinChar.toUpperCase()}
                </h3>
                <p className="text-lg text-coklat-kayu">
                  /{selectedCharacter.pronunciation}/
                </p>
              </div>

              <Button
                onClick={() => playAudio(selectedCharacter)}
                disabled={isPlaying}
                className="w-full mb-4"
                variant="default"
              >
                {isPlaying ? (
                  <Pause className="w-4 h-4 mr-2" />
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {isPlaying ? "Memutar..." : "Dengar Pelafalan"}
                <Volume2 className="w-4 h-4 ml-2" />
              </Button>

              {selectedCharacter.strokeOrder && (
                <div>
                  <h4 className="font-semibold text-hitam-batak mb-2">
                    Urutan Goresan:
                  </h4>
                  <p className="text-sm text-coklat-kayu">
                    {selectedCharacter.strokeOrder}
                  </p>
                </div>
              )}
            </Card>

            {/* History Section */}
            <Card className="p-6">
              <h3 className="text-xl font-semibold text-hitam-batak mb-4">
                Sejarah Aksara Batak
              </h3>
              <div className="text-sm text-coklat-kayu space-y-3">
                <p>
                  Aksara Batak adalah sistem tulisan tradisional yang digunakan
                  oleh suku Batak di Sumatera Utara.
                </p>
                <p>
                  Aksara ini memiliki 19 huruf dasar dan telah digunakan selama
                  berabad-abad untuk menulis pustaha (manuskrip tradisional).
                </p>
                <p>
                  Setiap aksara memiliki makna filosofis yang mendalam dalam
                  budaya Batak.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learning;
