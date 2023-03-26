import { requestAPI } from "../helpers/requestAPI";
import { ThunkAction } from "redux-thunk";
import { RootState } from "./reduxers";
import { AnyAction } from "redux";

function actionCreator(type: string, payload: any) {
  return {
    type,
    payload,
  };
}

export const getInitData =
  (
    _url: string,
    _method: string,
    _actionType: string
  ): ThunkAction<Promise<void>, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    dispatch(actionCreator(`${_actionType}_LOADING`, true));
    requestAPI({
      url: _url,
      method: _method,
      timeout: 100000,
    })
      .then((response) => {
        dispatch({ type: _actionType, payload: response });
      })
      .catch((reject) => dispatch({ type: "REJECT_ERROR", payload: reject }));
  };

export const clearDataList = (_actionType: string) =>
  actionCreator(_actionType, []);

export const addSelectedData = (_data: SINGLESELECT) =>
  actionCreator("ADD_SELECTED_DATA", _data);

export const clearSelectedData = (_data: SINGLESELECT) =>
  actionCreator("CLEAR_SELECTED_DATA", _data);
