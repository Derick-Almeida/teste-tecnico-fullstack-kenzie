import { Request, Response } from "express";
import createCustomerService from "../services/customers/createCustomer.service";
import deleteCustomerService from "../services/customers/deleteCustomer.service";
import getCustomerService from "../services/customers/getCustomer.service";
import updateCustomerService from "../services/customers/updateCustomer.service";

const createCustomerController = async (req: Request, res: Response) => {
  const customerData = req.body;
  const customer = await createCustomerService(customerData);
  return res.status(201).json(customer);
};

const getCustomerController = async (req: Request, res: Response) => {
  const customerId = req.customer.id;
  const customer = await getCustomerService(customerId);
  return res.json(customer);
};

const updateCustomerController = async (req: Request, res: Response) => {
  const customerId = req.customer.id;
  const customerData = req.body;
  const customer = await updateCustomerService(customerId, customerData);
  return res.json(customer);
};

const deleteCustomerController = async (req: Request, res: Response) => {
  const customerId = req.customer.id;
  await deleteCustomerService(customerId);
  return res.status(204).send();
};

export {
  createCustomerController,
  getCustomerController,
  updateCustomerController,
  deleteCustomerController,
};
