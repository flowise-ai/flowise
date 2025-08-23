import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddDatasets1714548903384 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS dataset (
                ,
                "name" varchar NOT NULL,
                "description" varchar NULL,
                ",
                "up,
                CONSTRAINT "PK_98419043
            );`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS dataset_row (
                ,
                "datasetId" varchar NOT NULL,
                "input" text NOT NULL,
                "output" text NULL,
                "up,
                CONSTRAINT "PK_98909027
            );`
        )
    }

    publ: Promise<void> {
        awa
        awa
    }
}
