import React from 'react'
import { useNavigate } from 'react-router'

const One1 = ({next}: ChapterProps) => {

  const navigate = useNavigate();

  return (
    <div>
      <h2>1-1: Oscillators</h2>
      <p>In spite of being a long word, an Oscillator is simply something that generates sound</p>
      <p>It is one of the main building </p>
      <button onClick={()=>navigate(next)}>next</button>
    </div>
  )
}

export default One1