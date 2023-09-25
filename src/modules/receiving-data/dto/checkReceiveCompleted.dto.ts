import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class CheckReceiveCompletedDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}
type NewType = CheckReceiveCompletedDataDetail

export class CheckReceiveCompletedDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public jobNo: string

    @ApiProperty()
    @IsNotEmpty()
    @IsObject()
    public dataDetail: NewType
}
export class CheckReceiveCompletedDataDetail {
    public ownerPN: string
    public qtyWaitforReceive: number
    public qtyReceived: number
}
