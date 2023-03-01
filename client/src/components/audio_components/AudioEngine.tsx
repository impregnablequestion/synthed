import React from 'react'
import Keyboard from '../display_components/Keyboard';
import Osc from './Oscillator';
import { store } from '../../app/store'
import { selectWave, selectMasterGain } from '../../features/audioEngineSlice/audioParamsSlice';

store.subscribe(listener);

const envelope: Envelope = {
  attack: 0.2,
  decay: 0.1,
  sustain: 0.2,
  release: 0.5
}

const voices = 4;

// audio graph
const context = new AudioContext();
const out = context.destination;
const filter = context.createBiquadFilter();
filter.type = "lowpass"
filter.frequency.value = 15000;
const master = context.createGain();
filter.connect(master).connect(out);
let nodes: Osc[] = [];


function listener () {
  master.gain.value = selectMasterGain(store.getState());
  for (let osc of nodes) {
    osc.oscillator.type = selectWave(store.getState());
  }
}



// play and stop actions
const playNote = (midiNumber: number) => {
  if (nodes.length < voices) {
    const osc = new Osc(context, filter, midiNumber, envelope);
    nodes.push(osc);
  }
}

const stopNote = (midiNumber: number) => {
  let newNodes: Osc[] = [];
  nodes.forEach((osc: Osc) => {
    if (osc.midiNumber === midiNumber) {
      osc.stop();
    } else {
      newNodes.push(osc);
    }
  });
  nodes = newNodes;
}

const AudioEngine = () => {
  // Params /

  return (
    <div>
      <Keyboard playNote = {playNote} stopNote = {stopNote}/>
    </div>
  )
}

export default AudioEngine