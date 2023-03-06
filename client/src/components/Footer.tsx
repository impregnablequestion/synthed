import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={()=>{navigate("../")}}>home</button>
      <p>made by séamus ryan</p>
    </div>
  )
}

export default Footer