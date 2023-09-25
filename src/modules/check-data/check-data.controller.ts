import { Controller, Get, HttpException, HttpStatus, Query, UseFilters } from '@nestjs/common'
import { CheckDataService } from './check-data.service'
import { HttpExceptionFilter } from 'src/filters/http-exception.filter'
import { MyCustomResponse, ResponseMessages, ResponseStatus } from 'src/utils/reponse'
import { ApiTags } from '@nestjs/swagger'
import { SearchByProductCodeDataDetail, SearchByProductCodeDtoRequest, SearchByProductCodeDtoResponse } from './dto/searchByProductCode.dto'
import { GetDataByProductCodeDataDetail, GetDataByProductCodeDtoRequest, GetDataByProductCodeDtoResponse } from './dto/getDataByProductCode.dto'
import { SearchByLocationDataDetail, SearchByLocationDtoRequest, SearchByLocationDtoResponse } from './dto/searchByLocation.dto'
import { GetDataByLocationDataDetail, GetDataByLocationDtoRequest, GetDataByLocationDtoResponse } from './dto/getDataByLocation.dto'

@ApiTags('check-data')
@Controller('check-data')
@UseFilters(new HttpExceptionFilter())
export class CheckDataController {
    constructor(private readonly checkDataService: CheckDataService) {}

    //#region by Product No
    @Get('searchByProductCode')
    async searchByProductCode(@Query() request: SearchByProductCodeDtoRequest): Promise<SearchByProductCodeDtoResponse> {
        try {
            const dataDetail: SearchByProductCodeDataDetail = {
                ownerPN: '',
                productDesc: '',
            }
            const result: SearchByProductCodeDtoResponse = {
                productCode: request.productCode,
                rowCnt: 0,
                dataDetail: dataDetail,
            }
            return result
        } catch {
            throw new HttpException(
                {
                    code: ResponseStatus.INTERNAL_SYSTEM_ERROR,
                    message: ResponseMessages.INTERNAL_SYSTEM_ERROR,
                } as MyCustomResponse,
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Get('getDataByProductCode')
    async getDataByProductCode(@Query() request: GetDataByProductCodeDtoRequest): Promise<GetDataByProductCodeDtoResponse> {
        try {
            const dataDetail: GetDataByProductCodeDataDetail = {
                whLocation: '',
                customerLotNo: '',
                availQty: 0,
                damageQty: 0,
            }
            const result: GetDataByProductCodeDtoResponse = {
                ownerPN: '',
                sumAvailQty: 0,
                sumDamageQty: 0,
                dataDetail: dataDetail,
            }
            return result
        } catch {
            throw new HttpException(
                {
                    code: ResponseStatus.INTERNAL_SYSTEM_ERROR,
                    message: ResponseMessages.INTERNAL_SYSTEM_ERROR,
                } as MyCustomResponse,
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    //#endregion

    //#region by Location
    @Get('searchByLocation')
    async searchByLocation(@Query() request: SearchByLocationDtoRequest): Promise<SearchByLocationDtoResponse> {
        try {
            const detaDetail: SearchByLocationDataDetail = {
                whLocation: '',
            }
            const result: SearchByLocationDtoResponse = {
                location: request.location,
                rowCnt: 0,
                dataDetail: detaDetail,
            }
            return result
        } catch {
            throw new HttpException(
                {
                    code: ResponseStatus.INTERNAL_SYSTEM_ERROR,
                    message: ResponseMessages.INTERNAL_SYSTEM_ERROR,
                } as MyCustomResponse,
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }

    @Get('getDataByLocation')
    async getDataByLocation(@Query() request: GetDataByLocationDtoRequest): Promise<GetDataByLocationDtoResponse> {
        try {
            const dataDetail: GetDataByLocationDataDetail = {
                ownerPN: '',
                customerLotNo: '',
                availQty: 0,
                damageQty: 0,
            }
            const result: GetDataByLocationDtoResponse = {
                whLocation: '',
                sumAvailQty: 0,
                sumDamageQty: 0,
                dataDetail: dataDetail,
            }
            return result
        } catch {
            throw new HttpException(
                {
                    code: ResponseStatus.INTERNAL_SYSTEM_ERROR,
                    message: ResponseMessages.INTERNAL_SYSTEM_ERROR,
                } as MyCustomResponse,
                HttpStatus.INTERNAL_SERVER_ERROR,
            )
        }
    }
    //#endregion
}
