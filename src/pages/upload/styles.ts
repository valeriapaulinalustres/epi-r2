import styled from "styled-components";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { salmon } from "../../utils/colors";
import TableRow from '@mui/material/TableRow';

export const PageContainer = styled.div`
display:flex;
flex-direction:column;

padding: 100px 20px 0px 20px;
    background: linear-gradient(135deg, #f5f7fa, #eff3f9);
gap:1rem;
`

export const SelectorsContainer = styled.div`
display: flex;
flex-direction: row
gap: 1rem;
`

export const InputsForTable = styled.input`
  width: 30px;
  height: 30px;
  -webkit-appearance: none; /* Eliminar estilo por defecto en navegadores WebKit */
  -moz-appearance: textfield; /* Eliminar estilo por defecto en navegadores Mozilla */
  margin: 0;

  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none; /* Ocultar botones de flechas */
    margin: 0; /* Opcional: eliminar margen por defecto */
  }
`;


export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: salmon,
      color: 'white',
      textAlign: 'center',
      border: '1px solid white', // Añade borde negro en el encabezado
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border: '1px solid black', // Añade borde negro a las celdas del cuerpo
      textAlign: 'center',
    },
  }));
  
 export const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: 'white',
    },
    '&:last-child td, &:last-child th': {
      border: '1px solid black', // Aplicar borde explícito a la última fila
    },
  }));

