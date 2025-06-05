import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HalakHita - Menulis Aksara, Menjaga Warisan",
  description:
    "Platform pembelajaran aksara Batak yang interaktif dan modern. Lestarikan budaya leluhur dengan teknologi masa kini.",
  keywords: "aksara batak, pembelajaran, budaya, warisan, indonesia",
  authors: [{ name: "HalakHita Team" }],
  openGraph: {
    title: "HalakHita - Menulis Aksara, Menjaga Warisan",
    description:
      "Platform pembelajaran aksara Batak yang interaktif dan modern",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
