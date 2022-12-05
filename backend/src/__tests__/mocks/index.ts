import { IRequest, ICustomerLogin } from "../../interfaces";

const customerData: IRequest = {
  fullName: "Jorge jr",
  emails: ["jorge@mail.com", "jorge_quer_ser_grande@mail.com"],
  phones: ["7929205261", "6721444376", "6731227041"],
};

const customerLogin: ICustomerLogin = {
  email: "jorge@mail.com",
  phone: "7929205261",
};

const contactData: IRequest = {
  fullName: "Ambrósio de Amaral",
  emails: ["ambrosio@mail.com"],
  phones: ["8337655152", "1329091141"],
};

export { contactData, customerData, customerLogin };
