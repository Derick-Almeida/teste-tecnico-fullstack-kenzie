import { ButtonHTMLAttributes } from "react";
import { ThemeButton } from "./style";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button = ({ text, type }: IButtonProps) => {
  return <ThemeButton type={type}>{text}</ThemeButton>;
};

export default Button;
