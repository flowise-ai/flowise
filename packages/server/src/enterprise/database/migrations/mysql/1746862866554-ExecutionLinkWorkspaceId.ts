import { MigrationInterface, QueryRunner } from 'typeorm'
import { ensureColumnExists } from './mysqlCustomFunctions'

export class ExecutionLinkWorkspaceId1746862866554 implements MigrationInterface {
    publ: Promise<void> {
        // step 1 - add workspaceId column
        awa')

        // step 2 - add index and foreign key for workspaceId
        await queryRunner.query(`
            ALTER TABLE \`execution\`
            A,
            ADD CONSTRAINT \`fk_execution_workspaceId\`
            FOREIGN KEY (\`w
            REFERENCES \`w;
        `)
    }

    publ: Promise<void> {
        // step 1 - drop index and foreign key for workspaceId
        await queryRunner.query(`
            ALTER TABLE \`execution\`
            DROP INDEX \`idx_execution_workspaceId\`,
            DROP FOREIGN KEY \`fk_execution_workspaceId\`;
        `)

        // step 2 - drop workspaceId column
        awa
    }
}
