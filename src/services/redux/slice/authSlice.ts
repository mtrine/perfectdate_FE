import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    login:{
        currentUser?:any
        loading:boolean
        error:string|null
    }
}

const initialState: AuthState = {
    login:{
        currentUser:null,
        loading:false,
        error:null
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart(state) {
            state.login.loading = true;
        },
        loginSuccess(state, action: PayloadAction<{ result: { data: any } }>) {
            state.login = {
                ...state.login,
                currentUser: action.payload.result,
                loading: false,
            };
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.login.error = action.payload;
            state.login.loading = false;
        },
    },
});

export const 
{ 
    loginStart ,
    loginSuccess ,
    loginFailed 
} = authSlice.actions;
export default authSlice.reducer;
