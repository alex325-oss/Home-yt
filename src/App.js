import './App.css';
import { ThemeProvider } from '@mui/material';
import { createTheme } from '@mui/material';




import   Home   from './Home';

function App() {

  //const useStyles = makeStyles({
   // root:{
   // },
 // }) 

  const theme = createTheme({
    palette: {
      primary:{
        main: '#263238',
      },
      secondary: {
        main: '#3f51b5',
      },
    },
  });

  //const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

export default App;
