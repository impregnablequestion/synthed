import React from 'react'
import { PresetProps } from '../../types/prop-types';

const Presets = ({data, isLoading, error}: PresetProps) => {

  const presets = data

  if (isLoading) {
    return(
      <p>Loading presets</p>
    )
  } else if (error) {
    return(
      <p>Presets failed to load</p>
    )
  } else {

    console.log(presets);

    return(
      <div>Presets</div>
    )
  }
  

}

export default Presets