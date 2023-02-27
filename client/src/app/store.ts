import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import audioParamsReducer from "../features/audioEngineSlice/audioParamsSlice"

export const store = configureStore({
  reducer: {
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
