import axiosInstance from "@/services/axios/axios.interceptor"

export const getUser = async (dispatch: any, ) => {
    const response = await axiosInstance.get('/v1/user')
    return response.data
}