import React from 'react'
import Footer from '../components/Footer'
import Console from '../components/play_components/Console'
import ParamsPanel from '../components/play_components/ParamsPanel'
import Header from '../components/Header'

import { selectSettings } from '../features/synthSlice'
import { useAppSelector } from '../app/hooks'

const PlayContainer = () => {
  
  const selected = useAppSelector(selectSettings)

  return (
    <div>
      <p>selected preset: {selected.name}</p>
      <Header/>
      <ParamsPanel/>
      <Console/>
      <Footer/>
    </div>
  )
}

export default PlayContainer