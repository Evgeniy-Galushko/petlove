import { createSlice } from "@reduxjs/toolkit";
import {
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
    token: null,
    isloading: false,
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
