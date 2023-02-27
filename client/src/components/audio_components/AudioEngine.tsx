import React from 'react'
import { useAppSelector } from '../../app/hooks';
import createNewOscillator from './Oscillator'

const AudioEngine = () => {

  const selectedWave = useAppSelector(state => state.audioParams.wave);

  const context = new AudioContext();

  const handleClick = () => {
    const osc = createNewOscillator(context, selectedWave, 440);
    osc.connect(context.destination)
  }

  return (
    <div>
      <button onClick={handleClick}>play for 1 second</button>
    </div>
  )
}

export default AudioEngine