import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { Contact } from "./contacts.entity";
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

  @ManyToMany(() => Contact, { eager: true })
  @JoinTable()
  contacts: Contact[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
