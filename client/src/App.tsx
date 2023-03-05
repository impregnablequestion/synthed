import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import LearnContainer from './containers/LearnContainer';
import PlayContainer from './containers/PlayContainer';
import Error from './components/Error';
import { useAppDispatch } from './app/hooks';
import { useGetPresetByIDQuery } from './app/services/presetsApi';
import { useEffect } from 'react';
import { load_preset } from './features/synthSlice';

function App() {

  const dispatch = useAppDispatch();
  const {data, error, isLoading } = useGetPresetByIDQuery(1);

  useEffect(()=>{
    if (!isLoading && data) {
      dispatch(load_preset(data))
    } else if (!isLoading && !data) {
      console.log("Presets failed to load: ", error);
    } else {
      console.log("Loading")
    }
  }, [isLoading, data, dispatch, error])

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
