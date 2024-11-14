

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell, { tableCellClasses } from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import { rosa, salmon, verde } from '../../../utils/colors';
// import UploadSelectForTable from './UploadSelectForTable';
// import AddIcon from '@mui/icons-material/Add';
// import RemoveIcon from '@mui/icons-material/Remove';

// const StyledTableCell = styled(TableCell)(({ theme }) => ({
//   [`&.${tableCellClasses.head}`]: {
//     backgroundColor: salmon,
//     color: theme.palette.common.white,
//     textAlign: 'center',
//     border: '1px solid white', // Añade borde negro en el encabezado
//   },
//   [`&.${tableCellClasses.body}`]: {
//     fontSize: 14,
//     border: '1px solid black', // Añade borde negro a las celdas del cuerpo
//     textAlign: 'center',
//   },
// }));

// const StyledTableRow = styled(TableRow)(({ theme }) => ({
//   '&:nth-of-type(odd)': {
//     backgroundColor: theme.palette.action.hover,
//   },
//   '&:last-child td, &:last-child th': {
//     border: 0,
//   },
// }));

// function createData(
//   service: string,
//   ageSex: string[][],
//   healthInsurance: string,
//   residence: string
// ) {
//   return { service, ageSex, healthInsurance, residence };
// }

// export default function UploadTable() {
//   const [rows, setRows] = React.useState([
//     createData('Medicina General/Fliar', Array(9).fill(["", ""]), "No", "Morón"),
//   ]);

//   const [serviceSelected, setServiceSelected] = React.useState<string[]>(["Medicina General/Fliar"]);

//   const handleAddRow = () => {
//     setRows((prevRows) => [
//       ...prevRows,
//       createData('Medicina General/Fliar', Array(9).fill(["", ""]), "No", "Morón"),
//     ]);
//     setServiceSelected((prev) => [...prev, "Medicina General/Fliar"]);
//   };

//   const handleRemoveRow = () => {
//     if (rows.length > 1) {
//       setRows((prevRows) => prevRows.slice(0, -1));
//       setServiceSelected((prev) => prev.slice(0, -1));
//     }
//   };

//   return (
//     <TableContainer component={Paper}>
//       <Table sx={{ minWidth: 1300 }} aria-label="customized table">
//         <TableHead>
//           <TableRow>
//             <StyledTableCell rowSpan={3}>Servicio</StyledTableCell>
//             <StyledTableCell colSpan={18}>Edad y Sexo</StyledTableCell>
//             <StyledTableCell colSpan={2} rowSpan={2}>Obra Social</StyledTableCell>
//             <StyledTableCell colSpan={2} rowSpan={2}>Partido de Residencia</StyledTableCell>
//             <StyledTableCell rowSpan={3}>Eliminar</StyledTableCell>
//           </TableRow>
//           <TableRow>
//             {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].map((label) => (
//               <StyledTableCell key={label} align="center" colSpan={2}>{label}</StyledTableCell>
//             ))}
//           </TableRow>
//           <TableRow>
//             {Array.from({ length: 9 }).flatMap(() => [
//               <StyledTableCell key={`${Math.random()}-V`} align="center">V</StyledTableCell>,
//               <StyledTableCell key={`${Math.random()}-M`} align="center">M</StyledTableCell>,
//             ])}
//             <StyledTableCell align="center">Sí</StyledTableCell>
//             <StyledTableCell align="center">No</StyledTableCell>
//             <StyledTableCell align="center">Morón</StyledTableCell>
//             <StyledTableCell align="center">Otro</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map((row, index) => (
//             <StyledTableRow key={index}>
//               <StyledTableCell component="th" scope="row">
//                 <UploadSelectForTable
//                   state={serviceSelected}
//                   setState={setServiceSelected}
//                   index={index}
//                 />
//               </StyledTableCell>
//               {row.ageSex.flatMap((pair, subIndex) => (
//                 <React.Fragment key={`ageSex-${subIndex}`}>
//                   <StyledTableCell align="center">{pair[0]}</StyledTableCell>
//                   <StyledTableCell align="center">{pair[1]}</StyledTableCell>
//                 </React.Fragment>
//               ))}
//               <StyledTableCell align="center">{row.healthInsurance === "Si" ? "✔" : ""}</StyledTableCell>
//               <StyledTableCell align="center">{row.healthInsurance === "No" ? "✔" : ""}</StyledTableCell>
//               <StyledTableCell align="center">{row.residence === "Morón" ? "✔" : ""}</StyledTableCell>
//               <StyledTableCell align="center">{row.residence === "Otro" ? "✔" : ""}</StyledTableCell>
//               <StyledTableCell align="center">
//                 <Button onClick={handleRemoveRow} variant="outlined" color="secondary">
//                   <RemoveIcon />
//                 </Button>
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//       <Button onClick={handleAddRow} variant="contained" style={{ margin: '10px', backgroundColor: verde }}>
//         <AddIcon />
//       </Button>
//       <Button onClick={handleRemoveRow} variant="contained" style={{ margin: '10px', backgroundColor: rosa }}>
//         <RemoveIcon />
//       </Button>
//     </TableContainer>
//   );
// }

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { rosa, salmon, verde } from '../../../utils/colors';
import UploadSelectForTable from './UploadSelectForTable';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: salmon,
    color: theme.palette.common.white,
    textAlign: 'center',
    border: '1px solid white', // Añade borde negro en el encabezado
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    border: '1px solid black', // Añade borde negro a las celdas del cuerpo
    textAlign: 'center',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: '1px solid black', // Aplicar borde explícito a la última fila
  },
}));

function createData(
  service: string,
  ageSex: string[][],
  healthInsurance: string,
  residence: string
) {
  return { service, ageSex, healthInsurance, residence };
}

export default function UploadTable() {
  const [rows, setRows] = React.useState([
    createData('Medicina General/Fliar', Array(9).fill(["", ""]), "No", "Morón"),
  ]);

  const [serviceSelected, setServiceSelected] = React.useState<string[]>(["Medicina General/Fliar"]);

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      createData('Medicina General/Fliar', Array(9).fill(["", ""]), "No", "Morón"),
    ]);
    setServiceSelected((prev) => [...prev, "Medicina General/Fliar"]);
  };

  const handleRemoveRow = () => {
    if (rows.length > 1) {
      setRows((prevRows) => prevRows.slice(0, -1));
      setServiceSelected((prev) => prev.slice(0, -1));
    }
  };

  const handleRemoveThisRow = (index: any) => {
    console.log('index', index)
    const actualRows = [...rows]
 actualRows.splice(index,1)
  setRows(actualRows)
console.log('actualRows', actualRows)
  }
console.log(rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell rowSpan={3}>Servicio</StyledTableCell>
            <StyledTableCell colSpan={18}>Edad y Sexo</StyledTableCell>
            <StyledTableCell colSpan={2} rowSpan={2}>Obra Social</StyledTableCell>
            <StyledTableCell colSpan={2} rowSpan={2}>Partido de Residencia</StyledTableCell>
            <StyledTableCell rowSpan={3}>Eliminar</StyledTableCell>
          </TableRow>
          <TableRow>
            {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'].map((label) => (
              <StyledTableCell key={label} align="center" colSpan={2}>{label}</StyledTableCell>
            ))}
          </TableRow>
          <TableRow>
            {Array.from({ length: 9 }).flatMap(() => [
              <StyledTableCell key={`${Math.random()}-V`} align="center">V</StyledTableCell>,
              <StyledTableCell key={`${Math.random()}-M`} align="center">M</StyledTableCell>,
            ])}
            <StyledTableCell align="center">Sí</StyledTableCell>
            <StyledTableCell align="center">No</StyledTableCell>
            <StyledTableCell align="center">Morón</StyledTableCell>
            <StyledTableCell align="center">Otro</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell component="th" scope="row">
                <UploadSelectForTable
                  state={serviceSelected}
                  setState={setServiceSelected}
                  index={index}
                />
              </StyledTableCell>
              {row.ageSex.flatMap((pair, subIndex) => (
                <React.Fragment key={`ageSex-${subIndex}`}>
                  <StyledTableCell align="center">{pair[0]}</StyledTableCell>
                  <StyledTableCell align="center">{pair[1]}</StyledTableCell>
                </React.Fragment>
              ))}
              <StyledTableCell align="center">{row.healthInsurance === "Si" ? "✔" : ""}</StyledTableCell>
              <StyledTableCell align="center">{row.healthInsurance === "No" ? "✔" : ""}</StyledTableCell>
              <StyledTableCell align="center">{row.residence === "Morón" ? "✔" : ""}</StyledTableCell>
              <StyledTableCell align="center">{row.residence === "Otro" ? "✔" : ""}</StyledTableCell>
              <StyledTableCell align="center">
                <Button  onClick={()=>handleRemoveThisRow(index)} variant="outlined" color="secondary">
                  <DeleteOutlineIcon  />
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <Button onClick={handleAddRow} variant="contained" style={{ margin: '10px', backgroundColor: verde }}>
        <AddIcon />
      </Button>
      <Button onClick={handleRemoveRow} variant="contained" style={{ margin: '10px', backgroundColor: rosa }}>
        <RemoveIcon />
      </Button>
    </TableContainer>
  );
}

