import { URI } from "../../utils/endpoints";

export const getUsersService = async () => {
  const url = `${URI}/api/users/`;
 
  const response = await fetch(url, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });

  return response;
};
