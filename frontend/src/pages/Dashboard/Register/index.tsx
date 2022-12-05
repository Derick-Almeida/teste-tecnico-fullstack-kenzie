import Button from "../../../components/Button";
import Input from "../../../components/Input";
import MultipleInput from "../../../components/MultipleInput";
import { ThemeForm } from "../../Home/style";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../../service/api";
import { toast } from "react-toastify";

interface IProps {
  setReload: (e: boolean) => void;
  reload: boolean;
}

const Register = ({ reload, setReload }: IProps) => {
  const schema = yup.object().shape({
    fullName: yup.string().required().min(3),
    email: yup.string().required().min(1),
    phone: yup.string().required().min(1),
  });

  const { register, handleSubmit, resetField } = useForm({ resolver: yupResolver(schema) });

  const registerContact = (data: FieldValues, e: any) => {
    const emails = [...e.target.querySelectorAll(".email")].map((elem) => elem.value);
    const phones = [...e.target.querySelectorAll(".phone")].map((elem) => elem.value);

    const fullData = {
      fullName: data.fullName,
      emails: [data.email, ...emails],
      phones: [data.phone, ...phones],
    };

    api
      .post("/contacts", fullData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("@agenda:token") as string)}`,
        },
      })
      .then(() => {
        toast.success("Novo contato adicionado");
        setReload(!reload);
        resetField("fullName");
        resetField("email");
        resetField("phone");
        [...e.target.querySelectorAll(".email")].forEach((elem) => (elem.value = ""));
        [...e.target.querySelectorAll(".phone")].forEach((elem) => (elem.value = ""));
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <ThemeForm>
      <h2>Novo contato</h2>
      <form onSubmit={handleSubmit(registerContact)} id="register_contact">
        <Input type="text" icon placeholder="Nome completo" name="fullName" register={register} />
        <MultipleInput
          register={register}
          type="email"
          variant="email"
          name="email"
          placeholder="Email principal"
          txt="email"
        />
        <MultipleInput
          register={register}
          type="number"
          variant="phone"
          name="phone"
          placeholder="Telefone principal"
          txt="telefone"
        />
        <Button text="Cadastrar" type="submit" />
      </form>
    </ThemeForm>
  );
};

export default Register;
