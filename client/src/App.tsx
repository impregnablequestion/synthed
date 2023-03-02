import './App.css';

import MasterGainSlider from './components/display_components/MasterGainSlider';
import WaveSelector from './components/display_components/WaveSelector';
import Keyboard from './components/display_components/Keyboard';

function App() {

  return (
    <div className="App">
      <WaveSelector />
      <MasterGainSlider />
      <Keyboard/>
    </div>
  );
}

export default App;
