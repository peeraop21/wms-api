import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber, IsObject } from 'class-validator'

export class CheckConfirmedPickingDtoRequest {
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
    public location: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}

export class CheckConfirmedPickingDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public cntWaitForPicking: number

}
