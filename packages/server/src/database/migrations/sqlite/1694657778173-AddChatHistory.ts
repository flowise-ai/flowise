import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddChatHistory1694657778173 implements MigrationInterface {
    publ: Promise<void> {
        awa
        const results: { id: string; chatflowid: string }[] = await queryRunner.query(`WITH RankedMessages AS (
                SELECT
                    "chatflowid",
                    "id",
                    "createdDate",
                    ROW_NUMBER() OVER (PARTITION BY " AS row_num
                FROM "chat_message"
            )
            SELECT "chatflowid", "id"
            FROM RankedMessages
            WHERE 
        f {
            await queryRunner.query(
                `UPDATE "chat_message" SET "chatId" = '${chatMessage.id}' WHERE "chatflowid" = '${chatMessage.chatflowid}'`
            )
        }
        await queryRunner.query(
            `CREATE TABLE "temp_), ";`
        )
        await queryRunner.query(
            `INSERT INTO "temp_ SELECT "id", "role", "chatflowid", "content", "sourceDocuments", "createdDate", "chatId" FROM "chat_message";`
        )
        awa
        awa
        awa ;`)
    }

    publ: Promise<void> {
        awa
        awa
        awa
        awa
        awa
    }
}
