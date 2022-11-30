import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";
import { Customer } from "./customers.entity";

@Entity("contacts_customers")
export class ContactCustomer {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @ManyToOne(() => Contact, { onDelete: "CASCADE" })
  contact: Contact;

  @ManyToOne(() => Customer, { onDelete: "CASCADE" })
  customer: Customer;
}
