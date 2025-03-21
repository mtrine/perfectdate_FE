import axiosInstance from "@/services/axios/axios.interceptor"
<<<<<<< HEAD

export const getUser = async (dispatch: any, ) => {
    const response = await axiosInstance.get('/v1/user')
    return response.data
=======
import { getMyInfoFailed, getMyInfoStart, getMyInfoSuccess } from "../slice/userSlice"

export const getMyInfo=async (dispatch: any)=>{
    dispatch(getMyInfoStart())
    try {
        const res = await axiosInstance.get('/v1/users/get-my-info')
        dispatch(getMyInfoSuccess(res.data))
    } catch (error) {
        dispatch(getMyInfoFailed((error as Error).message))
    }
>>>>>>> 11bd28f411d881831b402b7e66a602fce2ec348a
}