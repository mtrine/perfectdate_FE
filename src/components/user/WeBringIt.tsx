
import Image from "next/image";
import LineImage from "@/assets/images/line.png";
import Feature from "./Feature";
export default function WeBringIt() {
    return (
        <div className="flex flex-col justify-center items-center py-10">
        <Image
          src={LineImage}
          alt="Line Image"
          className="w-full h-auto lg:h-[200px]"
        />
        <h2 className="text-darkRed font-playfair-bold text-center ">Chúng tớ mang đến...</h2>
        <div className="flex flex-wrap sm:flex-nowrap gap-4 justify-center items-center w-full max-w-4xl mt-6 ">
        <Feature text="Cùng nhau viết nên những buổi hẹn" hoverText=" Nhập địa điểm, phong cách, thời gian và gửi ngay cho nửa kia, không còn lo nghĩ." />
        <Feature text="Tính năng AI gợi ý giúp bạn" hoverText="Nhập nhưng yêu cầu cơ bản cho buổi hẹn hò và để AI giúp bạn tìm địa điểm phù hợp" />
        <Feature text="Chia sẻ & khám phá" hoverText="Chia sẻ nhanh chóng và khám phá những buổi hẹn độc đáo từ cộng đồng" />
        </div>
        </div>
    )
}
