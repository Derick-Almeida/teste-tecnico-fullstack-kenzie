import AppDataSource from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import { Email } from "../../entities/email.entity";
import { Phone } from "../../entities/phones.entity";
import AppError from "../../errors/AppError";
import { IRequest } from "../../interfaces";

const updateCustomerService = async (
  customerId: string,
  { fullName, emails, phones }: IRequest
): Promise<object> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const emailRepository = AppDataSource.getRepository(Email);
  const phoneRepository = AppDataSource.getRepository(Phone);

  const customer = await customerRepository.findOneBy({ id: customerId });

  if (!customer) {
    throw new AppError("Customer not found.", 404);
  }

  await customerRepository.update(customerId, {
    fullName: fullName || customer.fullName,
  });

  if (emails) {
    const currentEmails = await emailRepository.find();
    for (let i = 0; i < currentEmails.length; i++) {
      await emailRepository.delete(currentEmails[i].id);
    }
    for (let i = 0; i < emails.length; i++) {
      await emailRepository.save({ email: emails[i], customer });
    }
  }
  if (phones) {
    const currentPhones = await phoneRepository.find();
    for (let i = 0; i < currentPhones.length; i++) {
      await phoneRepository.delete(currentPhones[i].id);
    }
    for (let i = 0; i < phones.length; i++) {
      await phoneRepository.save({ phone: phones[i], customer });
    }
  }

  const updatedCustomer = await customerRepository.findOneBy({ id: customer.id });
  const emailsFormated: string[] = updatedCustomer?.emails.map((obj) => obj.email)!;
  const phonesFormated: string[] = updatedCustomer?.phones.map((obj) => obj.phone)!;

  return {
    ...updatedCustomer,
    emails: emailsFormated,
    phones: phonesFormated,
  };
};

export default updateCustomerService;
