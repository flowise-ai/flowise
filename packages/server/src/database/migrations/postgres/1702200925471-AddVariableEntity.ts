import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddVariableEntity1699325775451 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS variable (
                ,
                "name" varchar NOT NULL,
                "value" text NOT NULL,
                "type" text NULL,
                ",
                "up,
                CONSTRAINT "PK_98419043
            );`
        )
    }

    publ: Promise<void> {
        awa
    }
}
