import { URI } from "../../utils/endpoints";
import { Data } from "../../utils/interfaces";

export const getDataService = async () => {
  const url = `${URI}/api/data/`;
 
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return response;
};
