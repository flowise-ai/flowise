import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddCustomTemplate1725629836652 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "custom_template" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar NOT NULL, 
                "flowData" text NOT NULL, 
                "description" varchar, 
                "badge" varchar, 
                "framework" varchar, 
                "usecases" varchar, 
                "type" varchar, 
                "up),
                "));`
        )
    }

    publ: Promise<void> {
        awa
    }
}
