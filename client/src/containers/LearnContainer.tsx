import React from 'react'

import Header from '../components/Header'
import { Routes, Route } from 'react-router-dom'
import One1 from '../components/learn_components/chapters/One1';
import One2 from '../components/learn_components/chapters/One2';
import One3 from '../components/learn_components/chapters/One3';
import One4 from '../components/learn_components/chapters/One4';
import Error from '../components/Error';
import Two1 from '../components/learn_components/chapters/Two1';
import Two2 from '../components/learn_components/chapters/Two2';
import Two3 from '../components/learn_components/chapters/Two3';
import Two4 from '../components/learn_components/chapters/Two4';
import Three1 from '../components/learn_components/chapters/Three1';
import Three2 from '../components/learn_components/chapters/Three2';
import Three3 from '../components/learn_components/chapters/Three3';
import Three4 from '../components/learn_components/chapters/Three4';
import End from '../components/learn_components/chapters/End';

const LearnContainer = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="1" element={<One1 next="/learn/2" nextLabel=': oscillator frequency'/>} />
        <Route path="2" element={<One2 next="/learn/3" nextLabel=': oscillator types'/>} />
        <Route path="3" element={<One3 next="/learn/4" nextLabel=': oscillator recap'/>} />
        <Route path="4" element={<One4 next="/learn/5" nextLabel=': filters'/>} />
        <Route path="5" element={<Two1 next="/learn/6" nextLabel=': filter frequency'/>} />
        <Route path="6" element={<Two2 next="/learn/7" nextLabel=': filter types'/>} />
        <Route path="7" element={<Two3 next="/learn/8" nextLabel=': filter resonance'/>} />
        <Route path="8" element={<Two4 next="/learn/9" nextLabel=': envelopes'/>} />
        <Route path="9" element={<Three1 next="/learn/10" nextLabel=': release'/>} />
        <Route path="10" element={<Three2 next="/learn/11" nextLabel=': decay and sustain'/>} />
        <Route path="11" element={<Three3 next="/learn/12" nextLabel=': putting it together'/>} />
        <Route path="12" element={<Three4 next="/learn/end" nextLabel=''/>} />
        <Route path="end" element={<End next="/play" nextLabel='play'/>} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  )
}

export default LearnContainer