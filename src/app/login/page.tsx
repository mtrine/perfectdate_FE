"use client";
import Image from 'next/image';
import GGIcon from '@/assets/images/gg-icon.png';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import BgLogin from '@/assets/images/bg-login.png';
import { useAppDispatch } from '@/services/redux/hooks';
import { loginGoogle } from '@/services/redux/api_request/auth_api';
import { useRouter } from 'next/navigation';
export default function LoginPage() {
  return (
    <GoogleOAuthProvider clientId="431178237879-6ie0o2acablf1ulbf3dgj39kblfot5p1.apps.googleusercontent.com">
      <LoginContent />
    </GoogleOAuthProvider>
  );
}

function LoginContent() {
    const dispatch = useAppDispatch();
    const router = useRouter(); // Khởi tạo useRouter

    const login = useGoogleLogin({
      onSuccess: async (response) => {
        try {
          await loginGoogle(dispatch, response.access_token,router.push); // Gọi hàm loginGoogle
          // router.push('/dashboard'); // Chuyển hướng tới /dashboard sau khi thành công
        } catch (error) {
          console.error("Error during login:", error);
        }
      },
      onError: () => {
        console.log("Login Failed");
      },
    });

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-fill space-y-7 sm:space-y-4 px-4"
    style={{
        backgroundImage:  `url(${BgLogin.src})`,
        }}>
      <h1 className="text-cream text-3xl sm:text-5xl font-playfair-bold">PerfectDate</h1>
      <button
        onClick={() => login()} // Gọi hàm login khi nhấn nút
        className="w-full max-w-[300px] py-2 bg-white text-lightRed rounded-lg shadow-md 
        hover:bg-gray flex items-center justify-center gap-2 sm:gap-3 font-playfair-bold hover:text-cream
        text-sm sm:text-base transition-all duration-300"
      >
        <Image src={GGIcon} alt="Google" width={24} height={24} className="w-6 h-6 sm:w-8 sm:h-8" />
        <span>Đăng nhập với Google</span>
      </button>
    </div>
  );
}