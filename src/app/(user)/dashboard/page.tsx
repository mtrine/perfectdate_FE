"use client"
import NotHavePlan from "@/components/user/NotHavePlan";
import AddIcon from "@/assets/images/add_24dp_FFFDEF_FILL0_wght400_GRAD0_opsz24.svg";
import Image from "next/image";
import HavePlan from "@/components/user/HavePlan";
import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import { useEffect } from "react";
import { getPlanList } from "@/services/redux/api_request/plan_api";
export default function Dashboard(){
    const dispatch = useAppDispatch()
    const planList = useAppSelector((state: any) => state.plan.planList.data)
    useEffect(() => {
        getPlanList(dispatch)
    },[dispatch])
    return(
        <div>
        <div className=" flex flex-col justify-center pt-20 max-w-[70%] mx-auto h-screen space-y-[5%] ">
            {
                planList ? (
                    <HavePlan
                    data={planList}
                    />
                ):(
                    <NotHavePlan/>
                )
            }
            
        </div>
        <button className="absolute bottom-2 right-3 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 bg-darkRed text-cream rounded-full flex items-center justify-center shadow-lg hover:bg-lightRed transition duration-300">
        <Image
            src={AddIcon}
            width={24}
            height={24}
            alt="Add Icon"
            />
    </button>
    </div>
    )
}