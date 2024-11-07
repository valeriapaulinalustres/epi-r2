import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { isAtLeastSixCharacters, isValidEmail } from "./utils/validations";
import { Container, Error, Example, LoginCard, LogoContainer } from "./styles";
import Button from "../../components/button/Button";
import LogoEpi from "../../assets/logoEpi.png";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMail, setErrorMail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const resultLogin = {
    isSuccess: true,
    isError: false,
    data: {
      email: "",
      first_name: "",
      last_name: "",
      token: "",
    },
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (resultLogin.isSuccess && resultLogin.data) {
  //     const { email, first_name, last_name, token } = resultLogin.data;

  //     navigate("/dashboard");
  //   } else if (resultLogin.isError) {
  //     setErrorPassword(
  //       "No puede iniciar sesión con las credenciales proporcionadas"
  //     );
  //   }
  // }, [resultLogin,  navigate]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // try {
    //   const isValidVariableEmail = isValidEmail(email);
    //   const isCorrectPassword = isAtLeastSixCharacters(password);

    //   if (isValidVariableEmail && isCorrectPassword) {
    //     const request = {
    //       email,
    //       password,
    //     };

    //   }

    //   if (!isValidVariableEmail) {
    //     setErrorMail("Invalid email");
    //   } else {
    //     setErrorMail("");
    //   }
    //   if (!isCorrectPassword) {
    //     setErrorPassword("Password must be at least 6 characters");
    //   } else {
    //     setErrorPassword("");
    //   }
    // } catch (error) {
    //   console.log("error", error);
    // }
    navigate("/dashboard");
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
          <input 
          type="email" 
          onChange={handleEmailChange} 
          value={email} 
          placeholder="email"/>
          <Example>va@gmail.com</Example>
          <Error>{errorMail}</Error>
          <input
            type="password"
            onChange={handlePasswordChange}
            value={password}
            placeholder="password"
          />
          <Example>123456</Example>
          <Error>{errorPassword}</Error>
          <Button buttonType="submit" title="Login" />
        </form>
      </LoginCard>
    </Container>
  );
};

export default Login;
