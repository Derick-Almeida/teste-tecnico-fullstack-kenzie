import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../Input";
import { Container } from "./style";

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
    <Container>
      <Input
        type={type}
        icon
        variant={variant}
        placeholder={`Seu melhor ${holder}`}
        name={name}
        register={register}
      />
      {fields.map((i) => (
        <div key={i} className="extraInputs">
          <Input
            type={type}
            icon
            variant={variant}
            className={name}
            placeholder={`Novo ${holder}`}
          />
          <span
            id={String(i)}
            onClick={(e: any) => {
              const inputId = +e.target.id;
              const inputIndex = fields.indexOf(inputId);
              fields.splice(inputIndex, 1);
              setFields([...fields]);
            }}
          >
            x
          </span>
        </div>
      ))}
      {fields.length >= 4 && <p>Campos de {holder} atingiu o limite*</p>}
      {fields.length < 4 && (
        <span
          onClick={() => {
            if (fields.length < 4) {
              setFields([...fields, fields.length]);
            }
          }}
        >
          Adicionar outro {holder}
        </span>
      )}
    </Container>
  );
};

export default MultipleInput;
