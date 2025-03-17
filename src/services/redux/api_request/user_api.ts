import axiosInstance from "@/services/axios/axios.interceptor"
import { getMyInfoFailed, getMyInfoStart, getMyInfoSuccess } from "../slice/userSlice"

export const getMyInfo=async (dispatch: any)=>{
    dispatch(getMyInfoStart())
    try {
        const res = await axiosInstance.get('/v1/users/get-my-info')
        dispatch(getMyInfoSuccess(res.data))
    } catch (error) {
        dispatch(getMyInfoFailed((error as Error).message))
    }
}