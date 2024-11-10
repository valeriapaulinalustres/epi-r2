import { URI } from "../../utils/endpoints";

interface Params {
  email: string;
  password: string;
}

export const loginFromService = async ({ email, password }: Params) => {
  const url = `${URI}/api/users/login`;
  console.log("del service", email, password);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  return response;
};
