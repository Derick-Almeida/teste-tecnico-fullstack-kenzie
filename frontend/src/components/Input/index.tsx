import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import { ThemeInput } from "./style";
import { IoIosMail } from "react-icons/io";
import { MdPhoneIphone } from "react-icons/md";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IProps extends InputHTMLAttributes<HTMLInputTypeAttribute> {
  icon?: boolean;
  variant?: string;
  register?: UseFormRegister<FieldValues>;
}

const Input = ({
  placeholder,
  type,
  icon = false,
  variant,
  register,
  name,
  className,
  value,
}: IProps) => {
  return (
    <ThemeInput>
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
          <input type={type} value={value} placeholder={placeholder} {...register(name!)} />
        ) : (
          <input type={type} value={value} placeholder={placeholder} className={className} />
        )}
      </div>
    </ThemeInput>
  );
};

export default Input;
