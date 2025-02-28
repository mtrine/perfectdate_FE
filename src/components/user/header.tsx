"use client";
import Image from "next/image";
import AccountIcon from "@/assets/images/account_icon.svg";
import MenuIcon from "@/assets/images/menu_icon.svg";
import "@/styles/header.css";
import SlideBar from "./SlideBar";
import { useEffect, useState } from "react";
import AccountBar from "./AccountBar";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
    
    useEffect(() => {
        const handleClickOutside = (event: any) => {
          const dropdown = document.querySelector(".account-dropdown");
          if (dropdown && !dropdown.contains(event.target)) {
            setIsAccountDropdownOpen(false);
          }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

    return (
    <header className="bg-cream border-b-2 border-darkRed fixed top-0 left-0 right-0 z-10 h-20"> {/* Cố định height với h-20 */}
      <nav className="flex justify-between items-center px-4 py-2 md:px-8 lg:px-12 h-full">
        <div className="flex-1 text-center">
          <h1 className="font-playfair-bold text-darkRed">PerfectDate</h1>
        </div>
        <div className="flex gap-1 ml-auto relative">
          <div className="relative">
            <Image
              src={AccountIcon}
              alt="Account"
              width={20}
              height={20}
              className="lg:w-[40px] lg:h-[40px] cursor-pointer"
              onClick={() => setIsAccountDropdownOpen(!isAccountDropdownOpen)}
            />
            {isAccountDropdownOpen && (
              <AccountBar />
            )}
          </div>
          <Image
            src={MenuIcon}
            alt="Menu"
            width={20}
            height={20}
            className="lg:w-[40px] lg:h-[40px] cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
      </nav>
      <SlideBar isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}