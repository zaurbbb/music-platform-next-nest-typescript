import {
  AnyAction,
  combineReducers,
} from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { ThunkDispatch } from "redux-thunk";
import playerReducer from "./player/slice";
import tracksReducer from "./tracks/slice";

export const rootReducer = combineReducers({
  player: playerReducer,
  tracks: tracksReducer,
});

export const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

export type RootState = ReturnType<typeof rootReducer>
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
