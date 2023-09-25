import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class SearchByProductCodeDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public productCode: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

type NewType = SearchByProductCodeDataDetail

export class SearchByProductCodeDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public productCode: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public rowCnt: number

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    public dataDetail: NewType
}
export class SearchByProductCodeDataDetail {
    public ownerPN: string
    public productDesc: string
}
