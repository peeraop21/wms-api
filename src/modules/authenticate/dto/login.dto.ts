import { ApiProperty } from '@nestjs/swagger'
import { IsNotEmpty, IsString, IsEmail, Length, IsNumber } from 'class-validator'

export class LoginDtoRequest {
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public loginName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    @Length(3, 20, { message: 'Passowrd has to be at between 3 and 20 chars' })
    public password: string
}

export class LoginDtoResponse {
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    public loginResult: number

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    public connectionString: string
}
