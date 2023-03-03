import { Slider } from '@mui/material';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { RootState } from '../../app/store';
import { change_param } from '../../features/synthSlice';


const MasterGainSlider = () => {
  
  const selected = useAppSelector((state: RootState) => state.synth.settings);  
  const dispatch = useAppDispatch();
  
  const handleMasterVolChange = (event: Event, value: number | number[]) => {
    const newVol = Array.isArray(value) ? value[0] : value;
    dispatch(change_param({
      module: "global",
      param: "master_gain",
      value: newVol
    }));
  }

  return (
    <Slider
      sx={{
        height: 200,
        '& input[type="range"]': {
          WebkitAppearance: 'slider-vertical',
        },
      }}
      orientation="vertical"
      step={0.02}
      min={0}
      max={1}
      defaultValue={selected.master_gain}
      value={selected.master_gain}
      onChange={handleMasterVolChange}
      aria-label="Master Volume"
      valueLabelDisplay="on"
    />
  )
}

export default MasterGainSlider;