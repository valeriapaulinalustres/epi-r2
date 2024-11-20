import { useCallback, useState } from "react";
import { Data } from "../../../utils/interfaces";
import { getDataService } from "../../../services/login/dataServices/getDataService";


export const useGetData = () => {
  const [status, setStatus] = useState<string>("LOADING");
  const [errorToShow, setErrorToShow] = useState<{ title?: string; msg?: any }>(
    {}
  );

  const getData = useCallback(async () => {
    try {
      const response = await getDataService();
      const statusCode = response.status;
      console.log("status code", statusCode);
      if (statusCode === 200) {
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        setStatus("SUCCESS");     
      } else {
        setStatus("ERROR");
        setErrorToShow({
          title: "Get Data Failed",
          msg: `Error ${statusCode}: ${response.statusText}`,
        });
      }
    } catch (error) {
      console.log("error", error);
      setStatus("ERROR");
      setErrorToShow({ title: "Get Data Failed", msg: error });
    
    }
  }, []);

  return { status, errorToShow, getData };
};