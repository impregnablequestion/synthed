import styled from '@emotion/styled'
import React from 'react'
import HorizontalSlider from '../controls/HorizontalSlider'
import TypeSelector from '../controls/TypeSelector'
import VertSlider from '../controls/VerticalSlider'

const Osc = () => {
  return (
    <OscCard>
      <h2>oscillator</h2>
      <OscParams>
        <Controls>
          <p>coarse tune</p>
          <HorizontalSlider
            module='osc' param='coarse_tune' min={-12} max={12} step={1}
          />
          <p>fine tune</p>
          <HorizontalSlider
            module='osc' param='fine_tune' min={-100} max={100} step={1}
          />
          <TypeSelector
            module='osc' param='wave'
          />
        </Controls>
        <VertSlider
          module='osc' param='gain' min={0} max={1} step={0.01}
        />
      </OscParams>
    </OscCard>
  )
}

export default Osc;

const OscCard = styled.div`
  display: flex;
  flex-direction: column;
`

const OscParams = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`