import { useEffect, useMemo, useState } from "react";
import UploadSelect from "./components/UploadSelect";
import { PageContainer, SelectorsContainer } from "./styles";
import { getCurrentMonthName, getCurrentYear } from "../../utils/functions";
import { yearsList } from "../dashboard/sideBar/components/header/components/yearSelector/data";
import { monthList } from "../dashboard/sideBar/components/header/components/monthSelector/data";
import { caps } from "../dashboard/sideBar/components/data";
import UploadTable from "./components/UploadTable";
import { useSaveData } from "./hooks/useSaveData";
import AutohideSnackbar from "../../components/snackbars/AutohideSnackbar";
import { rosa, verde } from "../../utils/colors";
import { SnackbarType } from "../../utils/interfaces";

interface Data {
  healthCenterId: number;
  year: number;
  month: string;
  data: any;
}


export default function Upload() {
  const currentYear = useMemo(() => getCurrentYear, []);
  const currentMonth = useMemo(() => getCurrentMonthName(), []);

  const [month, setMonth] = useState<string>(currentMonth);
  const [year, setYear] = useState<number>(currentYear);
  const [healthCenterId, setHealthCenterId] = useState<number | undefined>(
    undefined
  );
  const [openSnackbar, setOpenSnackbar] = useState<SnackbarType>({
    open: false,
    message: "",
    color: ""
  });

  const { status, saveData, errorToShow } = useSaveData();

  useEffect(() => {
    if (status === "ERROR") {
      setOpenSnackbar({
        open: true,
        message: "Error, no se pudieron guardar los datos",
        color: rosa
      });
    } else if (status === "SUCCESS") {
      setOpenSnackbar({
        open: true,
        message: "Datos guardados con éxito",
        color: verde
      });
    }
  }, [status]);

  function handleSubmit(tableInfo: { [key: string]: number[] }[]) {
    if (!healthCenterId || !year || !month) {
      return setOpenSnackbar({
        open: true,
        message: "Por favor, completar Centro de Salud",
        color: rosa
      });
    } else {
      const body: Data = {
        healthCenterId,
        year,
        month,
        data: {},
      };

      tableInfo.forEach((el, index) => {
        const key = Object.keys(el)[0];
        const values = Object.values(el)[0];
        body.data[key] = values;
      });
      console.log("body", body);
      saveData(body);
    }
  }
  console.log("status", status);
  console.log("error", errorToShow);
  return (
    <PageContainer>
      <h1>Ingreso de datos de la planilla mensual</h1>
      <SelectorsContainer>
        <UploadSelect
          label="Año"
          state={year}
          setState={setYear}
          options={yearsList}
        />
        <UploadSelect
          label="Mes"
          state={month}
          setState={setMonth}
          options={monthList}
        />
        <UploadSelect
          label="Centro de Salud"
          state={healthCenterId}
          setState={setHealthCenterId}
          options={caps}
        />
      </SelectorsContainer>
      <UploadTable handleSubmit={handleSubmit} />
      <AutohideSnackbar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
    </PageContainer>
  );
}
