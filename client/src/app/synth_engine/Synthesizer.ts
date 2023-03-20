import Oscillator from "./Oscillator";

export default class Synthesizer {

  context: AudioContext;
  settings: Settings;
  nodes: Oscillator[];
  master: GainNode;
  filter: BiquadFilterNode;
  limiter: DynamicsCompressorNode;
  transpose: number;

  constructor(context: AudioContext, settings: Settings) {
    this.context = context;
    this.settings = settings;
    this.nodes = []
    this.transpose = settings.general.octave * 12

    let time = this.context.currentTime

    // setting up nodes

    this.filter = this.context.createBiquadFilter();
    this.master = this.context.createGain();
    this.limiter = this.context.createDynamicsCompressor();

    this.limiter.threshold.setValueAtTime(-10, time);
    this.limiter.knee.setValueAtTime(2, time);
    this.limiter.ratio.setValueAtTime(18, time);
    this.limiter.attack.setValueAtTime(0.002, time);
    this.limiter.release.setValueAtTime(0.1, time);


    // making a graph

    this.filter
      .connect(this.master)
      .connect(this.limiter)
      .connect(this.context.destination);
    // this.master.connect(this.context.destination)

    this.refresh()
  }

  refresh() {

    let {currentTime} = this.context;

    this.master.gain.cancelScheduledValues(currentTime);
    this.master.gain.setValueAtTime(this.master.gain.value, currentTime);
    this.master.gain.linearRampToValueAtTime(this.settings.general.master_gain, currentTime + 0.005);

    this.filter.frequency.value = this.settings.filter.frequency;
    this.filter.type = this.settings.filter.type;
    this.filter.Q.value = this.settings.filter.q;
    this.transpose = this.settings.general.octave * 12

    this.nodes.forEach((osc: Oscillator) => {
      osc.update(this.settings.osc)
    })
  }

  noteOn(midiNumber: number) {

    const note = midiNumber + this.transpose

    if (this.nodes.length < this.settings.general.voices) {
      const osc = new Oscillator(
        this.context,
        this.filter,
        note,
        this.settings.osc,
        this.settings.envelope
      );

      this.nodes.push(osc);
    } else if (this.settings.general.voices === 1 && this.nodes.length > 0) {
      const removed = this.nodes.shift();
      removed?.stop();
      const osc = new Oscillator(
        this.context,
        this.filter,
        note,
        this.settings.osc,
        this.settings.envelope
      );
      this.nodes.push(osc);
    }
  }

  noteOff(midiNumber: number) {
    let newNodes: Oscillator[] = [];
    this.nodes.forEach((osc: Oscillator) => {
      if (osc.midiNumber === midiNumber+this.transpose) {
        osc.stop();
      } else {
        newNodes.push(osc);
      }
    });
    this.nodes = newNodes;
  }

  setParams(newSettings: Settings) {
    this.settings = newSettings;
    this.refresh()
  }
}