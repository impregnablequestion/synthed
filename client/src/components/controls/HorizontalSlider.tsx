import React from 'react'

import { Slider } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { change_param, selectSettings } from '../../features/synthSlice';

const HorizontalSlider = ({module, param, min, max, step}: SliderProps) => {
  const selected = useAppSelector(selectSettings);  
  const dispatch = useAppDispatch();
  
  const handleChange = (event: Event, value: number | number[]) => {
    const newVal = Array.isArray(value) ? value[0] : value;
    dispatch(change_param({
      module: module,
      param: param,
      value: newVal
    }));
  }

  const getLabel = (value: number) => {
    return `${value}`
  }

  const marks = [{value: max, label: getLabel(max)}, {value: min, label: getLabel(min)}]

  return (
    <Slider
      sx={{
        width: 200,
        color: 'black'
      }}
      size="small"
      step={step}
      min={min}
      max={max}
      marks={marks}
      value={selected[module as keyof Settings][param as keyof Params]}
      onChange={handleChange}
      aria-label={param}
      valueLabelDisplay="auto"
    />
  )
}

export default HorizontalSlider