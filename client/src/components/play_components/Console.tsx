import styled from '@emotion/styled'
import React from 'react'
import Keyboard from '../controls/Keyboard'
import General from './General' 
import Presets from './Presets'

const Console = () => {
  return (
    <ConsoleContainer>
      <Keyboard/>
      <Presets/>
      <General/>
    </ConsoleContainer>
  )
}

export default Console

const ConsoleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 4rem
`