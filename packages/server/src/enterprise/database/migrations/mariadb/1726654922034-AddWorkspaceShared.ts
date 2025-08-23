import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddWorkspaceShared1726654922034 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`workspace_shared\` (
                \` NOT NULL,
                \`w NOT NULL,
                \` NOT NULL,
                \` NOT NULL,
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
