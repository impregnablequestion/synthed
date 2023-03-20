import React, { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import {Text, Play, Chapter} from '../chapterStyles';
import { preset1 } from '../../../app/synth_engine/presets';
import LogSlider from '../../controls/LogSlider';
import Keyboard from '../../controls/Keyboard';
import BottomNav from '../../BottomNav';

const Three3 = ({ next, nextLabel }: ChapterProps) => {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset1))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h2>3-3: Envelopes - Sustain and Decay</h2>
        <p>
          These two settings are closely linked, so we're going to learn about them together
        </p>
        <p>
          The sustain is the volume that the sound is held at after the attack! At low settings, this will result in
          a sound that fades out even when held, whereas at high settings it will mean we can hold our note at peak volume 
          for as long as the key is held down
        </p>
        <p>
          The decay is closely linked, in that it controls how long it takes for the note to go from the peak 
          to the sustain after the attack has finished
        </p>
        <p>
          Try a low decay as well as a low sustain for a plucked sound
        </p>
      </Text>
      <Play>
        <p>decay</p>
        <LogSlider module='envelope' param='decay' min={0.01} max={2.5} step={0.01}/>
        <p>sustain</p>
        <LogSlider module='envelope' param='sustain' min={0.001} max={1} step={0.01}/>
        <Keyboard first="c4" last="g4" width={300}/>
      </Play>
      <BottomNav previous next={next} nextLabel={nextLabel}/>
    </Chapter>
  )
}

export default Three3