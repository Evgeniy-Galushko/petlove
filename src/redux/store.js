import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news/slice.js";
import friendsReducer from "./friends/slice.js";
import noticesReducer from "./notices/slice.js";
import authReducer from "./auth/slice.js";

export const store = configureStore({
  reducer: {
    news: newsReducer,
    friends: friendsReducer,
    notices: noticesReducer,
    auth: authReducer,
  },
});
