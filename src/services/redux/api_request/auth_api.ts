import axiosInstance from "@/services/axios/axios.interceptor"
import { loginFailed, loginStart, loginSuccess } from "../slice/authSlice"

export const loginGoogle = async (dispatch: any, access_token: string) => {
    console.log("Dispatch loginStart");
    dispatch(loginStart());

    try {
        console.log("Gọi API Google login...");
        const response: any = await axiosInstance.post('/v1/auth/google/login', {
            access_token,
        });

        console.log("Response từ API:", response);
        dispatch(loginSuccess(response.data));
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        dispatch(loginFailed((error as Error).message));
    }
};
