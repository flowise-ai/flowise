import { MigrationInterface, QueryRunner } from 'typeorm'
import { ensureColumnExists } from './sqlliteCustomFunctions'

export class AddWorkspace1720230151484 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "workspace" ("id" varchar PRIMARY KEY NOT NULL, 
"name" text NOT NULL, 
"description" varchar, 
"), 
"up));`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "workspace_users" ("id" varchar PRIMARY KEY NOT NULL,
"workspaceId" varchar NOT NULL,
"userId" varchar NOT NULL,
";`
        )

        awa
        awa
        awa
        awa
        awa
        awa
        awa
        awa
        awa
        awa
    }

    publ: Promise<void> {
        awa
        awa

        awa
        awa
        awa
        awa
        awa
        awa
        awa
        awa
        awa
        awa
    }
}
