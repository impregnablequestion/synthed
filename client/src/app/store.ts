import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import audioParamsReducer from "../features/audioEngineSlice/audioParamsSlice"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    audioParams: audioParamsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
