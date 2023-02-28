import React from 'react'
import { useAppSelector } from '../../app/hooks';
import Keyboard from '../display_components/Keyboard';
import createNewOscillator from './Oscillator'

const AudioEngine = () => {

  const selectedWave = useAppSelector(state => state.audioParams.wave);

  const context = new AudioContext();

  const midiToFreq = (note: number) => {
    const tuning = 440;
    return (tuning/32) * (2 ** ((note-9)/12));
  }

  const playNote = (midiNumber: number) => {
    const freq = midiToFreq(midiNumber)
    const osc = createNewOscillator(context, selectedWave, freq)
    osc.connect(context.destination)
    
  }

  const stopNote = (midiNumber: number) => {

  }

  return (
    <div>
      <Keyboard playNote = {playNote} stopNote = {stopNote}/>
    </div>
  )
}

export default AudioEngine