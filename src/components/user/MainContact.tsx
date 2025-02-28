import FormContact from "./FormContact";
import InformationContact from "./InformationContact";
import TitleFormContact from "./TitleFormContact";

export default function MainContact() {
    return (
    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-8 p-[5%]">
        <div className="flex flex-col gap-6 ">
            <TitleFormContact />
            <FormContact />
        </div>
        <InformationContact />
    </div>
    )
}