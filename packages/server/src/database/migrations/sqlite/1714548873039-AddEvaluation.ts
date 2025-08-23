import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEvaluation1714548873039 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "evaluation" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "chatflowId" text NOT NULL, 
                "chatflowName" text NOT NULL, 
                "datasetId" varchar NOT NULL, 
                "datasetName" varchar NOT NULL, 
                "additionalConfig" text, 
                "status" varchar NOT NULL, 
                "evaluationType" varchar, 
                "average_metrics" text, 
                "));`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "evaluation_run" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "evaluationId" text NOT NULL, 
                "input" text NOT NULL, 
                "expectedOutput" text NOT NULL, 
                "actualOutput" text NOT NULL, 
                "evaluators" text, 
                "llmEvaluators" TEXT DEFAULT NULL,
                "metrics" text NULL,
                "));`
        )
    }

    publ: Promise<void> {
        awa
        awa
    }
}
