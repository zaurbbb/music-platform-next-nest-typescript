import {
  Action,
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
} from '@reduxjs/toolkit';
import {
  createWrapper,
  HYDRATE,
} from 'next-redux-wrapper';
import playerReducer, { playerActions } from './player/slice';

const combinedReducer = combineReducers({
  player: playerReducer,
});

const reducer = (state: ReturnType<typeof combinedReducer>, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
  } else {
    return combinedReducer(state, action);
  }
};

// @ts-ignore
const makeStore = () => configureStore({ reducer });

type Store = ReturnType<typeof makeStore>;

type AppDispatch = Store['dispatch'];
type RootState = ReturnType<Store['getState']>;
type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

const wrapper = createWrapper(makeStore, { debug: true });
export {
  makeStore,
  type AppDispatch,
  type RootState,
  type AppThunk,
  wrapper,
}

export const ActionCreators = {
  ...playerActions,
}
