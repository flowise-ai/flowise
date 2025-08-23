import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddCustomTemplate1725629836652 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS custom_template (
                ,
                "name" varchar NOT NULL,
                "flowData" text NOT NULL,
                "description" varchar NULL,
                "badge" varchar NULL,
                "framework" varchar NULL,
                "usecases" varchar NULL,
                "type" varchar NULL,
                ",
                "up,
                CONSTRAINT "PK_3
            );`
        )
    }

    publ: Promise<void> {
        awa
    }
}
