import axiosInstance from "@/services/axios/axios.interceptor"
import { createReportFailed, createReportStart, createReportSuccess } from "../slice/reportSlice"

export const createReport = async (dispatch: any, data: any) => {
    dispatch(createReportStart())
    try {
        const response: any = await axiosInstance.post('/v1/report-support', {
            email: data.email,
            phone: data.phone,
            familyName: data.familyName,
            givenName: data.givenName,
            message: data.message,
        })
        console.log("response", response)
        dispatch(createReportSuccess(response.data))
        return true
    }
    catch (error) {
        console.log("error", error)
        dispatch(createReportFailed((error as Error).message))
        return false
    }
}