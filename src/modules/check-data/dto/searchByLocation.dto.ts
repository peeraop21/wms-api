import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class SearchByLocationDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public location: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

type NewType = SearchByLocationDataDetail

export class SearchByLocationDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public location: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public rowCnt: number

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    public dataDetail: NewType
}

export class SearchByLocationDataDetail {
    public whLocation: string
}
