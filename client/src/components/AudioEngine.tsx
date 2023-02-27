import React from 'react'
import { useAppSelector } from '../app/hooks';
import { selectWave } from '../features/audioEngineSlice/audioParamsSlice';

const AudioEngine = () => {

  const selectedWave = useAppSelector(selectWave);

  const context = new AudioContext();

  const handleClick = () => {
    const oscillator = context.createOscillator();
    oscillator.type = selectedWave;
    oscillator.frequency.value = 440;
    const gain = context.createGain();
    oscillator.start();
    setTimeout(()=>{
      oscillator.stop();
    }, 3000)
    oscillator.connect(gain).connect(context.destination);
  }

  return (
    <div>
      <button onClick={handleClick}>play for 1 second</button>
    </div>
  )
}

export default AudioEngine