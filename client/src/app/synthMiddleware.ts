import { createListenerMiddleware } from "@reduxjs/toolkit";
import { change_wave, play_note, stop_note } from "../features/synthSlice";
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
    // synth.nodes.forEach((osc: Oscillator) => {
    //   osc.oscillator.type = action.payload;
    // });


    let c = synth.settings.osc;
    let wave = action.payload;
    let coarse_tune = c.coarse_tune;
    let fine_tune = c.fine_tune;
    let gain = c.gain;

    let osc_params = {
      wave: wave,
      coarse_tune: coarse_tune,
      fine_tune: fine_tune,
      gain: gain
    };

    const nialls_funky_preset = {
      osc: osc_params,
      filter: synth.settings.filter,
      envelope: synth.settings.envelope,
      global: synth.settings.global
    }

    synth.setWave(nialls_funky_preset);
    // synth.setWave(newPreset);
  }
})