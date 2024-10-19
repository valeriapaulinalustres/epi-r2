import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { caps } from '../data';


const drawerWidth = 240;


interface Props {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));


export default function SideMenu ({open, setOpen}:Props) {
    const theme= useTheme()

    const handleDrawerClose = () => {
        setOpen(false);
      };

    return (
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          marginTop:'75px',
         
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
             marginTop:'75px',
             overflowY: 'auto',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose} >
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {['Hospital de Morón'].map((text, index) => (
            <ListItem key={index} disablePadding dense>
              <ListItemButton dense>
                <ListItemIcon>
                  <LocalHospitalIcon sx={{color: '#FF7999'}} />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {caps.map((text, index) => (
            <ListItem key={index} disablePadding dense>
              <ListItemButton dense>
                <ListItemIcon>
                 <LocalHospitalIcon sx={{color: '#FF7999'}}/>
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
     
      </Drawer>
    )
}