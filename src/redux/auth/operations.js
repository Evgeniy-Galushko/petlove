import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const registrationRequest = createAsyncThunk(
  "auth/register",
  async (user, thunkAPI) => {
    try {
      const data = await axios.post("/users/signup", user);
      // console.log(data.data);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginRequest = createAsyncThunk(
  "auth/login",
  async (user, thunkAPI) => {
    try {
      const data = await axios.post("/users/signin", user);
      // console.log(data.data);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUserRequest = createAsyncThunk(
  "auth/currentUser",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("/users/current/full");
      console.log(data.data);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signoutRequest = createAsyncThunk(
  "auth/signout",
  async (_, thunkAPI) => {
    try {
      const data = await axios.post("/users/signout");
      console.log(data);
      clearAuthHeader();
      // return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
