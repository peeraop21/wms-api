import { Test, TestingModule } from '@nestjs/testing'
import { CheckDataService } from './check-data.service'

describe('CheckDataService', () => {
    let service: CheckDataService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [CheckDataService],
        }).compile()

        service = module.get<CheckDataService>(CheckDataService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
