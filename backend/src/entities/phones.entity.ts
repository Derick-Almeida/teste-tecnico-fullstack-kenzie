import { Exclude } from "class-transformer";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";
import { Customer } from "./customers.entity";

@Entity("phones")
export class Phone {
  @PrimaryGeneratedColumn("uuid")
  readonly id: string;

  @Column({ length: 255, unique: true })
  phone: string;

  @ManyToOne(() => Customer, { onDelete: "CASCADE" })
  customer: Customer;

  @ManyToOne(() => Contact, { onDelete: "CASCADE" })
  contact: Contact;
}
