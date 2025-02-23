"use client";

interface ButtonProps {
  text: string;
  onClick: () => void;
  type: "primary" | "secondary";
}

export default function Button({ text, onClick, type }: ButtonProps) {
  return (
    <button
      className={`
        border-2 text-darkRed border-darkRed font-playfair-regular transition-all duration-300 ease-in-out
        px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-5
        ${
          type === "primary"
            ? "rounded-[100%] hover:bg-darkRed hover:text-white"
            : "rounded-[10px] hover:bg-darkRed hover:text-white"
        }
      `}
      onClick={()=>onClick()}
    >
      {text}
    </button>
  );
}
