import { Module } from '@nestjs/common'
import { ReceivingDataController } from './receiving-data.controller'
import { ReceivingDataService } from './receiving-data.service'
import { DatabaseModule } from 'src/database/database.module'
import { ReceivingDataProfile } from './mapper/receiving-data.profile'

@Module({
    imports: [DatabaseModule],
    controllers: [ReceivingDataController],
    providers: [ReceivingDataService, ReceivingDataProfile],
})
export class ReceivingDataModule { }
