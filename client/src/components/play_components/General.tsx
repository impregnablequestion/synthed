import React from 'react'
import DropdownSelector from '../controls/DropdownSelector'
import styled from '@emotion/styled'

const General = () => {
  return (
    <GeneralContainer>
      <Selectors>
        <DropdownSelector param='voices' options={[1, 2, 4, 6]}/>
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
  padding: 2rem;
`