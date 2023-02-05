


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  emails: [],
  sentemails:[],
  unRead:0
};

const inboxSlice = createSlice({
  name: "inbox",
  initialState: initialState,
  reducers: {
    EmailFetch(state, action) {
      state.emails = action.payload;
    },
    Sentemails(state,action){
      state.sentemails=action.payload;
    },
     updateUnread(state,action){
            state.unRead=action.payload
        }
     
  },
});

export const inboxActions = inboxSlice.actions;
export default inboxSlice;