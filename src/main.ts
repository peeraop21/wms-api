import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { HttpExceptionFilter } from './filters/http-exception.filter'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {
    const app = await NestFactory.create(AppModule)
    app.useGlobalPipes(new ValidationPipe())
    app.useGlobalFilters(new HttpExceptionFilter())
    app.setGlobalPrefix('api')

    //#region Swagger
    const config = new DocumentBuilder().setTitle('WMS API').setDescription('The WMS API description').setVersion('1.0').build()
    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('swagger', app, document)
    //#endregion

    await app.listen(3001)
}
bootstrap()
