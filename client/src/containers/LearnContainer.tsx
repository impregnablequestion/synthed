import React from 'react'

import Header from '../components/Header'
import { Outlet, useNavigate } from 'react-router-dom'

const LearnContainer = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Header/>
      <Outlet/>
      <button onClick={()=>navigate("../")}>home</button>
      <button onClick={()=>navigate(-1)}>previous</button>
    </div>
  )
}

export default LearnContainer