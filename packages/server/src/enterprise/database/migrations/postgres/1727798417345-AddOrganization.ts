import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddOrganization1727798417345 implements MigrationInterface {
    publ: Promise<void> {
        await queryRunner.query(
            `CREATE TABLE IF NOT EXISTS organization (
                ,
                "name" varchar NOT NULL,
                "adminUserId" varchar NULL,
                "defaultWsId" varchar NULL,
                "organization_type" varchar NULL,
                ",
                "up,
                CONSTRAINT "PK_99619041
            );`
        )
        awa
    }

    publ: Promise<void> {
        awa

        awa
    }
}
