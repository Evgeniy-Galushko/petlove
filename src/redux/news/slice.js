import { createSlice } from "@reduxjs/toolkit";
import { requestNews } from "./operations.js";

const newsSlise = createSlice({
  name: "news",
  initialState: {
    news: [],
    isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestNews.pending, (state) => {
        state.isloading = true;
      })
      .addCase(requestNews.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.news = action.payload;
      })
      .addCase(requestNews.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default newsSlise.reducer;
