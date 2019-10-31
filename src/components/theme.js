import { createMuiTheme } from '@material-ui/core/styles';

// All the following keys are optional, as default values are provided.
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#017DBC',
      dark: '#017DBC',
    },
    secondary: {
      main: '#5C9A32',
      dark: '#5C9A32',
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