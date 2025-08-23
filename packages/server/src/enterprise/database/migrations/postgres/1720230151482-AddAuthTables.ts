import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddAuthTables1720230151482 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "user" (
                ,
                "name" varchar,
                "role" varchar NOT NULL,
                "credential" text,
                "tempToken" text,
                "tokenExpiry" timestamp,
                "email" varchar NOT NULL,
                "status" varchar NOT NULL,
                "activeWorkspaceId" varchar,
                "lastLogin" timestamp,
                CONSTRAINT "PK_98455643
            );`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "roles" (
                ,
                "name" varchar,
                "description" varchar,
                "permissions" text,
                CONSTRAINT "PK_98488643
            );`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "login_activity" (
                ",
                "username" varchar NOT NULL, 
                "activity_code" integer NOT NULL, 
                "message" varchar NOT NULL, 
                "attempte);`
        )
    }

    publ: Promise<void> {
        awa
        awa
        awa
    }
}
