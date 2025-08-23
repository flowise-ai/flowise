import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddChatHistory1694658767766 implements MigrationInterface {
    publ: Promise<void> {
        
        
            awa NOT NULL 

        
         awa;`)
        const results: { id: string; chatflowid: string }[] = await queryRunner.query(`WITH RankedMessages AS (
                SELECT
                    \`chatflowid\`,
                    \`id\`,
                    \`createdDate\`,
                    ROW_NUMBER() OVER (PARTITION BY \` AS row_num
                FROM \`chat_message\`
            )
            SELECT \`chatflowid\`, \`id\`
            FROM RankedMessages
            WHERE 
        f {
            await queryRunner.query(
                `UPDATE \`chat_message\` SET \`chatId\` = '${chatMessage.id}' WHERE \`chatflowid\` = '${chatMessage.chatflowid}'`
            )
        }
        awa NOT NULL;`)

        
         awa;`)

        
         awa;`)
    }

    publ: Promise<void> {
        await queryRunner.query(
            `ALTER TABLE \`chat_message\` DROP COLUMN \`chatType\`, DROP COLUMN \`chatId\`, DROP COLUMN \`memoryType\`, DROP COLUMN \`sessionId\`;`
        )
    }
}
