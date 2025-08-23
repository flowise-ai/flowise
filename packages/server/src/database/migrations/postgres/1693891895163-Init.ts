import { MigrationInterface, QueryRunner } from 'typeorm'

export class Init1693891895163 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS chat_flow (
                ,
                "name" varchar NOT NULL,
                "flowData" text NOT NULL,
                deployed bool NULL,
                "isPublic" bool NULL,
                apikeyid varchar NULL,
                "chatbotConfig" varchar NULL,
                ",
                "up,
                CONSTRAINT "PK_3
            );`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS chat_message (
                ,
                "role" varchar NOT NULL,
                chatflowid varchar NOT NULL,
                "content" text NOT NULL,
                "sourceDocuments" varchar NULL,
                ",
                CONSTRAINT "PK_3
            );`
        )
        awa;`)
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS credential (
                ,
                "name" varchar NOT NULL,
                "credentialName" varchar NOT NULL,
                "encryptedData" varchar NOT NULL,
                ",
                "up,
                CONSTRAINT "PK_3a5169b
            );`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS tool (
                ,
                "name" varchar NOT NULL,
                description text NOT NULL,
                color varchar NOT NULL,
                "iconSrc" varchar NULL,
                "schema" varchar NULL,
                func varchar NULL,
                ",
                "up,
                CONSTRAINT "PK_3bf5b1016a384916073184f99b7" PRIMARY KEY (
            );`
        )
    }

    publ: Promise<void> {
        awa
        awa
        awa
        awa
    }
}
