import Button from "@/components/Button";
import WeBringIt from "@/components/user/WeBringIt";
import HeroBanner from "@/components/user/HeroBanner";
import Image from "next/image";
import AfterBanner from "@/assets/images/afterbanner.png"
import ProblemAwareness from "@/components/user/ProblemAwareness";

export default function HomePage() {

  function handleRegister() {
    console.log("Đăng ký");
  }
  
  return (
     <div className="flex flex-col gap-[50px]">
        <HeroBanner />
        <Image src={AfterBanner} alt="After Banner" className="object-cover sm:max-h-[50px] lg:max-h-[150px] md:max-h-[100px] w-auto outline outline-[5px] outline-darkRed"/>
        <ProblemAwareness/>
        <WeBringIt />

     </div>
     
    //  <GoogleOAuthProvider clientId="431178237879-6ie0o2acablf1ulbf3dgj39kblfot5p1.apps.googleusercontent.com">
    //   <GoogleLogin
    //     onSuccess={(response) => {
    //       console.log("Access Token:", response.credential);
    //     }}
    //     onError={() => {
    //       console.log("Login Failed");
    //     }}
    //   />
    // </GoogleOAuthProvider>
  );
}
