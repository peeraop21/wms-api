import { ExceptionFilter, Catch, ArgumentsHost, HttpException } from '@nestjs/common'
import { Request, Response } from 'express'
import { MyCustomResponse } from 'src/utils/reponse'

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost) {
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
        // const request = ctx.getRequest<Request>();
        const status = exception.getStatus()
        const errorResponse = exception.getResponse() as MyCustomResponse
        console.log(errorResponse)
        response.status(status).json(errorResponse)
        //   .json({
        //     errorCode: status,
        //     timestamp: new Date().toISOString(),
        //     path: request.url,
        //   });
    }
}
