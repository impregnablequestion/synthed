import React from 'react'
import { Slider } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { change_param, selectSettings } from '../../features/synthSlice';
import Log from './Log';

const LogSlider = ({module, param, min, max, step}: SliderProps) => {
  
  const selected = useAppSelector(selectSettings);  
  const dispatch = useAppDispatch();

  const log = new Log(min, max)
  
  const handleChange = (event: Event, value: number | number[]) => {

    const pos = Array.isArray(value) ? value[0] : value;

    dispatch(change_param({
      module: module,
      param: param,
      value: log.value(pos)
    }));
  }

  const value = selected[module as keyof Settings][param as keyof Params]
  const position = log.position(value);

  const displayValue = (position: number) => {
    const value = log.value(position);
    return Math.round(value*100)/100
  }

  return (
    <Slider
      sx={{
        height: 200,
        '& input[type="range"]': {
          WebkitAppearance: 'slider-vertical',
        },
      }}
      size="small"
      orientation="vertical"
      step={step}
      min={min}
      max={max}
      scale={displayValue}
      value={position}
      onChange={handleChange}
      aria-label={param}
      valueLabelDisplay="auto"
    />
  )
}

export default LogSlider