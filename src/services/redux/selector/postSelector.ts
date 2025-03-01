import { createSelector } from "reselect";
import { RootState } from "../store"; // Đảm bảo import đúng store của bạn

const selectPostState = (state: RootState) => state.post;

export const selectPostList = createSelector(
  [selectPostState],
  (postState) => postState.postList?.data || []
);

export const selectPostListLoading = createSelector(
  [selectPostState],
  (postState) => postState.postList?.loading
);