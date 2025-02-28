"use client";
import Button from "@/components/Button";
import BackgroundBanner from "@/assets/images/InvitationBannerbkg.png"; 

export default function InvitationBanner() {
    return (
        <div 
            className="flex flex-col items-center justify-center text-center w-full h-auto bg-cover bg-center py-[5%] gap-4 px-[10%] my-[10%]"
            style={{ backgroundImage: `url(${BackgroundBanner.src})` }}
        >
            <h2 className="text-cream ">
                Chúng tớ luôn ở đây để giúp buổi hẹn hò của bạn trở nên hoàn hảo hơn bao giờ hết!
            </h2>
            <h2 className="text-cream">Còn bạn thì sao?</h2>
            <Button 
                text="Khám phá ngay"
                onClick={() => {}}
                typeButton="secondary"
                color="cream"
            />
        </div>
    );
}
