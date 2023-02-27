import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface audioParamsState {
  wave: 'sine' | 'square' | 'sawtooth' | 'triangle';
  status: 'idle' | 'loading' | 'failed';
}

const initialState: audioParamsState = {
  wave: "sine",
  status: 'idle',
};

export const audioParamsSlice = createSlice({
  name: 'audioParams',
  initialState,
  reducers: {
    change_wave: (state, action) => {
      state.wave = action.payload;
    }
  },
});

export const { change_wave } = audioParamsSlice.actions;

export const selectWave = (state: RootState) => state.audioParams.wave;

export default audioParamsSlice.reducer;