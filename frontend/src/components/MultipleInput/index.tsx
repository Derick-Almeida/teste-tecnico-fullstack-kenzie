import { useState } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../Input";
import { Container } from "./style";

interface IProps {
  register?: UseFormRegister<FieldValues>;
  name?: string;
  variant?: string;
  txt?: string;
  type?: string;
  placeholder?: string;
  data?: string[];
  fullName?: string;
}

const MultipleInput = ({
  register,
  name,
  variant,
  placeholder,
  txt,
  type,
  fullName,
  data = [],
}: IProps) => {
  const [fields, setFields] = useState<string[]>(data);

  console.log(data);

  return (
    <Container>
      <Input
        type={type}
        icon
        variant={variant}
        placeholder={placeholder || fullName}
        name={name}
        className={Boolean(register) ? "" : name}
        register={register}
      />
      {fields.map((i) => (
        <div key={i} className="extraInputs">
          <Input
            type={type}
            icon
            variant={variant}
            className={name}
            placeholder={txt ? `Outro ${txt}` : i}
          />
          <span
            id={i}
            onClick={(e: any) => {
              const inputId = +e.target.id;
              const inputIndex = fields.indexOf(String(inputId));
              fields.splice(inputIndex, 1);
              setFields([...fields]);
            }}
          >
            x
          </span>
        </div>
      ))}
      {fields.length >= 4 && <p>Campos de {txt} atingiu o limite*</p>}
      {fields.length < 4 && (
        <span
          onClick={() => {
            if (fields.length < 4) {
              setFields([...fields, "Novo campo"]);
            }
          }}
        >
          Adicionar outro {txt}
        </span>
      )}
    </Container>
  );
};

export default MultipleInput;
