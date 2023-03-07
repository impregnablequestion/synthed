import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { change_param, load_preset } from '../../../features/synthSlice';
import {Text, Nav, Play, Chapter} from '../chapterStyles'
import { preset1 } from '../../../app/synth_engine/presets';
import HorizontalSlider from '../../controls/HorizontalSlider';
import Keyboard from '../../controls/Keyboard';

const Three1 = ({ next }: ChapterProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset1))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h1>3-1: Envelopes - Attack</h1>
        <p>
          Envelopes are a bit different to oscillators and filters, in that
          we use them to control how a sound changes over time. In this
          case, the envelope changes the volume over time, although on more complicated synths
          it can be assigned to any parameter.
        </p>
        <p>
          The first parameter we will learn about is the attack! The attack controls how long a note takes
          to reach its full volume. Play with the keyboard and change the slider below to hear what it does
        </p>
      </Text>
      <Play>
        <HorizontalSlider module='envelope' param='attack' min={0.005} max={2} step={0.01}/>
        <Keyboard first="c4" last="g4" width={300}/>
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(next)}>next: frequency</button>
      </Nav>
    </Chapter>
  )
}

export default Three1