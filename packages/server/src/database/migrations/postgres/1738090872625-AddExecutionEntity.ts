import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddExecutionEntity1738090872625 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS execution (
                ,
                "executionData" text NOT NULL,
                "action" text,
                "state" varchar NOT NULL,
                "agentflowId" uuid NOT NULL,
                "sessionId" uuid NOT NULL,
                "isPublic" boolean,
                ",
                "up,
                "stoppedDate" timestamp,
                CONSTRAINT "PK_936a419
            );`
        )

        
         {
            awa
        }
    }

    publ: Promise<void> {
        awa
        awa
    }
}
