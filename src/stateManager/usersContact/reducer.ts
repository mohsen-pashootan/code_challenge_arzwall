import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { avatars } from "../../helpers/avatars";

const initialState: USERSCONTACT = {
  usersList: [],
};

export const usersSlice = createSlice({
  name: "usersList",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    addUsersList: (state, action: PayloadAction<USERSCONTACTRESPONSE[]>) => {
      const customUserData = action.payload.map((item, index: number) => ({
        id: item.id,
        title: item.name,
        avatar: avatars[index],
        description: item.email,
      }));
      state.usersList = customUserData;
    },
    removeUsersList: (state) => {
      state.usersList = [];
    },
  },
});

export const { addUsersList, removeUsersList } = usersSlice.actions;

export const usersListState = (state: RootState) =>
  state.usersContact.usersList;

export default usersSlice.reducer;
