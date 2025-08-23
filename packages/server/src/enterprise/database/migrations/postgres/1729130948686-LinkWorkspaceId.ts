import { MigrationInterface, QueryRunner } from 'typeorm'

export class LinkWorkspaceId1729130948686 implements MigrationInterface {
    name = 'LinkWorkspaceId1729130948686'

    publ: Promise<void> {
        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "apikey" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "ap REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "user" ALTER COLUMN "activeWorkspaceId" SET DATA TYPE UUID USING "activeWorkspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "u REFERENCES "w;
        `)

        // step 3 - create index for activeWorkspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "workspace_users" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "w REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "chat_flow" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE " REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "tool" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "t REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "assistant" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "a REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "credential" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE " REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "document_store" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE " REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "evaluation" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "evaluat REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "evaluator" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "evaluat REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "dataset" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE " REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "variable" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "va REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "workspace_shared" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "w REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)

        // step 1 - convert from varchar to UUID type
        await queryRunner.query(`
            ALTER TABLE "custom_template" ALTER COLUMN "workspaceId" SET DATA TYPE UUID USING "workspaceId"::UUID;
        `)

        // step 2 - add foreign key constraint
        await queryRunner.query(`
            ALTER TABLE " REFERENCES "w;
        `)

        // step 3 - create index for workspaceId
        await queryRunner.query(`
            CREATE IN;
        `)
    }

    publ: Promise<void> {
        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_apikey_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "apikey" DROP CONSTRAINT "fk_apikey_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "apikey" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_user_activeWorkspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "user" DROP CONSTRAINT "fk_user_activeWorkspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "user" ALTER COLUMN "activeWorkspaceId" SET DATA TYPE varchar USING "activeWorkspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_workspace_users_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "workspace_users" DROP CONSTRAINT "fk_workspace_users_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "workspace_users" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_chat_flow_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "chat_flow" DROP CONSTRAINT "fk_chat_flow_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "chat_flow" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_tool_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "tool" DROP CONSTRAINT "fk_tool_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "tool" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_assistant_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "assistant" DROP CONSTRAINT "fk_assistant_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "assistant" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_credential_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "credential" DROP CONSTRAINT "fk_credential_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "credential" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_document_store_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "document_store" DROP CONSTRAINT "fk_document_store_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "document_store" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_evaluation_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "evaluation" DROP CONSTRAINT "fk_evaluation_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "evaluation" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_evaluator_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "evaluator" DROP CONSTRAINT "fk_evaluator_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "evaluator" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_dataset_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "dataset" DROP CONSTRAINT "fk_dataset_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "dataset" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_variable_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "variable" DROP CONSTRAINT "fk_variable_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "variable" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_workspace_shared_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "workspace_shared" DROP CONSTRAINT "fk_workspace_shared_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "workspace_shared" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)

        // step 1 - drop index
        await queryRunner.query(`
            DROP INDEX "idx_custom_template_workspaceId";
        `)

        // step 2 - drop foreign key constraint
        await queryRunner.query(`
            ALTER TABLE "custom_template" DROP CONSTRAINT "fk_custom_template_workspaceId";
        `)

        // Step 3 - convert from UUID to varchar type
        await queryRunner.query(`
            ALTER TABLE "custom_template" ALTER COLUMN "workspaceId" SET DATA TYPE varchar USING "workspaceId"::varchar;
        `)
    }
}
