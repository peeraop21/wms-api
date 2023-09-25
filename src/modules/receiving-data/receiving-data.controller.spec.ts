import { Test, TestingModule } from '@nestjs/testing'
import { ReceivingDataController } from './receiving-data.controller'
import { ReceivingDataService } from './receiving-data.service'

describe('ReceivingDataController', () => {
    let controller: ReceivingDataController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [ReceivingDataController],
            providers: [ReceivingDataService]
        }).compile()

        controller = module.get<ReceivingDataController>(ReceivingDataController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
