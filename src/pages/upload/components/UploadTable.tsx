

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { celeste, rosa, salmon, verde } from '../../../utils/colors';
import UploadSelectForTable from './UploadSelectForTable';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { InputsForTable, StyledTableCell, StyledTableRow } from '../styles';
import { ageGroups, services } from '../data';


export default function UploadTable({handleSubmit}: any) {
  const [rows, setRows] = React.useState<{ [key: string]: number[] }[]>([
    { "Medicina General/Fliar": Array(22).fill(0) },
  ]);

  const [serviceSelected, setServiceSelected] = React.useState<string[]>([
    "Medicina General/Fliar",
  ]);

  const handleAddRow = () => {
    setRows((prevRows) => [
      ...prevRows,
      { "Nuevo Servicio": Array(22).fill(0) },
    ]);
    setServiceSelected((prev) => [...prev, "Nuevo Servicio"]);
  };

  const handleRemoveRow = () => {
    if (rows.length > 1) {
      setRows((prevRows) => prevRows.slice(0, -1));
      setServiceSelected((prev) => prev.slice(0, -1));
    }
  };

  const handleServiceChange = (newService: string, rowIndex: number) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      const oldService = Object.keys(updatedRows[rowIndex])[0];
      const values = updatedRows[rowIndex][oldService];

      // Reemplaza la clave antigua por la nueva
      updatedRows[rowIndex] = { [newService]: values };
      return updatedRows;
    });
  };

  const handleInputChange = (
    value: number | string,
    rowIndex: number,
    columnIndex: number
  ) => {
    setRows((prevRows) => {
      const updatedRows = [...prevRows];
      const serviceKey = Object.keys(updatedRows[rowIndex])[0];
      const updatedValues = [...updatedRows[rowIndex][serviceKey]];
  
      // Eliminar ceros iniciales
      const parsedValue = value === "" ? 0 : parseInt(value.toString(), 10);
  
      updatedValues[columnIndex] = parsedValue;
      updatedRows[rowIndex] = { [serviceKey]: updatedValues };
      return updatedRows;
    });
  };
  
console.log('rows', rows)
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
            {ageGroups.map((label) => (
              <StyledTableCell key={label} align="center" colSpan={2}>
                {label}
              </StyledTableCell>
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
          {rows.map((row, rowIndex) => {
            const serviceKey = Object.keys(row)[0];
            return (
              <StyledTableRow key={rowIndex}>
                <StyledTableCell component="th" scope="row">
                  <UploadSelectForTable
                    state={serviceSelected}
                    setState={setServiceSelected}
                    index={rowIndex}
                    onServiceChange={handleServiceChange} // Pasamos la nueva función
                  />
                </StyledTableCell>
                {row[serviceKey].map((value, columnIndex) => (
                  <StyledTableCell key={`${rowIndex}-${columnIndex}`} align="center">
                    <InputsForTable

                      // type="number"
                      // value={row[serviceKey][columnIndex]} // Usa el valor actual del estado
                      // onChange={(e) => {
                      //   const inputValue = e.target.value.replace(/^0+/, ""); // Elimina ceros iniciales
                      //   handleInputChange(inputValue === "" ? 0 : parseInt(inputValue, 10), rowIndex, columnIndex); // Reemplaza con 0 si está vacío
                      // }}
                      // style={{ width: '30px', height: '30px' }}
                      type="number"
                      value={row[serviceKey][columnIndex] === 0 ? "" : row[serviceKey][columnIndex]} // Muestra vacío si el valor es 0
                      onChange={(e) => {
                        const inputValue = e.target.value.replace(/^0+/, ""); // Elimina ceros iniciales
                        handleInputChange(inputValue === "" ? 0 : parseInt(inputValue, 10), rowIndex, columnIndex); // Reemplaza con 0 si está vacío
                      }}
                      style={{ width: '30px', height: '30px' }}
                    />
                  </StyledTableCell>
                ))}
                <StyledTableCell align="center">
                  <Button
                    onClick={() => {
                      setRows((prev) => prev.filter((_, i) => i !== rowIndex));
                      setServiceSelected((prev) => prev.filter((_, i) => i !== rowIndex));
                    }}
                    variant="outlined"
                    color="secondary"
                  >
                    <DeleteOutlineIcon />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button
        onClick={handleAddRow}
        variant="contained"
        style={{ margin: "10px", backgroundColor: verde }}
      >
        <AddIcon />
      </Button>
      <Button
        onClick={handleRemoveRow}
        variant="contained"
        style={{ margin: "10px", backgroundColor: rosa }}
      >
        <RemoveIcon />
      </Button>
      <Button
        onClick={()=>handleSubmit(rows)}
        variant="outlined"
        style={{ margin: "10px", backgroundColor: '#ffffff', color: celeste, borderColor: celeste }}
      >
       Guardar
      </Button>
    </TableContainer>
  );
}
