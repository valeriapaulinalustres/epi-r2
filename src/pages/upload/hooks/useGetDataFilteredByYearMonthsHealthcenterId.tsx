import { useCallback, useState } from "react";
import { BodyGetDataFilteredYearMonthsHealthcenterId, Data } from "../../../utils/interfaces";
import { getDataFilteredByYearMonthsHealthcenterIdService } from "../../../services/login/dataServices/getDataFilteredByYearMonthsHealthcenterIdService";

export const useGetDataFilteredByYearMonthsHealthcenterId = () => {
  const [status, setStatus] = useState<string>("LOADING");
  const [errorToShow, setErrorToShow] = useState<{ title?: string; msg?: any }>(
    {}
  );
  const [dataFilteredByYearMonthsHealthcenterId, setDataFilteredByYearMonthsHealthcenterId] = useState<Data[]>()

  const getDataFilteredByYearMonthsHealthcenterId = useCallback(async (body: BodyGetDataFilteredYearMonthsHealthcenterId) => {
    try {
      const response = await getDataFilteredByYearMonthsHealthcenterIdService(body);
      const statusCode = response.status;
      console.log("status code", statusCode);
      if (statusCode === 200) {
        const parsedResponse = await response.json();
        console.log(parsedResponse);
        if (Array.isArray(parsedResponse)) {
          setDataFilteredByYearMonthsHealthcenterId(parsedResponse)
          setStatus("SUCCESS");     
        } else {
          setDataFilteredByYearMonthsHealthcenterId([])
          setStatus("SUCCESS"); 
        }
      } else {
        setStatus("ERROR");
        setErrorToShow({
          title: "Get Filtered Data Failed",
          msg: `Error ${statusCode}: ${response.statusText}`,
        });
      }
    } catch (error) {
      console.log("error", error);
      setStatus("ERROR");
      setErrorToShow({ title: "Get Filtered Data Failed from server", msg: error });
    
    }
  }, []);

  return { status, errorToShow, getDataFilteredByYearMonthsHealthcenterId, dataFilteredByYearMonthsHealthcenterId };
};
