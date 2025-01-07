import { useCallback, useState } from "react";
import { User } from "../../../utils/interfaces";
import { putEditUserService } from "../../../services/usersServices/putEditUser";

export const usePostEditUser = () => {
  const [status, setStatus] = useState<string>("LOADING");
  const [errorToShow, setErrorToShow] = useState<{ title?: string; msg?: any }>(
    {}
  );

  const putEditUser = useCallback(async (body: User) => {
    try {
      const response = await putEditUserService(body);
      const statusCode = response.status;
      console.log("status code", statusCode);
      if (statusCode === 200) {
        const parsedResponse = await response.json();
        setStatus("SUCCESS"); 
        console.log('pasa')    
      } else {
        setStatus("ERROR");
        setErrorToShow({
          title: "Edit User Failed",
          msg: `Error ${statusCode}: ${response.statusText}`,
        });
      }
    } catch (error) {
      console.log("error", error);
      setStatus("ERROR");
      setErrorToShow({ title: "Edit User Failed", msg: error });
    
    }
  }, []);

  return { status, errorToShow, putEditUser };
};
