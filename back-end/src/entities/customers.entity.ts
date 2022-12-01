import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { ContactCustomer } from "./contactsCustomers.entity";
import { Email } from "./email.entity";
import { Phone } from "./phones.entity";

@Entity("customers")
export class Customer {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 255 })
  fullName: string;

  @OneToMany(() => Email, (email) => email.customer, { eager: true })
  emails: Email[];

  @OneToMany(() => Phone, (phone) => phone.customer, { eager: true })
  phones: Phone[];

  @OneToMany(() => ContactCustomer, (contactCustomer) => contactCustomer.customer, { eager: true })
  contacts: ContactCustomer[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
