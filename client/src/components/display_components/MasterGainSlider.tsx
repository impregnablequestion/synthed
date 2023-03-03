import { Slider } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { change_param, selectSettings } from '../../features/synthSlice';


const MasterGainSlider = () => {
  
  const selected = useAppSelector(selectSettings);  
  const dispatch = useAppDispatch();
  
  const handleMasterVolChange = (event: Event, value: number | number[]) => {
    const newVol = Array.isArray(value) ? value[0] : value;
    dispatch(change_param({
      module: "general",
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
      value={selected.general.master_gain}
      onChange={handleMasterVolChange}
      aria-label="Master Volume"
      valueLabelDisplay="on"
    />
  )
}

export default MasterGainSlider;