import { midiToFreq } from "./AudioHelpers";

export default class Oscillator {

  context: AudioContext;
  oscillator: OscillatorNode;
  envelope: Envelope;
  volume: GainNode;
  easing: number;
  midiNumber: number;

  constructor (

    context: AudioContext,
    output: GainNode,
    midiNumber: number,
    type: Wave,
    envelope?: Envelope

    ) {

    this.context = context;
    this.oscillator = context.createOscillator();
    this.oscillator.frequency.value = midiToFreq(midiNumber);
    this.oscillator.type = type;
    this.midiNumber = midiNumber;
    this.envelope = envelope || {
      attack: 0.01,
      decay: 0.1,
      sustain: 0.2,
      release: 0.1
    }
    this.easing = 0.002;
    this.volume = context.createGain();
    this.volume.gain.value = 0; 

    this.oscillator.connect(this.volume).connect(output);
    this.oscillator.start();
    this.start();
  }

  start () {
    let {currentTime} = this.context;
    this.volume.gain.cancelScheduledValues(currentTime);
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