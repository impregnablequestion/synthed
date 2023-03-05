import { configureStore, ThunkAction, Action, Store } from '@reduxjs/toolkit';
import synthReducer from "../features/synthSlice"
import { synthMiddleware } from './synthMiddleware';
import { presetsApi } from './services/presetsApi';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store: Store = configureStore({
  reducer: {
    synth: synthReducer,
    [presetsApi.reducerPath]: presetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
  .concat(presetsApi.middleware)
  .prepend(synthMiddleware.middleware)
});

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
