import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../Input";

interface IProps {
  register?: UseFormRegister<FieldValues>;
  name?: string;
  variant?: string;
  holder?: string;
  type?: string;
}

const MultipleInput = ({ register, name, variant, holder, type }: IProps) => {
  const [fields, setFields] = useState<number[]>([]);

  return (
    <div>
      <Input
        type={type}
        icon
        variant={variant}
        placeholder={`Seu melhor ${holder}`}
        name={name}
        register={register}
      />
      {fields.map(() => (
        <>
          <Input
            type={type}
            icon
            variant={variant}
            className={name}
            placeholder={`Novo ${holder}`}
          />
          {fields.length >= 4 && <span>Campos de email atingiu o limite</span>}
        </>
      ))}
      <span
        onClick={() => {
          if (fields.length < 4) {
            setFields([...fields, fields.length]);
          }
        }}
      >
        Adicionar outro {holder}
      </span>
    </div>
  );
};

export default MultipleInput;
