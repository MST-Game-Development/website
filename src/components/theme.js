import { createMuiTheme } from '@material-ui/core/styles';

// All the following keys are optional, as default values are provided.
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#003b49',
      dark: '#003b49',
    },
    secondary: {
      main: '#78BE20',
      dark: '#78BE20',
    },
    error: {
      light: '#e57373',
      main: '#f44336',
      dark: '#d32f2f',
      contrastText: '#f44336',
    },
  },
});

export default theme;