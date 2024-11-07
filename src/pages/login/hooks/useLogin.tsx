import { useCallback, useEffect, useState } from "react";
import { useLoginContext } from "../../../contexts/contextHooks/useLoginContext";
import { loginFromService } from "../../../services/login/loginService";

interface Props {
    email: string;
    password: string;
}

export const useLogin = ({ email, password }: Props) => {
    const [status, setStatus] = useState<string>("LOADING");
    const [errorToShow, setErrorToShow] = useState<{ title?: string; msg?: any }>({});

    const { setUser } = useLoginContext();

    const login = useCallback(async ({ email, password }: Props) => {
        try {
            const response = await loginFromService({ email, password });
            const statusCode = response.status;

            if (statusCode === 200) {
                const parsedResponse = await response.json();
                console.log(parsedResponse);
                setUser(parsedResponse.user);
                setStatus("SUCCESS");
            } else {
                setStatus("ERROR");
                setErrorToShow({
                    title: "Login Failed",
                    msg: `Error ${statusCode}: ${response.statusText}`,
                });
            }
        } catch (error) {
            console.log("error", error);
            setStatus("ERROR");
            setErrorToShow({ title: "Login Failed", msg: error });
        }
    }, [setUser]);

    useEffect(() => {
        login({ email, password });
    }, [login, email, password]);

    return { status, errorToShow, login };
};
