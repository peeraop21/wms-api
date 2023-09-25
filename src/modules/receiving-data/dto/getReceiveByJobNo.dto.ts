import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class GetReceiveByJobNoDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

export class GetReceiveByJobNoDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public custRefNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public ownerCode: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public ownerNameENG: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public qtyOfGoods: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public qtyOfReceived: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public qtyWaitForReceive: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public usedStatus: number
}
