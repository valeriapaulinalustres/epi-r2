
import 'uplot/dist/uPlot.min.css';
import styled from "styled-components";
import { useTheme } from '@mui/material/styles';

import { useEffect, useState } from 'react';
import BasicChart from '../../../../../components/charts/BasicChart';
import { fakeInitialData } from './fakeInitialData';
import { useMainContext } from '../../../../../contexts/contextHooks/useMainContext';

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

const [initialDataFilteredByYearMonthsAndHeathCenter, setInitialDataFilteredByYearMonthsAndHeathCenter] = useState([])

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
    const celesteTransparente = 'rgba(19, 200, 255, 0.2)'
  const celeste = 'rgba(19, 200, 255, 1)'

  const colors = [salmon, lila, rosa, amarillo, verde, celeste]
  const colorsWithOpacity = [salmonTransparente, lilaTransparente, rosaTransparente, amarilloTransparente, verdeTransparente, celesteTransparente]

  const {year, months, healthCenter} = useMainContext()

 useEffect(()=>{

  const filter: any = fakeInitialData.filter(el=>el.year === year && el.healthCenter === healthCenter && months.includes(el.month))
 setInitialDataFilteredByYearMonthsAndHeathCenter(filter)
 


console.log('initial',initialDataFilteredByYearMonthsAndHeathCenter)
},[year, months, healthCenter])


  return (
    <Main open={open} theme={theme} style={{marginTop:'100px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <DrawerHeader theme={theme} />
      {/* <div style={{width:'800px', height:'400px', display:'flex', justifyContent:'center', alignItems:'center'}}> */}
      
      {
  initialDataFilteredByYearMonthsAndHeathCenter.map((el: any, index: number) => {
    // Extraer el objeto 'data'
    const healthData = el.data;

  
    const datasets = Object.keys(healthData).map((key, index2) => {
      return {
        label: key.charAt(0).toUpperCase() + key.slice(1), 
        data: healthData[key], 
        borderColor: colors[index2],
        backgroundColor: colorsWithOpacity[index2], 
      };
    });

    return (
      <BasicChart
        key={index}
        title={`${el.healthCenter} - ${el.month} ${el.year}`} // Ajustar el título dinámicamente
        barLabels={[
          '0-1',
          '1-4',
          '5-9',
          '10-14',
          '15-19',
          '20-34',
          '35-49',
          '50-65',
          'más de 65',
        ]}
        datasets={datasets} // Pasar los datasets generados dinámicamente
      />
    );
  })
}

      {/* <BasicChart 
       
       title={'Ejemplo'}
       barLabels={[ '0-1', 
        '1-4',
        '5-9',
        '10-14',
        '15-19',
        '20-34',
        '35-49',
        '50-65',
        'más de 65']}
      //  label1={'Clínica'}
      //  label2={'Ginecología'}
      //  label3={'Obstericia'}
      //  label4={'Odontología'}
      //  label5={'Enfermería'}
      //  data1={[5,4,3]}
      //  data2={[6,7,7]}
      //  data3={[8,3,4]}
      //  data4={[7,9,5]}
      //  data5={[2,6,7]}
      //  borderColor1={'rgba(255, 151, 0, 1)'}
      //  borderColor2={'rgba(136, 19, 255, 1)'}
      //  borderColor3={'rgba(255, 0, 60, 1)'}
      //  borderColor4={'rgba(250, 255, 0, 1)'}
      //  borderColor5={'rgba(0, 255, 102, 1)'}
      //  bgColor1={'rgba(255, 151, 0, 0.2)'}
      //  bgColor2={'rgba(136, 19, 255, 0.2)'}
      //  bgColor3={'rgba(255, 0, 60, 0.2)'}
      //  bgColor4={'rgba(250, 255, 0, 0.2)'}
      //  bgColor5={'rgba(0, 255, 102, 0.2)'}

   
      datasets={[
        {
          label: 'Clínica',
          data: [5, 4, 3],
          borderColor: 'rgba(255, 151, 0, 1)',
          backgroundColor: 'rgba(255, 151, 0, 0.2)',
        },
        {
          label: 'Ginecología',
          data: [6, 7, 7],
          borderColor: 'rgba(136, 19, 255, 1)',
          backgroundColor: 'rgba(136, 19, 255, 0.2)',
        },
        {
          label: 'Obstetricia',
          data: [8, 3, 4],
          borderColor: 'rgba(255, 0, 60, 1)',
          backgroundColor: 'rgba(255, 0, 60, 0.2)',
        },
        // Puedes añadir más datasets aquí de forma dinámica
      ]}
     
    /> */}
      {/* </div> */}
     
    </Main>
  );
}
