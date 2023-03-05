import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <p>hi! welcome to...</p>
      <h1>synthed</h1>
      <p>would you like to....</p>
      <OptionsContainer>
        <Link to="/learn">learn</Link>
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