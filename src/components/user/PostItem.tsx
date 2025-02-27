import Image from "next/image";
import UserAva from "@/assets/images/userava.jpg";
import PostImage from "@/assets/images/hokego.jpg";

export default function PostItem() {
    return (
        <div className="flex flex-col justify-center text-center w-full h-auto bg-white rounded-[2%] shadow-md px-[2%] py-[2%] ">
            <div className="flex items-center justify-between w-full items-between">
                <div className="flex w-full justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
                            <Image
                                src={UserAva}
                                alt="User Avatar"
                                width={40}
                                height={40}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col text-left ">
                            <h4 className="text-gray">Tên tôi là User nè</h4>
                            <span className="text-gray ">Hồ Chí Minh</span>
                        </div>
                    </div>
                    <span className="text-gray ">24/02/2025</span>
                </div>
            </div>
            <div className="flex flex-col ">
                <div className="flex flex-col text-left">
                    <h3 className="text-gray">Một ngày ở Hà Tĩnh chúng tớ đi đâu</h3>
                    <p className="text-gray">Theo tớ khám phá những địa điểm hẹn hò lý tưởng nhé!</p>
                </div>
                <Image src={PostImage} alt="Post Image"className="w-full h-auto object-fit"/>                
            </div>
        </div>
    );
}
