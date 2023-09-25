import { Controller, Get, HttpCode, HttpException, HttpStatus, Query, UseFilters } from '@nestjs/common'
import { AuthenticateService } from './authenticate.service'
import { LoginDtoRequest, LoginDtoResponse } from './dto/login.dto'
import { MyCustomResponse, ResponseMessages, ResponseStatus } from 'src/utils/reponse'
import { ExceptionsHandler } from '@nestjs/core/exceptions/exceptions-handler'
import { HttpExceptionFilter } from 'src/filters/http-exception.filter'
import { ApiTags } from '@nestjs/swagger'
// import { MyConfigService } from 'src/config/config.service'
// import { EncryptionService } from 'src/helpers/encryption.service'

@ApiTags('authenticate')
@Controller('authenticate')
@UseFilters(new HttpExceptionFilter())
export class AuthenticateController {

    constructor(
        private readonly authenticateService: AuthenticateService
    ) { }

    @Get('login')
    async login(@Query() queryParam: LoginDtoRequest): Promise<LoginDtoResponse> {
        try {

            if (queryParam.loginName == 'test1') throw new ExceptionsHandler()
            const _data = await this.authenticateService.findOneByUserName(queryParam.loginName)
            // const _data = await this.authenticateService.execFindOneByUserName(connectionString, queryParam.loginName)
            if(_data){
                const result: LoginDtoResponse = {
                    loginResult: ResponseStatus.SUCCESS ,
                    connectionString: await this.authenticateService.getConnectionString(),
                }
                return result
            }else{
                throw ResponseStatus.USER_NOT_FOUND
            }
        } catch (error) {
            if(error == ResponseStatus.USER_NOT_FOUND){
                throw new HttpException(
                    {
                        code: ResponseStatus.USER_NOT_FOUND,
                        message: ResponseMessages.USER_NOT_FOUND,
                    } as MyCustomResponse,
                    HttpStatus.UNAUTHORIZED,
                )
            }else{
                throw new HttpException(
                    {
                        code: ResponseStatus.INTERNAL_SYSTEM_ERROR,
                        message: ResponseMessages.INTERNAL_SYSTEM_ERROR,
                    } as MyCustomResponse,
                    HttpStatus.INTERNAL_SERVER_ERROR,
                )
            }
           
        }
    }
}
