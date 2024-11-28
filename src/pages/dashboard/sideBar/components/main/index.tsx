import "uplot/dist/uPlot.min.css";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import BasicChart from "../../../../../components/charts/BasicChart";
import { fakeInitialData } from "./fakeInitialData";
import { useMainContext } from "../../../../../contexts/contextHooks/useMainContext";
import {
  amarillo,
  amarilloTransparente,
  celeste,
  celesteTransparente,
  lila,
  lilaTransparente,
  rosa,
  rosaTransparente,
  salmon,
  salmonTransparente,
  verde,
  verdeTransparente,
} from "../../../../../utils/colors";
import { caps } from "../data";
import { getHealthCenterNameFromId } from "../../../../../utils/functions";
import { useGetData } from "../../../../upload/hooks/useGetData";
import { useGetDataFilteredByYearMonthsHealthcenterId } from "../../../../upload/hooks/useGetDataFilteredByYearMonthsHealthcenterId";
import MainSpinner from "../../../../../components/spinners/MainSpinner";
import { ageGroups } from "../../../../upload/data";

const drawerWidth = 240;

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DrawerHeader = styled("div")<{ theme: any }>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Main = styled("main")<{ open?: boolean }>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export default function MainContent({ open, setOpen }: Props) {


  const theme = useTheme();

  const colors = [salmon, lila, rosa, amarillo, verde, celeste];
  const colorsWithOpacity = [
    salmonTransparente,
    lilaTransparente,
    rosaTransparente,
    amarilloTransparente,
    verdeTransparente,
    celesteTransparente,
  ];

  const { year, months, healthCenter } = useMainContext();

  const {status, errorToShow, getDataFilteredByYearMonthsHealthcenterId, dataFilteredByYearMonthsHealthcenterId} = useGetDataFilteredByYearMonthsHealthcenterId()

useEffect(()=>{
  getDataFilteredByYearMonthsHealthcenterId({
    year, months, healthCenterId: healthCenter.id
  })
},[year, months, healthCenter, getDataFilteredByYearMonthsHealthcenterId])

if (status === 'FAILED') {
  return (
    <div>{errorToShow.msg}</div> 
  )
}

  return (
    <Main
      open={open}
      theme={theme}
      style={{
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <DrawerHeader theme={theme} />
{
  status === 'LOADING'
  ? <MainSpinner />
  : dataFilteredByYearMonthsHealthcenterId?.map(
    (el: any, index: number) => {
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
          title={`${getHealthCenterNameFromId(el.healthCenterId)} - ${el.month} ${el.year}`} // Ajustar el título dinámicamente
          barLabels={ageGroups}
          datasets={datasets} // Pasar los datasets generados dinámicamente
        />
      );
    }
  )
  }    
  {
    dataFilteredByYearMonthsHealthcenterId?.length === 0 
    &&
    <div>No hay datos de este mes, año y centro de salud en la base de datos</div> 
  }
    </Main>
  );
}
