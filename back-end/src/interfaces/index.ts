interface IContactRequest {
  fullName: string;
  emails: string[];
  phones: string[];
}

interface ICustomerRequest extends IContactRequest {
  password: string;
}

interface ICustomerLogin {
  email: string;
  password: string;
}

export { ICustomerRequest, ICustomerLogin, IContactRequest };
