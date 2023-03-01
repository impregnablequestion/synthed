import { midiToFreq } from "./AudioHelpers";
import {RootState, store} from '../../app/store'

store.subscribe(listener)

let wave: Wave;

const selectWave = (state: RootState) => {
  return state.audioParams.wave;
}

function listener () {
  wave = selectWave(store.getState());
}

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
    envelope: Envelope

    ) {

    this.context = context;
    this.oscillator = context.createOscillator();
    this.oscillator.frequency.value = midiToFreq(midiNumber);
    this.oscillator.type = wave;
    this.midiNumber = midiNumber;
    this.envelope = envelope;
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