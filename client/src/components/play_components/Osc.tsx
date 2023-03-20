import styled from '@emotion/styled'
import React from 'react'
import TypeSelector from '../controls/TypeSelector'
import LogSlider from '../controls/LogSlider'
import LinSlider from '../controls/LinSlider'

const Osc = () => {
  return (
    <OscCard>
      <h2>oscillator</h2>
      <OscParams>
        <Controls>
          <p>coarse tune</p>
          <LinSlider
            module='osc' param='coarse_tune' min={-12} max={12} step={1}
          />
          <p>fine tune</p>
          <LinSlider
            module='osc' param='fine_tune' min={-100} max={100} step={1}
          />
          <TypeSelector
            module='osc' param='wave'
          />
        </Controls>
        <LogSlider
          module='osc' param='gain' min={0.001} max={1} step={0.01} vertical
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