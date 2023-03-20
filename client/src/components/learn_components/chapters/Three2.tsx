import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import {Text, Play, Chapter} from '../chapterStyles'
import { preset1 } from '../../../app/synth_engine/presets';
import LogSlider from '../../controls/LogSlider';
import Keyboard from '../../controls/Keyboard';
import BottomNav from '../../BottomNav';

const Three2 = ({ next, nextLabel }: ChapterProps) => {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset1))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h2>3-2: Envelopes - Release</h2>
        <p>
          Release works the same way as attack, except it controls how long it takes the sound to fade out
          once we've released the key. Listen to how it makes the tail sharp at low settings, and long at high settings
        </p>
      </Text>
      <Play>
        <LogSlider module='envelope' param='release' min={0.001} max={8} step={0.01}/>
        <Keyboard first="c4" last="g4" width={300}/>
      </Play>
      <BottomNav previous next={next} nextLabel={nextLabel}/>
    </Chapter>
  )
}

export default Three2