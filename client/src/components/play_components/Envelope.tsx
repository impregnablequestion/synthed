import styled from '@emotion/styled'
import React from 'react'
import VertSlider from '../controls/VerticalSlider'

const Envelope = () => {
  return (
    <EnvelopeCard>
    <h2>envelope</h2>
    <EnvelopeParams>
      <EnvelopeParam>
        <VertSlider module='envelope' param='attack' min={0.005} max={1} step={0.005}/>
        <p>A</p>
      </EnvelopeParam>
      <EnvelopeParam>
        <VertSlider module='envelope' param='decay' min={0.005} max={1} step={0.005}/>
        <p>D</p>
      </EnvelopeParam>
      <EnvelopeParam>
        <VertSlider module='envelope' param='sustain' min={0.005} max={1} step={0.005}/>
        <p>S</p>
      </EnvelopeParam>
      <EnvelopeParam>
        <VertSlider module='envelope' param='release' min={0.1} max={8} step={0.005}/>
        <p>R</p>
      </EnvelopeParam>
    </EnvelopeParams>
    </EnvelopeCard>
  )
}

export default Envelope

const EnvelopeCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`

export const EnvelopeParams = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`

export const EnvelopeParam = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`