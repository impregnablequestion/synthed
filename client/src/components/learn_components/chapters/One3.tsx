import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import NoteButton from '../../controls/NoteButton';
import { Text, Play, Chapter } from '../chapterStyles'
import TypeSelector from '../../controls/TypeSelector';
import { preset1 } from '../../../app/synth_engine/presets';
import BottomNav from '../../BottomNav';


const One3 = ({ next, nextLabel }: ChapterProps) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(load_preset(preset1))
  }, [dispatch])

  return (
    <Chapter>
      <Text>
        <h2>1-3: Waveforms</h2>
        <p>The sound quality of an oscillator is dependend on what type of waveform it creates!</p>
        <p>Try switching between the waveforms provided below and listen to the how the sound changes</p>
      </Text>
      <Play>
        <TypeSelector
            module='osc' param='wave'
          />
        <NoteButton note={50} />
      </Play>
      <BottomNav previous next={next} nextLabel={nextLabel}/>
    </Chapter>
  )
}


export default One3;