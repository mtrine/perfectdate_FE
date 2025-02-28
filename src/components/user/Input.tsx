"use client";
interface InputProps {
    type: string;
    placeholder: string;
    className: string;
    [key: string]: any
}

export default function Input({ type, placeholder, className, ...rest }: InputProps) {
    if (type === "textarea") {
        return (
            <textarea
                placeholder={placeholder}
                className={`w-full h-32 p-4 border border-[#00000033] rounded-lg bg-gray-50 resize-none ${className}`}
                {...rest}
            />
        );
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            className={`w-full p-4 border h-8 sm:h-10 border-[#00000033] rounded-full ${className}`}
            {...rest}
        />
    );
}