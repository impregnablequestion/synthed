import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { preset1 } from '../../app/synth_engine/presets';

export interface synthState {
  settings: Settings;
  status: 'idle' | 'loading' | 'failed'
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
    change_voices: (state, action) => {
      state.settings.global.voices = action.payload;
    }
  },
});

export const { play_note, change_wave, change_voices, stop_note } = synthSlice.actions;

export default synthSlice.reducer;