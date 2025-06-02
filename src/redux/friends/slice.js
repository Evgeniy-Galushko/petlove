import { createSlice } from "@reduxjs/toolkit";
import { requestFriends } from "./operations";

const friendsSlise = createSlice({
  name: "friends",
  initialState: {
    friends: [],
    isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestFriends.pending, (state) => {
        state.isloading = true;
      })
      .addCase(requestFriends.fulfilled, (state, action) => {
        state.isloading = false;
        state.friends = action.payload;
      })
      .addCase(requestFriends.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      });
  },
});

export default friendsSlise.reducer;
