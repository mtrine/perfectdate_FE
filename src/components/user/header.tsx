"use client";
import Image from "next/image";
import AccountIcon from "@/assets/account_icon.svg";
import MenuIcon from "@/assets/menu_icon.svg";
import "@/styles/header.css";


export default function Header() {
    return (
        <header className="bg-cream border-b-2 border-darkRed fixed top-0 left-0 right-0 z-10">
            <nav className="flex justify-between items-center px-4 py-2 md:px-8 lg:px-12">
                <div className="flex-1 text-center">
                    <h1 className=" font-playfair-bold text-darkRed">PerfectDate</h1>
                </div>
                <div className="flex gap-1 ml-auto">
                <Image
                        src={AccountIcon}
                        alt="Logo"
                        width={20}
                        height={20}
                        className="lg:w-[40px] lg:h-[40px] "
                    />
                    <Image
                        src={MenuIcon}
                        alt="Logo"
                        width={20}
                        height={20}
                        className="lg:w-[40px] lg:h-[40px] "
                    />
                </div>
            </nav>
        </header>
    );
}

