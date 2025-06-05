/* eslint-disable @typescript-eslint/no-unused-vars */
// components/features/DrawingCanvas.tsx - Canvas for Writing Practice

"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eraser, RotateCcw, Download, Palette } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

interface DrawingCanvasProps {
  width?: number;
  height?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

const DrawingCanvas: React.FC<DrawingCanvasProps> = ({
  width = 600,
  height = 400,
  strokeColor = "#8B1A1A",
  strokeWidth = 3,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentStrokeColor, setCurrentStrokeColor] = useState(strokeColor);
  const [currentStrokeWidth, setCurrentStrokeWidth] = useState(strokeWidth);
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);

  const colors = [
    { name: "Merah Ulos", value: "#8B1A1A" },
    { name: "Hitam Batak", value: "#1A1A1A" },
    { name: "Coklat Kayu", value: "#6B4423" },
    { name: "Emas Ornamen", value: "#D4A574" },
    { name: "Hijau Toba", value: "#2C5F2D" },
  ];

  const strokeWidths = [2, 3, 5, 8, 12];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = width;
    canvas.height = height;

    // Configure context
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.fillStyle = "#FAFAF8";
    ctx.fillRect(0, 0, width, height);

    setContext(ctx);
  }, [width, height]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!context) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = currentStrokeColor;
    context.lineWidth = currentStrokeWidth;
    setIsDrawing(true);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing || !context) return;

    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    context.lineTo(x, y);
    context.stroke();
  };

  const stopDrawing = () => {
    if (context) {
      context.closePath();
    }
    setIsDrawing(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || !context) return;

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    context.beginPath();
    context.moveTo(x, y);
    context.strokeStyle = currentStrokeColor;
    context.lineWidth = currentStrokeWidth;
    setIsDrawing(true);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    if (!isDrawing || !context) return;

    const touch = e.touches[0];
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;

    context.lineTo(x, y);
    context.stroke();
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLCanvasElement>) => {
    e.preventDefault();
    stopDrawing();
  };

  const clearCanvas = () => {
    if (!context || !canvasRef.current) return;

    context.fillStyle = "#FAFAF8";
    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  };

  const downloadCanvas = () => {
    if (!canvasRef.current) return;

    const link = document.createElement("a");
    link.download = "aksara-batak-practice.png";
    link.href = canvasRef.current.toDataURL();
    link.click();
  };

  return (
    <div className="space-y-6">
      {/* Canvas */}
      <Card className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-lg font-semibold text-hitam-batak">
            Latihan Menulis Aksara
          </h3>
          <p className="text-sm text-coklat-kayu">
            Gunakan mouse atau sentuhan untuk berlatih menulis aksara Batak
          </p>
        </div>

        <div className="flex justify-center">
          <canvas
            ref={canvasRef}
            className="border-2 border-abu-netral rounded-lg cursor-crosshair touch-none"
            style={{ maxWidth: "100%", height: "auto" }}
            onMouseDown={startDrawing}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          />
        </div>
      </Card>

      {/* Controls */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Colors */}
        <Card className="p-4">
          <h4 className="font-semibold text-hitam-batak mb-3 flex items-center">
            <Palette className="h-4 w-4 mr-2" />
            Warna
          </h4>
          <div className="grid grid-cols-5 gap-2">
            {colors.map((color) => (
              <button
                key={color.value}
                onClick={() => setCurrentStrokeColor(color.value)}
                className={`w-8 h-8 rounded-full border-2 transition-all ${
                  currentStrokeColor === color.value
                    ? "border-hitam-batak scale-110"
                    : "border-abu-netral hover:scale-105"
                }`}
                style={{ backgroundColor: color.value }}
                title={color.name}
              />
            ))}
          </div>
        </Card>

        {/* Stroke Width */}
        <Card className="p-4">
          <h4 className="font-semibold text-hitam-batak mb-3">
            Ketebalan Garis
          </h4>
          <div className="space-y-2">
            {strokeWidths.map((width) => (
              <button
                key={width}
                onClick={() => setCurrentStrokeWidth(width)}
                className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors ${
                  currentStrokeWidth === width
                    ? "bg-merah-ulos text-putih-tenun"
                    : "hover:bg-abu-netral"
                }`}
              >
                <div
                  className="rounded-full bg-current"
                  style={{ width: width * 2, height: width * 2 }}
                />
                <span className="text-sm">{width}px</span>
              </button>
            ))}
          </div>
        </Card>

        {/* Actions */}
        <Card className="p-4">
          <h4 className="font-semibold text-hitam-batak mb-3">Aksi</h4>
          <div className="space-y-2">
            <Button variant="outline" onClick={clearCanvas} className="w-full">
              <RotateCcw className="h-4 w-4 mr-2" />
              Bersihkan
            </Button>
            <Button
              variant="default"
              onClick={downloadCanvas}
              className="w-full"
            >
              <Download className="h-4 w-4 mr-2" />
              Unduh
            </Button>
          </div>
        </Card>
      </div>

      {/* Practice Tips */}
      <Card className="p-6">
        <h4 className="font-semibold text-hitam-batak mb-4">Tips Berlatih</h4>
        <div className="grid md:grid-cols-2 gap-4 text-sm text-coklat-kayu">
          <div>
            <h5 className="font-medium text-hitam-batak mb-2">
              Teknik Menulis
            </h5>
            <ul className="space-y-1">
              <li>• Mulai dari goresan dasar</li>
              <li>• Perhatikan proporsi aksara</li>
              <li>• Jaga konsistensi ukuran</li>
              <li>• Berlatih secara teratur</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-hitam-batak mb-2">
              Urutan Goresan
            </h5>
            <ul className="space-y-1">
              <li>• Mulai dari atas ke bawah</li>
              <li>• Kiri ke kanan</li>
              <li>• Garis vertikal dulu, lalu horizontal</li>
              <li>• Lengkung dan titik terakhir</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DrawingCanvas;
