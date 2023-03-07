import styled from '@emotion/styled'
import React from 'react'
import { useGetPresetsQuery } from '../../app/services/presetsApi'
import NewPreset from './NewPreset'
import PresetCard from './PresetCard'

const Presets = () => {

  const { data, isLoading, error } = useGetPresetsQuery();



  if (isLoading) {
    return (
      <p>Loading presets</p>
    )
  } else if (error) {
    return (
      <p>Presets failed to load</p>
    )
  } else {

    const presets = data?.map((preset: Settings) => {
      return (<PresetCard preset={preset} key={preset.id} />)
    })

    return (
      <PresetBox>
        <NewPreset />
        <PresetList>
          <ul>
            {presets}
          </ul>
        </PresetList>
      </PresetBox>
    )
  }
}

export default Presets;

const PresetBox = styled.div`
  height: 13rem;
`

const PresetList = styled.div`
  overflow: scroll;
`
