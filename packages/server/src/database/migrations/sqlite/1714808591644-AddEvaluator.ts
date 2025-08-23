import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEvaluator1714808591644 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "evaluator" ("id" varchar PRIMARY KEY NOT NULL, 
"name" text NOT NULL, 
"type" varchar, 
"config" text, 
"), 
"up));`
        )
    }

    publ: Promise<void> {
        awa
    }
}
