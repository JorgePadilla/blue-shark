import {MigrationInterface, QueryRunner} from "typeorm";

export class paciente1617675579269 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(
            `CREATE TABLE "paciente" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "primerNombre" character varying NOT NULL, "segundoNombre" character varying NOT NULL, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdef" PRIMARY KEY ("id"))`
        )
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`DROP TABLE "paciente"`);
    }

}
