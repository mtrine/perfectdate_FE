import MainContact from "@/components/user/MainContact";
import TitleContact from "@/components/user/TitleContact"

export default function ContactPage() {
    return (
        <div className="flex flex-col gap-4 pt-20">
            <TitleContact />
            <MainContact />
        </div>
    );
}