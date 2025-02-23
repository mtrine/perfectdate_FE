"use client"
import { useState } from "react";

interface FeatureProps {
  text: string;
  hoverText?: string; // Thêm text khi hover (tùy chọn)
}

export default function Feature({ text, hoverText = "Đoạn text mới" }: FeatureProps) {
  const [displayText, setDisplayText] = useState(text);

  return (
    <div
      className="flex items-center justify-center border-2 border-darkRed rounded-[10px] px-6 py-6 
                 w-full h-20 sm:h-24 md:h-28 lg:h-32 xl:h-36 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 
                 text-darkRed hover:bg-lightRed hover:text-white transition-all duration-500 ease-in-out"
      onMouseEnter={() => setDisplayText(hoverText)}
      onMouseLeave={() => setDisplayText(text)}
    >
      <h3 className="text-center font-playfair-regular">{displayText}</h3>
    </div>
  );
}
