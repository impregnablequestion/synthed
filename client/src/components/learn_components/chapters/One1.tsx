import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import XY from '../../controls/XY';
import {Text, Nav, Play, Chapter} from '../chapterStyles'

const presetOne1: Settings = {
  id: 0,
  name: "1-1",
  tags: "",
  osc: {
    wave: "square",
    coarse_tune: 0,
    fine_tune: 0,
    gain: 1
  },
  filter: {
    frequency: 15000,
    type: "lowpass",
    q: 1000
  },
  envelope: {
    attack: 0.2,
    decay: 0.2,
    sustain: 0.8,
    release: 0.7,
  },
  general: {
    voices: 4,
    octave: 0,
    master_gain: 0.6
  }
}

const One1 = ({ next }: ChapterProps) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(presetOne1))
  },[dispatch])

  return (
    <Chapter>
      <Text>
      <h2>1-1: Oscillators</h2>
      <p>In spite of being a long word, an Oscillator is simply something that generates sound. <br/>They are the main building blocks of most synthesizers: 
      in many ways an Oscillator can be considered a synthesizer all on its own!</p>
      <p></p>
      </Text>
      <Play>
        <p>Click this square to make some sound!</p>
        <p>(make sure to adjust the master volume slider to your liking!)</p>
        <XY
        xModule={"osc"} xParam={"coarse_tune"} xMin={-24} xMax={24}
        yModule={"osc"} yParam={"gain"} yMin={0} yMax={1}
        note={38}
        />
      </Play>
      <Nav>
        <button onClick={() => navigate(next)}>next: frequency</button>
      </Nav>
    </Chapter>
  )
}


export default One1