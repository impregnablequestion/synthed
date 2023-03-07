import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import NoteButton from '../../controls/NoteButton';
import { Text, Nav, Play, Chapter } from '../chapterStyles'
import HorizontalSlider from '../../controls/HorizontalSlider';
import { preset1 } from '../../../app/synth_engine/presets';

const One2 = ({ next }: ChapterProps) => {

  const navigate = useNavigate();
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
      </Text>
      <Play>
        <p>Adjust the sliders and listen to how it affects the sound</p>
        <NoteButton note={50} />
        <p>coarse tune</p>
        <HorizontalSlider
          module='osc' param='coarse_tune' min={-24} max={24} step={0.1}
        />
        <p>fine tune</p>
        <HorizontalSlider
          module='osc' param='fine_tune' min={-100} max={100} step={1}
        />
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(next)}>next: wave types</button>
      </Nav>
    </Chapter>
  )
}


export default One2;