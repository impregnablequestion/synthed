import React from 'react'
import Keyboard from '../components/controls/Keyboard'
import TypeSelector from '../components/controls/TypeSelector'
import Footer from '../components/Footer'

const PlayContainer = () => {
  return (
    <div>
      <p>
        PlayContainer
      </p>
      <TypeSelector/>
      <Keyboard/>
      <Footer />
    </div>
  )
}

export default PlayContainer