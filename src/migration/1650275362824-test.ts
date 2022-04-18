import {MigrationInterface, QueryRunner} from "typeorm";

export class test1650275362824 implements MigrationInterface {
    name = 'test1650275362824'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`test\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, UNIQUE INDEX \`IDX_bb6f40984281fc016e98cab260\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_bb6f40984281fc016e98cab260\` ON \`test\``);
        await queryRunner.query(`DROP TABLE \`test\``);
    }

}
