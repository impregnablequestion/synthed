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
import { createTheme, ThemeProvider } from '@mui/material/styles';

// here if i need to declare 
declare module '@mui/material/styles' {
}

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: "#000000"
      }
    },
    typography: {
      fontFamily: ['Figtree', 'sans-serif'].join(","),
      button: {
        textTransform: 'none'
      }
    }
  })

  const dispatch = useAppDispatch();
  const { data, error, isLoading } = useGetPresetByIDQuery(1);

  useEffect(() => {
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
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route index element={<Welcome />} />
            <Route path="learn/*" element={<LearnContainer />} />
            <Route path="play" element={<PlayContainer />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
