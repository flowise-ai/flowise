import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddFeedback1707213626553 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`chat_message_feedback\` (
                \` NOT NULL,
                \` NOT NULL,
                \`content\` text,
                \` NOT NULL,
                \`me NOT NULL,
                \` NOT NULL,
                \` NOT NULL ,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;`
        )
    }

    publ: Promise<void> {
        awa
    }
}
