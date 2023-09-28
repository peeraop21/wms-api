import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { Inject, Injectable } from '@nestjs/common'
import { TblWhConfirmGoodsReceive } from 'src/entities/TblWhConfirmGoodsReceive.entity';
import { TblWhPrepairGoodsReceive } from 'src/entities/TblWhPrepairGoodsReceive.entity';
import { TblWhPrepairGoodsReceiveDetail } from 'src/entities/TblWhPrepairGoodsReceiveDetail.entity';
import { DataSource, QueryRunner } from 'typeorm';

@Injectable()
export class ReceivingDataService {
    private readonly queryRunner: QueryRunner;
    constructor(
        @Inject('DATA_SOURCE')
        private readonly dataSource: DataSource,
        @InjectMapper() private readonly mapper: Mapper
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

    async confirmNewReceiveByPrepairGoodsAsync(_prepairGoods: TblWhPrepairGoodsReceive, username: string) {
        await this.queryRunner.connect();
        await this.queryRunner.startTransaction();
        try {
            let confirmGoods = this.mapper.map(_prepairGoods, TblWhPrepairGoodsReceive, TblWhConfirmGoodsReceive);
            confirmGoods.userBy = username
            const jobNo = _prepairGoods.lotNo
            await this.queryRunner.manager.getRepository(TblWhConfirmGoodsReceive).save(confirmGoods)
            await this.queryRunner.manager
                .getRepository(TblWhConfirmGoodsReceive)
                .createQueryBuilder()
                .update(TblWhPrepairGoodsReceive)
                .set({ usedStatus: true })
                .where('LOTNo = :jobNo', { jobNo })
                .execute();
            await this.queryRunner.commitTransaction();
        } catch (err) {
            console.log(err)
            await this.queryRunner.rollbackTransaction();
        } finally {
            await this.queryRunner.release();
        }
    }

    async getWHPrepairGoodsReceiveDetailByJobNoAsync(jobNo: string, ownerPN: string, customerLotNo: string): Promise<TblWhPrepairGoodsReceiveDetail[] | null> {
        return await this.queryRunner.manager.find(TblWhPrepairGoodsReceiveDetail, { where: { lotNo: jobNo, ownerPn: ownerPN, customerLotNo: customerLotNo }, order: { receiveDate: 'ASC' } });
    }

    async getGoodsReceive(jobNo: string, ownerPN: string, customerLotNo: string, itemNo: string) {
        const _data = await this.queryRunner.manager
            .getRepository(TblWhPrepairGoodsReceiveDetail)
            .createQueryBuilder('a')
            .select([
                'a.LOTNo',
                'a.WHSite',
                'a.WHLocation',
                'a.CustomerLOTNo',
                'a.OwnerPN',
                'a.ProductDesc',
                'a.ItemNo',
                'a.Quantity AS qtyRequested',
                'a.QuantityUnit',
                'a.ReceiveDate',
                'a.Type',
                'a.Quantity AS qtyNotReceive',
                'b.Quantity AS receivedQuantity',
            ])
            .leftJoinAndSelect('tblWHConfirmGoodsReceiveDetail', 'b', 'a.LOTNo = b.LOTNo AND a.OwnerPN = b.OwnerPN AND a.CustomerLOTNo = b.CustomerLOTNo AND a.ItemNo = b.ItemNo')
            .where('a.LOTNo = :jobNo', { jobNo })
            .andWhere('a.OwnerPN = :ownerPN', { ownerPN })
            .andWhere('a.CustomerLOTNo = :customerLotNo', { customerLotNo })
            .andWhere('a.ItemNo = :itemNo', { itemNo })
            .andWhere('a.Type = :type', { type: 'Good Condition' })
            .getRawOne()
            console.log(_data)
        return _data == undefined || _data == null ? null : _data
    }

}
