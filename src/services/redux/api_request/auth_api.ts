import axiosInstance from "@/services/axios/axios.interceptor"
import { loginFailed, loginStart, loginSuccess } from "../slice/authSlice"

export const loginGoogle = async (dispatch: any, access_token: string) => {
    dispatch(loginStart());

    try {
        const response: any = await axiosInstance.post('/v1/auth/google/login', {
            access_token,
        });

        dispatch(loginSuccess(response.data));
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        dispatch(loginFailed((error as Error).message));
    }
};
