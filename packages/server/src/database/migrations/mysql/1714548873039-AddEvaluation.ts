import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddEvaluation1714548873039 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`evaluation\` (
                \` NOT NULL,
                \`chatflowId\` LONGTEXT NOT NULL,
                \`datasetId\` LONGTEXT NOT NULL,
                \`name\` va NOT NULL,
                \` NOT NULL,
                \` NOT NULL,
                \`additionalConfig\` LONGTEXT,
                \`average_metrics\` LONGTEXT NOT NULL,
                \` NOT NULL,
                \`evaluat NOT NULL,
                \` NOT NULL  ON UP,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`evaluation_run\` (
                \` NOT NULL,
                \`evaluat NOT NULL,
                \`expectedOutput\` LONGTEXT NOT NULL,
                \`actualOutput\` LONGTEXT NOT NULL,
                \`evaluators\` LONGTEXT,
                \`input\` LONGTEXT DEFAULT NULL,
                \`metrics\` TEXT DEFAULT NULL,
                \`llmEvaluators\` TEXT DEFAULT NULL,
                \` NOT NULL  ON UP,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`
        )
    }

    publ: Promise<void> {
        awa
        awa
    }
}
