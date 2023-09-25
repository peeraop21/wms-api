import { Inject, Injectable } from '@nestjs/common'
import { TblWhConfirmGoodsReceive } from 'src/entities/TblWhConfirmGoodsReceive.entity';
import { TblWhPrepairGoodsReceive } from 'src/entities/TblWhPrepairGoodsReceive.entity';
import { DataSource, QueryRunner } from 'typeorm';

@Injectable()
export class ReceivingDataService {
    private readonly queryRunner: QueryRunner;
    constructor(
        @Inject('DATA_SOURCE')
        private readonly dataSource: DataSource,
    ) {
        this.queryRunner = this.dataSource.createQueryRunner()
    }
    async getUseStatusByJobNoAsync(jobNo: string): Promise<boolean | null> {
        const result = await this.queryRunner.manager
            .getRepository(TblWhPrepairGoodsReceive)
            .createQueryBuilder("w")
            .where({ lotNo: jobNo })
            .select('w.usedStatus', 'usedStatus')
            .getRawOne()
        return result == null || result == undefined ? null : result.usedStatus
    }

    async getWHPrepairGoodsReceiveByJobNoAsync(jobNo: string): Promise<TblWhPrepairGoodsReceive[] | null> {
        const result = await this.queryRunner.manager
            .getRepository(TblWhPrepairGoodsReceive)
            .createQueryBuilder("w")
            .where("w.LOTNo like :jobNo", { jobNo: `%${jobNo}%` })
            .orderBy("w.LOTNo", 'ASC')
            .getMany();
        return result.length > 0 ? result : null
    }

    async getOneWHPrepairGoodsReceiveByJobNoAsync(jobNo: string): Promise<TblWhPrepairGoodsReceive | null> {
        return await this.queryRunner.manager.findOneBy(TblWhPrepairGoodsReceive, { lotNo: jobNo });
    }


    async getOneWHConfirmGoodsReceiveByJobNoAsync(jobNo: string): Promise<TblWhConfirmGoodsReceive | null> {
        return await this.queryRunner.manager.findOneBy(TblWhConfirmGoodsReceive, { lotNo: jobNo });
    }



}
