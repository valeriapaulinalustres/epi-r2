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
  const [
    initialDataFilteredByYearMonthsAndHeathCenter,
    setInitialDataFilteredByYearMonthsAndHeathCenter,
  ] = useState([]);

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

  useEffect(() => {
    const filter: any = fakeInitialData.filter(
      (el) =>
        el.year === year &&
        el.healthCenterId === healthCenter.id &&
        months.includes(el.month)
    );
    setInitialDataFilteredByYearMonthsAndHeathCenter(filter);

    console.log("initial", initialDataFilteredByYearMonthsAndHeathCenter);
  }, [year, months, healthCenter]);

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

      {initialDataFilteredByYearMonthsAndHeathCenter.map(
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
              barLabels={[
                "0-1",
                "1-4",
                "5-9",
                "10-14",
                "15-19",
                "20-34",
                "35-49",
                "50-65",
                "más de 65",
              ]}
              datasets={datasets} // Pasar los datasets generados dinámicamente
            />
          );
        }
      )}
    </Main>
  );
}
