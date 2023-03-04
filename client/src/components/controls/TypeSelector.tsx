import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSettings } from '../../features/synthSlice';
import { change_param } from '../../features/synthSlice';


const TypeSelector = () => {

  const selected = useAppSelector(selectSettings);  
  const dispatch = useAppDispatch();
  
  const handleChange = (event: React.MouseEvent<HTMLElement>, newAlignment: string | null) => {
    if (newAlignment!==null) {
      dispatch(change_param({
        module: "osc",
        param: "wave",
        value: newAlignment
      }));
    }
  }

  return (
    <ToggleButtonGroup
      value={selected.osc.wave}
      exclusive
      onChange={handleChange}
      aria-label="wave"
    >
      <ToggleButton value="sine" aria-label="sine">
        sine
      </ToggleButton>
      <ToggleButton value="triangle" aria-label="triangle">
        triangle
      </ToggleButton>
      <ToggleButton value="square" aria-label="justified">
        square
      </ToggleButton>
      <ToggleButton value="sawtooth" aria-label="sawtooth">
        sawtooth
      </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default TypeSelector