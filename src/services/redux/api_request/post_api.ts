import axiosInstance from "@/services/axios/axios.interceptor"
import { getPostListFailed, getPostListStart, getPostListSuccess } from "../slice/postSlice"

export const getLastestPost = async (dispatch:any)=> {
    dispatch(
        getPostListStart()
    )
    try {
        const response:any = await axiosInstance.get('v1/post/latest')
        dispatch(getPostListSuccess(response.result.data))
    } catch (error) {
        dispatch(getPostListFailed(error))
    }
}