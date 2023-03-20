import React, { useEffect } from 'react'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import NoteButton from '../../controls/NoteButton';
import { Text, Play, Chapter } from '../chapterStyles';
import LinSlider from '../../controls/LinSlider';
import { preset1 } from '../../../app/synth_engine/presets';
import BottomNav from '../../BottomNav';

const One2 = ({ next, nextLabel }: ChapterProps) => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(load_preset(preset1))
  }, [dispatch])

  return (
    <Chapter>
      <Text>
        <h2>1-2: Frequency</h2>
        <p>For now, the most important thing you need to know about oscillators is that they make sound by repeating an action at a particular frequency</p>
        <p>The more often the action is repeated, the higher we perceive the note to be!</p>
        <p>Adjust the sliders and listen to how they effect the pitch of the sound</p>
      </Text>
      <Play>
        <NoteButton note={50} />
        <p>coarse tune</p>
        <LinSlider
          module='osc' param='coarse_tune' min={-24} max={24} step={0.1}
        />
        <p>fine tune</p>
        <LinSlider
          module='osc' param='fine_tune' min={-100} max={100} step={1}
        />
      </Play>
      <BottomNav previous next={next} nextLabel={nextLabel}/>
    </Chapter>
  )
}


export default One2;