"use client";
import Image from "next/image";
import CloseSlideBar from "@/assets/images/close_icon.svg";
import Link from "next/link";
import "@/styles/sliderBar.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

interface SlideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function SlideBar({ isOpen, setIsOpen }: SlideBarProps) {
  const pathname = usePathname();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <>
      {/* Overlay mờ khi mở slidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      
      {/* Slidebar */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-gray shadow-lg z-50 transform px-[2%] py-[2%] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Nút đóng */}
        <Image
          src={CloseSlideBar}
          alt="Close SlideBar"
          className="w-[20px] h-[20px] ml-auto cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu */}
        <ul className="p-2 ">
          {[
            { path: "/home", label: "Trang chủ" },
            { path: "/explore", label: "Khám phá" },
            { path: "/contact", label: "Liên hệ" }
          ].map((item) => (
            <li 
              key={item.path} 
              className="menu-item"
              onMouseEnter={() => setHoveredItem(item.path)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`flex items-center justify-center w-full flex-nowrap `}
              >
                <div 
                  className="line-indicator" 
                  style={{
                    width: hoveredItem === item.path || (pathname === item.path && hoveredItem === null) ? '2rem' : '0',
                    height: '2px',
                    backgroundColor: '#F5F5DC',
                    transition: 'width 0.3s ease',
                    marginRight: '5px'
                  }}
                />
                <Link href={item.path} className="ml-2 whitespace-nowrap">
                  {item.label}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}