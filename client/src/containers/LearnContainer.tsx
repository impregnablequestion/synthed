import React from 'react'

import Header from '../components/Header'
import { Routes, Route, useNavigate } from 'react-router-dom'
import One1 from '../components/learn_components/chapters/One1';
import One2 from '../components/learn_components/chapters/One2';
import One3 from '../components/learn_components/chapters/One3';
import One4 from '../components/learn_components/chapters/One4';
import Error from '../components/Error';

const LearnContainer = () => {

  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <Routes>
        <Route path="1" element={<One1 next="/learn/2" />} />
        <Route path="2" element={<One2 next="/learn/3" />} />
        <Route path="3" element={<One3 next="/learn/4" />} />
        <Route path="4" element={<One4 next="/learn/5" />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <button onClick={() => navigate("../")}>home</button>
    </div>
  )
}

export default LearnContainer