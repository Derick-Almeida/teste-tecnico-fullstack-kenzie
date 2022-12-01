import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ContactCustomer } from "./contactsCustomers.entity";
import { Email } from "./email.entity";
import { Phone } from "./phones.entity";

@Entity("contacts")
export class Contact {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 255 })
  fullName: string;

  @OneToMany(() => Email, (email) => email.contact, { eager: true })
  emails: Email[];

  @OneToMany(() => Phone, (phone) => phone.contact, { eager: true })
  phones: Phone[];

  @OneToMany(() => ContactCustomer, (contactCustomer) => contactCustomer.contact, {
    onDelete: "CASCADE",
  })
  customers: ContactCustomer[];
}
