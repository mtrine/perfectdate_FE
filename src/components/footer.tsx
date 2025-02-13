"use client";

import Image from "next/image";
import LogoImage from "@/assets/logo-not-bg.png"
import "../styles/footer.css";

export default function Footer() {
    return(
        <footer className="bg-blue">
            <div className="container mx-auto ">
                    <div className="flex flex-row justify-center items-center gap-6">
                        <Image
                            src={LogoImage}
                            alt="Perfect Date Logo"
                            className="w-[70px] sm:w-[150px] "
                        />
                        <ul className="text-white space-y-2">
                            <li>
                                Hỗ trợ khách hàng: support@perfectdate.com
                            </li>
                            <li>
                                Số điện thoại : 0123456789
                            </li>
                            <li>
                                Địa chỉ: 02 Võ Oanh, TP.HCM
                            </li>
                        </ul>
                    </div>
            </div>
        </footer>
    );
}
