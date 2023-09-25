import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class GetGRDetailDtoRequest {
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

export class GetGRDetailDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public whSite: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public whLocation: string

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
    public quantity: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public quantityUnit: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public receivedQuantity: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public qtyNotReceive: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public status: string
}
