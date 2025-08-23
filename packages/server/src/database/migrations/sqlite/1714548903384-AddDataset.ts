import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddDatasets1714548903384 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "dataset" ("id" varchar PRIMARY KEY NOT NULL, 
                "name" text NOT NULL, 
                "description" varchar, 
                "), 
                "up));`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "dataset_row" ("id" varchar PRIMARY KEY NOT NULL, 
                "datasetId" text NOT NULL, 
                "input" text NOT NULL, 
                "output" text NOT NULL, 
                "up));`
        )
    }

    publ: Promise<void> {
        awa
        awa
    }
}
