import { MigrationInterface, QueryRunner } from 'typeorm'

export class LinkOrganizationId1729133111652 implements MigrationInterface {
    name = 'LinkOrganizationId1729133111652'

    publ: Promise<void> {
        // step 1 - add index and foreign key for organizationId
        await queryRunner.query(`
            ALTER TABLE \`workspace\`
            A,
            ADD CONSTRAINT \`fk_workspace_organizationId\`
            FOREIGN KEY (\`
            REFERENCES \`;
        `)
    }

    publ: Promise<void> {
        // step 1 - drop index and foreign key for organizationId
        await queryRunner.query(`
            ALTER TABLE \`workspace\`
            DROP INDEX \`idx_workspace_organizationId\`,
            DROP FOREIGN KEY \`fk_workspace_organizationId\`;
        `)
    }
}
