import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import {Text, Nav, Play, Chapter} from '../chapterStyles'
import { preset1 } from '../../../app/synth_engine/presets';
import HorizontalSlider from '../../controls/HorizontalSlider';
import Keyboard from '../../controls/Keyboard';

const Three2 = ({ next }: ChapterProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset1))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h1>3-2: Envelopes - Release</h1>
        <p>
          Release works the same way as attack, except it controls how long it takes the sound to fade out
          once we've released the key. Listen to how it makes the tail sharp at low settings, and long at high settings
        </p>
      </Text>
      <Play>
        <HorizontalSlider module='envelope' param='release' min={0.001} max={5} step={0.01}/>
        <Keyboard first="c4" last="g4" width={300}/>
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(next)}>next: frequency</button>
      </Nav>
    </Chapter>
  )
}

export default Three2