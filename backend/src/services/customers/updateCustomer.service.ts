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
    const customerEmails = customer.emails.map((email) => email.id);
    const allEmails = await emailRepository.find();
    const currentEmails = allEmails.filter((emailId) => customerEmails.includes(emailId.id));

    for (let i = 0; i < currentEmails.length; i++) {
      await emailRepository.delete(currentEmails[i].id);
    }
    for (let i = 0; i < emails.length; i++) {
      await emailRepository.save({ email: emails[i], customer });
    }
  }
  if (phones) {
    const customerPhones = customer.phones.map((phone) => phone.id);
    const allPhones = await phoneRepository.find();
    const currentPhones = allPhones.filter((phoneId) => customerPhones.includes(phoneId.id));

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

  const contacts = customer.contacts.map((contact) => {
    return {
      ...contact,
      emails: contact.emails.map((obj) => obj.email),
      phones: contact.phones.map((obj) => obj.phone),
    };
  });

  return {
    ...updatedCustomer,
    emails: emailsFormated,
    phones: phonesFormated,
    contacts,
  };
};

export default updateCustomerService;
