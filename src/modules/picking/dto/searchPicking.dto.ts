import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class SearchPickingDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public searchValue: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public searchBy: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

type NewType = SearchPickingDataDetail

export class SearchPickingDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public searchValue: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public rowCnt: number

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    public dataDetail: NewType[]
}
export class SearchPickingDataDetail {
    public pullSignal: string
    public lotNo: string
}
