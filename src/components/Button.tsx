"use client";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  typeButton: "primary" | "secondary";
  color?: "darkRed" | "cream";
  type?: "button" | "submit" | "reset";
}

export default function Button({ text, onClick, typeButton, type, color="darkRed" }: ButtonProps) {
  return (
    <button
      className={`
        border-[1px] font-playfair-regular transition-all duration-300 ease-in-out
        px-5 py-2  sm:px-7 sm:py-3
        ${
          typeButton === "primary"
            ? "rounded-[100%]"
            : "rounded-[10px]"
        }
        ${
          color === "darkRed"
            ? "border-darkRed text-darkRed hover:bg-darkRed hover:text-white"
            : "border-cream text-cream hover:bg-cream hover:text-darkRed"
        }
      `}
      onClick={onClick}
      type={type}
    >
      {text}
    </button>
  );
}
