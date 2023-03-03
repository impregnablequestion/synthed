import Oscillator from "./Oscillator";

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
    this.master = this.context.createGain();
    this.filter.connect(this.master).connect(this.context.destination)

    this.refresh()
  }

  refresh () {
    this.filter.frequency.value = this.settings.filter.frequency;
    this.master.gain.value = this.settings.general.master_gain;

    for (let osc of this.nodes) {
      osc.oscillator.type = this.settings.osc.wave
    }
  }

  noteOn (midiNumber: number) {
  if (this.nodes.length < this.settings.general.voices) {

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
    this.settings = preset;
  }

  setParams(newSettings: Settings) {
    this.settings = newSettings;
    this.refresh()
  }
}