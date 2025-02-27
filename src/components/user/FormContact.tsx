"use client";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { use } from "react";
import Button from "../Button";

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

    const onSubmit = (data: FormData) => {
        console.log("Form data:", data); // Xử lý dữ liệu form ở đây
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 py-[2%]">
                <div className="flex gap-3">
                    <Input
                        type="text"
                        placeholder="Họ"
                        className=""
                        {...register("familyName", { required: "Họ là bắt buộc" })}
                    />
                    {errors.familyName && <p className="text-red-500">{errors.familyName.message}</p>}
                    <Input
                        type="text"
                        placeholder="Tên"
                        className=""
                        {...register("givenName", { required: "Tên là bắt buộc" })}
                    />
                    {errors.givenName && <p className="text-red-500">{errors.givenName.message}</p>}
                </div>
                <div className="flex gap-3">
                    <Input
                        type="email"
                        placeholder="Email"
                        className=""
                        {...register("email", {
                            required: "Email là bắt buộc",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Email không hợp lệ",
                            },
                        })}
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    <Input
                        type="phone"
                        placeholder="Số điện thoại"
                        className=""
                        {...register("phone", { required: "Số điện thoại là bắt buộc" })}
                    />
                    {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
                </div>
                <Input
                    type="textarea"
                    placeholder="Nội dung cần hỗ trợ"
                    className=""
                    {...register("message", { required: "Nội dung là bắt buộc" })}
                />
                {errors.message && <p className="text-red-500">{errors.message.message}</p>}
                <Button typeButton="secondary" type="submit" text="Gửi thông tin" color="darkRed"  />
            </form>
        </div>
    );
}