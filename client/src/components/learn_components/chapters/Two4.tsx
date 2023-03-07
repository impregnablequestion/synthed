import React, { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useAppDispatch } from '../../../app/hooks';
import { load_preset } from '../../../features/synthSlice';
import { Text, Nav, Play, Chapter } from '../chapterStyles'
import { preset2 } from '../../../app/synth_engine/presets';
import HorizontalSlider from '../../controls/HorizontalSlider';
import NoteButton from '../../controls/NoteButton';

const Two4 = ({ next }: ChapterProps) => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(()=>{
    dispatch(load_preset(preset2));
  }, [dispatch])

  return (
    <Chapter>
      <Text>
        <h2>2-4: Resonance</h2>
        <p>The resonance controls what happens at the frequency that we are filtering</p>
        <p>The higher the resonance, the more of a boost the filter frequency gets</p>
        <p>Play around, but be careful, it can cause ringing at higher settings!</p>
      </Text>
      <Play>
        <NoteButton note={35}/>
        <p>frequency</p>
        <HorizontalSlider
          module='filter' param='frequency' min={20} max={20000} step={10}
        />
        <p>resonance</p>
        <HorizontalSlider
          module='filter' param='q' min={0.1} max={30} step={0.25}
        />
      </Play>
      <Nav>
        <button onClick={() => navigate(-1)}>back</button>
        <button onClick={() => navigate(next)}>next: Envelopes</button>
      </Nav>
    </Chapter>
  )
}

export default Two4