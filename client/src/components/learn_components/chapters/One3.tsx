import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import NoteButton from '../../controls/NoteButton';
import { Text, Nav, Play, Chapter } from '../chapterStyles'
import TypeSelector from '../../controls/TypeSelector';
import { preset1 } from '../../../app/synth_engine/presets';


const One3 = ({ next }: ChapterProps) => {

  const navigate = useNavigate();
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
      <Nav>
        <button onClick={() => navigate(-1)}>previous</button>
        <button onClick={() => navigate(next)}>next: recap</button>
      </Nav>
    </Chapter>
  )
}


export default One3;