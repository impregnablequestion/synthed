import React from 'react'
import DropdownSelector from '../controls/DropdownSelector'
import VertSlider from '../controls/VerticalSlider'
import styled from '@emotion/styled'

const General = () => {
  return (
    <GeneralContainer>
      <VertSlider module='general' param='master_gain' min={0} max={1} step={0.02}/>
      <Selectors>
        <DropdownSelector param='voices' options={[1, 2, 4, 8]}/>
        <DropdownSelector param='octave' options={[-2, -1, 0, 1, 2]}/>
      </Selectors>
    </GeneralContainer>
  )
}

export default General

const Selectors = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

const GeneralContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`