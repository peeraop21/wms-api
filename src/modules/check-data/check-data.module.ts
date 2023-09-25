import { Module } from '@nestjs/common'
import { CheckDataController } from './check-data.controller'
import { CheckDataService } from './check-data.service'

@Module({
    controllers: [CheckDataController],
    providers: [CheckDataService],
})
export class CheckDataModule {}
