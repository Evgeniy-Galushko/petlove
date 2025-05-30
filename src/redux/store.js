import { configureStore } from "@reduxjs/toolkit";
import newsReducer from "./news/slice.js";

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
