import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

export const requestNotices = createAsyncThunk(
  "notices/request",
  async (request, thunkAPI) => {
    // console.log(request);
    try {
      const data = await axios.get(`/notices?page=${request.page}`);
      // console.log(data.data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestCategories = createAsyncThunk(
  "categories/request",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(`/notices/categories`);
      // console.log(data.data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestGender = createAsyncThunk(
  "gender/request",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(`/notices/sex`);
      // console.log(data.data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestSpecies = createAsyncThunk(
  "species/request",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(`/notices/species`);
      // console.log(data.data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestCitiesLocation = createAsyncThunk(
  "citiesLocation/request",
  async (_, thunkAPI) => {
    try {
      const data = await axios.get(`/cities/locations`);
      // console.log(data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
