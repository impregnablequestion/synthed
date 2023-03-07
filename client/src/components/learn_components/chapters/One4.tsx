import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import XY from '../../controls/XY';
import { Text, Nav, Play, Chapter } from '../chapterStyles'

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
    attack: 0.05,
    decay: 0.2,
    sustain: 0.2,
    release: 0.7,
  },
  general: {
    voices: 4,
    octave: 0,
    master_gain: 0.6
  }
}

const One4 = ({ next }: ChapterProps) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(load_preset(presetOne1))
  }, [dispatch])

  return (
    <Chapter>
      <Text>
        <h2>Recap: Oscillators</h2>
      </Text>
      <Play>
        <p>Remember this square? Well, click it again and try moving your mouse around in the X and Y directions</p>
        <p>The x-axis is mapped to the oscillator's coarse tune, while the y-axis is mapped to the volume</p>
        <p>You can get some pretty fun sounds with just an oscillator and a good attitude</p>
        <XY
          xModule={"osc"} xParam={"coarse_tune"} xMin={-24} xMax={24}
          yModule={"osc"} yParam={"gain"} yMin={0} yMax={1}
          note={38}
        />
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>previous</button>
        <button onClick={() => navigate(next)}>next: 2: Filters</button>
      </Nav>
    </Chapter>
  )
}


export default One4