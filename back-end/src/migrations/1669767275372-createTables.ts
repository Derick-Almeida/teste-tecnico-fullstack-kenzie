import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1669767275372 implements MigrationInterface {
    name = 'createTables1669767275372'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "emails" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "customerId" uuid, "contactId" uuid, CONSTRAINT "PK_a54dcebef8d05dca7e839749571" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" character varying(255) NOT NULL, "customerId" uuid, "contactId" uuid, CONSTRAINT "PK_30d7fc09a458d7a4d9471bda554" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts_customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "contactId" uuid, "customerId" uuid, CONSTRAINT "PK_5e5ea76e55c06919d504fd9c91b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(255) NOT NULL, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "emails" ADD CONSTRAINT "FK_cf8920bff833ade59700258a57c" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "emails" ADD CONSTRAINT "FK_43abc580d6e98a6e8eb96ffe86d" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phones" ADD CONSTRAINT "FK_a707b06b5e996549fe99bee3b1b" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phones" ADD CONSTRAINT "FK_50c0e61a19e6a26dd8116e1e315" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts_customers" ADD CONSTRAINT "FK_96d2f53b0966a1bfeba5d832723" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "contacts_customers" ADD CONSTRAINT "FK_6dc08c67d189f0e04bef928677c" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts_customers" DROP CONSTRAINT "FK_6dc08c67d189f0e04bef928677c"`);
        await queryRunner.query(`ALTER TABLE "contacts_customers" DROP CONSTRAINT "FK_96d2f53b0966a1bfeba5d832723"`);
        await queryRunner.query(`ALTER TABLE "phones" DROP CONSTRAINT "FK_50c0e61a19e6a26dd8116e1e315"`);
        await queryRunner.query(`ALTER TABLE "phones" DROP CONSTRAINT "FK_a707b06b5e996549fe99bee3b1b"`);
        await queryRunner.query(`ALTER TABLE "emails" DROP CONSTRAINT "FK_43abc580d6e98a6e8eb96ffe86d"`);
        await queryRunner.query(`ALTER TABLE "emails" DROP CONSTRAINT "FK_cf8920bff833ade59700258a57c"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "contacts_customers"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "phones"`);
        await queryRunner.query(`DROP TABLE "emails"`);
    }

}
