import { URI } from "../../../utils/endpoints";
import { Data } from "../../../utils/interfaces";

export const saveDataService = async (body: Data) => {
  const url = `${URI}/api/data/save-data`;
  console.log("del service", body);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return response;
};
