import './App.css';
import AudioEngine from './components/audio_components/AudioEngine';
import WaveSelector from './components/display_components/WaveSelector';

function App() {

  return (
    <div className="App">
      <AudioEngine />
      <WaveSelector />
      {/* <Keyboard /> */}
    </div>
  );
}

export default App;
