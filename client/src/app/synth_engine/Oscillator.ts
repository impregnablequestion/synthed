import { midiToFreq } from "./AudioHelpers";

export default class Oscillator {

  context: AudioContext;
  oscillator: OscillatorNode;
  envelope: EnvelopeParams;
  volume: GainNode;
  easing: number;
  midiNumber: number;
  gain: GainNode;

  constructor (

    context: AudioContext,
    output: GainNode,
    midiNumber: number,
    settings: OscParams,
    envelope: EnvelopeParams

    ) {

    this.context = context;
    this.volume = context.createGain();
    this.gain = context.createGain();
    this.oscillator = context.createOscillator();

    // initialise constants

    this.easing = 0.003;
    this.midiNumber = midiNumber;
    this.volume.gain.value = 0;
    this.envelope = envelope;
    this.update(settings);
    

    // connect the audio graph
    this.oscillator
    .connect(this.volume)
    .connect(this.gain)
    .connect(output);

    this.start();
    this.oscillator.start();
  }

  // runs when the state of the synthesizer changes

  update (settings: OscParams) {
    this.oscillator.frequency.value = midiToFreq(this.midiNumber+settings.coarse_tune)
    this.oscillator.detune.value = settings.fine_tune;
    this.oscillator.type = settings.wave;
    this.gain.gain.value = settings.gain;
  }

  start () {
    let {currentTime} = this.context;
    this.volume.gain.cancelScheduledValues(currentTime);
    this.volume.gain.setValueAtTime(0, currentTime);
    this.volume.gain.linearRampToValueAtTime(1, currentTime + this.envelope.attack + this.easing);
    this.volume.gain.setValueAtTime(1, currentTime + this.envelope.attack +  this.easing);
    this.volume.gain.linearRampToValueAtTime(this.envelope.sustain, currentTime + this.envelope.attack + this.envelope.decay + this.easing);
  }

  stop () {
    let {currentTime} = this.context;
    this.volume.gain.cancelScheduledValues(currentTime);
    // this.volume.gain.setTargetAtTime(0, currentTime , this.envelope.release + this.easing);
    this.volume.gain.linearRampToValueAtTime(0.001, currentTime + this.envelope.release + this.easing)
    this.oscillator.stop(currentTime + this.envelope.release + this.easing);
    setTimeout(() => {
      this.oscillator.disconnect();
    }, 10000);
  }
}