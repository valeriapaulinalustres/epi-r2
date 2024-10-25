import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MonthSelector from './components/monthSelector';
import YearSelector from './components/yearSelector';
import { useMainContext } from '../../../../../contexts/contextHooks/useMainContext';

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }: any) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default function Header({ open, setOpen }: Props) {
  const theme = useTheme();

  const {healthCenter} = useMainContext()

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  return (
    <AppBar position="fixed" open={open} style={{ marginTop: '69px', backgroundColor: 'white', color: 'blue' }}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              mr: 2,
              color:'#FF7999'
            },
            open && { display: 'none' },
          ]}
        >
          <MenuIcon />
        </IconButton>
     
        <MonthSelector />
        <YearSelector />
           <Typography variant="h6" noWrap component="div" sx={{color:'#FF7999'}}>
        {healthCenter}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
