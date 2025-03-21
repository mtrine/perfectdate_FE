'use client'
import Image from "next/image";
import Button from "../Button";
import BrokenHeart from "@/assets/images/broken_heart.png";
import { useRouter } from "next/navigation";

export default function NotHavePlan() {
    const router = useRouter();
    return(
        <div className="flex flex-col justify-between items-center space-y-[2%]">
                <Image 
                src={BrokenHeart} 
                width={100} 
                height={100} 
                alt={""}
                className=" lg:w-[200px] lg:h-[200px] " 
                />
                <h3>Có vẻ như không có kế hoạch nào ở đây cả...</h3>
                <Button 
                text="Tạo ngay !"
                typeButton="secondary"
                color="darkRed"
                onClick={()=>{
                    router.push("/dashboard/create-plan")
                }}
                type="button"
                />
            </div>
    )
}