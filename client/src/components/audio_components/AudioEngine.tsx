import React from 'react'
import { useAppSelector } from '../../app/hooks';
import Keyboard from '../display_components/Keyboard';
import Osc from './Oscillator';

const AudioEngine = () => {

  // Params //
  // const wave = useAppSelector(state => state.audioParams.wave);
  const envelope: Envelope = {
    attack: 0.005,
    decay: 0.1,
    sustain: 0.8,
    release: 0.3
  }
  const mastervol = 0.4;
  const voices = 4;

  // audio graph
  const context = new AudioContext();
  const out = context.destination;
  const master = context.createGain();
  master.gain.value = mastervol;
  master.connect(out);
  let nodes: Osc[] = [];

  // play and stop actions
  const playNote = (midiNumber: number) => {
    if (nodes.length < voices) {
      const osc = new Osc(context, master, midiNumber, envelope);
      nodes.push(osc);
      console.log("played", nodes);
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
    console.log("released", nodes);
    
  }

  return (
    <div>
      <Keyboard playNote = {playNote} stopNote = {stopNote}/>
    </div>
  )
}

export default AudioEngine