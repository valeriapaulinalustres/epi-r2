

import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { celeste, rosa, salmon, verde } from '../../../utils/colors';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

import { User } from '../../../utils/interfaces';
import { StyledTableCell, StyledTableRow } from '../../upload/styles';
import { FlexRow } from '../../../generalStyles/styles';
import { Elderly } from '@mui/icons-material';

interface Props {
  addEditUserModal: boolean;
  setAddEditUserModal: any;
  handleDeleteUser: any;
  setEdition: any;
  setUserToEdit: any;
}


export default function UsersTable ({ addEditUserModal, setAddEditUserModal, handleDeleteUser, setEdition, setUserToEdit}: Props) {
  const [rows, setRows] = React.useState<User[]>([
    {
      id: '123',
        first_name: 'vale',
        last_name: 'Lustres',
        profession: 'médica',
        job: 'Epidemio',
        email: 'va@gmail.com',
        permission: 'superAdmin'
    }
  ]);

  function handleEdit (el: User) {
    setAddEditUserModal(true); 
    setEdition(true)
    setUserToEdit(el)
  }
  
console.log('rows', rows)
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1300 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nombre</StyledTableCell>
            <StyledTableCell>Apellido</StyledTableCell>
            <StyledTableCell>Profesión</StyledTableCell>
            <StyledTableCell>Trabajo</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Permiso</StyledTableCell>
            <StyledTableCell></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((el, rowIndex) => {         
            return (
              <StyledTableRow key={rowIndex}>              
                  <StyledTableCell  align="center">
                  {el.first_name}
                  </StyledTableCell>  
                  <StyledTableCell align="center">
                  {el.last_name}
                  </StyledTableCell>  
                  <StyledTableCell align="center">
                  {el.profession}
                  </StyledTableCell>  
                  <StyledTableCell align="center">
                  {el.job}
                  </StyledTableCell>       
                  <StyledTableCell  align="center">
                  {el.email}
                  </StyledTableCell>     
                  <StyledTableCell align="center">
                  {el.permission}
                  </StyledTableCell>   
                <StyledTableCell align="center">
                   <FlexRow>
                    
                  <Button                   
                    variant="outlined"
                    color="secondary"
                  >
                    <CreateOutlinedIcon 
                    onClick={()=>{handleEdit(el)}}
                    />
                  </Button>
                  <Button           
                  onClick={()=>handleDeleteUser(el.id)}       
                    variant="outlined"
                    color="secondary"
                  >
                    <DeleteOutlineIcon />
                  </Button>
                    </FlexRow> 
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button
        onClick={()=>{setAddEditUserModal(true)}}
        variant="contained"
        style={{ margin: "10px", backgroundColor: verde }}
      >
        <AddIcon />
      </Button>
  
    </TableContainer>
  );
}
