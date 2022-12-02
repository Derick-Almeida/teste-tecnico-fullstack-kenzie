import Button from "../../../components/Button";
import Input from "../../../components/Input";
import MultipleInput from "../../../components/MultipleInput";
import { ThemeForm } from "../../../style/GlobalStyle";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { publicRoutes } from "../../../service/api";
import { toast } from "react-toastify";

const Register = () => {
  const schema = yup.object().shape({
    fullName: yup.string().required().min(3),
    email: yup.string().required().min(1),
    phone: yup.string().required().min(1),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const registerClient = (data: FieldValues, e: any) => {
    const emails = [...e.target.querySelectorAll(".email")].map((elem) => elem.value);
    const phones = [...e.target.querySelectorAll(".phone")].map((elem) => elem.value);

    const fullData = {
      fullName: data.fullName,
      emails: [data.email, ...emails],
      phones: [data.phone, ...phones],
    };

    publicRoutes
      .post("/register", fullData)
      .then(() => toast.success("Registro completo"))
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <ThemeForm>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit(registerClient)}>
        <Input
          type="text"
          icon
          placeholder="Seu nome completo"
          name="fullName"
          register={register}
        />
        <MultipleInput
          register={register}
          type="email"
          variant="email"
          name="email"
          holder="email"
        />
        <MultipleInput
          register={register}
          type="text"
          variant="phone"
          name="phone"
          holder="telefone"
        />
        <Button text="Cadastrar" type="submit" />
      </form>
    </ThemeForm>
  );
};

export default Register;
