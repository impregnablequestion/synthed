import { useEffect } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import { preset2 } from '../../../app/synth_engine/presets';
import {Text, Play, Chapter} from '../chapterStyles';
import NoteButton from '../../controls/NoteButton';
import LogSlider from '../../controls/LogSlider';
import TypeSelector from '../../controls/TypeSelector';
import BottomNav from '../../BottomNav';

const Two3 = ({ next, nextLabel }: ChapterProps) => {

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
        <p>Lowpass filters out all the sound above the frequency, while highpass filters out all the sound below it</p>
        <p>Bandpass only lets sounds within a certain band pass through, while notch does the opposite!</p>
      </Text>
      <Play>
        <NoteButton note={40}/>
        <p>frequency</p>
        <LogSlider module='filter' param='frequency' min={20} max={20000} step={1}/>
        <p>filter type</p>
        <TypeSelector module='filter' param='type'/>
      </Play>
      <BottomNav previous next={next} nextLabel={nextLabel}/>
    </Chapter>
  )
}

export default Two3