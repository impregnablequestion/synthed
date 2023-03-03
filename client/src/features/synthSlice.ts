import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../app/store';
import { preset1 } from '../app/synth_engine/presets';


export interface synthState {
  settings: Settings,
  status: 'idle' | 'loading' | 'failed'
}

export interface paramChange {
  module: keyof Settings,
  param: keyof GeneralParams | keyof OscParams | keyof FilterParams | keyof EnvelopeParams,
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
    
    change_param: (state, action: PayloadAction<paramChange>) => {
      let {module, value, param} = action.payload
      state.settings[module as keyof Settings][param as keyof Params] = value
    }
  },
});

export const { play_note, stop_note, change_param} = synthSlice.actions;

export const selectSettings = (state: RootState) => state.synth.settings;

export default synthSlice.reducer;