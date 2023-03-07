import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import {Text, Nav, Play, Chapter} from '../chapterStyles'
import { preset1 } from '../../../app/synth_engine/presets';
import Keyboard from '../../controls/Keyboard';
import { EnvelopeParam, EnvelopeParams } from '../../play_components/Envelope';
import VertSlider from '../../controls/VerticalSlider';

const Three4 = ({ next }: ChapterProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset1))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h2>3-4: Putting it together!</h2>
        <p>Now try using all four envelope settings in combination to 
          sculpt your sound!
        </p>
      </Text>
      <Play>
      <EnvelopeParams>
      <EnvelopeParam>
        <VertSlider module='envelope' param='attack' min={0.005} max={1} step={0.005}/>
        <p>A</p>
      </EnvelopeParam>
      <EnvelopeParam>
        <VertSlider module='envelope' param='decay' min={0.005} max={1} step={0.005}/>
        <p>D</p>
      </EnvelopeParam>
      <EnvelopeParam>
        <VertSlider module='envelope' param='sustain' min={0.005} max={1} step={0.005}/>
        <p>S</p>
      </EnvelopeParam>
      <EnvelopeParam>
        <VertSlider module='envelope' param='release' min={0.1} max={8} step={0.005}/>
        <p>R</p>
      </EnvelopeParam>
    </EnvelopeParams>
        <Keyboard first="c4" last="g4" width={300}/>
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(next)}>next: frequency</button>
      </Nav>
    </Chapter>
  )
}

export default Three4