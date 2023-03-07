import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import {Text, Nav, Play, Chapter} from '../chapterStyles';
import { preset1 } from '../../../app/synth_engine/presets';
import HorizontalSlider from '../../controls/HorizontalSlider';
import Keyboard from '../../controls/Keyboard';

const Three3 = ({ next }: ChapterProps) => {
  const navigate = useNavigate();
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
          The decay is closely linked, in that it controls how long it takes for the song to go from the peak after the attack 
          to the sustain
        </p>
        <p>
          Try a low decay as well as a low sustain for a plucked sound
        </p>
      </Text>
      <Play>
        <p>decay</p>
        <HorizontalSlider module='envelope' param='decay' min={0.01} max={2.5} step={0.01}/>
        <p>sustain</p>
        <HorizontalSlider module='envelope' param='sustain' min={0} max={1} step={0.01}/>
        <Keyboard first="c4" last="g4" width={300}/>
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(next)}>next: putting it together</button>
      </Nav>
    </Chapter>
  )
}

export default Three3