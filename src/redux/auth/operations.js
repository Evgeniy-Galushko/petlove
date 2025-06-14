import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
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
      // console.log(data.data);
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentEdit = createAsyncThunk(
  "auth/currentEdit",
  async (value, thunkAPI) => {
    // console.log(value);
    const { name, email, phone, avatar } = value.values;
    try {
      const data = await axios.patch("/users/current/edit", {
        ...(name && { name }),
        ...(email && { email }),
        ...(phone && { phone }),
        ...(avatar && { avatar }),
      });
      // console.log(data.status);
      if (data.status === 200) {
        value.closeModal();
        toast.success("Changes added");
      }
      setAuthHeader(data.data.token);
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addPets = createAsyncThunk(
  "auth/addPets",
  async (value, thunkAPI) => {
    console.log(value);
    try {
      const data = await axios.post("/users/current/pets/add", value);
      console.log(data.status);
      if (data.status === 200) {
        toast.success("You have added your pet");
      }
      setAuthHeader(data.data.token);
      return data;
    } catch (error) {
      console.log(error.status);
      if (error.status === 401) {
        toast.error("You are not logged in!");
      }
      if (error.status === 400) {
        toast.error("Invalid request (You filled it out incorrectly)!");
      }
      if (error.status === 404) {
        toast.error("Service not found!");
      }
      if (error.status === 500) {
        toast.error("Server error!");
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deletePetsRequest = createAsyncThunk(
  "auth/deletePets",
  async (id, thunkAPI) => {
    try {
      const data = await axios.delete(`/users/current/pets/remove/${id}`);
      // console.log(data.data);
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
