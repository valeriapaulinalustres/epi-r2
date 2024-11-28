import { useState } from "react";
import { PageContainer } from "../upload/styles";
import UsersTable from "./components/UsersTable";
import ModalLayout from "../../components/modalLayout/ModalLayout";
import { User } from "../../utils/interfaces";

export default function Users() {
  const [addEditUserModal, setAddEditUserModal] = useState<boolean>(false);
  const [edition, setEdition] = useState<boolean>(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  function handleSave() {}

  function handleDeleteUser(id: string) {}

  return (
    <PageContainer>
      <h1>Gestión de Usuarios</h1>
      <UsersTable
        setEdition={setEdition}
        addEditUserModal={addEditUserModal}
        setAddEditUserModal={setAddEditUserModal}
        handleDeleteUser={handleDeleteUser}
        setUserToEdit={setUserToEdit}
      />
      {addEditUserModal && (
        <ModalLayout
          open={addEditUserModal}
          setOpen={setAddEditUserModal}
          title={edition ? "Editar usuario" : "Crear usuario"}
          setEdition={setEdition}
          handleSave={handleSave}
        />
      )}
    </PageContainer>
  );
}
