import styled from '@emotion/styled'
import React from 'react'
import Envelope from './Envelope'
import Filter from './Filter'
import Osc from './Osc'

const ParamsPanel = () => {
  return (
    <ParamsContainer>
      <Osc />
      <Filter />
      <Envelope/>
    </ParamsContainer>
  )
}

export default ParamsPanel

const ParamsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`