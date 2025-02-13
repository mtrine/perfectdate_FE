"use client";

import Image from "next/image";
import LogoImage from "@/assets/logo-not-bg.png";

export default function Footer() {
    return (
        <footer className="bg-blue py-6">
            <div className="container mx-auto px-4 sm:px-10">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
                    
                    {/* Logo */}
                    <Image
                        src={LogoImage}
                        alt="Perfect Date Logo"
                        className="w-[50px] sm:w-[100px] md:w-[150px] h-auto"
                    />
                    
                    {/* Thông tin liên hệ */}
                    <ul className="text-white space-y-2 text-center sm:text-left font-poppins-light">
                        <li className=" ">Hỗ trợ khách hàng: support@perfectdate.com</li>
                        <li>Số điện thoại: 0123456789</li>
                        <li>Địa chỉ: 02 Võ Oanh, TP.HCM</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
