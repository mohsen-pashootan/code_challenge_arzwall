import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";
import ApiListBox from "../ApiListBox/index";
import SelectedListBox from "../SelectedListBox/index";
import { clearSelectedData } from "./../../stateManager/actions";
import { ASSET_DATA, getPostsList, getUsersContact } from "./asset";
import { useQuery } from "react-query";

type ObjectKey = keyof typeof ASSET_DATA;

export default function ListBoxes() {
  const dispatch = useAppDispatch();

  const selectedList = useSelector(
    (state: ROOTSTATE) => state.selectedListData.selectedList
  );
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
    const _listName = listName as ObjectKey;
    if (_listName === "users_contact") fetchUsersContact();
    else if (_listName === "post_list") fetchPostsList();
  };

  const handleClearList = (listName: string) => {
    const _listName = listName as ObjectKey;
    if (_listName === "users_contact") {
      rmUsersContact();
    } else if (_listName === "post_list") {
      rmPostsList();
    }
  };

  const handleDeleteSelected = (item: SINGLESELECT) => {
    dispatch(clearSelectedData(item));
  };

  return (
    <div className="c-listBoxes">
      <ApiListBox
        listName="users_contact"
        fetchCall={hanldeGetData}
        dataList={usersData}
        loading={userIsLoading}
        onClearList={handleClearList}
      />
      <ApiListBox
        listName="post_list"
        fetchCall={hanldeGetData}
        dataList={postsData}
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
