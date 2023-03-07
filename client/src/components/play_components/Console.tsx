import styled from '@emotion/styled'
import React from 'react'
import { PresetProps } from '../../types/prop-types'
import Keyboard from '../controls/Keyboard'
import General from './General' 
import Presets from './Presets'

const Console = ({data, isLoading, error}: PresetProps) => {
  return (
    <ConsoleContainer>
      <General/>
      <Keyboard first='c3' last='e4' width={700}/>
      <Presets data={data} isLoading={isLoading} error={error}/>
    </ConsoleContainer>
  )
}

export default Console

const ConsoleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`