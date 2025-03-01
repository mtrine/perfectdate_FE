import { createSlice } from "@reduxjs/toolkit";

const postSlice = createSlice({
    name: 'post',
    initialState: {
        postList: {
            data: [],
            loading: false,
            error: null,
        },

    },
    reducers: {
        getPostListStart(state) {
            state.postList.loading = true;
        },
        getPostListSuccess(state, action) {
            state.postList.data = action.payload;
            state.postList.loading = false;
        },
        getPostListFailed(state, action) {
            state.postList.error = action.payload;
            state.postList.loading = false;
        },
    },
    });
    export const { getPostListStart, getPostListSuccess, getPostListFailed } = postSlice.actions;
    export default postSlice.reducer;