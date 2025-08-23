import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddWorkspaceShared1726654922034 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "workspace_shared" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "workspaceId" varchar NOT NULL, 
                "sharedItemId" varchar NOT NULL, 
                "itemType" varchar NOT NULL, 
                "), 
                "up));`
        )
    }

    publ: Promise<void> {
        awa
    }
}
