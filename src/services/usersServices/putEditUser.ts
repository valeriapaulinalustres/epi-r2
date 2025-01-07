import { URI } from "../../utils/endpoints";
import { User } from "../../utils/interfaces";


export const putEditUserService = async (body: User) => {
  const url = `${URI}/api/users/edit-user/${body._id}`;
  const response = await fetch(url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  return response;
};
