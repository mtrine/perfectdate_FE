import axiosInstance from "@/services/axios/axios.interceptor"
import { getPostListFailed, getPostListStart, getPostListSuccess } from "../slice/postSlice"

export const getLatestPost = async (dispatch:any)=> {
    dispatch(
        getPostListStart()
    )
    try {
        const response:any = await axiosInstance.get('/v1/post/latest')
        // console.log("response",response) //Khó hiểu thì mở cái đoạn code này ra để xem tại sao mtri đổi v
        dispatch(getPostListSuccess(response.data))
    } catch (error) {
        console.log("error",error)
        dispatch(getPostListFailed((error as Error).message))
    }
}

export const getPopularPost = async (dispatch:any)=> {
    dispatch(
        getPostListStart()
    )
    try {
        const response:any = await axiosInstance.get('/v1/post/popular')
        dispatch(getPostListSuccess(response.data))
    } catch (error) {
        console.log("error",error)
        dispatch(getPostListFailed((error as Error).message))
    }
}

export const getByLocation = async (dispatch:any,location:string)=> {
    dispatch(
        getPostListStart()
    )
    try {
        const response:any = await axiosInstance.get(`/v1/post/location/${location}`)
        dispatch(getPostListSuccess(response.data))
    } catch (error) {
        console.log("error",error)
        dispatch(getPostListFailed((error as Error).message))
    }
}