"use client";

import Image from "next/image";
import LogoImage from "@/assets/logo-not-bg.png"
export default function Header() {
    return (
        <header className="h-24">
            <nav className="fixed top-[10px] left-0 right-0 z-50 flex justify-center ">
               <div className="flex justify-between bg-green rounded-full pr-[50px] pl-[50px] w-[70%]  items-center shadow-md ">
               <div className="flex items-center">
                    <Image
                        src={LogoImage}
                        alt="Perfect Date Logo"
                       className="w-[20px] h-auto sm:w-[80px]"
                        priority
                    />
                </div>
                <ul className="flex items-center space-x-4">
                    <li><a href="#" className="text-blue hover:text-white">Trang chủ</a></li>
                    <li><a href="#" className="text-blue hover:text-white">Khám phá</a></li>
                    <li><a href="#" className="text-blue hover:text-white">Liên hệ</a></li>
                </ul>
                <button className="border px-4 py-2 rounded-full">Đăng nhập</button>
               </div>
            </nav>
        </header>
    );
}
