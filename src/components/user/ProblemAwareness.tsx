import Image from "next/image";
import ImgTulip from "@/assets/images/about uss.png"

export default function ProblemAwareness () {
    return (
        <div className="flex items-center justify-center  ">
            <div className="">
                <h2 className="text-darkRed my-[30px]">Chúng tớ thấu hiểu rằng...</h2>
                <p className="text-darkRed ">muốn có một buổi hẹn thật ý nghĩa nhưng lại loay hoay không biết bắt đầu từ đâu. Chọn địa điểm, sắp xếp thời gian, rồi còn gửi cho nửa kia sao cho tiện... tất cả nghe có vẻ đơn giản nhưng đôi khi lại tốn quá nhiều thời gian. Vậy nên, Perfect Date ra đời để giúp bạn lên kế hoạch dễ dàng hơn—nhanh chóng, rõ ràng và không còn rắc rối!</p>
            </div>
            <Image src={ImgTulip} alt="Tulip Image" className="w-full max-w-[200px] sm:max-w-[300px] lg:max-w-[500px] "/>
        </div>
    )
}