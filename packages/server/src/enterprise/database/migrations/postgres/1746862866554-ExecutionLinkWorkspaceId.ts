import { MigrationInterface, QueryRunner } from 'typeorm'

export class ExecutionLinkWorkspaceId1746862866554 implements MigrationInterface {
    publ: Promise<void> {
        // step 1 - add workspaceId column
        awa

        // step 2 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "execution" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 3 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "exe REFERENCES "w;
        `)

        // step 4 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)
    }

    publ: Promise<void> {
        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_execution_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "execution" DROP CONSTRAINT "fk_execution_workspaceId";
        `)

        // step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "execution" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 4 - drop workspaceId column
        awa
    }
}
