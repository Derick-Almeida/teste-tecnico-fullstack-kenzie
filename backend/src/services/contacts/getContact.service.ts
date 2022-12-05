import AppDataSource from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import AppError from "../../errors/AppError";

const getContactService = async (customerId: string, contactId: string): Promise<object> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const customer = await customerRepository.findOneBy({ id: customerId });

  if (!customer) {
    throw new AppError("Customer not found.", 404);
  }

  const contactList = customer.contacts;
  const contact = contactList.filter((contact) => contact.id === contactId);

  if (contact.length === 0) {
    throw new AppError("Contact not found.", 404);
  }

  const emailsFormated: string[] = contact[0]!.emails.map((obj) => obj.email);
  const phonesFormated: string[] = contact[0]!.phones.map((obj) => obj.phone);

  return {
    ...contact[0],
    emails: emailsFormated,
    phones: phonesFormated,
  };
};

export default getContactService;
