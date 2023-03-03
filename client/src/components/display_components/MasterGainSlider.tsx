import { Slider } from '@mui/material';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';


const MasterGainSlider = () => {

  // const selected = useAppSelector(state => state)

  // const handleMasterVolChange = (event: Event, value: number | number[]) => {
  //   const newVol = Array.isArray(value) ? value[0] : value;
  //   dispatch(change_gain(newVol));
  // }

  return (
    <Slider
      sx={{
        height: 200,
        '& input[type="range"]': {
          WebkitAppearance: 'slider-vertical',
        },
      }}
      orientation="vertical"
      step={0.01}
      min={0}
      max={1}
      // value={selected}
      // onChange={handleMasterVolChange}
      aria-label="Master Volume"
      valueLabelDisplay="on"
    />
  )
}

export default MasterGainSlider;