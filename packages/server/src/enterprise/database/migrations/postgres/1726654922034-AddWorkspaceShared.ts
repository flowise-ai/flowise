import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddWorkspaceShared1726654922034 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "workspace_shared" (
                ,
                "workspaceId" varchar NOT NULL,
                "sharedItemId" varchar NOT NULL,
                "itemType" varchar NOT NULL,
                ",
                "up,
                CONSTRAINT "PK_90016043
            );`
        )
    }

    publ: Promise<void> {
        awa
    }
}
