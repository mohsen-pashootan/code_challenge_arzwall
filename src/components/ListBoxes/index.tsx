import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";
import ApiListBox from "../ApiListBox/index";
import SelectedListBox from "../SelectedListBox/index";
import { getPostsList, getUsersContact } from "./asset";
import { useQuery } from "react-query";
import {
  addUsersList,
  removeUsersList,
  usersListState,
} from "../../stateManager/usersContact/reducer";
import {
  addPostsList,
  postsListState,
  removepostsList,
} from "../../stateManager/postsListData/reducer";
import {
  removeSelectedList,
  selectedListState,
} from "../../stateManager/selectedListData/reducer";

export default function ListBoxes() {
  const dispatch = useAppDispatch();
  const usersList = useSelector(usersListState);
  const postsList = useSelector(postsListState);
  const selectedList = useSelector(selectedListState);

  const _queryOptions = { enabled: false, retry: 1 };
  const {
    data: usersData,
    isLoading: userIsLoading,
    refetch: fetchUsersContact,
    remove: rmUsersContact,
  } = useQuery(["users_contact"], getUsersContact, _queryOptions);
  const {
    data: postsData,
    isLoading: postIsLoading,
    refetch: fetchPostsList,
    remove: rmPostsList,
  } = useQuery(["post_list"], getPostsList, _queryOptions);

  const hanldeGetData = async (listName: string) => {
    if (listName === "users_contact") fetchUsersContact();
    else if (listName === "post_list") fetchPostsList();
  };

  const handleClearList = (listName: string) => {
    if (listName === "users_contact") {
      rmUsersContact();
      dispatch(removeUsersList());
    } else if (listName === "post_list") {
      rmPostsList();
      dispatch(removepostsList());
    }
  };

  const handleDeleteSelected = (item: SINGLESELECT) => {
    dispatch(removeSelectedList(item));
  };

  useEffect(() => {
    if (usersData && usersData.length) {
      dispatch(addUsersList(usersData));
    }
  }, [usersData]);

  useEffect(() => {
    if (postsData && postsData.length) {
      dispatch(addPostsList(postsData));
    }
  }, [postsData]);

  return (
    <div className="c-listBoxes">
      <ApiListBox
        listName="users_contact"
        fetchCall={hanldeGetData}
        dataList={usersList}
        loading={userIsLoading}
        onClearList={handleClearList}
      />
      <ApiListBox
        listName="post_list"
        fetchCall={hanldeGetData}
        dataList={postsList}
        loading={postIsLoading}
        onClearList={handleClearList}
      />
      <SelectedListBox
        dataList={selectedList}
        onDeleteSelected={handleDeleteSelected}
      />
    </div>
  );
}
