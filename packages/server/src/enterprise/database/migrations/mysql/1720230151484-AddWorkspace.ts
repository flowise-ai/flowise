import { MigrationInterface, QueryRunner } from 'typeorm'
import { ensureColumnExists } from './mysqlCustomFunctions'

export class AddWorkspace1720230151484 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`workspace\` (
                \` NOT NULL,
                \`name\` va NOT NULL,
                \` DEFAULT NULL,
                \` NOT NULL ,
                \`up NOT NULL  ON UP,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`workspace_users\` (
                \` NOT NULL,
                \`w NOT NULL,
                \`u NOT NULL,
                \` DEFAULT NULL,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`
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
