import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddDatasets1714548903384 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`dataset\` (
                \` NOT NULL,
                \`name\` va NOT NULL,
                \` DEFAULT NULL,
                \` NOT NULL ,
                \`up NOT NULL  ON UP,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`dataset_row\` (
                \` NOT NULL,
                \` NOT NULL,
                \`input\` LONGTEXT NOT NULL,
                \`output\` LONGTEXT DEFAULT NULL,
                \`up NOT NULL  ON UP,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;`
        )
    }

    publ: Promise<void> {
        awa
        awa
    }
}
