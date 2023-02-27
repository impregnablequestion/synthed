import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {

  const context = new AudioContext();

  const oscillator = context.createOscillator();
  oscillator.type = "sine";
  oscillator.frequency.value = 440;
  const gain = context.createGain();

  oscillator.connect(gain).connect(context.destination);

  const handleClick = () => {
    oscillator.start()
  }

  return (
    <div className="App">
        <Counter />
      <button onClick={handleClick}>play</button>
    </div>
  );
}

export default App;
