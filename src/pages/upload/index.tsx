import { useMemo, useState } from "react";
import UploadSelect from "./components/UploadSelect";
import { PageContainer } from "./styles";
import { getCurrentMonthName, getCurrentYear } from "../../utils/functions";
import { yearsList } from "../dashboard/sideBar/components/header/components/yearSelector/data";
import { monthList } from "../dashboard/sideBar/components/header/components/monthSelector/data";
import { caps } from "../dashboard/sideBar/components/data";

export default function Upload() {
  const currentYear = useMemo(() => getCurrentYear, []);
  const currentMonth = useMemo(() => getCurrentMonthName(), []);


  const [month, setMonth] = useState<string>(currentMonth);
  const [year, setYear] = useState<number>(currentYear);
  //const { healthCenter, setHealthCenter } = useState<Caps>({});

  return (
    <PageContainer>
      <h1>Ingreso de datos de la planilla mensual</h1>
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
        state={month}
        setState={setMonth}
        options={caps}
      />
    </PageContainer>
  );
}
