import React from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../hooks/hooks";
import ApiListBox from "../ApiListBox/index";
import SelectedListBox from "../SelectedListBox/index";
import {
  getInitData,
  clearDataList,
  clearSelectedData,
} from "./../../stateManager/actions";
import { ASSET_DATA } from "./asset";

type ObjectKey = keyof typeof ASSET_DATA;

export default function ListBoxes() {
  const dispatch = useAppDispatch();
  const usersContact = useSelector((state: ROOTSTATE) => state.usersContact);
  const postsListData = useSelector((state: ROOTSTATE) => state.postsListData);
  const selectedList = useSelector(
    (state: ROOTSTATE) => state.selectedListData.selectedList
  );

  const hanldeGetData = async (listName: string) => {
    const _listName = listName as ObjectKey;
    dispatch(
      getInitData(
        ASSET_DATA[_listName].api_url,
        "get",
        ASSET_DATA[_listName].getActionType
      )
    );
  };

  const handleClearList = (listName: string) => {
    const _listName = listName as ObjectKey;
    dispatch(clearDataList(ASSET_DATA[_listName].clearActionType));
  };

  const handleDeleteSelected = (item: SINGLESELECT) => {
    dispatch(clearSelectedData(item));
  };

  return (
    <div className="c-listBoxes">
      <ApiListBox
        listName="users_contact"
        onGetData={hanldeGetData}
        dataList={usersContact.usersList}
        loading={usersContact.loading}
        onClearList={handleClearList}
      />
      <ApiListBox
        listName="post_list"
        onGetData={hanldeGetData}
        dataList={postsListData.postsList}
        loading={postsListData.loading}
        onClearList={handleClearList}
      />
      <SelectedListBox
        dataList={selectedList}
        onDeleteSelected={handleDeleteSelected}
      />
    </div>
  );
}
