import { useState, useEffect, useRef } from "react";

interface DropdownProps {
  options: string[];
  title: string;
  onChange: (value: string) => void; // ✅ Định nghĩa kiểu đúng
}

export default function Dropdown({ options, title, onChange }: DropdownProps) {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // ✅ Đóng dropdown khi click bên ngoài
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Nút dropdown */}
      <button
        className="bg-white text-gray-700 px-8 py-2 border border-gray-300 rounded-md shadow-sm flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || title}
        <span className="ml-2">▼</span> {/* ✅ Mũi tên xuống */}
      </button>

      {/* Danh sách dropdown */}
      {isOpen && (
        <div className="absolute left-0 mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-lg bg-white max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => {
                setSelectedOption(option);
                setIsOpen(false);
                onChange(option); // ✅ Gửi giá trị về ExplorePage
              }}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
