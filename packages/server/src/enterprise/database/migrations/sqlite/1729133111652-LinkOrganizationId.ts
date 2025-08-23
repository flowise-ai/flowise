import { MigrationInterface, QueryRunner } from 'typeorm'

export class LinkOrganizationId1729133111652 implements MigrationInterface {
    name = 'LinkOrganizationId1729133111652'

    publ: Promise<void> {
        // step 1 - create temp table with organizationId as foreign key
        await queryRunner.query(`
                CREATE TABLE "temp_workspace" (
                    "id" varchar PRIMARY KEY NOT NULL, 
                    "name" text NOT NULL, 
                    "description" varchar, 
                    "), 
                    "up), 
                    "organizationId" varchar,
                    FOREIGN KEY (" REFERENCES "
                );
            `)

        // step 2 - create index for organizationId in temp_workspace table
        awa;`)

        // step 3 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_w
                SELECT "id", "name", "description", "createdDate", "updatedDate", "organizationId" FROM "workspace";
            `)

        // step 4 - drop workspace table
        awa

        // step 5 - alter temp_workspace to workspace table
        awa
    }

    publ: Promise<void> {
        // step 1 - create temp table without organizationId as foreign key
        await queryRunner.query(`
            CREATE TABLE "temp_workspace" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" text NOT NULL, 
                "description" varchar, 
                "), 
                "up),
                "organizationId" varchar,
            );
        `)

        // step 2 - migrate data
        await queryRunner.query(`
                INSERT INTO "temp_w
                SELECT "id", "name", "description", "createdDate", "updatedDate", "organizationId" FROM "workspace";
        `)

        // step 3 - drop workspace table
        awa

        // step 4 - alter temp_workspace to workspace table
        awa
    }
}
