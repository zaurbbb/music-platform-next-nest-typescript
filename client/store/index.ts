import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

import playerSlice from "./player/slice.ts";

const rootReducer = combineReducers({
  auth: playerSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});
