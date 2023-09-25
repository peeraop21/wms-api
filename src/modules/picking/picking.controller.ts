import { Body, Controller, Get, HttpException, HttpStatus, Post, Query } from '@nestjs/common'
import { PickingService } from './picking.service'
import { MyCustomResponse, ResponseMessages, ResponseStatus } from 'src/utils/reponse'
import { ApiTags } from '@nestjs/swagger'
import { SearchPickingDataDetail, SearchPickingDtoRequest, SearchPickingDtoResponse } from './dto/searchPicking.dto'
import { GetPickingDataDetail, GetPickingDtoRequest, GetPickingDtoResponse } from './dto/getPicking.dto'
import { GetPickingDetailListDataDetail, GetPickingDetailListDtoRequest, GetPickingDetailListDtoResponse } from './dto/getPickingDetailList.dto'
import { GetPickingDetailDataDetail, GetPickingDetailDtoRequest, GetPickingDetailDtoResponse } from './dto/getPickingDetail.dto'
import { ConfirmPickingDetailDtoRequest, ConfirmPickingDetailDtoResponse } from './dto/confirmPickingDetail.dto'
import { CheckConfirmedPickingDtoRequest, CheckConfirmedPickingDtoResponse } from './dto/checkConfirmedPicking.dto'
import { GetConfirmedPickingListDataDetail, GetConfirmedPickingListDtoRequest, GetConfirmedPickingListDtoResponse } from './dto/getConfirmedPickingList.dto'

@ApiTags('picking')
@Controller('picking')
export class PickingController {
    constructor(private readonly pickingService: PickingService) { }

    //#region Picking Data
    @Get('searchPicking')
    async searchPicking(@Query() request: SearchPickingDtoRequest): Promise<SearchPickingDtoResponse> {
        try {
            const dataDetail: SearchPickingDataDetail[] = []
            dataDetail.push({
                pullSignal: '',
                lotNo: ''
            })
            const result: SearchPickingDtoResponse = {
                searchValue: request.searchValue,
                rowCnt: 0,
                dataDetail: dataDetail
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

    @Get('getPicking')
    async getPicking(@Query() request: GetPickingDtoRequest): Promise<GetPickingDtoResponse> {
        try {
            const dataDetail: GetPickingDataDetail[] = []
            dataDetail.push({
                ownerPN: '',
                sumRequestQty: 0,
                whLocation: '',
                avalableQuantity: 0,
                receiveDate: ''
            })
            const result: GetPickingDtoResponse = {
                orderNo: request.orderNo,
                jobNo: request.jobNo,
                rowCnt: 0,
                dataDetail: dataDetail
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

    @Get('getPickingDetailList')
    async getPickingDetailList(@Query() request: GetPickingDetailListDtoRequest): Promise<GetPickingDetailListDtoResponse> {
        try {
            const dataDetail: GetPickingDetailListDataDetail[] = []
            dataDetail.push({
                itemNo: '',
                requestQty: 0,
                qtyUnit: 0,
            })
            const result: GetPickingDetailListDtoResponse = {
                orderNo: request.orderNo,
                jobNo: request.jobNo,
                ownerPN: request.ownerPart,
                rowCnt: 0,
                dataDetail: dataDetail
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

    @Get('getPickingDetail')
    async getPickingDetail(@Query() request: GetPickingDetailDtoRequest): Promise<GetPickingDetailDtoResponse> {
        try {
            const dataDetail: GetPickingDetailDataDetail[] = []
            dataDetail.push({
                productDesc: '',
                requestQty: 0,
                qtyUnit: 0,
                whSite: '',
                receivedItemNo: '',
                receiveNo: '',
                availableQty: 0
            })
            const result: GetPickingDetailDtoResponse = {
                orderNo: request.orderNo,
                jobNo: request.jobNo,
                ownerPN: request.ownerPN,
                itemNo: request.itemNo,
                location: request.location,
                batchNo: request.batchNo,
                rowCnt: 0,
                dataDetail: dataDetail
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

    @Post('confirmPickingDetail')
    async confirmPickingDetail(@Body() request: ConfirmPickingDetailDtoRequest): Promise<ConfirmPickingDetailDtoResponse> {
        try {
            const result: ConfirmPickingDetailDtoResponse = {
                code: ResponseStatus.SUCCESS,
                message: ResponseMessages.SUCCESS,
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

    @Get('checkConfirmedPicking')
    async checkConfirmedPicking(@Query() request: CheckConfirmedPickingDtoRequest): Promise<CheckConfirmedPickingDtoResponse> {
        try {
            const result: CheckConfirmedPickingDtoResponse = {
                cntWaitForPicking: 0
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

    @Get('getConfirmedPickingList')
    async getConfirmedPickingList(@Query() request: GetConfirmedPickingListDtoRequest): Promise<GetConfirmedPickingListDtoResponse> {
        try {
            const dataDetail: GetConfirmedPickingListDataDetail = {
                whLocation: '',
                ownerPN: '',
                customerLotNo: '',
                pickQuantity: 0,
                pickUnit: 0,
                productDesc: ''
            }
            const result: GetConfirmedPickingListDtoResponse = {
                orderNo: request.orderNo,
                jobNo: request.jobNo,
                dataDetail: dataDetail
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
