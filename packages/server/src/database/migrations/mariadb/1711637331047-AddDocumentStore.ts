import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddDocumentStore1711637331047 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`document_store\` (
                \` NOT NULL,
                \`name\` va NOT NULL,
                \`,
                \`loaders\` text,
                \`whereUsed\` text,
                \` NOT NULL,
                \` NOT NULL ,
                \`up NOT NULL  ON UP,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`document_store_file_chunk\` (
                \` NOT NULL,
                \` NOT NULL,
                \` NOT NULL,
                \`chunkNo\` INT NOT NULL,
                \`pageContent\` text,
                \`metadata\` text,
                PRIMARY KEY (\`,
                KEY \`I,
                KEY \`I
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;`
        )
    }

    publ: Promise<void> {
        awa
        awa
    }
}
