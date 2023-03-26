interface SINGLEITEMPROP {
  id?: string;
  title: string;
  description: string;
  avatar: string;
}

interface GetData {
  onGetData: (name: string) => void;
}

interface EmptyStateList extends GetData {
  listName: string;
  loading: boolean;
}

interface DATALIST {
  id: number;
  title: string;
  avatar: string;
  description: string;
}

interface ApiListBox extends EmptyStateList {
  listName: string;
  dataList: DATALIST[];
  loading: boolean;
  onClearList: (name: string) => void;
}

interface VIRTUALIZEDLIST {
  data: SINGLEITEMPROP[];
  index: number;
  style: import("react").CSSProperties;
}

interface SINGLESELECT {
  title: string;
  id: string;
}

interface SELECTEDLIST {
  dataList: SINGLESELECT[];
  onDeleteSelected: (SINGLESELECT) => void;
}

interface USERSCONTACT {
  usersList: any[];
  loading: boolean;
  errorResponse: string;
}

interface POSTSLISTDATA {
  postsList: any[];
  loading: boolean;
  errorResponse: string;
}

interface SINGLESELECTEDDATA {
  title: string;
  id: string;
}

interface SELECTEDLISTDATA {
  selectedList: SINGLESELECTEDDATA[];
}

interface USERSCONTACTRESPONSE {
  id: number;
  name: string;
  avatar: string;
  email: string;
}

interface POSTSRESPONSE {
  id: number;
  title: string;
  body: string;
  avatar: string;
}

interface RESPONSE {
  data: USERSCONTACTRESPONSE[] | POSTSRESPONSE[];
}

interface GENERALSTORE {
  usersContact: USERSCONTACT;
  postsListData: POSTSLISTDATA;
  selectedListData;
}

interface CONTROLLEDLISTCONTAINER {
  children;
  sx;
  dataSize: number;
  dataList: DATALIST[];
}

interface USESEARCH {
  searchQuery: string;
  listArr: DATALIST[];
}

interface ROOTSTATE {
  usersContact: USERSCONTACT;
  postsListData: POSTSLISTDATA;
  selectedListData: SELECTEDLISTDATA;
}
