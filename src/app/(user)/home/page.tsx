"use client"
import Button from "@/components/Button";

export default function HomePage() {

  return (
     <div className="h-screen">
      <Button text="Đăng ký" type="primary" onClick={() => console.log("Clicked!")} />
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
