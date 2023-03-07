import styled from '@emotion/styled'
import React from 'react'
import Keyboard from '../controls/Keyboard'
import General from './General' 
// import Presets from './Presets'

const Console = () => {
  return (
    <ConsoleContainer>
      <General/>
      <Keyboard first='c3' last='e4' width={700}/>
      {/* <Presets/> */}
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