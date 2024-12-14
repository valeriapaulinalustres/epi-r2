import { useState } from "react";
import { PageContainer } from "../upload/styles";
import UsersTable from "./components/UsersTable";
import { User } from "../../utils/interfaces";
import AddEditUser from "./addEditUser/AddEditUser";

export default function Users() {
  const [addEditUserModal, setAddEditUserModal] = useState<boolean>(false);
  const [edition, setEdition] = useState<boolean>(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

 

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
      <AddEditUser 
      addEditUserModal={addEditUserModal}
      setAddEditUserModal={setAddEditUserModal}
      edition={edition}
      setEdition={setEdition}
      userToEdit={userToEdit}
      setUserToEdit={setUserToEdit}
      />
      )}
    </PageContainer>
  );
}
