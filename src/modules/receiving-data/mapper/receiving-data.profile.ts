import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { createMap, forMember, mapFrom, type Mapper } from '@automapper/core';
import { Injectable } from '@nestjs/common';
import { TblWhPrepairGoodsReceive } from 'src/entities/TblWhPrepairGoodsReceive.entity';
import { TblWhConfirmGoodsReceive } from 'src/entities/TblWhConfirmGoodsReceive.entity';

@Injectable()
export class ReceivingDataProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    override get profile() {
        return (mapper) => {
            createMap(mapper, TblWhPrepairGoodsReceive, TblWhConfirmGoodsReceive,
                forMember((des) => des.lastUpdate, mapFrom((src) => new Date())),
                forMember((des) => des.quantityReceived, mapFrom((src) => 0)),
                forMember((des) => des.receivedUnit, mapFrom((src) => src.packageUnit)),
                forMember((des) => des.quantityWaitReceive, mapFrom((src) => src.quantityOfPart)),
                forMember((des) => des.waitUnit, mapFrom((src) => src.packageUnit)),
                forMember((des) => des.quantityDamage, mapFrom((src) => 0)),
                forMember((des) => des.damageUnit, mapFrom((src) => src.packageUnit)),
                forMember((des) => des.quantityDiscrepancy, mapFrom((src) => 0)),
                forMember((des) => des.discrepancyUnit, mapFrom((src) => src.packageUnit)),
            );
        };
    }
}