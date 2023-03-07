import styled from '@emotion/styled'
import React from 'react'
import NewPreset from './NewPreset'

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
      <PresetBox>
        <NewPreset/>
        <ul>
          {presets?.map((preset: Settings) => {
            return(<li key={preset.id}>{preset.name}</li>)
          })}
        </ul>

      </PresetBox>
    )
  }
}

export default Presets;

const PresetBox = styled.div`
  height: 13rem;
  border: 1px solid black;
`

