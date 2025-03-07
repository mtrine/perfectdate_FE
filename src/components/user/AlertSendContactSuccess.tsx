import Image from "next/image";
import Heart from "@/assets/images/heart.png";
import Button from "../Button";


export default function AlertSendContactSuccess() {
 return (
    <div className={`flex flex-col justify-center items-center bg-cream rounded-xl w-[50%] sm:w-[30%] px-5 py-2 sm:px-10 sm:py-5 space-y-6 animate-slideDown `}>
    <Image
    src={Heart}
    alt="Logo"
    className="w-[60px] h-[60px] sm:w-[100px] sm:h-[100px] "
    />
    <div className="text-darkRed space-y-2 text-center ">
    <h3 >Chúng tớ đã nhận được liên hệ của bạn!</h3>
    <p >Mọi phản hồi từ bạn đều rất quý giá để PerfectDate cải thiện trải nghiệm người dùng. Chúng tớ sẽ liên hệ lại ngay khi có thể!</p>
    </div>
    <Button text="Quay về trang chủ" typeButton="secondary"  />
 </div>
 )
}