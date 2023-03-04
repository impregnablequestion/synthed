import React from 'react'
import { Link } from 'react-router-dom'

const Welcome = () => {
  return (
    <div>
      <p>Welcome!</p>
      <Link to="/learn">learn</Link>
      <Link to="/play">play</Link>
    </div>
  )
}

export default Welcome