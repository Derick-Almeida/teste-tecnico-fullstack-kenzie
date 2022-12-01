import { MigrationInterface, QueryRunner } from "typeorm";

export class createTables1669907340498 implements MigrationInterface {
    name = 'createTables1669907340498'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "emails" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "email" character varying(255) NOT NULL, "customerId" uuid, "contactId" uuid, CONSTRAINT "UQ_3cbf51004f0706ac67ff8c22dbf" UNIQUE ("email"), CONSTRAINT "PK_a54dcebef8d05dca7e839749571" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "phones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "phone" character varying(255) NOT NULL, "customerId" uuid, "contactId" uuid, CONSTRAINT "UQ_328a06986eaf721397036cb20fd" UNIQUE ("phone"), CONSTRAINT "PK_30d7fc09a458d7a4d9471bda554" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customers" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(255) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_133ec679a801fab5e070f73d3ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "fullName" character varying(255) NOT NULL, CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "customers_contacts_contacts" ("customersId" uuid NOT NULL, "contactsId" uuid NOT NULL, CONSTRAINT "PK_251f1f12559c5d4ef451e3797c6" PRIMARY KEY ("customersId", "contactsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_8a4cd9400c783ff36e109aff79" ON "customers_contacts_contacts" ("customersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_77bf47161c4bd9570d747b45c6" ON "customers_contacts_contacts" ("contactsId") `);
        await queryRunner.query(`ALTER TABLE "emails" ADD CONSTRAINT "FK_cf8920bff833ade59700258a57c" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "emails" ADD CONSTRAINT "FK_43abc580d6e98a6e8eb96ffe86d" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phones" ADD CONSTRAINT "FK_a707b06b5e996549fe99bee3b1b" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "phones" ADD CONSTRAINT "FK_50c0e61a19e6a26dd8116e1e315" FOREIGN KEY ("contactId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "customers_contacts_contacts" ADD CONSTRAINT "FK_8a4cd9400c783ff36e109aff799" FOREIGN KEY ("customersId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "customers_contacts_contacts" ADD CONSTRAINT "FK_77bf47161c4bd9570d747b45c6f" FOREIGN KEY ("contactsId") REFERENCES "contacts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "customers_contacts_contacts" DROP CONSTRAINT "FK_77bf47161c4bd9570d747b45c6f"`);
        await queryRunner.query(`ALTER TABLE "customers_contacts_contacts" DROP CONSTRAINT "FK_8a4cd9400c783ff36e109aff799"`);
        await queryRunner.query(`ALTER TABLE "phones" DROP CONSTRAINT "FK_50c0e61a19e6a26dd8116e1e315"`);
        await queryRunner.query(`ALTER TABLE "phones" DROP CONSTRAINT "FK_a707b06b5e996549fe99bee3b1b"`);
        await queryRunner.query(`ALTER TABLE "emails" DROP CONSTRAINT "FK_43abc580d6e98a6e8eb96ffe86d"`);
        await queryRunner.query(`ALTER TABLE "emails" DROP CONSTRAINT "FK_cf8920bff833ade59700258a57c"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_77bf47161c4bd9570d747b45c6"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8a4cd9400c783ff36e109aff79"`);
        await queryRunner.query(`DROP TABLE "customers_contacts_contacts"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TABLE "customers"`);
        await queryRunner.query(`DROP TABLE "phones"`);
        await queryRunner.query(`DROP TABLE "emails"`);
    }

}
