import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.baseURL = "https://petlove.b.goit.study/api";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const requestNotices = createAsyncThunk(
  "notices/request",
  async (request, thunkAPI) => {
    const {
      byPopularity,
      byPrice,
      category,
      keyword,
      locationId,
      page,
      species,
      sex,
    } = request;
    // console.log(sex);
    try {
      const data = await axios.get(`/notices`, {
        params: {
          ...(page && { page }),
          ...(byPopularity != null && { byPopularity }),
          ...(byPrice != null && { byPrice }),
          ...(keyword && { keyword }),
          ...(category && { category }),
          ...(species && { species }),
          ...(locationId && { locationId }),
          ...(sex && { sex }),
        },
      });
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

export const requestIdFriend = createAsyncThunk(
  "requestIdFriend/request",
  async (id, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      console.log(token);
      if (token) {
        setAuthHeader(token);
      }
      const data = await axios.get(`notices/${id}`);
      // console.log(data);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestAddFriend = createAsyncThunk(
  "requestAddFriend/request",
  async (id, thunkAPI) => {
    // console.log(id);
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      console.log(token);
      if (token) {
        setAuthHeader(token);
      }
      const data = await axios.post(`notices/favorites/add/${id}`);
      if (data.status === 200) {
        toast.success("You have added to your favorites");
      }
      // console.log(data);
      return data.data;
    } catch (error) {
      if (error.status === 400) {
        toast.error("This id is not valid!");
      }
      if (error.status === 404) {
        toast.error("This notice is not found in notices!");
      }
      if (error.status === 409) {
        toast.error("You have already added this pet!");
      }
      if (error.status === 500) {
        toast.error("Server error!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const requestDeleteFriend = createAsyncThunk(
  "requestDeleteFriend/request",
  async (id, thunkAPI) => {
    // console.log(id);
    try {
      const state = thunkAPI.getState();
      const token = state.auth.token;
      console.log(token);
      if (token) {
        setAuthHeader(token);
      }
      const data = await axios.delete(`notices/favorites/remove/${id}`);
      if (data.status === 200) {
        toast.success("Pet removed from favorites");
      }
      // console.log(data);
      return data.data;
    } catch (error) {
      if (error.status === 400) {
        toast.error("This id is not valid!");
      }
      if (error.status === 404) {
        toast.error("This notice is not found in notices!");
      }
      if (error.status === 409) {
        toast.error("You don't have such a pet in your favorites!");
      }
      if (error.status === 500) {
        toast.error("Server error!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
