import Image from "next/image";
import UserAva from "@/assets/images/userava.jpg";
import SaveIcon from "@/assets/images/save_icon.svg";
import { useState } from "react";
import SavedIcon from "@/assets/images/saved_icon.svg";
interface PostProps {
    id:string;
    user_ava: string;
    user_name:string;
    location:string;
    date: string;
    title:string;
    description:string;
    image_url:string;
    saved_count:number;
    saved:boolean;
}
export default function PostItem({id,user_name,user_ava,location,date,title,description,image_url,saved_count,saved}:PostProps) {
    const [isSaved, setIsSaved] = useState(false); 
    const toggleSave = () =>{
        setIsSaved(!isSaved);
        if(isSaved){
            console.log("Đã bỏ lưu bài viết");
        }else{
            console.log("Đã lưu bài viết");
        }
    }
    return (
        <div className="flex flex-col justify-center text-center w-full h-auto bg-white rounded-[2%] shadow-md px-[4%] py-[3%] my-[3%] gap-4">
            <div className="flex items-center justify-between w-full items-between">
                <div className="flex w-full justify-between items-center">
                    <div className="flex gap-2">
                        <div className="w-[25px] h-[25px] rounded-full overflow-hidden">
                            <Image
                                src={user_ava||UserAva}
                                alt="User Avatar"
                                width={25}
                                height={25}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col text-left justify-center ">
                            <h4 className="text-gray font-bold">{user_name}</h4>
                            <span className="text-gray ">{location}</span>
                        </div>
                    </div>
                    <span className="text-gray ">{date}</span>
                </div>
            </div>
            <div className="flex flex-col gap-3 ">
                <div className="flex flex-col text-left">
                    <h3 className="text-gray">{title}</h3>
                    <p className="text-gray">{description}</p>
                </div>
                <Image 
                    src={image_url} 
                    alt="Post Image"
                    className="w-full h-auto object-fit rounded-[2%]"
                    width={3000}
                    height={3000}/>                
            </div>
            <div className="flex items-center justify-between">
                <p>Đã lưu bởi {saved_count} người</p>
                <Image
                    src={saved ? SavedIcon : SaveIcon}
                    alt="Save Icon"
                    onClick={toggleSave}
                    className="w-[5%] cursor-pointer"
                />
                
            </div>
        </div>
    );
}
