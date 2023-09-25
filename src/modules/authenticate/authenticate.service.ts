import { Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { DataSource, QueryRunner, Repository } from 'typeorm'
import MyConfigService from 'src/config/config.service'
import EncryptionService from 'src/helpers/encryption.service'
import { TblUser } from 'src/entities/TblUser.entity'
@Injectable()
export class AuthenticateService {
    private readonly queryRunner: QueryRunner;
    constructor(
        @Inject('DATA_SOURCE')
        private readonly dataSource: DataSource,
    ) {
        this.queryRunner = this.dataSource.createQueryRunner()
    }

    // async findAll(): Promise<tblUser[]> {
    //     return await this.usersRepository.find()
    // }

    // findOne(id: number): Promise<tblUser | null> {
    //     return this.usersRepository.findOneBy({ Id: id })
    // }
    async getConnectionString(): Promise<string> {
        const dbConfig = MyConfigService.getDatabaseConfig();
        const dbUser = EncryptionService.decrypt(dbConfig.DBUser, dbConfig.SecretKey)
        const dbPass = EncryptionService.decrypt(dbConfig.DBPassword, dbConfig.SecretKey)
        const connectionString = 'Server=' + dbConfig.DBServerIP + ',' + dbConfig.DBServerPort + ';Database=' + dbConfig.DBname + ';User Id=' + dbUser + ';Password=' + dbPass + ';Encrypt=true;TrustServerCertificate=True';
        return connectionString;
    }

    async findOneByUserName(userName: string): Promise<TblUser | null> {
        return await this.queryRunner.manager.findOneBy(TblUser, { userName: userName })
    }

    // async execFindOneByUserName(connectionString: string, userName: string): Promise<tblUser | null>  {
    //     await this.sqlService.connect(connectionString)

    //     const sql = `SELECT * FROM tblUser where UserName = '${userName}'`;
    //     const query = await this.sqlService.executeQuery(sql)
    //     const result: tblUser = query.Data[0]
    //     await this.sqlService.close()
    //     return result
    // }

    // async remove(id: number): Promise<void> {
    //     await this.usersRepository.delete(id);
    // }
}
