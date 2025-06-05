// components/features/Gallery.tsx - Gallery & References Component

"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Eye, BookOpen, Scroll, Home } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: "manuscript" | "daily" | "traditional";
  imageUrl: string;
  content: string;
}

interface FontResource {
  id: string;
  name: string;
  description: string;
  format: string;
  size: string;
}

const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Sample gallery data (in real app, this would come from a database)
  const galleryItems: GalleryItem[] = [
    {
      id: "1",
      title: "Pustaha Laklak",
      description: "Manuskrip tradisional berisi ramalan dan ilmu kebatinan",
      category: "manuscript",
      imageUrl: "/api/placeholder/300/200",
      content:
        "Pustaha Laklak adalah salah satu manuskrip penting dalam tradisi Batak yang berisi berbagai ramalan, ilmu kebatinan, dan pengetahuan spiritual. Ditulis dengan aksara Batak pada media kulit kayu atau bambu.",
    },
    {
      id: "2",
      title: "Surat Batak Kuno",
      description: "Surat pribadi dengan aksara Batak klasik",
      category: "daily",
      imageUrl: "/api/placeholder/300/200",
      content:
        "Contoh penggunaan aksara Batak dalam kehidupan sehari-hari untuk menulis surat pribadi dan komunikasi antar keluarga.",
    },
    {
      id: "3",
      title: "Ornamen Rumah Adat",
      description: "Aksara Batak pada ukiran rumah tradisional",
      category: "traditional",
      imageUrl: "/api/placeholder/300/200",
      content:
        "Aksara Batak sering digunakan sebagai ornamen pada rumah adat Batak, mengandung makna filosofis dan spiritual.",
    },
    {
      id: "4",
      title: "Buku Pelajaran Modern",
      description: "Implementasi aksara Batak dalam pendidikan",
      category: "daily",
      imageUrl: "/api/placeholder/300/200",
      content:
        "Penggunaan aksara Batak dalam materi pendidikan modern untuk melestarikan budaya.",
    },
    {
      id: "5",
      title: "Prasasti Batu",
      description: "Prasasti kuno dengan aksara Batak",
      category: "manuscript",
      imageUrl: "/api/placeholder/300/200",
      content:
        "Prasasti kuno yang menunjukkan penggunaan aksara Batak dalam mencatat sejarah dan peristiwa penting.",
    },
    {
      id: "6",
      title: "Ulos dengan Aksara",
      description: "Tenun tradisional dengan motif aksara Batak",
      category: "traditional",
      imageUrl: "/api/placeholder/300/200",
      content:
        "Ulos tradisional yang dihiasi dengan motif aksara Batak sebagai bagian dari warisan budaya.",
    },
  ];

  const fontResources: FontResource[] = [
    {
      id: "1",
      name: "Batak Script Unicode",
      description:
        "Font standar untuk aksara Batak dengan dukungan Unicode penuh",
      format: "TTF",
      size: "2.1 MB",
    },
    {
      id: "2",
      name: "Traditional Batak",
      description: "Font dengan gaya tradisional untuk dokumen formal",
      format: "OTF",
      size: "1.8 MB",
    },
    {
      id: "3",
      name: "Batak Modern",
      description: "Font modern dengan keterbacaan optimal untuk digital",
      format: "WOFF2",
      size: "1.2 MB",
    },
  ];

  const categories = [
    { id: "all", label: "Semua", icon: BookOpen },
    { id: "manuscript", label: "Manuskrip", icon: Scroll },
    { id: "daily", label: "Kehidupan Sehari-hari", icon: Eye },
    { id: "traditional", label: "Tradisional", icon: Home },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleDownloadFont = (font: FontResource) => {
    // In a real app, this would trigger actual file download
    alert(`Mengunduh ${font.name}...`);
  };

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
            Galeri & Referensi
          </h1>
          <p className="text-lg text-coklat-kayu max-w-2xl mx-auto">
            Jelajahi koleksi manuskrip, prasasti, dan implementasi aksara Batak
            dalam kehidupan sehari-hari dan budaya tradisional.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <Card className="overflow-hidden h-full">
                <div className="aspect-video bg-gradient-to-br from-emas-ornamen/20 to-coklat-kayu/20 flex items-center justify-center">
                  <div className="text-6xl text-coklat-kayu/30">ᯂᯖᯗ</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-hitam-batak mb-2">
                    {item.title}
                  </h3>
                  <p className="text-coklat-kayu mb-4">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span
                      className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium",
                        item.category === "manuscript" &&
                          "bg-merah-ulos/10 text-merah-ulos",
                        item.category === "daily" &&
                          "bg-hijau-toba/10 text-hijau-toba",
                        item.category === "traditional" &&
                          "bg-emas-ornamen/10 text-emas-ornamen"
                      )}
                    >
                      {
                        categories.find((cat) => cat.id === item.category)
                          ?.label
                      }
                    </span>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Font Resources */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-hitam-batak mb-6">
              Unduh Font Aksara Batak
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {fontResources.map((font) => (
                <div
                  key={font.id}
                  className="border border-abu-netral rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-semibold text-hitam-batak mb-2">
                    {font.name}
                  </h3>
                  <p className="text-coklat-kayu text-sm mb-4">
                    {font.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-coklat-kayu mb-4">
                    <span>Format: {font.format}</span>
                    <span>Ukuran: {font.size}</span>
                  </div>
                  <Button
                    onClick={() => handleDownloadFont(font)}
                    className="w-full"
                    size="sm"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Unduh
                  </Button>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Usage Guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Card className="p-6">
            <h2 className="text-2xl font-semibold text-hitam-batak mb-6">
              Panduan Penggunaan
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-coklat-kayu mb-4">
                  Dalam Dokumen Digital
                </h3>
                <ul className="space-y-2 text-sm text-hitam-batak">
                  <li>• Gunakan font Unicode untuk kompatibilitas maksimal</li>
                  <li>• Pastikan ukuran font minimal 14px untuk keterbacaan</li>
                  <li>• Gunakan kontras warna yang cukup</li>
                  <li>• Sediakan transliterasi Latin jika diperlukan</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coklat-kayu mb-4">
                  Dalam Desain Grafis
                </h3>
                <ul className="space-y-2 text-sm text-hitam-batak">
                  <li>• Pertahankan proporsi tradisional aksara</li>
                  <li>• Hindari distorsi yang berlebihan</li>
                  <li>• Gunakan sebagai elemen dekoratif dengan bijak</li>
                  <li>• Pahami makna aksara sebelum menggunakan</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Modal for Gallery Item Detail */}
        {selectedItem && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              className="bg-putih-tenun rounded-lg max-w-2xl w-full max-h-[80vh] overflow-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="aspect-video bg-gradient-to-br from-emas-ornamen/20 to-coklat-kayu/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-8xl text-coklat-kayu/30">ᯂᯖᯗ</div>
                </div>
                <h2 className="text-2xl font-bold text-hitam-batak mb-4">
                  {selectedItem.title}
                </h2>
                <p className="text-coklat-kayu mb-6">{selectedItem.content}</p>
                <div className="flex justify-end">
                  <Button onClick={() => setSelectedItem(null)}>Tutup</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
