import AppDataSource from "../../data-source";
import AppError from "../../errors/AppError";
import { Contact } from "../../entities/contacts.entity";
import { Customer } from "../../entities/customers.entity";
import { Email } from "../../entities/email.entity";
import { Phone } from "../../entities/phones.entity";
import { IRequest } from "../../interfaces";

const createContactService = async (
  customerId: string,
  { fullName, emails, phones }: IRequest
): Promise<object> => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const customerRepository = AppDataSource.getRepository(Customer);
  const emailRepository = AppDataSource.getRepository(Email);
  const phoneRepository = AppDataSource.getRepository(Phone);

  const emailList = await emailRepository.find();
  const phoneList = await phoneRepository.find();

  for (let y = 0; y < emailList.length; y++) {
    if (emails.includes(emailList[y].email)) {
      throw new AppError(`Email ${emailList[y].email} já existe!`);
    }
  }
  for (let y = 0; y < phoneList.length; y++) {
    if (phones.includes(phoneList[y].phone)) {
      throw new AppError(`Telefone ${phoneList[y].phone} já existe!`);
    }
  }

  const contact = await contactRepository.save({ fullName });
  for (let i = 0; i < emails.length; i++) {
    await emailRepository.save({ email: emails[i], contact });
  }
  for (let i = 0; i < phones.length; i++) {
    await phoneRepository.save({ phone: phones[i], contact });
  }

  const customer = await customerRepository.findOneBy({ id: customerId });
  customer!.contacts = [...customer!.contacts, contact];
  await customerRepository.save(customer!);

  const contactCreated = await contactRepository.findOneBy({ id: contact.id });
  const emailsFormated: string[] = contactCreated?.emails.map((obj) => obj.email)!;
  const phonesFormated: string[] = contactCreated?.phones.map((obj) => obj.phone)!;

  return {
    ...contactCreated,
    emails: emailsFormated,
    phones: phonesFormated,
  };
};

export default createContactService;
