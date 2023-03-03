import { configureStore, ThunkAction, Action, Store } from '@reduxjs/toolkit';
import synthReducer from "../features/audioEngineSlice/synthSlice"
import { synthMiddleware } from './synthMiddleware';

export const store: Store = configureStore({
  reducer: {
    synth: synthReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(synthMiddleware.middleware)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
