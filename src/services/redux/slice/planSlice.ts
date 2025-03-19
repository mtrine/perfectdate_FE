// slices/postSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlanState {
    planList: {
        data: any; // Replace 'any' with your post type if possible
        loading: boolean;
        error: string | null; // Or your error type
    };
}

const initialState: PlanState = {
    planList: {
        data: null,
        loading: false,
        error: null,
    },
};

const planSlice = createSlice({
    name: "plan",
    initialState,
    reducers: {
        getPlanListStart(state) {
            state.planList.loading = true;
        },
        getPlanListSuccess(state, action: PayloadAction<{ result: { data: any } }>) {
            state.planList = {
                ...state.planList,
                data: action.payload.result, // Giữ tham chiếu nếu không có thay đổi
                loading: false,
            };
        },
        getPlanListFailed(state, action: PayloadAction<string>) {
            state.planList.error = action.payload;
            state.planList.loading = false;
        },
    },
});

export const { getPlanListStart, getPlanListSuccess, getPlanListFailed } = planSlice.actions;
export default planSlice.reducer;
