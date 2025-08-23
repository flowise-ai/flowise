import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEvaluator1714808591644 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`evaluator\` (
                \` NOT NULL,
                \`name\` va NOT NULL,
                \`type\` va DEFAULT NULL,
                \`config\` LONGTEXT DEFAULT NULL,
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
