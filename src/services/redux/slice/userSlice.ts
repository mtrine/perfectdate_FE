import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    user: {
        data: any;
        loading: boolean;
        error: string | null;
    }
}

const initialState: UserState = {
    user: {
        data: null,
        loading: false,
        error: null,
    }
};

const userSlice = createSlice({
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
        },
    },
});

export const { getUserFailed, getUserStart, getUserSuccess } = userSlice.actions;
export default userSlice.reducer;