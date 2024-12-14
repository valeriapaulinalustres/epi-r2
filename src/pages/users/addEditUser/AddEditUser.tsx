import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import ModalLayout from "../../../components/modalLayout/ModalLayout";
import { useEffect, useState } from "react";
import { FlexRow } from "../../../generalStyles/styles";
import Button from "../../../components/button/Button";
import { celeste } from "../../../utils/colors";

interface Props {
  addEditUserModal: boolean;
  setAddEditUserModal: any;
  edition: boolean;
  setEdition: any;
  userToEdit: any;
  setUserToEdit: any;
}

export default function AddEditUser({
  addEditUserModal,
  setAddEditUserModal,
  edition,
  setEdition,
  userToEdit,
  setUserToEdit,
}: Props) {
  const [userDataFromForm, setUserDataFromForm] = useState<any>({});

  useEffect(() => {
    if (Object.values(userToEdit).length > 0) {
      setUserDataFromForm({ ...userToEdit });
    }
  }, []);

  function handleSave() {
setAddEditUserModal(false)
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
        <FlexRow>
          <TextField
            size="small"
            margin="normal"
            color="warning"
            label="Nombre"
            value={userDataFromForm.first_name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const userDataFromFormCopy: any = { ...userDataFromForm };
              userDataFromFormCopy.first_name = event.target.value;
              setUserDataFromForm(userDataFromFormCopy);
            }}
          />

          <TextField
            size="small"
            margin="normal"
            color="warning"
            label="Apellido"
            value={userDataFromForm.last_name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const userDataFromFormCopy: any = { ...userDataFromForm };
              userDataFromFormCopy.last_name = event.target.value;
              setUserDataFromForm(userDataFromFormCopy);
            }}
          />
        </FlexRow>

        <TextField
          size="small"
          margin="normal"
          color="warning"
          label="Profesión"
          value={userDataFromForm.profession}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const userDataFromFormCopy: any = { ...userDataFromForm };
            userDataFromFormCopy.profession = event.target.value;
            setUserDataFromForm(userDataFromFormCopy);
          }}
        />

        <TextField
          size="small"
          margin="normal"
          color="warning"
          label="Trabajo"
          value={userDataFromForm.job}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const userDataFromFormCopy: any = { ...userDataFromForm };
            userDataFromFormCopy.job = event.target.value;
            setUserDataFromForm(userDataFromFormCopy);
          }}
        />

        <TextField
          size="small"
          margin="normal"
          color="warning"
          label="email"
          value={userDataFromForm.email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const userDataFromFormCopy: any = { ...userDataFromForm };
            userDataFromFormCopy.email = event.target.value;
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
            <FormControlLabel value="admin" control={<Radio size="small" color="warning" />} label="admin" />
            <FormControlLabel value="client" control={<Radio size="small" color="warning"/>} label="client" />
          </RadioGroup>
        </FormControl>

      </>
    </ModalLayout>
  );
}
