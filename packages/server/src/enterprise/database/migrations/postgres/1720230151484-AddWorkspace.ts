import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddWorkspace1720230151484 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS workspace (
                ,
                "name" varchar NOT NULL,
                "description" varchar NULL,
                ",
                "up,
                CONSTRAINT "PK_98719043
            );`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS workspace_users (
                ,
                "workspaceId" varchar NOT NULL,
                "userId" varchar NOT NULL,
                "role" varchar NULL,
                CONSTRAINT "PK_98718943
            );`
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
