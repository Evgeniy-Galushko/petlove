import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const requestNews = createAsyncThunk(
  "news/request",
  async (request, thunkAPI) => {
    try {
      const data = await axios.get(
        `/news?page=${request.toPage}&keyword=${request.request}`
      );
      // console.log(data.data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
