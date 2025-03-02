import { getErrorByCode } from "@/data/errorData";
import axios, { AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "ngrok-skip-browser-warning": "true", // Cái này kh quan trọng kệ nó
  },
});

// Thêm response interceptor
axiosInstance.interceptors.response.use(
  // Trả về response nếu thành công
  (response: any) => {
    if (response.code) {
      const errorDetail = getErrorByCode(response.code);
      if (errorDetail) {
        return {
          code: response.code,
          message: errorDetail.message,
        }
      }
    }
    return response;
  },
  // Xử lý lỗi
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;