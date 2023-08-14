import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../api/index";
import { errorHandler } from "../helpers/errorHandler";

export const fetchTracks = createAsyncThunk(
  'tracks/fetchTracks',
  async (_, thunkAPI) => {
    try {
      const response = await API.get("/tracks");
      return response.data;
    } catch (error) {
      errorHandler(error, thunkAPI.rejectWithValue);
    }
  },
);

export const createTrack = createAsyncThunk(
  'tracks/createTrack',
  async (data: {
    formData: FormData,
    router: any,
  }, thunkAPI) => {
    try {
      await API.post("/tracks", data.formData);
      return data.router;
    } catch (error) {
      errorHandler(error, thunkAPI.rejectWithValue);
    }
  },
);

export const removeTrack = createAsyncThunk(
  'tracks/removeTrack',
  async (id: string, thunkAPI) => {
    try {
      const res = await API.delete(`/tracks/${id}`);
      console.log("res", res);
      return;
    } catch (error) {
      errorHandler(error, thunkAPI.rejectWithValue);
    }
  },
);

export const addComment = createAsyncThunk(
  'tracks/addComment',
  async (data: {
    username: string,
    text: string,
    trackId: string,
  }, thunkAPI) => {
    try {
      await API.post(`/tracks/comment`, data);
      return;
    } catch (error) {
      errorHandler(error, thunkAPI.rejectWithValue);
    }
  },
);

export const searchTracks = createAsyncThunk(
  'tracks/fetchTracks',
  async (query: string, thunkAPI) => {
    try {
      const response = await API.get(`/tracks/search?query=${query}`);
      console.log("response", response);
      return response.data;
    } catch (error) {
      errorHandler(error, thunkAPI.rejectWithValue);
    }
  },
);
