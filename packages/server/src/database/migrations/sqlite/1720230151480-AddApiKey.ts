import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddApiKey1720230151480 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "apikey" ("id" varchar PRIMARY KEY NOT NULL, 
                "apiKey" varchar NOT NULL, 
                "apiSecret" varchar NOT NULL, 
                "keyName" varchar NOT NULL, 
                "up));`
        )
    }

    publ: Promise<void> {
        awa
    }
}
