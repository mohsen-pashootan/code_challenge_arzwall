import { POSTS_API, USERS_API } from "../../helpers/urls";

export const ASSET_DATA = {
  users_contact: {
    api_url: USERS_API,
    getActionType: "USER_DATA_LIST",
    clearActionType: "CLEAR_USER_DATA_LIST",
  },
  post_list: {
    api_url: POSTS_API,
    getActionType: "POSTS_DATA_LIST",
    clearActionType: "CLEAR_POSTS_DATA_LIST",
  },
};
