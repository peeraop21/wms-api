import { Test, TestingModule } from '@nestjs/testing'
import { AuthenticateController } from './authenticate.controller'
import { AuthenticateService } from './authenticate.service'
import { DatabaseModule } from 'src/database/database.module'


describe('AuthenticateController', () => {
    let controller: AuthenticateController

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            // imports: [TypeOrmModule.forRoot(dataSourceOptions),TypeOrmModule.forFeature([tblUser])],
            imports:[DatabaseModule],
            controllers: [AuthenticateController],
            providers: [AuthenticateService],
        }).compile()

        controller = module.get<AuthenticateController>(AuthenticateController)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })
})
