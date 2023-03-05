import React from 'react'
import { useAppDispatch } from '../../app/hooks';
import { useGetPresetsQuery } from '../../app/services/presetsApi'
import { load_preset } from '../../features/synthSlice';

const Presets = () => {

  const {data, error, isLoading}= useGetPresetsQuery();
  const dispatch = useAppDispatch();

  const handleClick = (preset: Settings) => {
    dispatch(load_preset(preset))
  }

  const presets = data?.map((preset: Settings) => {
    return(<li key={preset.id}>
      <button onClick={()=>handleClick(preset)}>{preset.name}</button>
    </li>)
  })

  if (isLoading) {
    return(<p>
      loading...
    </p>)
  } else if (error) {
    console.log(error);
    return(
      <p>failed to load</p>
    )
  } else {
    return (
      <ul>
        {presets}
      </ul>
    )
  }

}

export default Presets