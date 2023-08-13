import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from "@reduxjs/toolkit";
import { ITrack } from "../../types/track";

interface PlayerState {
  active: null | ITrack;
  volume: number;
  duration: number;
  currentTime: number;
  pause: boolean;
}
// const increment: CaseReducer<State, PayloadAction<number>> = (state, action) => {
//   state.value += action.payload;
// }
const slice = createSlice({
  name: "users",
  initialState: {
    active: null,
    volume: 50,
    duration: 0,
    currentTime: 0,
    pause: true,
  } as PlayerState,
  reducers: {
    setPlay: (state) => {
      state.pause = false;
    },
    setPause: (state) => {
      state.pause = true;
    },
    setCurrentTime: (state, action: PayloadAction<number>) => {
      state.currentTime = action.payload;
    },
    setVolume: (state, action: PayloadAction<number>) => {
      state.volume = action.payload;
    },
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },
    setActive: (state, action: PayloadAction<ITrack | null>) => {
      state.active = action.payload;
      state.duration = 0;
      state.currentTime = 0;
    }
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getAllUsers.fulfilled, (state, action) => {
    //     state.users = action.payload;
    //   })
    //   .addCase(getUserById.fulfilled, (state, action) => {
    //     state.user.data = action.payload;
    //   })
    //   .addCase(getBlockedUser.fulfilled, (state, action) => {
    //     state.user.blocked = action.payload;
    //   })
    //   .addMatcher(
    //     (action) => action.type.endsWith("/pending"),
    //     (state) => {
    //       state.error = null;
    //       state.isFetching = true;
    //     },
    //   )
    //   .addMatcher(
    //     (action) => action.type.endsWith("/fulfilled"),
    //     (state) => {
    //       state.isFetching = false;
    //     },
    //   )
    //   .addMatcher(
    //     (action) => action.type.endsWith("/rejected"),
    //     (state, action) => {
    //       state.error = action.payload;
    //       state.isFetching = false;
    //     },
    //   );
  },
});


export default slice.reducer;
export const playerActions = slice.actions;
