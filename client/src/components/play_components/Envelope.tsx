import styled from '@emotion/styled'
import React from 'react'
import LogSlider from '../controls/LogSlider'

const Envelope = () => {
  return (
    <EnvelopeCard>
    <h2>envelope</h2>
    <EnvelopeParams>
      <EnvelopeParam>
        <LogSlider module='envelope' param='attack' min={0.005} max={1} step={0.005} vertical/>
        <p>Attack</p>
      </EnvelopeParam>
      <EnvelopeParam>
        <LogSlider module='envelope' param='decay' min={0.005} max={1} step={0.005} vertical/>
        <p>Decay</p>
      </EnvelopeParam>
      <EnvelopeParam>
        <LogSlider module='envelope' param='sustain' min={0.005} max={1} step={0.005} vertical/>
        <p>Sustain</p>
      </EnvelopeParam>
      <EnvelopeParam>
        <LogSlider module='envelope' param='release' min={0.1} max={8} step={0.005} vertical/>
        <p>Release</p>
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
  padding: 1rem;
`