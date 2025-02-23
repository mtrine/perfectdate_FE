"use client";
import Image from "next/image";
import CloseSlideBar from "@/assets/images/close_icon.svg";
import Link from "next/link";
import "@/styles/sliderBar.css";
import { usePathname } from "next/navigation";

interface SlideBarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function SlideBar({ isOpen, setIsOpen }: SlideBarProps) {
  const pathname = usePathname();

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
        className={`fixed top-0 right-0 w-64 h-full bg-gray shadow-lg z-50 transform ${
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
        <ul className="mx-auto p-2">
          <li className="menu-item">
            <div
              className={`flex items-center w-full flex-nowrap ${
                pathname === "/home" ? "active" : ""
              }`}
            >
              <hr className="w-[20px] sm:w-[30px] md:w-[40px] lg:w-[50px] border-t-2 border-cream" />
              <Link href="/home" className="ml-2 whitespace-nowrap">
                Trang chủ
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div
              className={`flex items-center w-full flex-nowrap ${
                pathname === "/discover" ? "active" : ""
              }`}
            >
              <hr className="w-[20px] sm:w-[30px] md:w-[40px] lg:w-[50px] border-t-2 border-cream" />
              <Link href="/discover" className="ml-2 whitespace-nowrap">
                Khám phá
              </Link>
            </div>
          </li>
          <li className="menu-item">
            <div
              className={`flex items-center w-full flex-nowrap ${
                pathname === "/contact" ? "active" : ""
              }`}
            >
              <hr className="w-[20px] sm:w-[30px] md:w-[40px] lg:w-[50px] border-t-2 border-cream" />
              <Link href="/contact" className="ml-2 whitespace-nowrap">
                Liên hệ
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
