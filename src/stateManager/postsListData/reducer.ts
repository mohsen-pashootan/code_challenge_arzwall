import { ACTIONS } from "../ActionTypes";
import { AnyAction } from "redux";

const initialState: POSTSLISTDATA = {
  postsList: [],
  loading: false,
  errorResponse: "",
};

export function postsListData(state = initialState, action: AnyAction) {
  return (ACTION_HANDLERS[action.type] || (() => state))(state, action.payload);
}

const ACTION_HANDLERS = {
  [ACTIONS.POSTS_DATA_LIST_LOADING]: handleLoading,
  [ACTIONS.REJECT_ERROR]: handleError,
  [ACTIONS.POSTS_DATA_LIST]: handlePostsData,
  [ACTIONS.CLEAR_POSTS_DATA_LIST]: handleClearPostsData,
};

function handleLoading(state: POSTSLISTDATA, payload: boolean) {
  return { ...state, loading: payload };
}

function handleError(state: POSTSLISTDATA, payload: string | any) {
  return {
    ...state,
    loading: false,
    postsList: [],
    errorResponse: payload,
  };
}

function handlePostsData(state: POSTSLISTDATA, payload: POSTSRESPONSE[]) {
  const customPostData = payload.map((item) => ({
    id: item.id,
    title: item.title,
    avatar: "",
    description: item.body,
  }));
  return { ...state, loading: false, postsList: customPostData };
}

function handleClearPostsData(state: POSTSLISTDATA, payload: any[]) {
  return { ...state, loading: false, postsList: payload, errorResponse: "" };
}

export default postsListData;
