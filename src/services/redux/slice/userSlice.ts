import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
<<<<<<< HEAD
    user: {
        data: any;
        loading: boolean;
        error: string | null;
=======
    myInfo:{
        currentUser?:any
        loading:boolean
        error:string|null
>>>>>>> 11bd28f411d881831b402b7e66a602fce2ec348a
    }
}

const initialState: UserState = {
<<<<<<< HEAD
    user: {
        data: null,
        loading: false,
        error: null,
=======
    myInfo:{
        currentUser:null,
        loading:false,
        error:null
>>>>>>> 11bd28f411d881831b402b7e66a602fce2ec348a
    }
};

const userSlice = createSlice({
<<<<<<< HEAD
    name: "user",
    initialState,
    reducers: {
        getUserStart(state) {
            state.user.loading = true;
        },
        getUserSuccess(state, action: PayloadAction<{ result: { data: any } }>) {
            state.user = {
                ...state.user,
                data: action.payload.result.data,
                loading: false,
            };
        },
        getUserFailed(state, action: PayloadAction<string>) {
            state.user.error = action.payload;
            state.user.loading = false;
=======
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
>>>>>>> 11bd28f411d881831b402b7e66a602fce2ec348a
        },
    },
});

<<<<<<< HEAD
export const { getUserFailed, getUserStart, getUserSuccess } = userSlice.actions;
export default userSlice.reducer;
=======
export const 
{ 
    getMyInfoStart ,
    getMyInfoSuccess ,
    getMyInfoFailed 
} = userSlice.actions;
export default userSlice.reducer;
>>>>>>> 11bd28f411d881831b402b7e66a602fce2ec348a
