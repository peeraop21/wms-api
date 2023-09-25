import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblWHPickingDetail", { schema: "dbo" })
export class TblWhPickingDetail {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "LOTNo", nullable: true, length: 255 })
  lotNo: string | null;

  @Column("nvarchar", { name: "WHSite", nullable: true, length: 255 })
  whSite: string | null;

  @Column("nvarchar", { name: "WHLocation", nullable: true, length: 255 })
  whLocation: string | null;

  @Column("nvarchar", { name: "WHSource", nullable: true, length: 255 })
  whSource: string | null;

  @Column("nvarchar", { name: "WHSourceIN", nullable: true, length: 255 })
  whSourceIn: string | null;

  @Column("nvarchar", { name: "ProductDesc", nullable: true, length: 255 })
  productDesc: string | null;

  @Column("nvarchar", { name: "OrderNo", nullable: true, length: 255 })
  orderNo: string | null;

  @Column("datetime", { name: "ManufacturingDate", nullable: true })
  manufacturingDate: Date | null;

  @Column("datetime", { name: "ExpiredDate", nullable: true })
  expiredDate: Date | null;

  @Column("nvarchar", { name: "Currency", nullable: true, length: 255 })
  currency: string | null;

  @Column("nvarchar", { name: "PriceForeigh", nullable: true, length: 255 })
  priceForeigh: string | null;

  @Column("nvarchar", { name: "PriceBath", nullable: true, length: 255 })
  priceBath: string | null;

  @Column("nvarchar", { name: "Palleto", nullable: true, length: 255 })
  palleto: string | null;

  @Column("nvarchar", { name: "ItemInvoice", nullable: true, length: 255 })
  itemInvoice: string | null;

  @Column("nvarchar", { name: "OrderFrmOnline", nullable: true, length: 255 })
  orderFrmOnline: string | null;

  @Column("nvarchar", { name: "CustFrmOnline", nullable: true, length: 255 })
  custFrmOnline: string | null;

  @Column("nvarchar", { name: "Color", nullable: true, length: 255 })
  color: string | null;

  @Column("nvarchar", { name: "Sizes", nullable: true, length: 255 })
  sizes: string | null;

  @Column("nvarchar", { name: "ProductCode", nullable: true, length: 255 })
  productCode: string | null;

  @Column("nvarchar", { name: "CustomerPN", nullable: true, length: 255 })
  customerPn: string | null;

  @Column("nvarchar", { name: "OwnerPN", nullable: true, length: 255 })
  ownerPn: string | null;

  @Column("nvarchar", { name: "ExpInvNo", nullable: true, length: 255 })
  expInvNo: string | null;

  @Column("nvarchar", { name: "PONo", nullable: true, length: 255 })
  poNo: string | null;

  @Column("nvarchar", { name: "ENDCustomer", nullable: true, length: 255 })
  endCustomer: string | null;

  @Column("nvarchar", { name: "CustomerLOTNo", nullable: true, length: 255 })
  customerLotNo: string | null;

  @Column("nvarchar", { name: "Measurement", nullable: true, length: 255 })
  measurement: string | null;

  @Column("nvarchar", { name: "ProductWidth", nullable: true, length: 255 })
  productWidth: string | null;

  @Column("nvarchar", { name: "ProductLength", nullable: true, length: 255 })
  productLength: string | null;

  @Column("nvarchar", { name: "ProductHeight", nullable: true, length: 255 })
  productHeight: string | null;

  @Column("nvarchar", { name: "ProductVolume", nullable: true, length: 255 })
  productVolume: string | null;

  @Column("nvarchar", { name: "Type", nullable: true, length: 255 })
  type: string | null;

  @Column("nvarchar", { name: "ReceiveNo", nullable: true, length: 255 })
  receiveNo: string | null;

  @Column("datetime", { name: "ReceiveDate", nullable: true })
  receiveDate: Date | null;

  @Column("int", { name: "Weigth", nullable: true })
  weigth: number | null;

  @Column("nvarchar", { name: "WeigthUnit", nullable: true, length: 255 })
  weigthUnit: string | null;

  @Column("nvarchar", { name: "ExchangeRate", nullable: true, length: 255 })
  exchangeRate: string | null;

  @Column("nvarchar", {
    name: "PriceForeighAmount",
    nullable: true,
    length: 255,
  })
  priceForeighAmount: string | null;

  @Column("nvarchar", { name: "PriceBathAmount", nullable: true, length: 255 })
  priceBathAmount: string | null;

  @Column("nvarchar", { name: "Item", nullable: true, length: 255 })
  item: string | null;

  @Column("nvarchar", { name: "Supplier", nullable: true, length: 255 })
  supplier: string | null;

  @Column("nvarchar", { name: "Buyer", nullable: true, length: 255 })
  buyer: string | null;

  @Column("nvarchar", { name: "Exporter", nullable: true, length: 255 })
  exporter: string | null;

  @Column("nvarchar", { name: "Destiation", nullable: true, length: 255 })
  destiation: string | null;

  @Column("nvarchar", { name: "Consignee", nullable: true, length: 255 })
  consignee: string | null;

  @Column("nvarchar", { name: "ShippingMark", nullable: true, length: 255 })
  shippingMark: string | null;

  @Column("nvarchar", { name: "EntryNo", nullable: true, length: 255 })
  entryNo: string | null;

  @Column("nvarchar", { name: "EntryItemNo", nullable: true, length: 255 })
  entryItemNo: string | null;

  @Column("int", { name: "PickQuantity", nullable: true })
  pickQuantity: number | null;

  @Column("nvarchar", { name: "PickUnit", nullable: true, length: 255 })
  pickUnit: string | null;

  @Column("nvarchar", { name: "UserBy", nullable: true, length: 255 })
  userBy: string | null;

  @Column("nvarchar", { name: "ItemNo", nullable: true, length: 255 })
  itemNo: string | null;

  @Column("nvarchar", { name: "PullSignal", nullable: true, length: 255 })
  pullSignal: string | null;

  @Column("bit", { name: "StatusISSUED" })
  statusIssued: boolean;

  @Column("datetime", { name: "LastUpdate", nullable: true })
  lastUpdate: Date | null;

  @Column("nvarchar", { name: "Reqno", nullable: true, length: 255 })
  reqno: string | null;

  @Column("nvarchar", { name: "InterfaceType", nullable: true, length: 255 })
  interfaceType: string | null;
}
