import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class GetPickingDetailListDtoRequest {
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
    public ownerPart: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

type NewType = GetPickingDetailListDataDetail

export class GetPickingDetailListDtoResponse {
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
    @IsNumber()
    public rowCnt: number

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    public dataDetail: NewType[]
}
export class GetPickingDetailListDataDetail {
    public itemNo: string
    public requestQty: number
    public qtyUnit: number
}
