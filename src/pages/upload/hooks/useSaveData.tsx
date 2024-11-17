import { useCallback, useState } from "react";
import { Data } from "../../../utils/interfaces";
import { saveDataService } from "../../../services/login/dataServices/saveDataService";

export const useSaveData = () => {
  const [status, setStatus] = useState<string>("LOADING");
  const [errorToShow, setErrorToShow] = useState<{ title?: string; msg?: any }>(
    {}
  );

  const saveData = useCallback(async (body: Data) => {
    try {
      const response = await saveDataService(body);
      const statusCode = response.status;
      console.log("status code", statusCode);
      if (statusCode === 200) {
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        setStatus("SUCCESS");     
      } else {
        setStatus("ERROR");
        setErrorToShow({
          title: "Save Data Failed",
          msg: `Error ${statusCode}: ${response.statusText}`,
        });
      }
    } catch (error) {
      console.log("error", error);
      setStatus("ERROR");
      setErrorToShow({ title: "Save Data Failed", msg: error });
    
    }
  }, []);

  return { status, errorToShow, saveData };
};
