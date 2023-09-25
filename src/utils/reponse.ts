import { HttpException, HttpStatus } from "@nestjs/common"

export const ResponseStatus = {
    SUCCESS: 200,

    INVALID_INPUT_PARAMATER: -40001,
    DATA_NOT_FOUND: -40002,

    INVALID_AUTHORIZATION_KEY: -40101,
    AUTHORIZATION_KEY_EXPIRED: -40102,
    AUTHORIZATION_KEY_INACTIVE: -40103,
    USER_NOT_FOUND: -40104,
    INVALID_PASSWORD: -40105,
    USER_EXPIRED: -40106,
    PASSWORD_RESETED: -40107,

    INTERNAL_SYSTEM_ERROR: -50001,
    DATABASE_ERROR: -50002,
    NOT_FOUND: -50003,
} as const

export const ResponseMessages = {
    SUCCESS: 'Success',

    INVALID_INPUT_PARAMATER: 'Invalid input parameter',
    DATA_NOT_FOUND: 'Data Not Found',

    INVALID_AUTHORIZATION_KEY: 'Invalid authorization key',
    AUTHORIZATION_KEY_EXPIRED: 'Authorization key expired',
    AUTHORIZATION_KEY_INACTIVE: 'Authorization key inactive',
    USER_NOT_FOUND: 'User Not Found',
    INVALID_PASSWORD: 'Invalid Password',
    USER_EXPIRED: 'User Expired',
    PASSWORD_RESETED: 'Password was reset by admin please change password via WMS on Windows (แจ้งให้User ไปท าการ Change Password ที่ WMS on Windows)',

    INTERNAL_SYSTEM_ERROR: 'Internal system error',
    DATABASE_ERROR: 'Database error',
    NOT_FOUND: 'Not Found',
} as const

// import { HttpException, HttpStatus } from '@nestjs/common';

// export class MyCustomResponse extends HttpException {
//   constructor(errorCode: number, message: string) {
//     super({ errorCode, message }, HttpStatus.BAD_REQUEST);
//   }
// }
export interface MyCustomResponse {
    code: number
    message: string
}

export function handleException(error): HttpException{
    if(error == ResponseStatus.DATA_NOT_FOUND){
        return new HttpException(
            {
                code: ResponseStatus.DATA_NOT_FOUND,
                message: ResponseMessages.DATA_NOT_FOUND,
            } as MyCustomResponse,
            HttpStatus.BAD_REQUEST,
        )
    }else if(error == ResponseStatus.USER_NOT_FOUND){
        return new HttpException(
            {
                code: ResponseStatus.USER_NOT_FOUND,
                message: ResponseMessages.USER_NOT_FOUND,
            } as MyCustomResponse,
            HttpStatus.UNAUTHORIZED,
        )
    }else{
        return new HttpException(
            {
                code: ResponseStatus.INTERNAL_SYSTEM_ERROR,
                message: ResponseMessages.INTERNAL_SYSTEM_ERROR + "(" + error + ")",
            } as MyCustomResponse,
            HttpStatus.INTERNAL_SERVER_ERROR,
        )
    }
}