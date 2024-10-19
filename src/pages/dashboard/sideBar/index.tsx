import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/header/Header';
import SideMenu from './components/SideMenu';
import MainContent from './components/main';


export default function SideBar() {

  const [open, setOpen] = React.useState(false);

  

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header 
      open={open}
      setOpen={setOpen}
      />
      <SideMenu
      open={open}
      setOpen={setOpen} 

      />
      <MainContent 
       open={open}
       setOpen={setOpen} 
      />
    </Box>
  );
}
