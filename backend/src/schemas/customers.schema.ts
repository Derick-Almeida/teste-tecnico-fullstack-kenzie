import * as yup from "yup";
import { SchemaOf } from "yup";
import { IRequest } from "../interfaces";

const registerSchema: SchemaOf<IRequest> = yup.object().shape({
  fullName: yup.string().required().min(3),
  emails: yup.array().required().min(1),
  phones: yup.array().required().min(1),
});

export { registerSchema };
