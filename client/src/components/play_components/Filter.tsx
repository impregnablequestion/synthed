import styled from '@emotion/styled'
import React from 'react'
import HorizontalSlider from '../controls/HorizontalSlider'
import TypeSelector from '../controls/TypeSelector'

const Filter = () => {
  return (
    <FilterCard>
      <h2>filter</h2>
      <p>frequency</p>
      <HorizontalSlider
      module='filter' param='frequency' min={20} max={20000} step = {10}
      />
      <p>resonance</p>
      <HorizontalSlider
      module='filter' param='q' min={0} max={5000} step = {10}
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
  gap: 2rem;
`