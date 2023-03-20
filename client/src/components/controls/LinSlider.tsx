import React from 'react'
import { Slider } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { change_param, selectSettings } from '../../features/synthSlice';

const LinSlider = ({ module, param, min, max, step, vertical, length }: SliderProps) => {

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

  const style = (vertical ?
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
      orientation={vertical ? "vertical" : "horizontal"}
      size="small"
      step={step}
      min={min}
      max={max}
      value={selected[module as keyof Settings][param as keyof Params]}
      onChange={handleChange}
      aria-label={param}
      valueLabelDisplay="auto"
    />
  )
}

export default LinSlider;