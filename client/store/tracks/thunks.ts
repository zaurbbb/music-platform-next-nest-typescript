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
