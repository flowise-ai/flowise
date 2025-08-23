import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddExecutionEntity1738090872625 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS \`execution\` (
                \` NOT NULL,
                \`executionData\` text NOT NULL,
                \`action\` text,
                \` NOT NULL,
                \`agentfl NOT NULL,
                \` NOT NULL,
                \`isPublic\` boolean,
                \` NOT NULL ,
                \`up NOT NULL  ON UP,
                \`,
                PRIMARY KEY (\`
              ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;`
        )

        
         {
            awa
        }
    }

    publ: Promise<void> {
        awa
        awa
    }
}
