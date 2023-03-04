import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectSettings } from '../../features/synthSlice';
import { change_param } from '../../features/synthSlice';

interface TypeSelectorProps {
  module: keyof Settings;
  param: Params;
}


const TypeSelector = ({ module, param }: TypeSelectorProps) => {

  const selected = useAppSelector(selectSettings);
  const dispatch = useAppDispatch();

  const handleChange = (
    event: React.MouseEvent<HTMLElement>, newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      dispatch(change_param({
        module: module,
        param: param,
        value: newAlignment
      }));
    }
  }

  /* 
  have to put the returns in an if statement because:
  - can't read the values off of the props as they are only strings, not objects
  - can't put the if statement in after the ToggleButtonGroup because the
  toggle button group only accepts togglebuttons as children (material UI)

  not ideal but can refactor later
  */

  if (module === "osc" && param === "wave") {
    return (
      <ToggleButtonGroup
        value={selected.osc.wave}
        exclusive
        onChange={handleChange}
        aria-label={module + param}
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
  } else if (module === "filter" && param === "type"){
    return (
      <ToggleButtonGroup
        value={selected.filter.type}
        exclusive
        onChange={handleChange}
        aria-label={module + param}
      >
        <ToggleButton value="lowpass" aria-label="lowpass">
          lowpass
        </ToggleButton>
        <ToggleButton value="highpass" aria-label="highpass">
          highpass
        </ToggleButton>
        <ToggleButton value="bandpass" aria-label="bandpass">
          bandpass
        </ToggleButton>
        <ToggleButton value="notch" aria-label="notch">
          notch
        </ToggleButton>
      </ToggleButtonGroup>
    );
  } else {
    return (
      <div>Incorrect param</div>
    )
  }
}

export default TypeSelector