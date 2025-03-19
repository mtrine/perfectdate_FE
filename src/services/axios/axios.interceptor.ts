import { getErrorByCode } from "@/data/errorData";
import axios, { AxiosError } from "axios";
import { loginSuccess } from "../redux/slice/authSlice";
import { store } from "../redux/store";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "ngrok-skip-browser-warning": "true", // Cái này kh quan trọng kệ nó
  },
  withCredentials: true,
});


const refreshAccessToken = async () => {
  try {
    console.log('Refresh token');
    const response = await axiosInstance.get(`/v1/auth/refresh-token`);
    return response.data;
  } catch (error) {
    console.error('Refresh token failed', error);
    return null;
  }
};

// Thêm response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const res = await refreshAccessToken();

      // Gọi dispatch để cập nhật state với token mới
      const dispatch = store.dispatch; // Lấy dispatch từ store
      if (res) {
        dispatch(loginSuccess(res)); // Cập nhật state
      }
      else {
        console.log('Token expired');
        // dispatch(logoutSuccess());

        window.location.href = '/login'; // hoặc sử dụng useHistory để điều hướng
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;