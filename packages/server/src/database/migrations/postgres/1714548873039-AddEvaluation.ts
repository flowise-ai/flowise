import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEvaluation1714548873039 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS evaluation (
                ,
                "name" varchar NOT NULL,
                "chatflowId" text NOT NULL,
                "chatflowName" text NOT NULL,
                "datasetId" varchar NOT NULL,
                "datasetName" varchar NOT NULL,
                "additionalConfig" text NULL,
                "evaluationType" varchar NOT NULL,
                "status" varchar NOT NULL,
                "average_metrics" text NULL,
                ",
                CONSTRAINT "PK_98989043
            );`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS evaluation_run (
                ,
                "evaluationId" varchar NOT NULL,
                "input" text NOT NULL,
                "expectedOutput" text NULL,
                "actualOutput" text NULL,
                "evaluators" text NULL,
                "llmEvaluators" text DEFAULT NULL,
                "metrics" text NULL,
                ",
                CONSTRAINT "PK_98989927
            );`
        )
    }

    publ: Promise<void> {
        awa
        awa
    }
}
