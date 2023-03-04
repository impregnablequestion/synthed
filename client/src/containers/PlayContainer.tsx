import React from 'react'
import HorizontalSlider from '../components/controls/HorizontalSlider'
import Keyboard from '../components/controls/Keyboard'
import TypeSelector from '../components/controls/TypeSelector'
import Footer from '../components/Footer'

const PlayContainer = () => {
  return (
    <div>
      <p>
        PlayContainer
      </p>
      <TypeSelector module="filter" param="type"/>
      <TypeSelector module="osc" param="wave"/>
      <HorizontalSlider module='filter' param='frequency' min={50} max={20000} step={20}/>
      <Keyboard/>

      <Footer />
    </div>
  )
}

export default PlayContainer