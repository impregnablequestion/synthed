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
    this.oscillator.frequency.value = midiToFreq(midiNumber);
    this.oscillator.type = settings.wave;
    this.midiNumber = midiNumber;
    this.envelope = envelope;
    this.easing = 0.008;
    this.volume.gain.value = 0;
    this.gain.gain.value = settings.gain;


    this.oscillator
    .connect(this.volume)
    .connect(this.gain)
    .connect(output);
    this.oscillator.start();
    this.start();
  }

  update () {
    
  }

  start () {
    let {currentTime} = this.context;
    this.volume.gain.cancelScheduledValues(currentTime + this.easing);
    this.volume.gain.setValueAtTime(0, currentTime + this.easing);
    this.volume.gain.linearRampToValueAtTime(1, currentTime + this.envelope.attack + this.easing);
    this.volume.gain.linearRampToValueAtTime(this.envelope.sustain, currentTime + this.envelope.attack + this.envelope.decay + this.easing);
  }

  stop () {
    let {currentTime} = this.context;
    this.volume.gain.cancelScheduledValues(currentTime + this.easing);
    // this.volume.gain.setTargetAtTime(0, currentTime , this.envelope.release + this.easing);
    this.volume.gain.linearRampToValueAtTime(0, currentTime + this.envelope.release + this.easing)
    setTimeout(() => {
      this.oscillator.disconnect();
    }, 5000);
  }
}