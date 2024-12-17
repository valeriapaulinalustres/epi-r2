import { useCallback, useState } from "react";
import { getUsersService } from "../../../services/usersServices/getUsersService";



export const useGetUsers = () => {
  const [status, setStatus] = useState<string>("LOADING");
  const [errorToShow, setErrorToShow] = useState<{ title?: string; msg?: any }>(
    {}
  );
  const [users, setUsers] = useState<any>()

  const getUsers = useCallback(async () => {
    try {
      const response = await getUsersService();
      const statusCode = response.status;
      console.log("status code", statusCode);
      if (statusCode === 200) {
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        setStatus("SUCCESS");  
        setUsers(parsedResponse)   
      } else {
        setStatus("ERROR");
        setErrorToShow({
          title: "Get Users Failed",
          msg: `Error ${statusCode}: ${response.statusText}`,
        });
      }
    } catch (error) {
      console.log("error", error);
      setStatus("ERROR");
      setErrorToShow({ title: "Get Users Failed", msg: error });
    
    }
  }, []);

  return { status, errorToShow, getUsers, users };
};
