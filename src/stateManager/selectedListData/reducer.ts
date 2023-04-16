import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

const initialState: SELECTEDLISTDATA = {
  selectedList: [],
};

export const selectedListSlice = createSlice({
  name: "selectedList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addSelectedList: (state, action: PayloadAction<SINGLESELECTEDDATA>) => {
      state.selectedList.push(action.payload);
    },
    removeSelectedList: (state, action: PayloadAction<SINGLESELECTEDDATA>) => {
      const index = state.selectedList.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedList.splice(index, 1);
    },
  },
});

export const { addSelectedList, removeSelectedList } =
  selectedListSlice.actions;

export const selectedListState = (state: RootState) =>
  state.selectedListData.selectedList;

export default selectedListSlice.reducer;

// export function selectedListData(state = initialState, action: AnyAction) {
//   return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload);
// }

// const ACTION_HANDLERS = {
//   [ACTIONS.ADD_SELECTED_DATA]: handleAddSelectedData,
//   [ACTIONS.CLEAR_SELECTED_DATA]: handleClearSelectedData,
// };

// function handleAddSelectedData(
//   state: SELECTEDLISTDATA,
//   payload: SINGLESELECTEDDATA
// ) {
//   const _newData = [...state.selectedList, payload];
//   return { ...state, selectedList: _newData };
// }

// function handleClearSelectedData(
//   state: SELECTEDLISTDATA,
//   payload: SINGLESELECTEDDATA
// ) {
//   const _clonedArr = [...state.selectedList];
//   const index = _clonedArr.findIndex((item) => item.id === payload.id);
//   _clonedArr.splice(index, 1);
//   return { ...state, selectedList: _clonedArr };
// }

// export default selectedListData;
