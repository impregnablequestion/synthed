import Oscillator from "./Oscillator";
import { preset1, preset2 } from "./presets";

export default class Synthesizer {

  context: AudioContext;
  settings: Settings;
  nodes: Oscillator[];
  master: GainNode;
  filter: BiquadFilterNode;

  constructor (context: AudioContext, settings: Settings) {
    this.context = context;
    this.settings = settings;
    this.nodes = []

    // making audio graph
    this.filter = this.context.createBiquadFilter();
    this.filter.frequency.value = this.settings.filter.frequency;
    this.master = this.context.createGain();
    this.master.gain.value = this.settings.global.master_gain;

    this.filter.connect(this.master).connect(this.context.destination)
  }

  noteOn (midiNumber: number) {
  if (this.nodes.length < this.settings.global.voices) {

    const osc = new Oscillator(
      this.context,
      this.filter,
      midiNumber,
      this.settings.osc,
      this.settings.envelope
    );
    
    this.nodes.push(osc);
    
    }
  }

  noteOff (midiNumber: number) {
    let newNodes: Oscillator[] = [];
    this.nodes.forEach((osc: Oscillator) => {
      if (osc.midiNumber === midiNumber) {
        osc.stop();
      } else {
        newNodes.push(osc);
      }
    });
    this.nodes = newNodes;
  }

  setWave (preset: Settings) {
    // let newPreset = {...this.preset}
    // newPreset.osc_settings.wave = wave;
    this.settings = preset;
  }
}