import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'
import { MyCustomResponse } from 'src/utils/reponse'
export class ConfirmGRDetailDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public ownerPN: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public customerLotNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public itemNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public qty: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public userName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

export class ConfirmGRDetailDtoResponse implements MyCustomResponse {
    code: number
    message: string
}
