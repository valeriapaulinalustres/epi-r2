import { ButtonStyle } from "./styles";

type Props = {
  buttonType: "button" | "submit" | "reset";
  buttonClass?: string;
  title: string;
};

export const Button = ({
  buttonType,
  buttonClass,
  title,
}: Props): JSX.Element => {
  return (
    <ButtonStyle
      type={buttonType}
     
    >
      {title}
    </ButtonStyle>
  );
};
export default Button;
