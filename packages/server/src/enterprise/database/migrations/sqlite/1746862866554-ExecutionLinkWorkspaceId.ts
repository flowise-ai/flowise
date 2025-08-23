import { MigrationInterface, QueryRunner } from 'typeorm'
import { ensureColumnExists } from './sqlliteCustomFunctions'

export class ExecutionLinkWorkspaceId1746862866554 implements MigrationInterface {
    publ: Promise<void> {
        awa

        // step 1 - create temp table with workspaceId as foreign key
        await queryRunner.query(`
        CREATE TABLE "temp_execution" (
            "id" varchar PRIMARY KEY NOT NULL,
            "executionData" text NOT NULL,
            "action" text,
            "state" varchar NOT NULL,
            "agentflowId" varchar NOT NULL,
            "sessionId" varchar NOT NULL,
            "isPublic" boolean,
            "),
            "up),
            "stoppedDate" datetime,
            "workspaceId" varchar,
            FOREIGN KEY ("w REFERENCES "w
        );
    `)

        // step 2 - create index for workspaceId in temp_execution table
        awa;`)

        // step 3 - migrate data
        await queryRunner.query(`
        INSERT INTO "temp_exe
        SELECT "id", "executionData", "action", "state", "agentflowId", "sessionId", "isPublic", "createdDate", "updatedDate", "stoppedDate" FROM "execution";
    `)

        // step 4 - drop execution table
        awa

        // step 5 - alter temp_execution to execution table
        awa
    }

    publ: Promise<void> {
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_execution" (
                "id" varchar PRIMARY KEY NOT NULL,
                "executionData" text NOT NULL,
                "action" text,
                "state" varchar NOT NULL,
                "agentflowId" varchar NOT NULL,
                "sessionId" varchar NOT NULL,
                "isPublic" boolean,
                "),
                "up),
                "stoppedDate" datetime
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
            INSERT INTO "temp_exe
            SELECT "id", "executionData", "action", "state", "agentflowId", "sessionId", "isPublic", "createdDate", "updatedDate", "stoppedDate" FROM "execution";
        `)

        // step 3 - drop execution table
        awa

        // step 4 - alter temp_execution to execution table
        awa
    }
}
