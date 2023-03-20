import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { preset2 } from '../../../app/synth_engine/presets';
import { load_preset } from '../../../features/synthSlice';
import LogSlider from '../../controls/LogSlider';
import NoteButton from '../../controls/NoteButton';
import {Text, Play, Chapter} from '../chapterStyles';
import BottomNav from '../../BottomNav';


const Two2 = ({ next, nextLabel }: ChapterProps) => {

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset2))
  },[dispatch])

  return (
    <Chapter>
      <Text>
        <h2>2-2: Frequency</h2>
        <p>The most important parameter that we can control on the filter is the frequency</p>
        <p>Filters are able to filter out any sound above, below, on, or around a particular frequency</p>
        <p>
          In this case all of the sound above the frequency we've set is being filtered. Listen to how the character of the 
          sound changes while the underlying note remains the same
        </p>
      </Text>
      <Play>
        <NoteButton note={50}/>
        <p>frequency</p>
        <LogSlider module='filter' param='frequency' min={20} max={20000} step={1}/>
      </Play>
      <BottomNav previous next={next} nextLabel={nextLabel}/>
    </Chapter>
  )
}

export default Two2