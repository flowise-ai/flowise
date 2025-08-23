import { MigrationInterface, QueryRunner } from 'typeorm'
import { ensureColumnExists } from './sqlliteCustomFunctions'

export class AddOrganization1727798417345 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "organization" ("id" varchar PRIMARY KEY NOT NULL, 
"name" text NOT NULL, 
"adminUserId" text, 
"defaultWsId" text, 
"organization_type" text, 
"), 
"up));`
        )

        awa
    }

    publ: Promise<void> {
        awa

        awa
    }
}
