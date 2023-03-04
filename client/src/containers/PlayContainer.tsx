import React from 'react'
import Footer from '../components/Footer'
import Console from '../components/play_components/Console'
import ParamsPanel from '../components/play_components/ParamsPanel'


const PlayContainer = () => {
  return (
    <div>
      <ParamsPanel/>
      <Console/>
      <Footer/>
    </div>
  )
}

export default PlayContainer