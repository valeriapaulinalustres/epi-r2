import { useCallback, useState } from "react";
import { User, UserWithoutId } from "../../../utils/interfaces";
import { saveDataService } from "../../../services/dataServices/saveDataService";
import { postNewUserService } from "../../../services/usersServices/postNewUser";
import { deleteUserService } from "../../../services/usersServices/deleteUserService";

export const useDeleteUser = () => {
  const [status, setStatus] = useState<string>("LOADING");
  const [errorToShow, setErrorToShow] = useState<{ title?: string; msg?: any }>(
    {}
  );

  const deleteUser = useCallback(async (id: string) => {
    try {
      const response = await deleteUserService(id);
      const statusCode = response.status;
      if (statusCode === 200) {
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        setStatus("SUCCESS");     
      } else {
        setStatus("ERROR");
        setErrorToShow({
          title: "Delete User Failed",
          msg: `Error ${statusCode}: ${response.statusText}`,
        });
      }
    } catch (error) {
      setStatus("ERROR");
      setErrorToShow({ title: "Delete User Failed", msg: error });
    
    }
  }, []);

  return { setStatus, status, errorToShow, deleteUser };
};
