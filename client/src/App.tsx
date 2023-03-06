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
import One1 from './components/learn_components/chapters/One1';
import One2 from './components/learn_components/chapters/One2';

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
          <Route index element={<Welcome/>}/>
          <Route path="learn" element={<LearnContainer/>}>
            <Route index element={<One1 next="2"/>}/>
            <Route path="1" element={<One1 next="2"/>}/>
            <Route path="2" element={<One2 next="3"/>}/>
            <Route path="3" element={<h2>3</h2>}/>
            <Route path="4" element={<h2>4</h2>}/>
            <Route path="*" element={<Error/>}/>
          </Route>
          <Route path="play" element={<PlayContainer/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
