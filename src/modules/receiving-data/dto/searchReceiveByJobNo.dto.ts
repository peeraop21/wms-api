import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class SearchReceiveByJobNoDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}


export class SearchReceiveByJobNoDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public rowCnt: number

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    public dataDetail: SearchReceiveByJobNoDataDetail[]
}
export class SearchReceiveByJobNoDataDetail {
    public lotNo: string
    public custRefNo: string
    public ownerCode: string
    public ownerNameEng: string
    public usedStatus: number
}
