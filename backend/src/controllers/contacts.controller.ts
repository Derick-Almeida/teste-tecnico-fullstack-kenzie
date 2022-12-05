import { Request, Response } from "express";
import { IRequest } from "../interfaces";
import createContactService from "../services/contacts/createContact.service";
import getContactService from "../services/contacts/getContact.service";
import listContactsService from "../services/contacts/listContacts.service";
import removeContactService from "../services/contacts/removeContact.service";
import updateContactService from "../services/contacts/updateContact.service";

const createContactController = async (req: Request, res: Response) => {
  const customerId = req.customer.id;
  const contactData: IRequest = req.body;
  const contact = await createContactService(customerId, contactData);

  return res.status(201).json(contact);
};

const listContactsController = async (req: Request, res: Response) => {
  const customerId = req.customer.id;
  const contactList = await listContactsService(customerId);

  return res.json(contactList);
};

const getContactController = async (req: Request, res: Response) => {
  const customerId = req.customer.id;
  const contactId = req.params.id;
  const contact = await getContactService(customerId, contactId);

  return res.json(contact);
};

const updateContactController = async (req: Request, res: Response) => {
  const customerId = req.customer.id;
  const contactId = req.params.id;
  const contactData: IRequest = req.body;
  const contact = await updateContactService(customerId, contactId, contactData);

  return res.json(contact);
};

const removeContactController = async (req: Request, res: Response) => {
  const customerId = req.customer.id;
  const contactId = req.params.id;
  await removeContactService(customerId, contactId);

  return res.status(204).send();
};

export {
  createContactController,
  listContactsController,
  getContactController,
  updateContactController,
  removeContactController,
};
