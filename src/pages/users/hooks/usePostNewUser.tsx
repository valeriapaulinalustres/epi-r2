import { useCallback, useState } from "react";
import { User, UserWithoutId } from "../../../utils/interfaces";
import { saveDataService } from "../../../services/dataServices/saveDataService";
import { postNewUserService } from "../../../services/usersServices/postNewUser";

export const usePostNewUser = () => {
  const [status, setStatus] = useState<string>("LOADING");
  const [errorToShow, setErrorToShow] = useState<{ title?: string; msg?: any }>(
    {}
  );

  const postNewUser = useCallback(async (body: UserWithoutId) => {
    try {
      const response = await postNewUserService(body);
      const statusCode = response.status;
      console.log("status code", statusCode);
      if (statusCode === 200) {
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        setStatus("SUCCESS");     
      } else {
        setStatus("ERROR");
        setErrorToShow({
          title: "Save User Failed",
          msg: `Error ${statusCode}: ${response.statusText}`,
        });
      }
    } catch (error) {
      console.log("error", error);
      setStatus("ERROR");
      setErrorToShow({ title: "Save User Failed", msg: error });
    
    }
  }, []);

  return { status, errorToShow, postNewUser };
};
