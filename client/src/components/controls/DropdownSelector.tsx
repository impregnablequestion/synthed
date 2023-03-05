import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { change_param, selectSettings } from '../../features/synthSlice';

interface DropdownSelectorProps {
  param: Params;
  options: number[];
}

const DropdownSelector = ({param, options}: DropdownSelectorProps) => {

  const selected = useAppSelector(selectSettings)
  const dispatch = useAppDispatch();

  const optionItems = options.map((option:number, index) => {
    return (<MenuItem value={option} key={index}>{option}</MenuItem>)
  })

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(change_param({
      module: "general",
      param: param,
      value: event.target.value
    }));
  };

  const label = (input: string) => `select-${input}`

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id={label(param)}>{param}</InputLabel>
        <Select
          labelId={label(param)}
          id={label(param)}
          value={selected.general[param as Params]}
          label="voices"
          onChange={handleChange}
        >
          {optionItems}
        </Select>
      </FormControl>
    </Box>
  );
}

export default DropdownSelector;