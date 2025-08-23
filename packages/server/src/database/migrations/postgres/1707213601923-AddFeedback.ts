import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddFeedback1707213601923 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS chat_message_feedback (
                ,
                "chatflowid" varchar NOT NULL,
                "content" text,
                "chatId" varchar NOT NULL,
                "messageId" varchar NOT NULL,
                "rating" varchar NOT NULL,
                ",
                CONSTRAINT "PK_98419043
            );`
        )
    }

    publ: Promise<void> {
        awa
    }
}
