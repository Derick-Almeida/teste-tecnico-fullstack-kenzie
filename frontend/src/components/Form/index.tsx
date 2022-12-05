import { ThemeForm } from "../../pages/Home/style";
import MultipleInput from "../MultipleInput";
import Input from "../Input";
import Button from "../Button";

import * as yup from "yup";
import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { api } from "../../service/api";
import { toast } from "react-toastify";

interface IProps {
  setModal: (e: boolean) => void;
  url?: string;
  reload: boolean;
  setReload: (e: boolean) => void;
}

const Form = ({ setModal, url, reload, setReload }: IProps) => {
  const schema = yup.object().shape({
    fullName: yup.string().required().min(3),
    email: yup.string().required().min(1),
    phone: yup.string().required().min(1),
  });

  const { register, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const update = (data: FieldValues, e: any) => {
    const emails = [...e.target.querySelectorAll(".email")].map((elem) => elem.value);
    const phones = [...e.target.querySelectorAll(".phone")].map((elem) => elem.value);

    const fullData = {
      fullName: data.fullName,
      emails: [data.email, ...emails],
      phones: [data.phone, ...phones],
    };

    api
      .patch(url || "", fullData, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("@agenda:token") as string)}`,
        },
      })
      .then(() => {
        toast.success("Atualizado com sucesso!");
        setModal(false);
        setReload(!reload);
      })
      .catch((err) => toast.error(err.response.data.message));
  };

  return (
    <ThemeForm>
      <form onSubmit={handleSubmit(update)}>
        <Input type="text" icon placeholder="Nome completo" name="fullName" className="fullName" />
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
        <Button type="submit" text="Confirmar" />
      </form>
    </ThemeForm>
  );
};

export default Form;
