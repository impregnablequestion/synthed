import { Counter } from './features/counter/Counter';
import './App.css';
import AudioEngine from './components/AudioEngine';
import WaveSelector from './components/WaveSelector';

function App() {

  return (
    <div className="App">
      {/* <Counter /> */}
      <AudioEngine />
      <WaveSelector />
    </div>
  );
}

export default App;
