"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";
import Button from "../Button";
import AlertSendContactSuccess from "./AlertSendContactSuccess";

type FormData = {
    familyName: string;
    givenName: string;
    email: string;
    phone: string;
    message: string;
};

export default function FormContact() {
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

    const [showAlert, setShowAlert] = useState(false);

    const onSubmit = (data: FormData) => {
        console.log("Form data:", data);
        setShowAlert(true);
    };

    return (
        <div className="relative"> {/* Thêm relative để alert neo vào đây nếu cần */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 w-full">
                <div className="flex gap-[10%] w-full">
                    <div className="flex flex-col w-full">
                        <Input
                            type="text"
                            placeholder="Họ"
                            className="py-2 px-2 w-full focus:border-1 focus:border-darkRed focus:outline-none"
                            {...register("familyName", { required: "Họ là bắt buộc" })}
                        />
                        {errors.familyName && <p className="text-red-500 px-1">{errors.familyName.message}</p>}
                    </div>
                    <div className="flex flex-col w-full">
                        <Input
                            type="text"
                            placeholder="Tên"
                            className="py-2 px-2 w-full focus:border-darkRed focus:outline-none"
                            {...register("givenName", { required: "Tên là bắt buộc" })}
                        />
                        {errors.givenName && <p className="text-red-500 px-1">{errors.givenName.message}</p>}
                    </div>
                </div>
                <div className="flex gap-[10%] w-full">
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
                        {errors.email && <p className="text-red-500 px-1">{errors.email.message}</p>}
                    </div>
                    <div className="w-full flex flex-col">
                        <Input
                            type="phone"
                            placeholder="Số điện thoại"
                            className="py-2 px-2 w-full focus:border-darkRed focus:outline-none"
                            {...register("phone", { required: "Số điện thoại là bắt buộc" })}
                        />
                        {errors.phone && <p className="text-red-500 px-1">{errors.phone.message}</p>}
                    </div>
                </div>
                <Input
                    type="textarea"
                    placeholder="Nội dung cần hỗ trợ"
                    className="focus:border-darkRed focus:outline-none"
                    {...register("message", { required: "Nội dung là bắt buộc" })}
                />
                {errors.message && <p className="text-red-500 px-1">{errors.message.message}</p>}
                <Button typeButton="secondary" type="submit" text="Gửi thông tin" color="darkRed" />
            </form>

            {/* Alert đè lên với backdrop */}
            {showAlert && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowAlert(false)}>
                    <AlertSendContactSuccess />
                </div>
            )}
        </div>
    );
}