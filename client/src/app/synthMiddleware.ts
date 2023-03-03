import { createListenerMiddleware } from "@reduxjs/toolkit";
import { change_param, play_note, stop_note } from "../features/synthSlice";
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
});

synthMiddleware.startListening({
  actionCreator: change_param,
  effect: (action) => {
    console.log("changed param", action);

    let {module, param, value} = action.payload;
    const settings = synth.settings;

    console.log("Previous: ", settings);

    const newSettings = {
      ...settings,
      [module as keyof Settings]: {
        ...settings[module as keyof Settings],
        [param as keyof Params]: value
      }
    }

    console.log("Updated: ", newSettings);
    
    synth.setParams(newSettings);
  }
})