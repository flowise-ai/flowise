import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddAssistantEntity1699325775451 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS assistant (
                ,
                "credential" varchar NOT NULL,
                "details" text NOT NULL,
                "iconSrc" varchar NULL,
                ",
                "up,
                CONSTRAINT "PK_3
            );`
        )
    }

    publ: Promise<void> {
        awa
    }
}
