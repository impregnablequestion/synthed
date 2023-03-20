import styled from '@emotion/styled'
import React from 'react'
import LinSlider from '../controls/LinSlider'
import LogSlider from '../controls/LogSlider'
import TypeSelector from '../controls/TypeSelector'

const Filter = () => {
  return (
    <FilterCard>
      <h2>filter</h2>
      <p>frequency</p>
      <LogSlider
      module='filter' param='frequency' min={20} max={20000} step = {10}
      />
      <p>resonance</p>
      <LinSlider
      module='filter' param='q' min={0.1} max={50} step = {0.25}
      />
      <TypeSelector module='filter' param='type'/>
    </FilterCard>
  )
}

export default Filter

const FilterCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`