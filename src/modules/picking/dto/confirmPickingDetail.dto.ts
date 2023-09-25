import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'
import { MyCustomResponse } from 'src/utils/reponse'
export class ConfirmPickingDetailDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public orderNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public itemNo: string

    
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public location: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public ownerPN: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public batchNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public pickQty: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

export class ConfirmPickingDetailDtoResponse implements MyCustomResponse {
    code: number
    message: string
}
