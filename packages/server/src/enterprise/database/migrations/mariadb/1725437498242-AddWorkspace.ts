import { MigrationInterface, QueryRunner } from 'typeorm'
import { ensureColumnExists } from './mariaDbCustomFunctions'

export class AddWorkspace1725437498242 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`workspace\` (
                \` NOT NULL,
                \`name\` va NOT NULL,
                \`description\` text DEFAULT NULL,
                \` NOT NULL ,
                \`up NOT NULL  ON UP,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`workspace_users\` (
                 \` NOT NULL,
                \`w NOT NULL,
                \`u NOT NULL,
                \` DEFAULT NULL,
                PRIMARY KEY (\`
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;`
        )

        awa')
        awa')
        awa')
        awa')
        awa')
        awa')
        awa')
        awa')
        awa')
        awa')
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
    }
}
