"use client";

import Image from "next/image";
import LogoImage from "@/assets/logo-not-bg.png"
export default function Header() {
    return (
        <header className="fixed  top-[50px] left-0 right-0 z-50 flex justify-center">
            <nav className=" flex justify-between bg-green rounded-full pr-[50px] pl-[50px] w-[70%]    ">
            <div className="container-img-logo flex flex-row   ">
                <div className="flex items-center">
                    <Image
                        src={LogoImage}
                        alt="Perfect Date Logo"
                        width={70}
                        height={70}
                        priority
                    />
                </div>
            </div>
                <ul className="flex items-center space-x-4">
                    <li>
                        <a href="#" className="text-blue hover:text-white text-[15px] ">Trang chủ</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue hover:text-white text-[15px]">Khám phá</a>
                    </li>
                    <li>
                        <a href="#" className="text-blue hover:text-white text-[15px]">Liên hệ</a>
                    </li>
                </ul>
            <div className="flex items-center">
               <button className="border px-4 py-2 rounded-full">Đăng nhập</button>
            </div>
        </nav>
        </header>
    );
}