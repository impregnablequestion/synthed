import './App.css';
import AudioEngine from './components/audio_components/AudioEngine';
import MasterGainSlider from './components/display_components/MasterGainSlider';
import WaveSelector from './components/display_components/WaveSelector';

function App() {

  return (
    <div className="App">
      <AudioEngine />
      <WaveSelector />
      <MasterGainSlider />
    </div>
  );
}

export default App;
