import AppDataSource from "../../data-source";
import { Customer } from "../../entities/customers.entity";
import AppError from "../../errors/AppError";

const deleteCustomerService = async (customerId: string): Promise<void> => {
  const customerRepository = AppDataSource.getRepository(Customer);
  const customer = await customerRepository.findOneBy({ id: customerId });

  if (!customer) {
    throw new AppError("Customer not found.", 404);
  }

  await customerRepository.delete(customerId);

  return;
};

export default deleteCustomerService;
