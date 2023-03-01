import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface audioParamsState {
  wave: 'sine' | 'square' | 'sawtooth' | 'triangle';
  master_gain: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: audioParamsState = {
  wave: "sine",
  master_gain: 1,
  status: 'idle',
};

export const audioParamsSlice = createSlice({
  name: 'audioParams',
  initialState,
  reducers: {
    change_wave: (state, action) => {
      state.wave = action.payload;
    },
    change_gain: (state, action) => {
      state.master_gain = action.payload;
    }
  },
});

export const { change_wave, change_gain } = audioParamsSlice.actions;

export const selectWave = (state: RootState) => state.audioParams.wave;
export const selectMasterGain = (state: RootState) => state.audioParams.master_gain;

export default audioParamsSlice.reducer;