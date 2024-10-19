import { createTheme } from '@mui/material/styles';

// Definir los colores personalizados
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#dc004e', 
    },
    background: {
      default: '#f5f5f5',
    },
    error: {
      main: '#FF7999',
    },
    // Agrega más colores si es necesario
    
  },
  spacing: 8,
});

export default theme;
