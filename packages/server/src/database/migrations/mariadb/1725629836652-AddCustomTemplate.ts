import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddCustomTemplate1725629836652 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`custom_template\` (
                \` NOT NULL,
                \`name\` va NOT NULL,
                \`flowData\` text NOT NULL,
                \` DEFAULT NULL,
                \`ba DEFAULT NULL,
                \`f DEFAULT NULL,
                \`u DEFAULT NULL,
                \`type\` va DEFAULT NULL,
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
