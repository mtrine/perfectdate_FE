'use client'
import { useForm } from "react-hook-form";
import Input from "./Input";
import { useEffect } from "react";
import { getMyInfo } from "@/services/redux/api_request/user_api";
import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import LoadingScreen from "../LoadingScreen";

type FormData = {
    email: string;
    codeInvite: string;
    partnerName: string;
};
export default function FormInfoUser() {
    const dispatch = useAppDispatch();
    const user = useAppSelector((state) => state.user.myInfo.currentUser);
    const loading = useAppSelector((state) => state.user.myInfo.loading);
    useEffect(() => {
        getMyInfo(dispatch);
    },[])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            email: "",
            codeInvite: "",
            partnerName: "",
        },
    });
    
    const onSubmit =async  (data: FormData) => {
       
    };
    if(loading) return <LoadingScreen />
    return(
        <form>
        <div className="grid grid-cols-12 items-center gap-y-4 gap-x-2">
              <div className="flex items-center col-span-11">
                <h3 className="min-w-[100px]">Email</h3>
                <Input 
                    type="text"
                    placeholder={user?.user_email}
                    className="py-2 px-2 w-full focus:border-1 focus:border-darkRed focus:outline-none"
                    disabled={true}
                    {...register("email", { required: "" })}
                />
              </div>
              <div className="flex items-center col-span-11">
                <h3 className="min-w-[100px]">Mã mời</h3>
                <Input 
                    type="text"
                    placeholder={user?.user_code}
                    className="py-2 px-2 w-full focus:border-1 focus:border-darkRed focus:outline-none"
                    disabled={true}
                    {...register("codeInvite", { required: "" })}
                />
              </div>
              <div className="flex items-center col-span-11">
                <h3 className="min-w-[100px]">Tên partner</h3>
                <Input 
                    type="text"
                    placeholder={user?.your_partner.user_name}
                    className="py-2 px-2 w-full focus:border-1 focus:border-darkRed focus:outline-none"
                    disabled={true}
                    {...register("email", { required: "" })}
                />
              </div>
              <p className=" text-lightRed underline hover:no-underline cursor-pointer">Hủy kết nối</p>
        </div>
      </form>
    )
}