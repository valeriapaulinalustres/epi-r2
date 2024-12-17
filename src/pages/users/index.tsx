import { useEffect, useState } from "react";
import { PageContainer } from "../upload/styles";
import UsersTable from "./components/UsersTable";
import { User } from "../../utils/interfaces";
import AddEditUser from "./addEditUser/AddEditUser";
import { useGetUsers } from "./hooks/useGetUsers";
import MainSpinner from "../../components/spinners/MainSpinner";

export default function Users() {
  const [addEditUserModal, setAddEditUserModal] = useState<boolean>(false);
  const [edition, setEdition] = useState<boolean>(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

 

  function handleDeleteUser(id: string) {}

  const {getUsers, status, errorToShow, users} = useGetUsers()


  useEffect(()=>{
getUsers()
  },[])

  if (status === 'FAILED') {
    return (
      <div>{errorToShow.msg}</div> 
    )
  }

  return (
    <>
     {
      status === 'LOADING'
      ? <MainSpinner />
      :
    <PageContainer>
      <h1>Gestión de Usuarios</h1>
      <UsersTable
        setEdition={setEdition}
        addEditUserModal={addEditUserModal}
        setAddEditUserModal={setAddEditUserModal}
        handleDeleteUser={handleDeleteUser}
        setUserToEdit={setUserToEdit}
        users={users}
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
    }
    </>
   
  );
}
