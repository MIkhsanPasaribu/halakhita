// components/layout/Header.tsx - Main Header Component

'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen, Palette } from 'lucide-react';
import { useAppStore } from '@/stores/useAppStore';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const { sidebarOpen, setSidebarOpen, currentView, setCurrentView } = useAppStore();

  const navigationItems = [
    { id: 'home', label: 'Beranda', icon: null },
    { id: 'learning', label: 'Pembelajaran', icon: BookOpen },
    { id: 'converter', label: 'Konverter', icon: null },
    { id: 'practice', label: 'Latihan', icon: null },
    { id: 'gallery', label: 'Galeri', icon: Palette }
  ] as const;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-abu-netral bg-putih-tenun/95 backdrop-blur supports-[backdrop-filter]:bg-putih-tenun/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo and Brand */}
        <motion.div 
          className="flex items-center space-x-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-merah-ulos to-coklat-kayu">
            <span className="text-lg font-bold text-putih-tenun">ᯂ</span>
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-hitam-batak">HalakHita</h1>
            <span className="text-xs text-coklat-kayu">Menulis Aksara, Menjaga Warisan</span>
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              onClick={() => setCurrentView(item.id as any)}
              className={cn(
                'flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors',
                currentView === item.id
                  ? 'bg-merah-ulos text-putih-tenun'
                  : 'text-hitam-batak hover:bg-abu-netral hover:text-merah-ulos'
              )}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.icon && <item.icon className="h-4 w-4" />}
              <span>{item.label}</span>
            </motion.button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {sidebarOpen && (
        <motion.nav
          className="md:hidden border-t border-abu-netral bg-putih-tenun"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container mx-auto px-4 py-2">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id as any);
                  setSidebarOpen(false);
                }}
                className={cn(
                  'flex w-full items-center space-x-3 px-3 py-3 rounded-md text-left transition-colors',
                  currentView === item.id
                    ? 'bg-merah-ulos text-putih-tenun'
                    : 'text-hitam-batak hover:bg-abu-netral'
                )}
              >
                {item.icon && <item.icon className="h-5 w-5" />}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
