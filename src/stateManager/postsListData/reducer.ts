import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

const initialState: POSTSLISTDATA = {
  postsList: [],
};

export const postsSlice = createSlice({
  name: "postsList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addPostsList: (state, action: PayloadAction<DATALIST[]>) => {
      state.postsList = action.payload;
    },
    removepostsList: (state) => {
      state.postsList = [];
    },
  },
});

export const { addPostsList, removepostsList } = postsSlice.actions;

export const postsListState = (state: RootState) =>
  state.postsListData.postsList;

export default postsSlice.reducer;
