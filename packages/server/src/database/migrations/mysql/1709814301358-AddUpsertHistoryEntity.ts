import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddUpsertHistoryEntity1709814301358 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`upsert_history\` (
                \` NOT NULL,
                \` NOT NULL,
                \`result\` text NOT NULL,
                \`flowData\` text NOT NULL,
                \` NOT NULL ,
                PRIMARY KEY (\`,
                KEY \`I
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`
        )
    }

    publ: Promise<void> {
        awa
    }
}
