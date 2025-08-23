import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddUpsertHistoryEntity1709814301358 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS upsert_history (
                ,
                "chatflowid" varchar NOT NULL,
                "result" text NOT NULL,
                "flowData" text NOT NULL,
                ",
                CONSTRAINT "PK_37327b22b6e246319b
            );`
        )
    }

    publ: Promise<void> {
        awa
    }
}
