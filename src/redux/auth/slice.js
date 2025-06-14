import { createSlice } from "@reduxjs/toolkit";
import {
  addPets,
  currentEdit,
  currentUserRequest,
  deletePetsRequest,
  loginRequest,
  registrationRequest,
  signoutRequest,
} from "./operations";

const authSlise = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    currentUser: {},
    status: null,
    token: null,
    isloading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(registrationRequest.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isloading = true;
      })
      .addCase(loginRequest.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.token = action.payload.token;
        state.isloading = true;
      })
      .addCase(currentUserRequest.pending, (state) => {
        state.isloading = true;
      })
      .addCase(currentUserRequest.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.currentUser = action.payload;
      })
      .addCase(currentUserRequest.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(currentEdit.pending, (state) => {
        state.isloading = true;
      })
      .addCase(currentEdit.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.currentUser = action.payload;
      })
      .addCase(currentEdit.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(addPets.pending, (state) => {
        state.isloading = true;
      })
      .addCase(addPets.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.currentUser = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(addPets.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(deletePetsRequest.pending, (state) => {
        state.isloading = true;
      })
      .addCase(deletePetsRequest.fulfilled, (state, action) => {
        state.isloading = false;
        state.error = null;
        state.currentUser = action.payload;
      })
      .addCase(deletePetsRequest.rejected, (state, action) => {
        state.isloading = false;
        state.error = action.payload;
      })
      .addCase(signoutRequest.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isloading = false;
      });
  },
});

export default authSlise.reducer;
