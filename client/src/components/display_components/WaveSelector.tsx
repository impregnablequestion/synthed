import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { change_param } from '../../features/synthSlice';

const WaveSelector = () => {

  const selected = useAppSelector(state => state.synth.settings.osc.wave);
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(change_param({
      module: "osc",
      param: "wave",
      value: e.target.value}))
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