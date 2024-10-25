
import 'uplot/dist/uPlot.min.css';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';

import { useEffect } from 'react';
import BasicChart from '../../../../../components/charts/BasicChart';

const drawerWidth = 240;

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerHeader = styled('div')<{ theme: any }>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Main = styled('main')<{ open?: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function MainContent({ open, setOpen }: Props) {
  const theme = useTheme();
  const salmonTransparente = 'rgba(255, 151, 0, 0.2)';
  const salmon = 'rgba(255, 151, 0, 1)';
  const lilaTransparente = 'rgba(136, 19, 255, 0.2)';
  const lila = 'rgba(136, 19, 255, 1)';
  const rosaTransparente = 'rgba(255, 0, 60, 0.2)';
  const rosa = 'rgba(255, 0, 60, 1)';
  const amarillo = 'rgba(250, 255, 0, 1)';
  const amarilloTransparente = 'rgba(250, 255, 0, 0.2)';
  const verde = 'rgba(0, 255, 102, 1)';
  const verdeTransparente = 'rgba(0, 255, 102, 0.2)';
  return (
    <Main open={open} theme={theme} style={{marginTop:'100px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <DrawerHeader theme={theme} />
      {/* <div style={{width:'800px', height:'400px', display:'flex', justifyContent:'center', alignItems:'center'}}> */}
      <BasicChart 
       
       title={'Ejemplo'}
       barLabels={['0 a 5', '6 a 20', '20 a 60']}
       label1={'Clínica'}
       label2={'Ginecología'}
       label3={'Obstericia'}
       label4={'Odontología'}
       label5={'Enfermería'}
       data1={[5,4,3]}
       data2={[6,7,7]}
       data3={[8,3,4]}
       data4={[7,9,5]}
       data5={[2,6,7]}
       borderColor1={'rgba(255, 151, 0, 1)'}
       borderColor2={'rgba(136, 19, 255, 1)'}
       borderColor3={'rgba(255, 0, 60, 1)'}
       borderColor4={'rgba(250, 255, 0, 1)'}
       borderColor5={'rgba(0, 255, 102, 1)'}
       bgColor1={'rgba(255, 151, 0, 0.2)'}
       bgColor2={'rgba(136, 19, 255, 0.2)'}
       bgColor3={'rgba(255, 0, 60, 0.2)'}
       bgColor4={'rgba(250, 255, 0, 0.2)'}
       bgColor5={'rgba(0, 255, 102, 0.2)'}
    
     
    />
      {/* </div> */}
     
    </Main>
  );
}
