import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    myInfo:{
        currentUser?:any
        loading:boolean
        error:string|null
    }
}

const initialState: UserState = {
    myInfo:{
        currentUser:null,
        loading:false,
        error:null
    }
};

const userSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        getMyInfoStart(state) {
            state. myInfo.loading = true;
        },
        getMyInfoSuccess(state, action: PayloadAction<{ result: { data: any } }>) {
            state.myInfo = {
                ...state.myInfo,
                currentUser: action.payload.result,
                loading: false,
            };
        },
        getMyInfoFailed(state, action: PayloadAction<string>) {
            state.myInfo.error = action.payload;
            state.myInfo.loading = false;
        },
    },
});

export const 
{ 
    getMyInfoStart ,
    getMyInfoSuccess ,
    getMyInfoFailed 
} = userSlice.actions;
export default userSlice.reducer;
