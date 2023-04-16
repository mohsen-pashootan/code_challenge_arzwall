import axios, { AxiosResponse } from "axios";
import { avatars } from "../../helpers/avatars";

export const getUsersContact = async () => {
  const { data }: { data: USERSCONTACTRESPONSE[] } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  const customUserData = data.map((item, index: number) => ({
    id: item.id,
    title: item.name,
    avatar: avatars[index],
    description: item.email,
  }));
  return customUserData;
};
export const getPostsList = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return data;
};

export const ASSET_DATA = {
  users_contact: {
    callApi: getUsersContact,
    getActionType: "USER_DATA_LIST",
    clearActionType: "CLEAR_USER_DATA_LIST",
  },
  post_list: {
    callApi: getPostsList,
    getActionType: "POSTS_DATA_LIST",
    clearActionType: "CLEAR_POSTS_DATA_LIST",
  },
};
