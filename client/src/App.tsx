import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './components/Welcome';
import LearnContainer from './containers/LearnContainer';
import PlayContainer from './containers/PlayContainer';
import Header from './components/Header';
import Footer from './components/Footer';
import Error from './components/Error';

function App() {

  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/" element={<Welcome/>}/>
          <Route path="/learn" element={<LearnContainer/>}/>
          <Route path="/play" element={<PlayContainer/>}/>
          <Route path="*" element={<Error/>}/>
        </Routes>
      </Router>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
