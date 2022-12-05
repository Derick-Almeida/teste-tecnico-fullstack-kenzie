import AppDataSource from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import AppError from "../../errors/AppError";

const listContactsService = async (customerId: string): Promise<object[]> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const customer = await customerRepository.findOneBy({ id: customerId });

  if (!customer) {
    throw new AppError("Customer not found.", 404);
  }

  const contacts = customer.contacts.map((contact) => {
    return {
      ...contact,
      emails: contact.emails.map((obj) => obj.email),
      phones: contact.phones.map((obj) => obj.phone),
    };
  });

  return contacts;
};

export default listContactsService;
