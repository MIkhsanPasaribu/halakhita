"use client";

import HomePage from "@/components/features/HomePage";
import Learning from "@/components/features/Learning";
import Converter from "@/components/features/Converter";
import Practice from "@/components/features/Practice";
import Gallery from "@/components/features/Gallery";
import { useAppStore } from "@/stores/useAppStore";

export default function Home() {
  const { currentView } = useAppStore();

  const renderCurrentView = () => {
    switch (currentView) {
      case "learning":
        return <Learning />;
      case "converter":
        return <Converter />;
      case "practice":
        return <Practice />;
      case "gallery":
        return <Gallery />;
      default:
        return <HomePage />;
    }
  };

  return renderCurrentView();
}
