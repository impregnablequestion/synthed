import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { preset2 } from '../../../app/synth_engine/presets';
import { load_preset } from '../../../features/synthSlice';
import XY from '../../controls/XY';
import {Text, Nav, Play, Chapter} from '../chapterStyles'

const Two1 = ({ next }: ChapterProps) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset2))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h2>2-1: Filters</h2>
        <p>Filters are another tool we have for shaping the character of our synthesized sound. </p>
        <p>Use the square to make some noise and hear it in action: </p>
      </Text>
      <Play>
        <XY
          xModule="filter" xParam="frequency"
          yModule="filter" yParam="q"
          xMin={40} xMax={15000}
          yMin={0.1} yMax={30}
          note={30}
          />
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(next)}>next: frequency</button>
      </Nav>
    </Chapter>
  )
}


export default Two1;