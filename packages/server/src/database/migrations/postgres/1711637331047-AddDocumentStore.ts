import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddDocumentStore1711637331047 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS document_store (
                ,
                "name" varchar NOT NULL,
                "description" varchar,
                "loaders" text,
                "whereUsed" text,
                "status" varchar NOT NULL,
                ",
                "up,
                CONSTRAINT "PK_98495043
            );`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS document_store_file_chunk (
                ,
                "docId" uuid NOT NULL,
                "chunkNo" integer NOT NULL,
                "storeId" uuid NOT NULL,
                "pageContent" text,
                "metadata" text,
                CONSTRAINT "PK_90005043
            );`
        )
        await queryRunner.query(
            `CREATE IN;`
        )
        await queryRunner.query(
            `CREATE IN;`
        )
    }

    publ: Promise<void> {
        awa
        awa
    }
}
