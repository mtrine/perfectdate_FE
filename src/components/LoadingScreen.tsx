"use client"; // Bắt buộc để chạy useState trên client

import { useState, useEffect } from "react";
import Heart from "@/assets/images/heart-loading.png";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000); // Thời gian loading
  }, []);

  if (!loading) return null; // Ẩn khi load xong

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-cream">
      <div className="relative max-w-[100px] h-auto animate-heartbeat">
        <img src={Heart.src} alt="Heart" className="w-full h-full" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-700 animate-pulse">Chờ một chút nhé...</h3>
    </div>
  );
}
