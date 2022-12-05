import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { Customer } from "../../entities/customers.entity";
import AppError from "../../errors/AppError";

const removeContactService = async (customerId: string, contactId: string): Promise<void> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const contactRepository = AppDataSource.getRepository(Contact);
  const customer = await customerRepository.findOneBy({ id: customerId });

  if (!customer) {
    throw new AppError("Customer not found.", 404);
  }

  const contactList = customer.contacts;
  const contact = contactList.filter((contact) => contact.id === contactId);

  if (contact.length === 0) {
    throw new AppError("Contact not found.", 404);
  }

  await contactRepository.delete(contactId);

  return;
};

export default removeContactService;
