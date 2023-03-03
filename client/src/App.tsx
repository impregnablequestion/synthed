import './App.css';

import MasterGainSlider from './components/display_components/MasterGainSlider';
import WaveSelector from './components/display_components/WaveSelector';
import Keyboard from './components/display_components/Keyboard';
import FilterFreqSlider from './components/display_components/FilterFreqSlider';

function App() {

  return (
    <div className="App">
      <Keyboard/>
      <WaveSelector />
      <MasterGainSlider />
      <FilterFreqSlider />
    </div>
  );
}

export default App;
