import { URI } from "../../utils/endpoints";
import { User } from "../../utils/interfaces";


export const postNewUserService = async (body: User) => {
  const url = `${URI}/api/users/register`;
  console.log("del service", body);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return response;
};
