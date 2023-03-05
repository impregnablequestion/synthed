import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import LearnContainer from './containers/LearnContainer';
import PlayContainer from './containers/PlayContainer';
import Error from './components/Error';
import { useGetPresetsQuery, useGetPresetByIDQuery } from './app/services/presetsApi';

function App() {

  const { data, error, isLoading } = useGetPresetByIDQuery(1);

  console.log(data, error, isLoading);

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
