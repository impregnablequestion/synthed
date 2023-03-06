import React from 'react'

import Header from '../components/Header'
import { Outlet, useNavigate } from 'react-router-dom'
import HorizontalSlider from '../components/controls/HorizontalSlider';

const LearnContainer = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <p>master volume</p>
      <HorizontalSlider module='general' param='master_gain' min={0} max={1} step={0.01}/>
      <Outlet />
      <button onClick={() => navigate("../")}>home</button>
    </div>
  )
}

export default LearnContainer