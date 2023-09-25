import { Module } from '@nestjs/common'
import { AuthenticateController } from './authenticate.controller'
import { AuthenticateService } from './authenticate.service'
import { DatabaseModule } from 'src/database/database.module'


@Module({
    // imports: [TypeOrmModule.forFeature([tblUser])],
    imports: [DatabaseModule],
    controllers: [AuthenticateController],
    providers: [
        AuthenticateService
    ],
})
export class AuthenticateModule {}
