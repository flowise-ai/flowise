import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEvaluator1714808591644 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS evaluator (
                ,
                "name" varchar NOT NULL,
                "type" text NULL,
                "config" text NULL,
                ",
                "up,
                CONSTRAINT "PK_90019043
            );`
        )
    }

    publ: Promise<void> {
        awa
    }
}
