import { createSlice } from "@reduxjs/toolkit";
import {
  requestCategories,
  requestCitiesLocation,
  requestGender,
  requestIdFriend,
  requestNotices,
  requestSpecies,
} from "./operations.js";

const handlePending = (state) => {
  state.isloading = true;
};

const handleRejected = (state, action) => {
  state.isloading = false;
  state.error = action.payload;
};

const noticesSlise = createSlice({
  name: "notices",
  initialState: {
    notices: [],
    categories: [],
    gender: [],
    species: [],
    citiesLocation: [],
    oneFriend: null,
    isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(requestNotices.pending, handlePending)
      .addCase(requestNotices.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.notices = action.payload;
      })
      .addCase(requestNotices.rejected, handleRejected)
      .addCase(requestCategories.pending, handlePending)
      .addCase(requestCategories.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.categories = action.payload;
      })
      .addCase(requestCategories.rejected, handleRejected)
      .addCase(requestGender.pending, handlePending)
      .addCase(requestGender.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.gender = action.payload;
      })
      .addCase(requestGender.rejected, handleRejected)
      .addCase(requestSpecies.pending, handlePending)
      .addCase(requestSpecies.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.species = action.payload;
      })
      .addCase(requestSpecies.rejected, handleRejected)
      .addCase(requestCitiesLocation.pending, handlePending)
      .addCase(requestCitiesLocation.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.citiesLocation = action.payload;
      })
      .addCase(requestCitiesLocation.rejected, handleRejected)
      .addCase(requestIdFriend.pending, (state) => {
        state.isloading = true;
        state.oneFriend = null;
      })
      .addCase(requestIdFriend.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.oneFriend = action.payload;
      })
      .addCase(requestIdFriend.rejected, handleRejected);
  },
});

export default noticesSlise.reducer;
