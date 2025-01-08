import { URI } from "../../utils/endpoints";

export const deleteUserService = async (id: string) => {
  const url = `${URI}/api/users/delete-user/${id}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
  });

  return response;
};
