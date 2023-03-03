import { Slider } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { change_param, selectSettings } from '../../features/synthSlice';

const FilterFreqSlider = () => {
  const selected = useAppSelector(selectSettings);  
  const dispatch = useAppDispatch();
  
  const handleMasterVolChange = (event: Event, value: number | number[]) => {
    const newFreq = Array.isArray(value) ? value[0] : value;
    dispatch(change_param({
      module: "filter",
      param: "frequency",
      value: newFreq
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
      step={10}
      min={0}
      max={20000}
      value={selected.filter.frequency}
      onChange={handleMasterVolChange}
      aria-label="Master Volume"
      valueLabelDisplay="on"
    />
  )
}

export default FilterFreqSlider