import { Test, TestingModule } from '@nestjs/testing'
import { AuthenticateService } from './authenticate.service'
import { MockDataSource, MockQueryRunner } from '../../../test/mock/index';
import { DatabaseModule } from 'src/database/database.module';


describe('AuthenticateService', () => {
    let service: AuthenticateService
    let mockDataSource: MockDataSource;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            imports: [DatabaseModule],
            providers: [AuthenticateService,
                {
                    provide: 'DataSource',
                    useClass: MockDataSource,
                },

            ],
        }).compile()

        service = module.get<AuthenticateService>(AuthenticateService)
        mockDataSource = module.get<MockDataSource>('DataSource');
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    it('should findOneByUserName', async () => {
        // Mock the necessary methods in MockQueryRunner for the create operation
        jest.spyOn(mockDataSource, 'createQueryRunner').mockReturnValue(new MockQueryRunner());
        // const createItemDto = { name: 'Test Item' };

        const findOneByUserName = await service.findOneByUserName("");

        expect(findOneByUserName).toBeDefined();
        // Add more assertions as needed
    });

    it('should getConnectionString', async () => {
        jest.spyOn(mockDataSource, 'createQueryRunner').mockReturnValue(new MockQueryRunner());

        const getConnectionString = await service.getConnectionString();

        expect(getConnectionString).toBeDefined();
    });
})
