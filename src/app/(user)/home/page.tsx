import Button from "@/components/Button";
import WeBringIt from "@/components/user/WeBringIt";

export default function HomePage() {

  function handleRegister() {
    console.log("Đăng ký");
  }
  handleRegister()
  return (
     <div className="">
      
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
