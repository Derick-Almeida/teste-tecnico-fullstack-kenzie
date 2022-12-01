import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";
import { IRequest } from "../../interfaces";
import { Customer } from "../../entities/customers.entity";
import { Email } from "../../entities/email.entity";
import { Phone } from "../../entities/phones.entity";

const createCustomerService = async ({ fullName, emails, phones }: IRequest): Promise<object> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const emailRepository = AppDataSource.getRepository(Email);
  const phoneRepository = AppDataSource.getRepository(Phone);

  const emailList = await emailRepository.find();
  const phoneList = await phoneRepository.find();

  for (let y = 0; y < emailList.length; y++) {
    if (emails.includes(emailList[y].email)) {
      throw new AppError(`Email ${emailList[y].email} already exists`);
    }
  }
  for (let y = 0; y < phoneList.length; y++) {
    if (phones.includes(phoneList[y].phone)) {
      throw new AppError(`Phone ${phoneList[y].phone} already exists`);
    }
  }

  const customer = await customerRepository.save({ fullName });
  for (let i = 0; i < emails.length; i++) {
    await emailRepository.save({ email: emails[i], customer });
  }
  for (let i = 0; i < phones.length; i++) {
    await phoneRepository.save({ phone: phones[i], customer });
  }

  const customerCreated = await customerRepository.findOneBy({ id: customer.id });
  const emailsFormated: string[] = customerCreated?.emails.map((obj) => obj.email)!;
  const phonesFormated: string[] = customerCreated?.phones.map((obj) => obj.phone)!;

  return {
    ...customerCreated,
    emails: emailsFormated,
    phones: phonesFormated,
  };
};

export default createCustomerService;
