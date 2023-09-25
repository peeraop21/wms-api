import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class GetDataByLocationDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public location: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

type NewType = GetDataByLocationDataDetail

export class GetDataByLocationDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public whLocation: string

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
export class GetDataByLocationDataDetail {
    public ownerPN: string
    public customerLotNo: string
    public availQty: number
    public damageQty: number
}
