import * as yup from "yup";
import { SchemaOf } from "yup";
import { ICustomerLogin } from "../interfaces";

const sessionSchema: SchemaOf<ICustomerLogin> = yup.object().shape({
  email: yup.string().required(),
  phone: yup.string().required(),
});

export { sessionSchema };
