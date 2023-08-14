import { createSlice } from "@reduxjs/toolkit";
import { ITrack } from "../../types/track";
import { getActionName } from "../helpers/getActionName";
import {
  createTrack,
  fetchTracks,
  removeTrack,
  searchTracks,
} from "./thunks";

interface TrackState {
  tracks: ITrack[];
  error: string;
}

// const increment: CaseReducer<State, PayloadAction<number>> = (state, action) => {
//   state.value += action.payload;
// }

const redirectActions = {
  tracks: [
    "removeTrack",
    "createTrack",
  ],
};
const tracksAsyncActions = [
  "fetchTracks",
  "createTrack",
]
const slice = createSlice({
  name: "tracks",
  initialState: {
    tracks: [],
    error: "",
  } as TrackState,
  reducers: {
    setTracks(state, action) {
      state.tracks = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        (action) => tracksAsyncActions.includes(getActionName(action.type)),
        (state, action) => {
          state.tracks = action.payload;
        }
      )
      .addMatcher(
        (action) => redirectActions.tracks.includes(getActionName(action.type)),
        (_, action) => {
          action.payload.push("/tracks");
        },
      )
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.tracks,
  //     };
  //   },
  // },
});

export default slice.reducer;
export const tracksActions = slice.actions;
