import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'
import { MyCustomResponse } from 'src/utils/reponse'
export class ConfirmNewReceiveDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public userName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

export class ConfirmNewReceiveDtoResponse implements MyCustomResponse {
    code: number
    message: string
}
