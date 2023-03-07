import Footer from '../components/Footer'
import Console from '../components/play_components/Console'
import ParamsPanel from '../components/play_components/ParamsPanel'
import Header from '../components/Header'

const PlayContainer = () => {

  return (
    <div>
      <Header/>
      <ParamsPanel/>
      <Console/>
      <Footer/>
    </div>
  )
}

export default PlayContainer