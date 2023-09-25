import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class GetConfirmedGRListDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

export class GetConfirmedGRListDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    public dataDetail: GetConfirmedGRListDataDetail[]
}
export class GetConfirmedGRListDataDetail {
    public whSite: string
    public customerLotNo: string
    public ownerPN: string
    public receiveDate: string
    public receivedQuantity: number
    public quantityUnit: number
    public itemNo: string
    public productDesc: string
}
