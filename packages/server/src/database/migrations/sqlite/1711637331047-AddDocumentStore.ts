import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddDocumentStore1711637331047 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "document_store" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "description" varchar, 
                "status" varchar NOT NULL, 
                "loaders" text, 
                "whereUsed" text, 
                "up),
                "));`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "document_store_file_chunk" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "docId" varchar NOT NULL, 
                "storeId" varchar NOT NULL, 
                "chunkNo" INTEGER NOT NULL, 
                "pageContent" text, 
                "metadata" text 
            );`
        )
        awa ;`)
        awa ;`)
    }

    publ: Promise<void> {
        awa
        awa
    }
}
