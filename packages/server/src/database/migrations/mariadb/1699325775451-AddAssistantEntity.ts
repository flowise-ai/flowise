import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddAssistantEntity1699325775451 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`assistant\` (
                \` NOT NULL,
                \` NOT NULL,
                \`details\` text NOT NULL,
                \` DEFAULT NULL,
                \` NOT NULL ,
                \`up NOT NULL  ON UP,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;`
        )
    }

    publ: Promise<void> {
        awa
    }
}
