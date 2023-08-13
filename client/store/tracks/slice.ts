import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";
import { ITrack } from "../../types/track";
import { fetchTracks } from "./thunks";

interface TrackState {
  tracks: ITrack[];
  error: string;
}

// const increment: CaseReducer<State, PayloadAction<number>> = (state, action) => {
//   state.value += action.payload;
// }
const slice = createSlice({
  name: "tracks",
  initialState: {
    tracks: [],
    error: "",
  } as TrackState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTracks.fulfilled, (state, action: any) => {
        state.tracks = action.payload;
      })
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
export const playerActions = slice.actions;
