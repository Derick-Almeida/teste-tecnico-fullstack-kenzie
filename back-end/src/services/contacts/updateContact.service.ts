import AppDataSource from "../../data-source";
import { Contact } from "../../entities/contacts.entity";
import { Customer } from "../../entities/customers.entity";
import { Email } from "../../entities/email.entity";
import { Phone } from "../../entities/phones.entity";
import AppError from "../../errors/AppError";
import { IRequest } from "../../interfaces";

const updateContactService = async (
  customerId: string,
  contactId: string,
  { fullName, emails, phones }: IRequest
): Promise<object> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const contactRepository = AppDataSource.getRepository(Contact);
  const emailRepository = AppDataSource.getRepository(Email);
  const phoneRepository = AppDataSource.getRepository(Phone);

  const customer = await customerRepository.findOneBy({ id: customerId });
  const contact = await contactRepository.findOneBy({ id: contactId });

  if (!customer) {
    throw new AppError("Customer not found.", 404);
  }

  if (!contact) {
    throw new AppError("Contact not found.", 404);
  }

  await contactRepository.update(contactId, {
    fullName: fullName || customer.fullName,
  });

  if (emails) {
    const contactEmails = contact.emails.map((email) => email.id);
    const allEmails = await emailRepository.find();
    const currentEmails = allEmails.filter((emailId) => contactEmails.includes(emailId.id));

    for (let i = 0; i < currentEmails.length; i++) {
      await emailRepository.delete(currentEmails[i].id);
    }
    for (let i = 0; i < emails.length; i++) {
      await emailRepository.save({ email: emails[i], contact });
    }
  }
  if (phones) {
    const contactPhones = contact.phones.map((phone) => phone.id);
    const allPhones = await phoneRepository.find();
    const currentPhones = allPhones.filter((phoneId) => contactPhones.includes(phoneId.id));

    for (let i = 0; i < currentPhones.length; i++) {
      await phoneRepository.delete(currentPhones[i].id);
    }
    for (let i = 0; i < phones.length; i++) {
      await phoneRepository.save({ phone: phones[i], contact });
    }
  }

  const updatedContact = await contactRepository.findOneBy({ id: contact.id });
  const emailsFormated: string[] = updatedContact?.emails.map((obj) => obj.email)!;
  const phonesFormated: string[] = updatedContact?.phones.map((obj) => obj.phone)!;

  return {
    ...updatedContact,
    emails: emailsFormated,
    phones: phonesFormated,
  };
};

export default updateContactService;
