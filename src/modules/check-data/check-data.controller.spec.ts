import { Test, TestingModule } from '@nestjs/testing'
import { CheckDataController } from './check-data.controller'
import { CheckDataService } from './check-data.service'

describe('CheckDataController', () => {
    let controller: CheckDataController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [CheckDataController],
            providers:[CheckDataService]
        }).compile()

        controller = module.get<CheckDataController>(CheckDataController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
