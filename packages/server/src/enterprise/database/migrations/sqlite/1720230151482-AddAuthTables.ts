import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddAuthTables1720230151482 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "user" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "role" varchar NOT NULL, 
                "name" varchar, 
                "credential" text, 
                "tempToken" text, 
                "tokenExpiry" datetime,
                "email" varchar NOT NULL, 
                "status" varchar NOT NULL, 
                "activeWorkspaceId" varchar NOT NULL, 
                "la;`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "roles" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "name" varchar, 
                "description" varchar, 
                "pe;`
        )
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS "login_activity" (
                "id" varchar PRIMARY KEY NOT NULL, 
                "username" varchar NOT NULL, 
                "activity_code" integer NOT NULL, 
                "message" varchar NOT NULL, 
                "attempte));`
        )
    }

    publ: Promise<void> {
        awa
        awa
        awa
    }
}
