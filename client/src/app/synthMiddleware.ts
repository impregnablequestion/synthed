import { createListenerMiddleware } from "@reduxjs/toolkit";
import { change_wave, play_note, stop_note } from "../features/audioEngineSlice/synthSlice";
import Oscillator from "./synth_engine/Oscillator";
import { preset1 } from "./synth_engine/presets";
import Synthesizer from "./synth_engine/Synthesizer";

export const synthMiddleware = createListenerMiddleware();

const ctx = new window.AudioContext();
const synth = new Synthesizer(ctx, preset1);

synthMiddleware.startListening({
  actionCreator: play_note,
  effect: (action) => {
    console.log("played_note:", action);
    synth.noteOn(action.payload);
  }
});

synthMiddleware.startListening({
  actionCreator: stop_note,
  effect: (action) => {
    console.log("released_note:", action);
    synth.noteOff(action.payload);
  }
})

synthMiddleware.startListening({
  actionCreator: change_wave,
  effect: (action) => {
    console.log("changed_wave", action);
    synth.nodes.forEach((osc: Oscillator) => {
      osc.oscillator.type = action.payload;
    });
    synth.preset.osc_settings.wave = action.payload;
  }
})