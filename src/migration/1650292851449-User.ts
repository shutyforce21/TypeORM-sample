import {MigrationInterface, QueryRunner} from "typeorm";

export class User1650292851449 implements MigrationInterface {
    name = 'User1650292851449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`post\` (\`id\` int NOT NULL AUTO_INCREMENT, \`body\` varchar(50) NOT NULL, \`userId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(100) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`phone\` (\`id\` int NOT NULL AUTO_INCREMENT, \`tel\` varchar(30) NOT NULL, \`userId\` int NULL, UNIQUE INDEX \`IDX_5e97923da572b93d710c2e3ac2\` (\`tel\`), UNIQUE INDEX \`REL_260d7031e6bd9ed4fbcd2dd3ad\` (\`userId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`test\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`text\` text NOT NULL, \`customShortText\` varchar(32) NOT NULL, \`number\` int NOT NULL, \`int\` int NOT NULL, \`integer\` int NOT NULL, \`smallint\` smallint NOT NULL, \`bigint\` bigint NOT NULL, \`float\` float NOT NULL, \`date\` datetime NOT NULL, \`dateColumn\` date NOT NULL, \`time\` time NOT NULL, \`isBooleanColumn\` tinyint NOT NULL, \`jsonColumn\` json NOT NULL, \`enum\` enum ('one', 'two') NOT NULL, \`createDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updateDate\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_820eb4988a2ac5fe0a8cbfbd75\` (\`customShortText\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`role_users_user\` (\`roleId\` int NOT NULL, \`userId\` int NOT NULL, INDEX \`IDX_ed6edac7184b013d4bd58d60e5\` (\`roleId\`), INDEX \`IDX_a88fcb405b56bf2e2646e9d479\` (\`userId\`), PRIMARY KEY (\`roleId\`, \`userId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`post\` ADD CONSTRAINT \`FK_5c1cf55c308037b5aca1038a131\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`phone\` ADD CONSTRAINT \`FK_260d7031e6bd9ed4fbcd2dd3ad6\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` ADD CONSTRAINT \`FK_ed6edac7184b013d4bd58d60e54\` FOREIGN KEY (\`roleId\`) REFERENCES \`role\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` ADD CONSTRAINT \`FK_a88fcb405b56bf2e2646e9d4797\` FOREIGN KEY (\`userId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`role_users_user\` DROP FOREIGN KEY \`FK_a88fcb405b56bf2e2646e9d4797\``);
        await queryRunner.query(`ALTER TABLE \`role_users_user\` DROP FOREIGN KEY \`FK_ed6edac7184b013d4bd58d60e54\``);
        await queryRunner.query(`ALTER TABLE \`phone\` DROP FOREIGN KEY \`FK_260d7031e6bd9ed4fbcd2dd3ad6\``);
        await queryRunner.query(`ALTER TABLE \`post\` DROP FOREIGN KEY \`FK_5c1cf55c308037b5aca1038a131\``);
        await queryRunner.query(`DROP INDEX \`IDX_a88fcb405b56bf2e2646e9d479\` ON \`role_users_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_ed6edac7184b013d4bd58d60e5\` ON \`role_users_user\``);
        await queryRunner.query(`DROP TABLE \`role_users_user\``);
        await queryRunner.query(`DROP INDEX \`IDX_820eb4988a2ac5fe0a8cbfbd75\` ON \`test\``);
        await queryRunner.query(`DROP TABLE \`test\``);
        await queryRunner.query(`DROP INDEX \`REL_260d7031e6bd9ed4fbcd2dd3ad\` ON \`phone\``);
        await queryRunner.query(`DROP INDEX \`IDX_5e97923da572b93d710c2e3ac2\` ON \`phone\``);
        await queryRunner.query(`DROP TABLE \`phone\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`role\``);
        await queryRunner.query(`DROP TABLE \`post\``);
    }

}
