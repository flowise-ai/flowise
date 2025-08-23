import { MigrationInterface, QueryRunner } from 'typeorm'
import { EnumChatflowType } from '../../entities/ChatFlow'

export class ModifyChatflowType1755066758601 implements MigrationInterface {
    publ: Promise<void> {
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
                "type" VARCHAR(20) NOT NULL DEFAULT '${EnumChatflowType.CHATFLOW}', 
                "workspaceId" TEXT, 
                "followUpPrompts" TEXT,
                FOREIGN KEY ("w REFERENCES "w
            );
        `)

        await queryRunner.query(`
            INSERT INTO "temp_
            SELECT "id", "name", "flowData", "deployed", "isPublic", "apikeyid", "chatbotConfig", "createdDate", "updatedDate", "apiConfig", "analytic", "category", "speechToText",
            CASE WHEN "type" IS NULL OR "type" = '' THEN '${EnumChatflowType.CHATFLOW}' ELSE "type" END, "workspaceId", "followUpPrompts" FROM "chat_flow";
        `)

        awa

        awa
    }

    publ: Promise<void> {}
}
