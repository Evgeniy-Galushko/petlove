import { createSlice } from "@reduxjs/toolkit";
import {
  requestAddFriend,
  requestCategories,
  requestCitiesLocation,
  requestDeleteFriend,
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
    idFavorites: [],
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
      .addCase(requestIdFriend.pending, handlePending)
      .addCase(requestIdFriend.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.oneFriend = action.payload;
      })
      .addCase(requestIdFriend.rejected, handleRejected)
      .addCase(requestAddFriend.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.idFavorites = action.payload;
      })
      .addCase(requestAddFriend.rejected, handleRejected)
      // .addCase(requestDeleteFriend.pending, handlePending)
      .addCase(requestDeleteFriend.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.idFavorites = action.payload;
      })
      .addCase(requestDeleteFriend.rejected, handleRejected);
  },
});

export default noticesSlise.reducer;
