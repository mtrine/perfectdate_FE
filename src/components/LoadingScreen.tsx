import Image from "next/image";
import Heart from "@/assets/images/heart-loading.png";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center z-50 bg-cream">
      <div className="relative w-[100px] md:w-[70px] sm:w-[50px] h-auto animate-heartbeat">
        <Image src={Heart} alt="Heart" width={100} height={100} priority />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-500 animate-pulse">
        Chờ một chút nhé...
      </h3>
    </div>
  );
}
