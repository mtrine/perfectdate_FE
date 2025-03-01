// slices/postSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostState {
  postList: {
    data: any[]; // Replace 'any' with your post type if possible
    loading: boolean;
    error: string | null; // Or your error type
  };
}

const initialState: PostState = {
  postList: {
    data: [],
    loading: false,
    error: null,
  },
};

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