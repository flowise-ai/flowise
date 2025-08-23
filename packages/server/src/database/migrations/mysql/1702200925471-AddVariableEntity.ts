import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddVariableEntity1699325775451 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`variable\` (
                \` NOT NULL,
                \`name\` va NOT NULL,
                \`value\` text NOT NULL,
                \`type\` va DEFAULT NULL,
                \` NOT NULL ,
                \`up NOT NULL  ON UP,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`
        )
    }

    publ: Promise<void> {
        awa
    }
}
