import { combineReducers } from "redux";
import { usersContact } from "./usersContact/reducer";
import { postsListData } from "./postsListData/reducer";
import { selectedListData } from "./selectedListData/reducer";
import store from "../redux/store";
import { ThunkDispatch } from "redux-thunk";

const rootReducer = combineReducers({
  usersContact,
  postsListData,
  selectedListData,
});

export default rootReducer;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<{}, {}, any>;
