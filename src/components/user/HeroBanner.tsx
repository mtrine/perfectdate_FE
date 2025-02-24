'use client';

import Image from "next/image";
import ImageBanner from "@/assets/images/banner.png";
import Button from "../Button";

export default function HeroBanner() {
    return (
        <div className="flex items-center justify-center ">
            <Image 
                src={ImageBanner} 
                alt="Hero Banner" 
                className="w-full max-w-[200px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[700px] h-auto"
            />

            <div>
                <ul className=" md:text-left w-full gap-2">
                    <li>
                        <h3 className="text-darkRed  md:text-left">
                            Khám phá những ý tưởng hay từ cộng đồng
                        </h3>
                    </li>
                    <li>
                        <h3 className="text-darkRed md:text-left">
                            Trợ lý AI sẵn sàng gợi ý cho bạn 
                        </h3>
                    </li>
                    <li>
                        <h3 className="text-darkRed md:text-left">
                            Gửi ngay cho nửa kia và tận hưởng khoảnh khắc tuyệt vời
                        </h3 >
                    </li>
                </ul>
                <Button 
                    text="Tạo kế hoạch ngay"
                    onClick={() => {}}
                    type="primary">
                </Button>
            </div>
        </div>
    )
}

