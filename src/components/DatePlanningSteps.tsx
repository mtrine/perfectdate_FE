import Image, { StaticImageData } from "next/image"; 

export default function DatePlanningSteps(props: { image: StaticImageData, tilte: string, description: string }) {
    return (
        <div className="date-planning-steps flex flex-col sm:flex-row text-blue max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl p-4 sm:p-6 space-y-2 sm:space-y-0 sm:space-x-4 items-center">
            <Image
                src={props.image}
                alt={props.tilte}
                width={40} // Mặc định ảnh nhỏ
                height={40}
                className="sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" // Ảnh to hơn trên màn hình lớn
            />
            <div className="flex flex-col text-center sm:text-left">
                <h2 className="font-poppins-bold text-sm sm:text-base md:text-lg">{props.tilte}</h2> 
                <p className="font-poppins-light text-xs sm:text-sm md:text-base">{props.description}</p> 
            </div>
        </div>
    );
}
