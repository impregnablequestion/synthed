import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import {Text, Play, Chapter} from '../chapterStyles'
import { preset1 } from '../../../app/synth_engine/presets';
import LogSlider from '../../controls/LogSlider';
import Keyboard from '../../controls/Keyboard';
import BottomNav from '../../BottomNav';

const Three1 = ({ next, nextLabel }: ChapterProps) => {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset1))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h2>3-1: Envelopes - Attack</h2>
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
        <LogSlider module='envelope' param='attack' min={0.005} max={5} step={0.01}/>
        <Keyboard first="c4" last="g4" width={300}/>
      </Play>
      <BottomNav previous next={next} nextLabel={nextLabel}/>
    </Chapter>
  )
}

export default Three1