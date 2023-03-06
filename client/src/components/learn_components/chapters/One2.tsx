import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import XY from '../../controls/XY';
import {Text, Nav, Play, Chapter} from '../chapterStyles'

const presetOne2: Settings = {
  id: 0,
  name: "1-2",
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

const One2 = ({ next }: ChapterProps) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(presetOne2))
  },[dispatch])

  return (
    <Chapter>
      <Text>
      <h2>1-2: Volume and Frequency</h2>
      <p>In spite of being a long word, an Oscillator is simply something that generates sound. <br/>They are the main building blocks of most synthesizers: in many ways an Oscillator can be considered a synthesizer all on its own!</p>
      </Text>
      <Play>
        <p>Click this square to make some sound!</p>
        <XY
        xModule={"osc"} xParam={"coarse_tune"} xMin={-24} xMax={24}
        yModule={"osc"} yParam={"gain"} yMin={0} yMax={1}
        note={38}
        />
      </Play>
      <Nav>
        <button onClick={()=>navigate(-1)}>previous</button>
        <button onClick={() => navigate(next)}>next</button>
      </Nav>
    </Chapter>
  )
}


export default One2;