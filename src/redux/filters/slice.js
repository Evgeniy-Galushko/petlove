import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  price: null,
  popularity: null,
  request: "",
  category: "",
  gender: "",
  specie: "",
  locationId: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setPrice(state, action) {
      state.price = action.payload;
    },
    setPopularity(state, action) {
      state.popularity = action.payload;
    },
    setRequest(state, action) {
      state.request = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setSpecie(state, action) {
      state.specie = action.payload;
    },
    setLocationId(state, action) {
      state.locationId = action.payload;
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const {
  setPrice,
  setPopularity,
  setRequest,
  setCategory,
  setGender,
  setSpecie,
  setLocationId,
  resetFilters,
} = filtersSlice.actions;

export default filtersSlice.reducer;
