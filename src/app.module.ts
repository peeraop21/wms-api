import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { APP_PIPE } from '@nestjs/core'
import { ValidationPipe } from './pipes/validation.pipe'
import { AuthenticateModule } from './modules/authenticate/authenticate.module'
import { ReceivingDataModule } from './modules/receiving-data/receiving-data.module'
import { CheckDataModule } from './modules/check-data/check-data.module'
import { PickingModule } from './modules/picking/picking.module'


@Module({
    imports: [
        // ConfigModule.forRoot({
        //     isGlobal: true,
        // }),
        // TypeOrmModule.forRoot(dataSourceOptions),
        // DatabaseModule,
        AuthenticateModule,
        ReceivingDataModule,
        CheckDataModule,
        PickingModule],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_PIPE,
            useClass: ValidationPipe,
        },
    ],
})
export class AppModule { }
