import React from 'react'
import { Slider } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { change_param, selectSettings } from '../../features/synthSlice';
import Log from './Log';

const LogSlider = ({ module, param, min, max, step, vertical, length }: SliderProps) => {

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
    return Math.round(value * 100) / 100
  }

  const style = ( vertical ?
    {
      height: length || 200,
      '& input[type="range"]': {
        WebkitAppearance: 'slider-vertical',
      },
    } : {
      width: length || 200
    }
  )

  return (
    <Slider
      sx={style}
      orientation={vertical? "vertical":"horizontal"}
      size="small"
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