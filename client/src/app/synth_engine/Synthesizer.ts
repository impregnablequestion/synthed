import Oscillator from "./Oscillator";

export default class Synthesizer {

  context: AudioContext;
  preset: Preset;
  nodes: Oscillator[];
  master: GainNode;

  constructor (context: AudioContext, preset: Preset) {
    this.context = context;
    this.preset = preset;
    this.nodes = []

    // making audio graph
    this.master = this.context.createGain();
    this.master.connect(this.context.destination);
   
  }

  noteOn (midiNumber: number) {
  if (this.nodes.length < this.preset.voices) {

    const osc = new Oscillator(
      this.context,
      this.master,
      midiNumber,
      this.preset.osc_settings,
      this.preset.envelope
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

  setWave (wave: Waveform) {
    let newPreset = {...this.preset}
    newPreset.osc_settings.wave = wave;
    this.preset = newPreset;
  }
}