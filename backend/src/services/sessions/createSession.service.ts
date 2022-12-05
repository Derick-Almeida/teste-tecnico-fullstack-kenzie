import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { Customer } from "../../entities/customers.entity";
import { ICustomerLogin } from "../../interfaces";

const createSessionService = async ({ email, phone }: ICustomerLogin): Promise<string> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const customer = await customerRepository.findOneBy({ emails: { email }, phones: { phone } });

  if (!customer) {
    throw new AppError("Email or phone invalid.");
  }

  const token = jwt.sign({}, process.env.SECRET_KEY as string, {
    expiresIn: "1d",
    subject: customer.id,
  });

  return token;
};

export default createSessionService;
