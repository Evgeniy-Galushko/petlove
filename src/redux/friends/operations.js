import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const requestFriends = createAsyncThunk(
  "friends/request",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get("/friends");
      // console.log(data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
