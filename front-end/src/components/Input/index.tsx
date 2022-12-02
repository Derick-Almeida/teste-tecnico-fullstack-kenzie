import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { ThemeInput } from "./style";
import { IoIosMail } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  label?: string;
  icon?: boolean;
  variant?: string;
  register?: UseFormRegister<FieldValues>;
}

const Input = ({
  label,
  placeholder,
  type,
  icon = false,
  variant,
  register,
  name,
  className,
}: IProps) => {
  return (
    <ThemeInput>
      {label && <p>{label}</p>}
      <div>
        {icon && (
          <>
            {variant === "email" ? (
              <IoIosMail />
            ) : variant === "phone" ? (
              <MdPhoneIphone />
            ) : (
              <HiOutlinePencilSquare />
            )}
          </>
        )}
        {register ? (
          <input type={type} placeholder={placeholder} {...register(name!)} />
        ) : (
          <input type={type} placeholder={placeholder} className={className} />
        )}
      </div>
    </ThemeInput>
  );
};

export default Input;
