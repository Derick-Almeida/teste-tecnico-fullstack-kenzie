interface IRequest {
  fullName: string;
  emails: string[];
  phones: string[];
}

interface ICustomerLogin {
  email: string;
  phone: string;
}

export { IRequest, ICustomerLogin };
