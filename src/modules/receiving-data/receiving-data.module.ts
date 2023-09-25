import { Module } from '@nestjs/common'
import { ReceivingDataController } from './receiving-data.controller'
import { ReceivingDataService } from './receiving-data.service'
import { DatabaseModule } from 'src/database/database.module'

@Module({
    imports: [DatabaseModule],
    controllers: [ReceivingDataController],
    providers: [ReceivingDataService],
})
export class ReceivingDataModule {}
