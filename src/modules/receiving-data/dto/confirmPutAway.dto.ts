import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'
import { MyCustomResponse } from 'src/utils/reponse'
export class ConfirmPutAwayDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public scanLocation: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public productCode: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public itemNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public whLocation: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

export class ConfirmPutAwayDtoResponse implements MyCustomResponse {
    code: number
    message: string
}
