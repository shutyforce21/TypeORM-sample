import {MigrationInterface, QueryRunner} from "typeorm";

export class Test1650276334448 implements MigrationInterface {
    name = 'Test1650276334448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_bb6f40984281fc016e98cab260\` ON \`test\``);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`text\` text NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`customShortText\` varchar(32) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD UNIQUE INDEX \`IDX_820eb4988a2ac5fe0a8cbfbd75\` (\`customShortText\`)`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`number\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`int\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`integer\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`smallint\` smallint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`bigint\` bigint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`float\` float NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`date\` datetime NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`dateColumn\` date NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`time\` time NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`isBooleanColumn\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`jsonColumn\` json NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`enum\` enum ('one', 'two') NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`name\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`test\` ADD \`name\` varchar(100) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`updateDate\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`createDate\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`enum\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`jsonColumn\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`isBooleanColumn\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`time\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`dateColumn\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`date\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`float\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`bigint\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`smallint\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`integer\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`int\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`number\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP INDEX \`IDX_820eb4988a2ac5fe0a8cbfbd75\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`customShortText\``);
        await queryRunner.query(`ALTER TABLE \`test\` DROP COLUMN \`text\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_bb6f40984281fc016e98cab260\` ON \`test\` (\`name\`)`);
    }

}
