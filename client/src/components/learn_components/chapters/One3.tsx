import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import NoteButton from '../../controls/NoteButton';
import { Text, Nav, Play, Chapter } from '../chapterStyles'
import TypeSelector from '../../controls/TypeSelector';

const presetOne3: Settings = {
  id: 0,
  name: "1-3",
  tags: "",
  osc: {
    wave: "sine",
    coarse_tune: 0,
    fine_tune: 0,
    gain: 1
  },
  filter: {
    frequency: 15000,
    type: "lowpass",
    q: 1000
  },
  envelope: {
    attack: 0.2,
    decay: 0.2,
    sustain: 0.8,
    release: 0.7,
  },
  general: {
    voices: 4,
    octave: 0,
    master_gain: 0.6
  }
}

const One3 = ({ next }: ChapterProps) => {

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(load_preset(presetOne3))
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
        <button onClick={() => navigate(next)}>next</button>
      </Nav>
    </Chapter>
  )
}


export default One3;