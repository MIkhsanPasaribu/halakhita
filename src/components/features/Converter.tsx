// components/features/Converter.tsx - Text Converter Component

"use client";

import React, { useState, useCallback, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowUpDown, Copy, RefreshCw } from "lucide-react";
import { batakCharacters } from "@/data/batakCharacters";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const Converter: React.FC = () => {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [isLatinToBatak, setIsLatinToBatak] = useState(true);
  // Create conversion mappings
  const latinToBatakMap = useMemo(
    () =>
      new Map(
        batakCharacters.map((char) => [
          char.latinChar.toLowerCase(),
          char.batakChar,
        ])
      ),
    []
  );

  const batakToLatinMap = useMemo(
    () =>
      new Map(batakCharacters.map((char) => [char.batakChar, char.latinChar])),
    []
  );

  const convertText = useCallback(
    (text: string, toBatak: boolean) => {
      if (!text) return "";

      if (toBatak) {
        // Convert Latin to Batak
        return text
          .toLowerCase()
          .split("")
          .map((char) => latinToBatakMap.get(char) || char)
          .join("");
      } else {
        // Convert Batak to Latin
        return text
          .split("")
          .map((char) => batakToLatinMap.get(char) || char)
          .join("");
      }
    },
    [latinToBatakMap, batakToLatinMap]
  );

  const handleInputChange = (text: string) => {
    setInputText(text);
    setOutputText(convertText(text, isLatinToBatak));
  };

  const toggleDirection = () => {
    setIsLatinToBatak(!isLatinToBatak);
    setInputText(outputText);
    setOutputText(inputText);
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      // You could add a toast notification here
      alert("Teks berhasil disalin!");
    } catch (err) {
      console.error("Gagal menyalin teks:", err);
    }
  };

  const clearAll = () => {
    setInputText("");
    setOutputText("");
  };

  const exampleTexts = isLatinToBatak
    ? ["horas", "batak", "halakhita", "asi ni roha"]
    : ["ᯂᯬᯒᯘ", "ᯅᯖᯂ", "ᯂᯞᯂᯄᯂᯤᯖ"];

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
            Konverter Aksara Batak
          </h1>
          <p className="text-lg text-coklat-kayu max-w-2xl mx-auto">
            Konversi teks antara huruf Latin dan Aksara Batak dengan mudah dan
            cepat.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Conversion Direction Indicator */}
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-4 bg-putih-tenun rounded-full px-6 py-3 shadow-lg border border-abu-netral">
              <span
                className={`font-semibold ${
                  isLatinToBatak ? "text-merah-ulos" : "text-coklat-kayu"
                }`}
              >
                {isLatinToBatak ? "Latin" : "Aksara Batak"}
              </span>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDirection}
                className="rounded-full"
              >
                <ArrowUpDown className="h-5 w-5" />
              </Button>
              <span
                className={`font-semibold ${
                  !isLatinToBatak ? "text-merah-ulos" : "text-coklat-kayu"
                }`}
              >
                {!isLatinToBatak ? "Latin" : "Aksara Batak"}
              </span>
            </div>
          </motion.div>

          {/* Converter Interface */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-hitam-batak">
                    {isLatinToBatak ? "Teks Latin" : "Aksara Batak"}
                  </h3>
                  <Button variant="ghost" size="sm" onClick={clearAll}>
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                <textarea
                  value={inputText}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder={`Masukkan teks ${
                    isLatinToBatak ? "Latin" : "Aksara Batak"
                  } di sini...`}
                  className="w-full h-40 p-4 border border-abu-netral rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-merah-ulos focus:border-transparent"
                  style={{
                    fontSize: isLatinToBatak ? "16px" : "24px",
                    fontFamily: isLatinToBatak ? "inherit" : "monospace",
                  }}
                />
              </Card>
            </motion.div>

            {/* Output Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="p-6 h-full">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-hitam-batak">
                    {!isLatinToBatak ? "Teks Latin" : "Aksara Batak"}
                  </h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={copyToClipboard}
                    disabled={!outputText}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div
                  className="w-full h-40 p-4 bg-abu-netral/30 border border-abu-netral rounded-lg overflow-auto"
                  style={{
                    fontSize: !isLatinToBatak ? "16px" : "24px",
                    fontFamily: !isLatinToBatak ? "inherit" : "monospace",
                  }}
                >
                  {outputText || (
                    <span className="text-coklat-kayu/60">
                      Hasil konversi akan muncul di sini...
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Example Texts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-hitam-batak mb-4">
                Contoh Teks
              </h3>
              <div className="flex flex-wrap gap-2">
                {exampleTexts.map((example, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleInputChange(example)}
                    className="text-sm"
                    style={{
                      fontFamily: isLatinToBatak ? "inherit" : "monospace",
                    }}
                  >
                    {example}
                  </Button>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Character Reference */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-hitam-batak mb-4">
                Referensi Aksara
              </h3>
              <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-3">
                {batakCharacters.map((char) => (
                  <div
                    key={char.id}
                    className="text-center p-2 rounded-lg border border-abu-netral bg-putih-tenun hover:bg-emas-ornamen/10 transition-colors cursor-pointer"
                    onClick={() =>
                      handleInputChange(
                        inputText +
                          (isLatinToBatak ? char.latinChar : char.batakChar)
                      )
                    }
                  >
                    <div className="text-2xl font-bold text-hitam-batak mb-1">
                      {char.batakChar}
                    </div>
                    <div className="text-xs text-coklat-kayu">
                      {char.latinChar}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Converter;
