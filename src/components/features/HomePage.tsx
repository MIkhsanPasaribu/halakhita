// components/features/HomePage.tsx - Landing Page Component

"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  RefreshCw,
  PenTool,
  Image,
  Users,
  Award,
  Clock,
} from "lucide-react";
import { useAppStore } from "@/stores/useAppStore";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";

const HomePage: React.FC = () => {
  const { setCurrentView } = useAppStore();

  const features = [
    {
      icon: BookOpen,
      title: "Pembelajaran Dasar",
      description:
        "Pelajari sejarah dan struktur aksara Batak dengan panduan lengkap",
      color: "from-merah-ulos to-coklat-kayu",
    },
    {
      icon: RefreshCw,
      title: "Konverter Aksara",
      description:
        "Konversi teks Latin ke Aksara Batak dan sebaliknya dengan mudah",
      color: "from-emas-ornamen to-coklat-kayu",
    },
    {
      icon: PenTool,
      title: "Latihan Menulis",
      description:
        "Berlatih menulis aksara dengan canvas interaktif dan pelacakan progress",
      color: "from-hijau-toba to-coklat-kayu",
    },
    {
      icon: Image,
      title: "Galeri & Referensi",
      description:
        "Jelajahi koleksi manuskrip dan contoh penggunaan aksara Batak",
      color: "from-coklat-kayu to-merah-ulos",
    },
  ];

  const stats = [
    { icon: Users, value: "1000+", label: "Pengguna Aktif" },
    { icon: BookOpen, value: "18", label: "Aksara Dasar" },
    { icon: Award, value: "95%", label: "Tingkat Kepuasan" },
    { icon: Clock, value: "24/7", label: "Akses Kapan Saja" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-putih-tenun to-abu-netral">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="mb-6 text-4xl font-bold text-hitam-batak md:text-6xl">
              <span className="bg-gradient-to-r from-merah-ulos to-coklat-kayu bg-clip-text text-transparent">
                HalakHita
              </span>
            </h1>
            <p className="mx-auto mb-4 max-w-2xl text-xl text-coklat-kayu md:text-2xl">
              Menulis Aksara, Menjaga Warisan
            </p>
            <p className="mx-auto max-w-3xl text-lg text-hitam-batak/80">
              Platform pembelajaran aksara Batak yang interaktif dan modern.
              Lestarikan budaya leluhur dengan teknologi masa kini.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-16 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0"
          >
            <Button
              variant="batak"
              size="lg"
              onClick={() => setCurrentView("learning")}
              className="group w-full sm:w-auto"
            >
              Mulai Belajar
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => setCurrentView("converter")}
              className="w-full sm:w-auto"
            >
              Coba Konverter
            </Button>
          </motion.div>

          {/* Aksara Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mb-20"
          >
            <div className="mx-auto flex max-w-4xl items-center justify-center space-x-4 rounded-xl bg-gradient-to-r from-merah-ulos/10 to-coklat-kayu/10 p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="mb-2 text-6xl font-bold text-merah-ulos md:text-8xl">
                  ᯂᯝᯂᯅ ᯂᯤᯖ
                </div>
                <p className="text-sm text-coklat-kayu">
                  HalakHita dalam Aksara Batak
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-merah-ulos/5"></div>
          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-emas-ornamen/5"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <h2 className="mb-4 text-3xl font-bold text-hitam-batak md:text-4xl">
              Fitur Lengkap untuk Belajar Aksara Batak
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-coklat-kayu">
              Dari pembelajaran dasar hingga latihan menulis, semua yang Anda
              butuhkan dalam satu platform
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}
                    >
                      <feature.icon className="h-8 w-8 text-putih-tenun" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-merah-ulos to-coklat-kayu px-4 py-20">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-putih-tenun"
              >
                <stat.icon className="mx-auto mb-4 h-12 w-12" />
                <div className="mb-2 text-4xl font-bold">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-6 text-3xl font-bold text-hitam-batak md:text-4xl">
              Siap Memulai Perjalanan Belajar?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-coklat-kayu">
              Bergabunglah dengan ribuan orang yang telah melestarikan aksara
              Batak melalui HalakHita
            </p>
            <Button
              variant="batak"
              size="lg"
              onClick={() => setCurrentView("learning")}
              className="group"
            >
              Mulai Sekarang
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
