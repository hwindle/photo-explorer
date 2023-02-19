import './App.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PhotosRouter from './PhotosRouter/PhotosRouter';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <main id='app'>
        <PhotosRouter />
      </main>
    </ThemeProvider>
  );
}

export default App;
