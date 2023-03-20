import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useGetPresetsQuery } from '../../app/services/presetsApi'
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
      <p></p>
    )
  } else {

    const presets = data?.map((preset: Settings) => {
      return (<PresetCard preset={preset} key={preset.id} loaded={loaded} switchLoaded={handleSwitchLoaded} />)
    })

    return (
      <PresetBox>
        <h2>presets</h2>
        <PresetList>
          {presets}
        </PresetList>
      </PresetBox>
    )
  }
}

export default Presets;

const PresetBox = styled.div`
  height: 19rem;
  /* border: 1px solid black; */
`

const PresetList = styled.div`
  overflow: scroll;
  height: 15rem;
`
