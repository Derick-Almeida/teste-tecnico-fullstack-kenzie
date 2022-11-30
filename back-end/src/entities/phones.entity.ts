import { Exclude } from "class-transformer";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Contact } from "./contacts.entity";
import { Customer } from "./customers.entity";

@Entity("phones")
export class Phone {
  @PrimaryGeneratedColumn("uuid")
  @Exclude()
  readonly id: string;

  @Column({ length: 255 })
  phone: string;

  @Exclude()
  @ManyToOne(() => Customer, { onDelete: "CASCADE" })
  customer: Customer;

  @Exclude()
  @ManyToOne(() => Contact, { onDelete: "CASCADE" })
  contact: Contact;
}
