import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class SearchGRForPutAwayDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public whLocation: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public productCode: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public batchNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public itemNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public scanLocation: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

export class SearchGRForPutAwayDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public itemNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public productDesc: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public qtyReceived: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public totalQuantity: number
}
