import { useNavigate } from 'react-router'
import { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import { preset2 } from '../../../app/synth_engine/presets';
import {Text, Nav, Play, Chapter} from '../chapterStyles';
import NoteButton from '../../controls/NoteButton';
import HorizontalSlider from '../../controls/HorizontalSlider';
import TypeSelector from '../../controls/TypeSelector';

const Two3 = ({ next }: ChapterProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset2))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h2>2-3: Types of filter</h2>
        <p>Just like with the oscillators, have a play with switching between the different filters, 
          and use the frequency slider to hear how they effect the sound
        </p>
        <p>LP filters out all the sound above a frequency, while HP filters out all the sound below</p>
        <p>Bandpass only lets sounds within a certain band pass through, while notch does the opposite!</p>
      </Text>
      <Play>
        <NoteButton note={40}/>
        <p>frequency</p>
        <HorizontalSlider module='filter' param='frequency' min={20} max={20000} step={1}/>
        <p>filter type</p>
        <TypeSelector module='filter' param='type'/>
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(next)}>next: resonance</button>
      </Nav>
    </Chapter>
  )
}

export default Two3