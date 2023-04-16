import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import usersContact from "../stateManager/usersContact/reducer";
import postsListData from "../stateManager/postsListData/reducer";
import selectedListData from "../stateManager/selectedListData/reducer";

const store = configureStore({
  reducer: {
    usersContact,
    postsListData,
    selectedListData,
  },
});

// export type AppDispatch = ThunkDispatch<{}, {}, any>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
