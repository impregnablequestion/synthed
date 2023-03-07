import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import {Text, Nav, Play, Chapter} from '../chapterStyles'
import { preset1 } from '../../../app/synth_engine/presets';

const Three1 = ({ next }: ChapterProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset1))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h1>3-1: Envelopes</h1>
        <p>
          Envelopes are a bit different to oscillators and filters, in that
          we use them to control how a sound changes over time. In this
          case, the envelope changes the volume over time, although on more complicated synths
          it can be assigned to any parameter.
        </p>
        <p>
          The first parameter we will learn about is the attack! The attack controls how long a note takes
          to reach its full volume
        </p>
      </Text>
      <Play>
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(next)}>next: frequency</button>
      </Nav>
    </Chapter>
  )
}

export default Three1