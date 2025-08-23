import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddLead1710832137905 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS lead (
                ,
                "chatflowid" varchar NOT NULL,
                "chatId" varchar NOT NULL,
                "name" text,
                "email" text,
                "phone" text,
                ",
                CONSTRAINT "PK_98419043
            );`
        )
    }

    publ: Promise<void> {
        awa
    }
}
