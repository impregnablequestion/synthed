import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { RootState } from '../app/store';
import { change_wave, selectWave } from '../features/audioEngineSlice/audioParamsSlice';

const WaveSelector = () => {

  const selected = useAppSelector(selectWave);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(change_wave(e.target.value))
  }

  return (
    <select value={selected} onChange={handleChange}>
        <option value="sine">sine</option>
        <option value="triangle">triangle</option>
        <option value="square">square</option>
        <option value="sawtooth">sawtooth</option>
    </select>
  )
}

export default WaveSelector