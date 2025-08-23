import { MigrationInterface, QueryRunner } from 'typeorm'

exp {
    /*-------------------------------------
    ---------------- ApiKey ---------------
    --------------------------------------*/
    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_apikey" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "apiKey" varchar NOT NULL, 
                "apiSecret" varchar NOT NULL, 
                "keyName" varchar NOT NULL, 
                "), 
                "up),
                "workspaceId" varchar,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_apikey table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_ap
            SELECT "id", "apiKey", "apiSecret", "keyName", "updatedDate", "updatedDate", "workspaceId" FROM "apikey";
        `)

    // step 4 - drop apikey table
    awa

    // step 5 - alter temp_apikey to apikey table
    awa

    /*-------------------------------------
    ---------------- User ---------------
    --------------------------------------*/
     {
        // step 1 - create temp table with activeWorkspaceId as foreign key
        await queryRunner.query(`
                CREATE TABLE "temp_user" (
                    "id" varchar PRIMARY KEY NOT NULL, 
                    "role" varchar NOT NULL, 
                    "name" varchar, 
                    "credential" text, 
                    "tempToken" text, 
                    "tokenExpiry" datetime,
                    "email" varchar NOT NULL, 
                    "status" varchar NOT NULL, 
                    "lastLogin" datetime,
                    "activeWorkspaceId" varchar NOT NULL, 
                    FOREIGN KEY ("a REFERENCES "w
                );
            `)

        // step 2 - create index for activeWorkspaceId in temp_user table
        awa;`)

        // step 3 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_u
                SELECT "id", "role", "name", "credential", "tempToken", "tokenExpiry", "email", "status", "lastLogin", "activeWorkspaceId" FROM "user";
            `)

        // step 4 - drop user table
        awa

        // step 5 - alter temp_user to user table
        awa
    }

    /*----------------------------------------------
    ---------------- Workspace Users ---------------
    ------------------------------------------------*/

     {
        // step 1 - create temp table with workspaceId as foreign key
        await queryRunner.query(`
                CREATE TABLE "temp_workspace_users" (
                    "id" varchar PRIMARY KEY NOT NULL,
                    "workspaceId" varchar NOT NULL,
                    "userId" varchar NOT NULL,
                    "role" varchar NOT NULL,
                    FOREIGN KEY ("w REFERENCES "w
                );
            `)

        // step 2 - create index for workspaceId in temp_workspace_users table
        awa;`)

        // step 3 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_w
                SELECT "id", "workspaceId", "userId", "role" FROM "workspace_users";
            `)

        // step 4 - drop workspace_users table
        awa

        // step 5 - alter temp_workspace_users to workspace_users table
        awa
    }

    /*----------------------------------------------
    ---------------- Chatflow ----------------------
    ------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_chat_flow" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "flowData" text NOT NULL, 
                "deployed" boolean, 
                "isPublic" boolean, 
                "apikeyid" varchar, 
                "chatbotConfig" text, 
                "), 
                "up), 
                "apiConfig" TEXT, 
                "analytic" TEXT, 
                "category" TEXT, 
                "speechToText" TEXT, 
                "type" TEXT, 
                "workspaceId" TEXT, 
                "followUpPrompts" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_chat_flow table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_
            SELECT "id", "name", "flowData", "deployed", "isPublic", "apikeyid", "chatbotConfig", "createdDate", "updatedDate", "apiConfig", "analytic", "category", "speechToText", "type", "workspaceId", "followUpPrompts" FROM "chat_flow";
        `)

    // step 4 - drop chat_flow table
    awa

    // step 5 - alter temp_chat_flow to chat_flow table
    awa

    /*----------------------------------------------
    ---------------- Tool --------------------------
    ------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_tool" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "description" text NOT NULL, 
                "color" varchar NOT NULL, 
                "iconSrc" varchar, 
                "schema" text, 
                "func" text, 
                "), 
                "up), 
                "workspaceId" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_tool table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_t
            SELECT "id", "name", "description", "color", "iconSrc", "schema", "func", "createdDate", "updatedDate", "workspaceId" FROM "tool";
        `)

    // step 4 - drop tool table
    awa

    // step 5 - alter temp_tool to tool table
    awa

    /*----------------------------------------------
    ---------------- Assistant ----------------------
    ------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_assistant" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "details" text NOT NULL, 
                "credential" varchar NOT NULL, 
                "iconSrc" varchar, 
                "), 
                "up), 
                "workspaceId" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_assistant table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_a
            SELECT "id", "details", "credential", "iconSrc", "createdDate", "updatedDate", "workspaceId" FROM "assistant";
        `)

    // step 4 - drop assistant table
    awa

    // step 5 - alter temp_assistant to assistant table
    awa

    /*----------------------------------------------
    ---------------- Credential ----------------------
    ------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_credential" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "credentialName" varchar NOT NULL, 
                "encryptedData" text NOT NULL, 
                "), 
                "up), 
                "workspaceId" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_credential table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_
            SELECT "id", "name", "credentialName", "encryptedData", "createdDate", "updatedDate", "workspaceId" FROM "credential";
        `)

    // step 4 - drop credential table
    awa

    // step 5 - alter temp_credential to credential table
    awa

    /*---------------------------------------------------
    ---------------- Document Store ----------------------
    -----------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_document_store" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "description" varchar, 
                "status" varchar NOT NULL, 
                "loaders" text, 
                "whereUsed" text, 
                "up),
                "), 
                "vectorStoreConfig" TEXT, 
                "embeddingConfig" TEXT, 
                "recordManagerConfig" TEXT, 
                "workspaceId" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_document_store table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_
            SELECT "id", "name", "description", "status", "loaders", "whereUsed", "updatedDate", "createdDate", "vectorStoreConfig", "embeddingConfig", "recordManagerConfig", "workspaceId" FROM "document_store";
        `)

    // step 4 - drop document_store table
    awa

    // step 5 - alter temp_document_store to document_store table
    awa

    /*---------------------------------------------------
    ---------------- Evaluation -------------------------
    -----------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_evaluation" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "chatflowId" text NOT NULL, 
                "chatflowName" text NOT NULL, 
                "datasetId" varchar NOT NULL, 
                "datasetName" varchar NOT NULL, 
                "additionalConfig" text, 
                "status" varchar NOT NULL, 
                "evaluationType" varchar, 
                "average_metrics" text, 
                "), 
                "workspaceId" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_evaluation table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_evaluat
            SELECT "id", "name", "chatflowId", "chatflowName", "datasetId", "datasetName", "additionalConfig", "status", "evaluationType", "average_metrics", "runDate", "workspaceId" FROM "evaluation";
        `)

    // step 4 - drop evaluation table
    awa

    // step 5 - alter temp_evaluation to evaluation table
    awa

    /*---------------------------------------------------
    ---------------- Evaluator -------------------------
    -----------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_evaluator" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" text NOT NULL, 
                "type" varchar, 
                "config" text, 
                "), 
                "up), 
                "workspaceId" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_evaluator table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_evaluat
            SELECT "id", "name", "type", "config", "createdDate", "updatedDate", "workspaceId" FROM "evaluator";
        `)

    // step 4 - drop evaluator table
    awa

    // step 5 - alter temp_evaluator to evaluator table
    awa

    /*---------------------------------------------------
    ---------------- Dataset -------------------------
    -----------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_dataset" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" text NOT NULL, 
                "description" varchar, 
                "), 
                "up), 
                "workspaceId" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_dataset table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_
            SELECT "id", "name", "description", "createdDate", "updatedDate", "workspaceId" FROM "dataset";
        `)

    // step 4 - drop dataset table
    awa

    // step 5 - alter temp_dataset to dataset table
    awa

    /*---------------------------------------------------
    ---------------- Variable ---------------------------
    -----------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_variable" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" text NOT NULL, 
                "value" text NOT NULL, 
                "type" varchar, 
                "), 
                "up), 
                "workspaceId" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_variable table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_va
            SELECT "id", "name", "value", "type", "createdDate", "updatedDate", "workspaceId" FROM "variable";
        `)

    // step 4 - drop variable table
    awa

    // step 5 - alter temp_variable to variable table
    awa

    /*---------------------------------------------------
    ---------------- Workspace Shared -------------------
    -----------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_workspace_shared" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "workspaceId" varchar NOT NULL, 
                "sharedItemId" varchar NOT NULL, 
                "itemType" varchar NOT NULL, 
                "), 
                "up),
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_workspace_shared table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_w
            SELECT "id", "workspaceId", "sharedItemId", "itemType", "createdDate", "updatedDate" FROM "workspace_shared";
        `)

    // step 4 - drop workspace_shared table
    awa

    // step 5 - alter temp_workspace_shared to workspace_shared table
    awa

    /*---------------------------------------------------
    ---------------- Custom Template -------------------
    -----------------------------------------------------*/

    // step 1 - create temp table with workspaceId as foreign key
    await queryRunner.query(`
            CREATE TABLE "temp_custom_template" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "flowData" text NOT NULL, 
                "description" varchar, 
                "badge" varchar, 
                "framework" varchar, 
                "usecases" varchar, 
                "type" varchar, 
                "up),
                "), 
                "workspaceId" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

    // step 2 - create index for workspaceId in temp_custom_template table
    awa;`)

    // step 3 - migrate data
    await queryRunner.query(`
            INSERT INTO "temp_
            SELECT "id", "name", "flowData", "description", "badge", "framework", "usecases", "type", "updatedDate", "createdDate", "workspaceId" FROM "custom_template";
        `)

    // step 4 - drop custom_template table
    awa

    // step 5 - alter temp_custom_template to custom_template table
    awa
}

export class LinkWorkspaceId1729130948686 implements MigrationInterface {
    name = 'LinkWorkspaceId1729130948686'

    publ: Promise<void> {
        awa
    }

    publ: Promise<void> {
        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_apikey" (
                "id" varchar PRIMARY KEY NOT NULL,
                "apiKey" varchar,
                "apiSecret" varchar NOT NULL,
                "keyName" varchar NOT NULL,
                "up),
                "workspaceId" varchar
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
            INSERT INTO "temp_ap
            SELECT "id", "apiKey", "apiSecret", "keyName", "updatedDate" FROM "apikey";
        `)

        // step 3 - drop apikey table
        awa

        // step 4 - alter temp_apikey to apiKey table
        awa

        // step 1 - create temp table without activeWorkspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_user" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "role" varchar NOT NULL, 
                "name" varchar, 
                "credential" text, 
                "tempToken" text, 
                "tokenExpiry" datetime,
                "email" varchar NOT NULL, 
                "status" varchar NOT NULL, 
                "activeWorkspaceId" varchar NOT NULL, 
                "lastLogin" datetime
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
            INSERT INTO "temp_u
            SELECT "id", "role", "name", "credential", "tempToken", "tokenExpiry", "email", "status", "lastLogin", "activeWorkspaceId" FROM "user";
        `)

        // step 3 - drop user table
        awa

        // step 4 - alter temp_user to user table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_workspace_users" (
                "id" varchar PRIMARY KEY NOT NULL,
                "workspaceId" varchar NOT NULL,
                "userId" varchar NOT NULL,
                "role" varchar NOT NULL
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
            INSERT INTO "temp_w
            SELECT "id", "workspaceId", "userId", "role" FROM "workspace_users";
        `)

        // step 3 - drop workspace_users table
        awa

        // step 4 - alter temp_workspace_users to workspace_users table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_chat_flow" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "flowData" text NOT NULL, 
                "deployed" boolean, 
                "isPublic" boolean, 
                "apikeyid" varchar, 
                "chatbotConfig" text, 
                "), 
                "up), 
                "apiConfig" TEXT, 
                "analytic" TEXT, 
                "category" TEXT, 
                "speechToText" TEXT, 
                "type" TEXT, 
                "workspaceId" TEXT, 
                "followUpPrompts" TEXT
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_
                SELECT "id", "name", "flowData", "deployed", "isPublic", "apikeyid", "chatbotConfig", "createdDate", "updatedDate", "apiConfig", "analytic", "category", "speechToText", "type", "workspaceId", "followUpPrompts" FROM "chat_flow";
        `)

        // step 3 - drop chat_flow table
        awa

        // step 4 - alter temp_chat_flow to chat_flow table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_tool" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "description" text NOT NULL, 
                "color" varchar NOT NULL, 
                "iconSrc" varchar, 
                "schema" text, 
                "func" text, 
                "), 
                "up), 
                "workspaceId" TEXT
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_t
                SELECT "id", "name", "description", "color", "iconSrc", "schema", "func", "createdDate", "updatedDate", "workspaceId" FROM "tool";
        `)

        // step 3 - drop tool table
        awa

        // step 4 - alter temp_tool to tool table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_assistant" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "details" text NOT NULL, 
                "credential" varchar NOT NULL, 
                "iconSrc" varchar, 
                "), 
                "up), 
                "workspaceId" TEXT
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_a
                SELECT "id", "details", "credential", "iconSrc", "createdDate", "updatedDate", "workspaceId" FROM "assistant";
        `)

        // step 3 - drop assistant table
        awa

        // step 4 - alter temp_assistant to assistant table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_credential" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "credentialName" varchar NOT NULL, 
                "encryptedData" text NOT NULL, 
                "), 
                "up), 
                "workspaceId" TEXT
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_
                SELECT "id", "name", "credentialName", "encryptedData", "createdDate", "updatedDate", "workspaceId" FROM "credential";
        `)

        // step 3 - drop credential table
        awa

        // step 4 - alter temp_credential to credential table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_document_store" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "description" varchar, 
                "status" varchar NOT NULL, 
                "loaders" text, 
                "whereUsed" text, 
                "up),
                "), 
                "vectorStoreConfig" TEXT, 
                "embeddingConfig" TEXT, 
                "recordManagerConfig" TEXT, 
                "workspaceId" TEXT,
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_
                SELECT "id", "name", "description", "status", "loaders", "whereUsed", "updatedDate", "createdDate", "vectorStoreConfig", "embeddingConfig", "recordManagerConfig", "workspaceId" FROM "document_store";
        `)

        // step 3 - drop document_store table
        awa

        // step 4 - alter temp_document_store to document_store table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_evaluation" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "chatflowId" text NOT NULL, 
                "chatflowName" text NOT NULL, 
                "datasetId" varchar NOT NULL, 
                "datasetName" varchar NOT NULL, 
                "additionalConfig" text, 
                "status" varchar NOT NULL, 
                "evaluationType" varchar, 
                "average_metrics" text, 
                "), 
                "workspaceId" TEXT
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_evaluat
                SELECT "id", "name", "chatflowId", "chatflowName", "datasetId", "datasetName", "additionalConfig", "status", "evaluationType", "average_metrics", "runDate", "workspaceId" FROM "evaluation";
        `)

        // step 3 - drop evaluation table
        awa

        // step 4 - alter temp_evaluation to evaluation table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_evaluator" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" text NOT NULL, 
                "type" varchar, 
                "config" text, 
                "), 
                "up), 
                "workspaceId" TEXT
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_evaluat
                SELECT "id", "name", "type", "config", "createdDate", "updatedDate", "workspaceId" FROM "evaluator";
        `)

        // step 3 - drop evaluator table
        awa

        // step 4 - alter temp_evaluator to evaluator table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_dataset" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" text NOT NULL, 
                "description" varchar, 
                "), 
                "up), 
                "workspaceId" TEXT
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_
                SELECT "id", "name", "description", "createdDate", "updatedDate", "workspaceId" FROM "dataset";
        `)

        // step 3 - drop dataset table
        awa

        // step 4 - alter temp_dataset to dataset table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_variable" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" text NOT NULL, 
                "value" text NOT NULL, 
                "type" varchar, 
                "), 
                "up), 
                "workspaceId" TEXT
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_va
                SELECT "id", "name", "value", "type", "createdDate", "updatedDate", "workspaceId" FROM "variable";
        `)

        // step 3 - drop variable table
        awa

        // step 4 - alter temp_variable to variable table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_workspace_shared" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "workspaceId" varchar NOT NULL, 
                "sharedItemId" varchar NOT NULL, 
                "itemType" varchar NOT NULL, 
                "), 
                "up)
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_w
                SELECT "id", "workspaceId", "sharedItemId", "itemType", "createdDate", "updatedDate" FROM "workspace_shared";
        `)

        // step 3 - drop workspace_shared table
        awa

        // step 4 - alter temp_workspace_shared to workspace_shared table
        awa

        // step 1 - create temp table without workspaceId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_custom_template" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "flowData" text NOT NULL, 
                "description" varchar, 
                "badge" varchar, 
                "framework" varchar, 
                "usecases" varchar, 
                "type" varchar, 
                "up),
                "), 
                "workspaceId" TEXT
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_
                SELECT "id", "name", "flowData", "description", "badge", "framework", "usecases", "type", "updatedDate", "createdDate", "workspaceId" FROM "custom_template";
        `)

        // step 3 - drop custom_template table
        awa

        // step 4 - alter temp_custom_template to custom_template table
        awa
    }
}
