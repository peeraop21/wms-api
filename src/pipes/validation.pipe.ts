import { PipeTransform, Injectable, ArgumentMetadata, HttpException, HttpStatus } from '@nestjs/common'
import { validate } from 'class-validator'
import { plainToInstance } from 'class-transformer'
import { MyCustomResponse, ResponseMessages, ResponseStatus } from '../utils/reponse'
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    async transform(value: any, { metatype }: ArgumentMetadata) {
        if (!metatype || !this.toValidate(metatype)) {
            return value
        }
        const object = plainToInstance(metatype, value)
        const errors = await validate(object)
        if (errors.length > 0) {
            throw new HttpException(
                {
                    code: ResponseStatus.INVALID_INPUT_PARAMATER,
                    message: ResponseMessages.INVALID_INPUT_PARAMATER,
                } as MyCustomResponse,
                HttpStatus.BAD_REQUEST,
            )
        }
        return value
    }

    private toValidate(metatype: any): boolean {
        const types: any[] = [String, Boolean, Number, Array, Object]
        return !types.includes(metatype)
    }
}
