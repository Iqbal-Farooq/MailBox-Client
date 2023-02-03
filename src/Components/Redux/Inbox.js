


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: [],
};

const inboxSlice = createSlice({
  name: "inbox",
  initialState: initialState,
  reducers: {
    EmailFetch(state, action) {
      state.emails = action.payload;
    },
  },
});

export const inboxActions = inboxSlice.actions;
export default inboxSlice;