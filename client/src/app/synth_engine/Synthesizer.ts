import Oscillator from "./Oscillator";

export default class Synthesizer {

  context: AudioContext;
  settings: Settings;
  nodes: Oscillator[];
  master: GainNode;
  filter: BiquadFilterNode;
  limiter: DynamicsCompressorNode;

  constructor (context: AudioContext, settings: Settings) {
    this.context = context;
    this.settings = settings;
    this.nodes = []

    // settings up nodes

    this.filter = this.context.createBiquadFilter();
    this.master = this.context.createGain();
    this.limiter = this.context.createDynamicsCompressor();

    // making a graph

    this.filter
    .connect(this.master)
    .connect(this.limiter)
    .connect(this.context.destination);
    // this.master.connect(this.context.destination)

    this.refresh()
  }

  refresh () {
    this.filter.frequency.value = this.settings.filter.frequency;
    this.filter.type = this.settings.filter.type;
    this.master.gain.value = this.settings.general.master_gain;

    this.nodes.forEach((osc: Oscillator) => {
      osc.oscillator.type = this.settings.osc.wave;
      osc.gain.gain.value = this.settings.osc.gain;
    })
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