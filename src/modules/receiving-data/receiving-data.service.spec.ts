import { Test, TestingModule } from '@nestjs/testing'
import { ReceivingDataService } from './receiving-data.service'

describe('ReceivingDataService', () => {
    let service: ReceivingDataService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [ReceivingDataService],
        }).compile()

        service = module.get<ReceivingDataService>(ReceivingDataService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
