import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const requestNews = createAsyncThunk(
  "news/request",
  async (page, thunkAPI) => {
    try {
      const data = await axios.get(`/news?page=${page}`);
      // console.log(data.data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
