import axiosInstance from "@/services/axios/axios.interceptor";
import { getPlanListFailed, getPlanListStart, getPlanListSuccess } from "../slice/planSlice";

export const getPlanList = async (dispatch: any) => {
    dispatch(getPlanListStart());
    try {
        const response: any = await axiosInstance.get('/v1/plans');
        dispatch(getPlanListSuccess(response.data));
    } catch (error) {
        console.error("Lỗi khi gọi API:", error);
        dispatch(getPlanListFailed((error as Error).message));
    }
}