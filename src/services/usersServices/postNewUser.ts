import { URI } from "../../utils/endpoints";
import { UserWithoutId } from "../../utils/interfaces";


export const postNewUserService = async (body: UserWithoutId) => {
  const url = `${URI}/api/users/register`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return response;
};
