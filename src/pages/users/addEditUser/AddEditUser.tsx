import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from "@mui/material";
import ModalLayout from "../../../components/modalLayout/ModalLayout";
import { useEffect, useState } from "react";
import { FlexRow, FlexRowCenter } from "../../../generalStyles/styles";
import Button from "../../../components/button/Button";
import { celeste, rosa, verde } from "../../../utils/colors";
import { usePostNewUser } from "../hooks/usePostNewUser";
import { SnackbarType, UserWithoutId } from "../../../utils/interfaces";
import AutohideSnackbar from "../../../components/snackbars/AutohideSnackbar";
import { haveAllKeysAValidValue } from "../../../utils/functions";

interface Props {
  addEditUserModal: boolean;
  setAddEditUserModal: any;
  edition: boolean;
  setEdition: any;
  userToEdit: any;
  setUserToEdit: any;
  getUsers: any
}

export default function AddEditUser({
  addEditUserModal,
  setAddEditUserModal,
  edition,
  setEdition,
  userToEdit,
  setUserToEdit,
  getUsers
}: Props) {
  const [userDataFromForm, setUserDataFromForm] = useState<UserWithoutId>({
    first_name: '',
  last_name: '',
  profession: '',
  job: '',
  email: '',
  password: '',
  permission: 'client',
  });

  const [openSnackbar, setOpenSnackbar] = useState<SnackbarType>({
    open: false,
    message: "",
    color: ""
  });

  const {status, errorToShow, postNewUser} = usePostNewUser()

  useEffect(() => {
    if (Object.values(userToEdit).length > 0) {
      setUserDataFromForm({ ...userToEdit });
    }
  }, []);

console.log('status', status)

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
      getUsers()
    }
  }, [status]);

  function handleSave() {
   if (haveAllKeysAValidValue(userDataFromForm)){
     setAddEditUserModal(false)
     postNewUser(userDataFromForm)
   } else {
    setOpenSnackbar({
      open: true,
      message: "Por favor complete todos los campos",
      color: rosa
    });
   }
      console.log("userDataFromForm", userDataFromForm);
  }

  
  return (
    <ModalLayout
      open={addEditUserModal}
      setOpen={setAddEditUserModal}
      title={edition ? "Editar usuario" : "Crear usuario"}
      setEdition={setEdition}
      handleSave={handleSave}
    >
      <>
        <FlexRowCenter>
          <TextField
            size="small"
            margin="normal"
            color="warning"
            label="Nombre"
            type="string"
            value={userDataFromForm.first_name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              if (/^[a-zA-Z\s]*$/.test(value)) { 
                setUserDataFromForm({ ...userDataFromForm, first_name: value });
              } else {
                setOpenSnackbar({
                  open: true,
                  message: "Sólo se permiten letras y espacios",
                  color: rosa
                });
              }
            }}
          />

          <TextField
            size="small"
            margin="normal"
            color="warning"
            label="Apellido"
              type="string"
            value={userDataFromForm.last_name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const value = event.target.value;
              if (/^[a-zA-Z\s]*$/.test(value)) { 
                setUserDataFromForm({ ...userDataFromForm, last_name: value });
              } else {
                setOpenSnackbar({
                  open: true,
                  message: "Sólo se permiten letras y espacios",
                  color: rosa
                });
              }
            }}
          />
        </FlexRowCenter>

        <TextField
          size="small"
          margin="normal"
          color="warning"
          label="Profesión"
            type="string"
          value={userDataFromForm.profession}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            if (/^[a-zA-Z\s]*$/.test(value)) { 
              setUserDataFromForm({ ...userDataFromForm, profession: value });
            } else {
              setOpenSnackbar({
                open: true,
                message: "Sólo se permiten letras y espacios",
                color: rosa
              });
            }
          }}
        />

        <TextField
          size="small"
          margin="normal"
          color="warning"
          label="Trabajo"
            type="string"
          value={userDataFromForm.job}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            if (/^[a-zA-Z\s]*$/.test(value)) { 
              setUserDataFromForm({ ...userDataFromForm, job: value });
            } else {
              setOpenSnackbar({
                open: true,
                message: "Sólo se permiten letras y espacios",
                color: rosa
              });
            }
          }}
        />

        <TextField
          size="small"
          margin="normal"
          color="warning"
          label="email"
            type="email"
          value={userDataFromForm.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const userDataFromFormCopy: any = { ...userDataFromForm };
            userDataFromFormCopy.email = event.target.value;
            setUserDataFromForm(userDataFromFormCopy);
          }}
        />

<TextField
          size="small"
          margin="normal"
          color="warning"
          label="Password"
            type="string"
          value={userDataFromForm.password}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const userDataFromFormCopy: any = { ...userDataFromForm };
            userDataFromFormCopy.password = event.target.value;
            setUserDataFromForm(userDataFromFormCopy);
          }}
        />

        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group" color="warning">
            Permisos
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={userDataFromForm.permission}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const userDataFromFormCopy: any = { ...userDataFromForm };
              userDataFromFormCopy.permission = event.target.value;
              setUserDataFromForm(userDataFromFormCopy);
            }}
          >
            <Tooltip title="Sólo accede a los gráficos" arrow placement="right-start">         
            <FormControlLabel value="client" control={<Radio size="small" color="warning" />} label="client" />
        </Tooltip>
        <Tooltip title="Accede a gráficos y cargar" arrow placement="right-start">
            <FormControlLabel value="admin" control={<Radio size="small" color="warning"/>} label="admin" />
          </Tooltip>  
          <Tooltip title="Acceso total. Gestiona usuarios" arrow placement="right-start">
            <FormControlLabel value="superAdmin" control={<Radio size="small" color="warning"/>} label="superAdmin" />
            </Tooltip>  
          </RadioGroup>
        </FormControl>
        <AutohideSnackbar
        openSnackbar={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
      />
      </>
    </ModalLayout>
  );
}
