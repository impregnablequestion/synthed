import './App.css';

import MasterGainSlider from './components/display_components/MasterGainSlider';
import WaveSelector from './components/display_components/WaveSelector';
import Keyboard from './components/controls/Keyboard';
import FilterFreqSlider from './components/display_components/FilterFreqSlider';
import VertSlider from './components/controls/VerticalSlider';
import HorizontalSlider from './components/controls/HorizontalSlider';

function App() {

  return (
    <div className="App">
      <Keyboard/>
      <WaveSelector />
      <MasterGainSlider />
      <FilterFreqSlider />
      <VertSlider module='general' param="master_gain"  min={0} max={1} step={0.05}/>
      <HorizontalSlider module='general' param="master_gain"  min={0} max={1} step={0.05}/>
    </div>
  );
}

export default App;
