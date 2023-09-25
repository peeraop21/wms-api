import { Test, TestingModule } from '@nestjs/testing'
import { PickingController } from './picking.controller'
import { PickingService } from './picking.service'

describe('PickingController', () => {
    let controller: PickingController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [PickingController],
            providers:[PickingService]
        }).compile()

        controller = module.get<PickingController>(PickingController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
