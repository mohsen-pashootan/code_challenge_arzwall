import { ACTIONS } from "../ActionTypes";
import { AnyAction } from "redux";
import { avatars } from "../../helpers/avatars";

const initialState: USERSCONTACT = {
  usersList: [],
  loading: false,
  errorResponse: "",
};

export function usersContact(state = initialState, action: AnyAction) {
  return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload);
}

const ACTION_HANDLERS = {
  [ACTIONS.USER_DATA_LIST_LOADING]: handleLoading,
  [ACTIONS.USER_DATA_LIST]: handleUserData,
  [ACTIONS.REJECT_ERROR]: handleError,
  [ACTIONS.CLEAR_USER_DATA_LIST]: handleClearUserData,
};

function handleLoading(state: USERSCONTACT, payload: boolean) {
  return { ...state, loading: payload };
}

function handleUserData(state: USERSCONTACT, payload: USERSCONTACTRESPONSE[]) {
  const customUserData = payload.map((item, index) => ({
    id: item.id,
    title: item.name,
    avatar: avatars[index],
    description: item.email,
  }));
  return { ...state, loading: false, usersList: customUserData };
}

function handleError(state: USERSCONTACT, payload: string | any) {
  return {
    ...state,
    loading: false,
    usersList: [],
    errorResponse: payload,
  };
}

function handleClearUserData(state: USERSCONTACT, payload: any[]) {
  return { ...state, loading: false, usersList: payload, errorResponse: "" };
}

export default usersContact;
