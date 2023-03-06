import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {


  return (
    <div>
      <p>hi! welcome to...</p>
      <h1>synthed</h1>
      <p>this is a <Sp>synth ed</Sp>ucation website</p>
      <p>step by step, you can learn how a synthesizer works, <br/>and put it into practice at the end in the play view!</p>
      <p>would you like to....</p>
      <OptionsContainer>
        <Link to="/learn/1">learn</Link>
        <Link to="/play">play</Link>
      </OptionsContainer>
    </div>
  )
}

export default Welcome

const OptionsContainer = styled.div`
  display:flex;
  justify-content: space-around;
  padding: 10rem;
`

const Sp = styled.span`
  font-weight: 700;
  color: green
`