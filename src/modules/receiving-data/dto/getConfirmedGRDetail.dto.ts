import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class GetConfirmedGRDetailDtoRequest {
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
    @IsString()
    public connectionString: string
}

export class GetConfirmedGRDetailDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public whSite: string

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
    @IsString()
    public receiveDate: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public qtyReceived: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public quantityUnit: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public qtyWaitForReceive: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public status: string
}
