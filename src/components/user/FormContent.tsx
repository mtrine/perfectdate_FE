"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "../Button";
import { createReport } from "@/services/redux/api_request/report_api";
import { useAppDispatch, useAppSelector } from "@/services/redux/hooks";
import LoadingScreen from "../LoadingScreen";

type FormData = {
    familyName: string;
    givenName: string;
    email: string;
    phone: string;
    message: string;
};

interface FormContentProps {
    setShowAlert: (value: boolean) => void;
}
const FormContent = React.memo(({ setShowAlert }:FormContentProps) => {
    const dispatch = useAppDispatch();
    const loading = useAppSelector((state) => state.report.createReport.loading); 
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        defaultValues: {
            familyName: "",
            givenName: "",
            email: "",
            phone: "",
            message: "",
        },
    });

    const onSubmit =async  (data: FormData) => {
        console.log("Form data:", data);
        const success= await createReport(dispatch,data);
        if(success) setShowAlert(true);
    };

   
    
    return (
        <>
        {loading && <LoadingScreen />}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
            <div className="flex flex-col sm:flex-row space-y-[2%] sm:space-y-0 sm:space-x-[2%] w-full">
                <div className="flex flex-col w-full">
                    <Input
                        type="text"
                        placeholder="Họ"
                        className="py-2 px-2 w-full focus:border-1 focus:border-darkRed focus:outline-none"
                        {...register("familyName", { required: "Họ là bắt buộc" })}
                    />
                    {errors.familyName && <p className="text-lightRed px-1">{errors.familyName.message}</p>}
                </div>
                <div className="flex flex-col w-full">
                    <Input
                        type="text"
                        placeholder="Tên"
                        className="py-2 px-2 w-full focus:border-darkRed focus:outline-none"
                        {...register("givenName", { required: "Tên là bắt buộc" })}
                    />
                    {errors.givenName && <p className="text-lightRed px-1">{errors.givenName.message}</p>}
                </div>
            </div>
            <div className="flex flex-col sm:flex-row space-y-[2%] sm:space-y-0 sm:space-x-[2%] w-full">
                <div className="w-full flex flex-col">
                    <Input
                        type="email"
                        placeholder="Email"
                        className="py-2 px-2 w-full focus:border-darkRed focus:outline-none"
                        {...register("email", {
                            required: "Email là bắt buộc",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Email không hợp lệ",
                            },
                        })}
                    />
                    {errors.email && <p className="text-lightRed px-1">{errors.email.message}</p>}
                </div>
                <div className="w-full flex flex-col">
                    <Input
                        type="phone"
                        placeholder="Số điện thoại"
                        className="py-2 px-2 w-full focus:border-darkRed focus:outline-none"
                        {...register("phone", { required: "Số điện thoại là bắt buộc" })}
                    />
                    {errors.phone && <p className="text-lightRed px-1">{errors.phone.message}</p>}
                </div>
            </div>
            <Input
                type="textarea"
                placeholder="Nội dung cần hỗ trợ"
                className="focus:border-darkRed focus:outline-none"
                {...register("message", { required: "Nội dung là bắt buộc" })}
            />
            {errors.message && <p className="text-lightRed px-1">{errors.message.message}</p>}
            <Button typeButton="secondary" type="submit" text="Gửi thông tin" color="darkRed" />
        </form>
        </>
    );
});
export default FormContent;