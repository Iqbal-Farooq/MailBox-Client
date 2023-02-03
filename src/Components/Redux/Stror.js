import { configureStore } from "@reduxjs/toolkit";


import { AuthSlice } from "./Authentication";
import inboxSlice from "./Inbox";


const store = configureStore({
  reducer: {
    auth:AuthSlice.reducer,
    inbox:inboxSlice.reducer,
   
      
      
     }
});

export default store;