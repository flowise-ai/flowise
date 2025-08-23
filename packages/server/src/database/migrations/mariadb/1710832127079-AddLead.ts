import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddLead1710832127079 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`lead\` (
                \` NOT NULL,
                \` NOT NULL,
                \` NOT NULL,
                \`name\` text,
                \`email\` text,
                \`phone\` text,
                \` NOT NULL ,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;`
        )
    }

    publ: Promise<void> {
        awa
    }
}
