import React from 'react'
import Keyboard from '../display_components/Keyboard';
import Osc from './Oscillator';
import { Slider } from '@mui/material';

const AudioEngine = () => {

  // Params //
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

  // HOW TO HANDLE THE TYPE FROM A MATERIAL UI SLIDER
  // const handleMasterVolChange = (event: Event, value: number | number[]) => {
  //   const newVol = Array.isArray(value)? value[0] : value;
  //   setMasterVol(newVol);
  // }

  return (
    <div>
      <Keyboard playNote = {playNote} stopNote = {stopNote}/>
      {/* <Slider
        sx={{
          height: 200,
          '& input[type="range"]': {
            WebkitAppearance: 'slider-vertical',
          },
        }}
        orientation="vertical"
        step={0.01}
        min={0}
        max={1}
        value={mastervol}
        onChange={handleMasterVolChange}
        aria-label="Master Volume"
        valueLabelDisplay="on"
      /> */}
    </div>
  )
}

export default AudioEngine