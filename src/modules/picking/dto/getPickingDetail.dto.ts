import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class GetPickingDetailDtoRequest {
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
    public ownerPN: string

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
    public batchNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

type NewType = GetPickingDetailDataDetail

export class GetPickingDetailDtoResponse {
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
    public ownerPN: string

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
    public batchNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public rowCnt: number

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    public dataDetail: NewType[]
}
export class GetPickingDetailDataDetail {
    public productDesc: string
    public requestQty: number
    public qtyUnit: number
    public whSite: string
    public receivedItemNo: string
    public receiveNo: string
    public availableQty: number
}
