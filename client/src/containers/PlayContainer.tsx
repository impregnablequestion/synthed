import React from 'react'
import Footer from '../components/Footer'
import Console from '../components/play_components/Console'
import ParamsPanel from '../components/play_components/ParamsPanel'
import Header from '../components/Header'
import { useGetPresetsQuery } from '../app/services/presetsApi'

const PlayContainer = () => {

  const {data, error, isLoading} = useGetPresetsQuery();

  return (
    <div>
      <Header/>
      <ParamsPanel/>
      <Console data={data} isLoading={isLoading} error={error}/>
      <Footer/>
    </div>
  )
}

export default PlayContainer