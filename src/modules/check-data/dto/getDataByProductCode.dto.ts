import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class GetDataByProductCodeDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public productCode: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

type NewType = GetDataByProductCodeDataDetail

export class GetDataByProductCodeDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public ownerPN: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public sumAvailQty: number

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public sumDamageQty: number

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    public dataDetail: NewType
}
export class GetDataByProductCodeDataDetail {
    public whLocation: string
    public customerLotNo: string
    public availQty: number
    public damageQty: number
}
