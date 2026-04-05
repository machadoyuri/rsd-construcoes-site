// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#0d1b2a', // Azul marinho
    },
    secondary: {
      main: '#1b263b', // Azul acinzentado
    },
    background: {
      default: '#f5f5f5', // Cinza claro de fundo
      paper: '#ffffff',
    },
    text: {
      primary: '#0d1b2a',
      secondary: '#415a77',
    },
  },
  typography: {
    fontFamily: "'Poppins', 'Roboto', sans-serif",
    h1: {
      fontWeight: 700,
      fontSize: '2.5rem',
      color: '#0d1b2a',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
      color: '#1b263b',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
