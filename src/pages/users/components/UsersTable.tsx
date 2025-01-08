

import { useEffect, useState } from 'react';
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

import { SnackbarType, User } from '../../../utils/interfaces';
import { StyledTableCell, StyledTableRow } from '../../upload/styles';
import { FlexRow } from '../../../generalStyles/styles';
import { Elderly } from '@mui/icons-material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useDeleteUser } from '../hooks/useDeleteUser';
import AutohideSnackbar from '../../../components/snackbars/AutohideSnackbar';
import { useGetUsers } from '../hooks/useGetUsers';

interface Props {
  addEditUserModal: boolean;
  setAddEditUserModal: any;
  setEdition: any;
  setUserToEdit: any;
  users: any
  getUsers: any
}


export default function UsersTable ({ addEditUserModal, setAddEditUserModal, setEdition, setUserToEdit, users, getUsers}: Props) {
  //const [rows, setRows] = React.useState<User[]>([]);

    const [openSnackbar, setOpenSnackbar] = useState<SnackbarType>({
      open: false,
      message: "",
      color: "",
    });

   const {setStatus: setStatusOnDelete, status: statusOnDelete, errorToShow: errorToShowOnDelete, deleteUser} = useDeleteUser()
  

  function handleEdit (el: User) {
    setAddEditUserModal(true); 
    setEdition(true)
    setUserToEdit(el)
  }

  function handleDeleteUser(id: string) {
    deleteUser(id)
  }

  useEffect(()=>{
    if (statusOnDelete === "SUCCESS") {
      setOpenSnackbar({
        open: true,
        message:"Ususario eliminado",
        color: verde
      })
      getUsers()
      setStatusOnDelete('LOADING')
    } else if (statusOnDelete === "ERROR") {
      setOpenSnackbar({
        open: true,
        message: "Error al eliminar usuario",
        color: rosa
      })
    }
  },[statusOnDelete])

  function handleChangePassword (el: User ) {}
  console.log('statusOnDelete', statusOnDelete)
console.log('users', users)
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
          {users?.map((el: any, rowIndex: number) => {         
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
                    onClick={()=>{handleEdit(el)}}
                  >
                    <CreateOutlinedIcon 
                    />
                  </Button>
                  <Button           
                  onClick={()=>handleDeleteUser(el._id)}       
                    variant="outlined"
                    color="secondary"
                  >
                    <DeleteOutlineIcon />
                  </Button>
                  {/* <Button                   
                    variant="outlined"
                    color="secondary"
                    onClick={()=>{handleChangePassword(el)}}
                  >
                    <LockOpenIcon 
                    /> 
                  </Button> */}
                    </FlexRow> 
                </StyledTableCell>
              </StyledTableRow>
            );
          })}
        </TableBody>
      </Table>
      <Button
        onClick={()=>{setAddEditUserModal(true); setUserToEdit({})}}
        variant="contained"
        style={{ margin: "10px", backgroundColor: verde }}
      >
        <AddIcon />
      </Button>
  <AutohideSnackbar
            openSnackbar={openSnackbar}
            setOpenSnackbar={setOpenSnackbar}
          />
    </TableContainer>
  );
}
