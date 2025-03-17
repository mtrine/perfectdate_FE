import axiosInstance from "@/services/axios/axios.interceptor"
import { loginFailed, loginStart, loginSuccess } from "../slice/authSlice"

export const loginGoogle = async (dispatch: any, access_token: string,navigate:any) => {
    dispatch(loginStart());

    try {
        console.log("access_token",access_token)
        const response: any = await axiosInstance.post('/v1/auth/google/login', {
            access_token,
        });

        dispatch(loginSuccess(response.data));
        navigate('/home');
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        dispatch(loginFailed((error as Error).message));
    }
};
