import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { preset1 } from '../app/synth_engine/presets';


export interface synthState {
  settings: Settings;
  status: 'idle' | 'loading' | 'failed'
}

export interface paramChange {
  module: string;
  param: string;
  value: any;
}

const initialState: synthState = {
  settings: preset1,
  status: 'idle'
}

export const synthSlice = createSlice({
  name: 'synth',
  initialState,
  reducers: {

    play_note: (state, action) => {
    },

    stop_note: (state, action) => {
    },
    change_wave: (state, action) => {
      state.settings.osc.wave = action.payload;
    },
    change_param: (state, action: PayloadAction<paramChange>) => {
      let {value, param, module} = action.payload
      state.settings[module as keyof Settings][param as keyof GlobalParams] = value
    }
  },
});

export const { play_note, stop_note, change_wave, change_param} = synthSlice.actions;

export default synthSlice.reducer;