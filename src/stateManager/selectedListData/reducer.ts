import { ACTIONS } from "../ActionTypes";
import { AnyAction } from "redux";

const initialState: SELECTEDLISTDATA = {
  selectedList: [],
};

export function selectedListData(state = initialState, action: AnyAction) {
  return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload);
}

const ACTION_HANDLERS = {
  [ACTIONS.ADD_SELECTED_DATA]: handleAddSelectedData,
  [ACTIONS.CLEAR_SELECTED_DATA]: handleClearSelectedData,
};

function handleAddSelectedData(
  state: SELECTEDLISTDATA,
  payload: SINGLESELECTEDDATA
) {
  const _newData = [...state.selectedList, payload];
  return { ...state, selectedList: _newData };
}

function handleClearSelectedData(
  state: SELECTEDLISTDATA,
  payload: SINGLESELECTEDDATA
) {
  const _clonedArr = [...state.selectedList];
  const index = _clonedArr.findIndex((item) => item.id === payload.id);
  _clonedArr.splice(index, 1);
  return { ...state, selectedList: _clonedArr };
}

export default selectedListData;
