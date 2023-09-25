import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class GetConfirmedPickingListDtoRequest {
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
    public connectionString: string
}

type NewType = GetConfirmedPickingListDataDetail

export class GetConfirmedPickingListDtoResponse {
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
    @IsObject()
    public dataDetail: NewType
}
export class GetConfirmedPickingListDataDetail {
    public whLocation: string
    public ownerPN: string
    public customerLotNo: string
    public pickQuantity: number
    public pickUnit: number
    public productDesc: string
}
