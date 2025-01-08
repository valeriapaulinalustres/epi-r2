import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAtLeastSixCharacters, isValidEmail } from "./utils/validations";
import { Container, Error, Example, InputInform, LoginCard, LogoContainer } from "./styles";
import Button from "../../components/button/Button";
import LogoEpi from "../../assets/logoEpi.png";
import { useLogin } from "./hooks/useLogin";
import MainSpinner from "../../components/spinners/MainSpinner";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const {status, errorToShow, login} = useLogin({email, password}) 

  // const resultLogin = {
  //   isSuccess: true,
  //   isError: false,
  //   data: {
  //     email: "",
  //     first_name: "",
  //     last_name: "",
  //     token: "",
  //   },
  // };

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "SUCCESS") {
    //  const { email, first_name, last_name, token } = resultLogin.data;

      navigate("/dashboard");
    } else if (status === "ERROR") {
      setErrorPassword(
        "No puede iniciar sesión con las credenciales proporcionadas"
      )
    }  else if (status === "LOADING") {
     <MainSpinner />
    }
  }, [status,  navigate]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    try {
      const isValidVariableEmail = isValidEmail(email);
      const isCorrectPassword = isAtLeastSixCharacters(password);

      if (isValidVariableEmail && isCorrectPassword) {

        login({email, password})


      }

      if (!isValidVariableEmail) {
        setErrorMail("Invalid email");
      } else {
        setErrorMail("");
      }
      if (!isCorrectPassword) {
        setErrorPassword("Password must be at least 4 characters");
      } else {
        setErrorPassword("");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errorMail) {
      setErrorMail("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (errorPassword) {
      setErrorPassword("");
    }
  };

  return (
    <Container>
      <LoginCard>
        <LogoContainer>
          <img src={LogoEpi} alt="Logo" width={100} />
          <p>R2</p>
        </LogoContainer>
        <form onSubmit={handleSubmit}>
          <InputInform 
          type="email" 
          onChange={handleEmailChange} 
          value={email} 
          placeholder="email"/>
          {/* <Example>va@gmail.com</Example> */}
          <Error>{errorMail}</Error>
          <InputInform
            type="password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="password"
          />
          {/* <Example>1234</Example> */}
          <Error>{errorPassword}</Error>
          <Button buttonType="submit" title="Login" />
        </form>
      </LoginCard>
    </Container>
  );
};

export default Login;
