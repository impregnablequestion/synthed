import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useGetPresetsQuery } from '../../app/services/presetsApi'
import NewPreset from './NewPreset'
import PresetCard from './PresetCard'

const Presets = () => {

  const { data, isLoading, error } = useGetPresetsQuery();

  const [loaded, setLoaded] = useState(0)

  const handleSwitchLoaded = (id: number) => {
    setLoaded(id)
  }

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
      return (<PresetCard preset={preset} key={preset.id} loaded={loaded} switchLoaded={handleSwitchLoaded} />)
    })

    return (
      <PresetBox>
        <h3>presets</h3>
        <NewPreset />
        <PresetList>
          {presets}
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
