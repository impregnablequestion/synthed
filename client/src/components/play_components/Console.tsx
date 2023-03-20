import styled from '@emotion/styled'
import React from 'react'
import Keyboard from '../controls/Keyboard'
import General from './General'
// eslint-disable-next-line
import NewPreset from './NewPreset'
import Presets from './Presets'

const Console = () => {
  return (
    <ConsoleContainer>
      <KeyboardContainer>
        <General />
        <Keyboard first='c3' last='e4' width={700} />
      </KeyboardContainer>
      <BottomRight>
        <Presets />
        {/* <h3>add current settings as a preset</h3>
        <NewPreset /> */}
      </BottomRight>
    </ConsoleContainer>
  )
}

export default Console;

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

const BottomRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`