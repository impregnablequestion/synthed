import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import LearnContainer from './containers/LearnContainer';
import PlayContainer from './containers/PlayContainer';
import Error from './components/Error';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/learn" element={<LearnContainer/>}/>
          <Route path="/play" element={<PlayContainer/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
