import styled from '@emotion/styled'
import React from 'react'
import Keyboard from '../controls/Keyboard'
import General from './General' 
import Presets from './Presets'

const Console = () => {
  return (
    <ConsoleContainer>
      <KeyboardContainer>
        <General/>
        <Keyboard first='c3' last='e4' width={700}/>
      </KeyboardContainer>
      <Presets/>
    </ConsoleContainer>
  )
}

export default Console

const ConsoleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

`

const KeyboardContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 1rem;
  padding: 2rem;
`