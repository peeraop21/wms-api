import { Body, Controller, Get, Post, Query, UseFilters } from '@nestjs/common'
import { ReceivingDataService } from './receiving-data.service'
import { HttpExceptionFilter } from 'src/filters/http-exception.filter'
import { ResponseMessages, ResponseStatus, handleException } from 'src/utils/reponse'
import { ApiTags } from '@nestjs/swagger'
import { SearchReceiveByJobNoDataDetail, SearchReceiveByJobNoDtoRequest, SearchReceiveByJobNoDtoResponse } from './dto/searchReceiveByJobNo.dto'
import { GetReceiveByJobNoDtoRequest, GetReceiveByJobNoDtoResponse } from './dto/getReceiveByJobNo.dto'
import { ConfirmNewReceiveDtoRequest, ConfirmNewReceiveDtoResponse } from './dto/confirmNewReceive.dto'
import { GetGRDetailListDataDetail, GetGRDetailListDtoRequest, GetGRDetailListDtoResponse } from './dto/getGRDetailList.dto'
import { GetGRDetailDtoRequest, GetGRDetailDtoResponse } from './dto/getGRDetail.dto'
import { ConfirmGRDetailDtoRequest, ConfirmGRDetailDtoResponse } from './dto/confirmGRDetail.dto'
import { GetConfirmedGRListDataDetail, GetConfirmedGRListDtoRequest, GetConfirmedGRListDtoResponse } from './dto/getConfirmedGRList.dto'
import { GetConfirmedGRDetailDtoRequest, GetConfirmedGRDetailDtoResponse } from './dto/getConfirmedGRDetail.dto'
import { CheckReceiveCompletedDataDetail, CheckReceiveCompletedDtoRequest, CheckReceiveCompletedDtoResponse } from './dto/checkReceiveCompleted.dto'
import { SearchGRForPutAWayListDataDetail, SearchGRForPutAWayListDtoRequest, SearchGRForPutAWayListDtoResponse } from './dto/searchGRForPutAWayList.dto'
import { SearchGRForPutAwayDtoRequest, SearchGRForPutAwayDtoResponse } from './dto/searchGRForPutAway.dto'
import { ConfirmPutAwayDtoRequest, ConfirmPutAwayDtoResponse } from './dto/confirmPutAway.dto'
@ApiTags('receiving-data')
@Controller('receiving-data')
@UseFilters(new HttpExceptionFilter())
export class ReceivingDataController {
    constructor(private readonly receivingDataService: ReceivingDataService) { }

    //#region Confirm Goods Receive
    @Get('searchReceiveByJobNo')
    async searchReceiveByJobNo(@Query() request: SearchReceiveByJobNoDtoRequest): Promise<SearchReceiveByJobNoDtoResponse> {
        try {
            var _data = await this.receivingDataService.getWHPrepairGoodsReceiveByJobNoAsync(request.jobNo)
            if (!_data) throw ResponseStatus.DATA_NOT_FOUND
            const mappedDataDetail = _data.map(w => {
                const row: SearchReceiveByJobNoDataDetail = {
                    lotNo: w.lotNo,
                    custRefNo: w.custRefNo,
                    ownerCode: w.ownerCode,
                    ownerNameEng: w.ownerNameEng,
                    usedStatus: w.usedStatus ? 1 : 0,
                }
                return row
            })
            return {
                jobNo: request.jobNo,
                rowCnt: _data.length,
                dataDetail: mappedDataDetail,
            } as SearchReceiveByJobNoDtoResponse

        } catch (error) {
            throw handleException(error)
        }
    }

    @Get('getReceiveByJobNo')
    async getReceiveByJobNo(@Query() request: GetReceiveByJobNoDtoRequest): Promise<GetReceiveByJobNoDtoResponse> {
        try {
            const _useStatus = await this.receivingDataService.getUseStatusByJobNoAsync(request.jobNo)
            if (_useStatus == null) throw ResponseStatus.DATA_NOT_FOUND
            let result: GetReceiveByJobNoDtoResponse;
            if (_useStatus == true) {
                const _data = await this.receivingDataService.getOneWHConfirmGoodsReceiveByJobNoAsync(request.jobNo)
                result.custRefNo = _data.custRefNo
                result.ownerCode = _data.ownerCode
                result.ownerNameENG = _data.ownerNameEng
                result.qtyOfGoods = _data.quantityOfPart
                result.qtyOfReceived = _data.quantityOfPart
                result.qtyWaitForReceive = _data.quantityOfPart
                result.usedStatus = 1
            } else {
                const _data = await this.receivingDataService.getOneWHPrepairGoodsReceiveByJobNoAsync(request.jobNo)
                result.custRefNo = _data.custRefNo
                result.ownerCode = _data.ownerCode
                result.ownerNameENG = _data.ownerNameEng
                result.qtyOfGoods = _data.quantityOfPart
                result.qtyOfReceived = _data.quantityOfPart
                result.qtyWaitForReceive = _data.quantityOfPart
                result.usedStatus = 0
            }
            return result


        } catch (error) {
            throw handleException(error)
        }
    }

    @Post('confirmNewReceive')
    async confirmNewReceive(@Body() request: ConfirmNewReceiveDtoRequest): Promise<ConfirmNewReceiveDtoResponse> {
        try {
            const _prepairGoods = await this.receivingDataService.getOneWHPrepairGoodsReceiveByJobNoAsync(request.jobNo)
            if (_prepairGoods == null) throw ResponseStatus.DATA_NOT_FOUND
            if (_prepairGoods.usedStatus == false || _prepairGoods.usedStatus == null) {
                await this.receivingDataService.confirmNewReceiveByPrepairGoodsAsync(_prepairGoods, request.userName)
            }
            return {
                code: ResponseStatus.SUCCESS,
                message: ResponseMessages.SUCCESS,
            } as ConfirmNewReceiveDtoResponse
        } catch (error) {
            throw handleException(error)
        }
    }
    //#endregion

    //#region Goods Received Detail
    @Get('getGRDetailList')
    async getGRDetailList(@Query() request: GetGRDetailListDtoRequest): Promise<GetGRDetailListDtoResponse> {
        try {
            const _data = await this.receivingDataService.getWHPrepairGoodsReceiveDetailByJobNoAsync(request.jobNo, request.ownerPN, request.customerLotNo)
            if (_data == null || _data.length == 0) throw ResponseStatus.DATA_NOT_FOUND
            const dataDetail = _data.map(s => {
                return {
                    itemNo: s.itemNo,
                    quantity: s.quantity,
                    quantityUnit: s.quantityUnit,
                    receiveDate: s.receiveDate
                } as GetGRDetailListDataDetail
            })
            return {
                jobNo: request.jobNo,
                ownerPart: request.ownerPN,
                customerLotNo: request.customerLotNo,
                rowCnt: _data.length,
                dataDetail: dataDetail,
            } as GetGRDetailListDtoResponse
        } catch (error) {
            throw handleException(error)
        }
    }

    @Get('getGRDetail')
    async getGRDetail(@Query() request: GetGRDetailDtoRequest): Promise<GetGRDetailDtoResponse> {
        try {
            const _data = await this.receivingDataService.getGoodsReceive(request.jobNo, request.ownerPN, request.customerLotNo, request.itemNo)
            if (_data == null) throw ResponseStatus.DATA_NOT_FOUND

            return {
                whSite: _data.WHSite,
                whLocation: _data.WHLocation,
                itemNo: _data.ItemNo,
                productDesc: _data.ProductDesc,
                receiveDate: _data.ReceiveDate,
                quantity: _data.qtyRequested,
                quantityUnit: _data.QuantityUnit,
                receivedQuantity: _data.receivedQuantity,
                qtyNotReceive: _data.qtyNotReceive,
                status: _data.Type,
            } as GetGRDetailDtoResponse
        } catch (error) {
            throw handleException(error)
        }
    }

    @Post('confirmGRDetail')
    async confirmGRDetail(@Body() request: ConfirmGRDetailDtoRequest): Promise<ConfirmGRDetailDtoResponse> {
        try {
            const result: ConfirmGRDetailDtoResponse = {
                code: ResponseStatus.SUCCESS,
                message: ResponseMessages.SUCCESS,
            }
            return result
        } catch (error) {
            throw handleException(error)
        }
    }

    @Get('getConfirmedGRList')
    async getConfirmedGRList(@Query() request: GetConfirmedGRListDtoRequest): Promise<GetConfirmedGRListDtoResponse> {
        try {
            const dataDetail: GetConfirmedGRListDataDetail[] = []
            dataDetail.push({
                whSite: '',
                customerLotNo: '',
                ownerPN: '',
                receiveDate: '',
                receivedQuantity: 0,
                quantityUnit: 0,
                itemNo: '',
                productDesc: '',
            })
            const result: GetConfirmedGRListDtoResponse = {
                jobNo: request.jobNo,
                dataDetail: dataDetail,
            }
            return result
        } catch (error) {
            throw handleException(error)
        }
    }

    @Get('getConfirmedGRDetail')
    async getConfirmedGRDetail(@Query() request: GetConfirmedGRDetailDtoRequest): Promise<GetConfirmedGRDetailDtoResponse> {
        try {
            const result: GetConfirmedGRDetailDtoResponse = {
                whSite: '',
                itemNo: '',
                productDesc: '',
                receiveDate: '',
                qtyReceived: 0,
                quantityUnit: 0,
                qtyWaitForReceive: 0,
                status: '',
            }
            return result
        } catch (error) {
            throw handleException(error)
        }
    }
    //#endregion

    //#region Check Completed
    @Get('checkReceiveCompleted')
    async checkReceiveCompleted(@Query() request: CheckReceiveCompletedDtoRequest): Promise<CheckReceiveCompletedDtoResponse> {
        try {
            const dataDetail: CheckReceiveCompletedDataDetail = {
                ownerPN: '',
                qtyWaitforReceive: 0,
                qtyReceived: 0,
            }
            const result: CheckReceiveCompletedDtoResponse = {
                jobNo: request.jobNo,
                dataDetail: dataDetail,
            }
            return result
        } catch (error) {
            throw handleException(error)
        }
    }
    //#endregion

    //#region Put Away
    @Get('searchGRForPutAWayList')
    async searchGRForPutAWayList(@Query() request: SearchGRForPutAWayListDtoRequest): Promise<SearchGRForPutAWayListDtoResponse> {
        try {
            const dataDetail: SearchGRForPutAWayListDataDetail[] = []
            dataDetail.push({
                itemNo: '',
                whLocation: '',
                quantity: 0,
            })
            const result: SearchGRForPutAWayListDtoResponse = {
                jobNo: request.jobNo,
                ownerPN: request.ownerPN,
                customerLotNo: request.customerLotNo,
                rowCnt: 0,
                dataDetail: dataDetail,
            }
            return result
        } catch (error) {
            throw handleException(error)
        }
    }

    @Get('searchGRForPutAway')
    async searchGRForPutAway(@Query() request: SearchGRForPutAwayDtoRequest): Promise<SearchGRForPutAwayDtoResponse> {
        try {
            const result: SearchGRForPutAwayDtoResponse = {
                itemNo: '',
                productDesc: '',
                qtyReceived: 0,
                totalQuantity: 0,
            }
            return result
        } catch (error) {
            throw handleException(error)
        }
    }

    @Post('confirmPutAway')
    async confirmPutAway(@Body() request: ConfirmPutAwayDtoRequest): Promise<ConfirmPutAwayDtoResponse> {
        try {
            const result: ConfirmPutAwayDtoResponse = {
                code: ResponseStatus.SUCCESS,
                message: ResponseMessages.SUCCESS,
            }
            return result
        } catch (error) {
            throw handleException(error)
        }
    }
    //#endregion
}
