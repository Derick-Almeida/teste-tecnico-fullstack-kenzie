import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { ThemeForm } from "../style";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../../service/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

interface IProps {
  setAutehenticated: (e: boolean) => void;
}

const Login = ({ setAutehenticated }: IProps) => {
  const history = useHistory();

  const schema = yup.object().shape({
    email: yup.string().required(),
    phone: yup.string().required(),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const sendData = (data: FieldValues) => {
    api
      .post("/login", data)
      .then((res) => {
        localStorage.setItem("@agenda:token", JSON.stringify(res.data.token));
        toast.success("Bem vindo");
        setAutehenticated(true);

        return history.push("/dashboard");
      })
      .catch((_) => toast.error("Email ou telefone incorreto!"));
  };

  return (
    <ThemeForm>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(sendData)}>
        <Input
          type="email"
          icon
          variant="email"
          placeholder="seu melhor email"
          name="email"
          register={register}
        />
        <Input
          type="number"
          icon
          variant="phone"
          placeholder="seu melhor telefone"
          name="phone"
          register={register}
        />
        <Button text="Entrar" type="submit" />
      </form>
    </ThemeForm>
  );
};

export default Login;
