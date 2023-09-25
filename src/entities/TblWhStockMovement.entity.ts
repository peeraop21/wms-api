import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblWHStockMovement", { schema: "dbo" })
export class TblWhStockMovement {
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

  @Column("nvarchar", { name: "ENDCustomer", nullable: true, length: 255 })
  endCustomer: string | null;

  @Column("nvarchar", { name: "CustomerLOTNo", nullable: true, length: 255 })
  customerLotNo: string | null;

  @Column("nvarchar", { name: "ItemNo", nullable: true, length: 255 })
  itemNo: string | null;

  @Column("nvarchar", { name: "ProductCode", nullable: true, length: 255 })
  productCode: string | null;

  @Column("nvarchar", { name: "CustomerPN", nullable: true, length: 255 })
  customerPn: string | null;

  @Column("nvarchar", { name: "OwnerPN", nullable: true, length: 255 })
  ownerPn: string | null;

  @Column("nvarchar", { name: "ProductDesc", nullable: true, length: 255 })
  productDesc: string | null;

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

  @Column("nvarchar", { name: "OrderNo", nullable: true, length: 255 })
  orderNo: string | null;

  @Column("nvarchar", { name: "Type", nullable: true, length: 255 })
  type: string | null;

  @Column("datetime", { name: "ManufacturingDate", nullable: true })
  manufacturingDate: Date | null;

  @Column("datetime", { name: "ExpiredDate", nullable: true })
  expiredDate: Date | null;

  @Column("int", { name: "Weigth", nullable: true })
  weigth: number | null;

  @Column("nvarchar", { name: "WeigthUnit", nullable: true, length: 255 })
  weigthUnit: string | null;

  @Column("nvarchar", { name: "Currency", nullable: true, length: 255 })
  currency: string | null;

  @Column("nvarchar", { name: "ExchangeRate", nullable: true, length: 255 })
  exchangeRate: string | null;

  @Column("nvarchar", { name: "PriceForeigh", nullable: true, length: 255 })
  priceForeigh: string | null;

  @Column("nvarchar", {
    name: "PriceForeighAmount",
    nullable: true,
    length: 255,
  })
  priceForeighAmount: string | null;

  @Column("nvarchar", { name: "PriceBath", nullable: true, length: 255 })
  priceBath: string | null;

  @Column("nvarchar", { name: "PriceBathAmount", nullable: true, length: 255 })
  priceBathAmount: string | null;

  @Column("nvarchar", { name: "PalletNo", nullable: true, length: 255 })
  palletNo: string | null;

  @Column("nvarchar", { name: "Status", nullable: true, length: 255 })
  status: string | null;

  @Column("nvarchar", { name: "Supplier", nullable: true, length: 255 })
  supplier: string | null;

  @Column("nvarchar", { name: "Buyer", nullable: true, length: 255 })
  buyer: string | null;

  @Column("nvarchar", { name: "Exporter", nullable: true, length: 255 })
  exporter: string | null;

  @Column("nvarchar", { name: "Destination", nullable: true, length: 255 })
  destination: string | null;

  @Column("nvarchar", { name: "Consignee", nullable: true, length: 255 })
  consignee: string | null;

  @Column("nvarchar", { name: "ShippingMark", nullable: true, length: 255 })
  shippingMark: string | null;

  @Column("nvarchar", { name: "EntryNo", nullable: true, length: 255 })
  entryNo: string | null;

  @Column("nvarchar", { name: "EntryItemNo", nullable: true, length: 255 })
  entryItemNo: string | null;

  @Column("nvarchar", { name: "Invoice", nullable: true, length: 255 })
  invoice: string | null;

  @Column("nvarchar", { name: "Color", nullable: true, length: 255 })
  color: string | null;

  @Column("nvarchar", { name: "Sizes", nullable: true, length: 255 })
  sizes: string | null;

  @Column("nvarchar", { name: "OwnerCode", nullable: true, length: 255 })
  ownerCode: string | null;

  @Column("nvarchar", { name: "StockType", nullable: true, length: 255 })
  stockType: string | null;

  @Column("nvarchar", { name: "Received", nullable: true, length: 255 })
  received: string | null;

  @Column("nvarchar", { name: "ReceiveNo", nullable: true, length: 255 })
  receiveNo: string | null;

  @Column("datetime", { name: "ReceiveDate", nullable: true })
  receiveDate: Date | null;

  @Column("int", { name: "ReceivedQuantity", nullable: true })
  receivedQuantity: number | null;

  @Column("nvarchar", { name: "QuantityUnit", nullable: true, length: 255 })
  quantityUnit: string | null;

  @Column("int", { name: "DamageQuantity", nullable: true })
  damageQuantity: number | null;

  @Column("nvarchar", { name: "DamageUnit", nullable: true, length: 255 })
  damageUnit: string | null;

  @Column("int", { name: "AvalableQuantity", nullable: true })
  avalableQuantity: number | null;

  @Column("nvarchar", { name: "UserBy", nullable: true, length: 255 })
  userBy: string | null;

  @Column("datetime", { name: "LastUpdate", nullable: true })
  lastUpdate: Date | null;

  @Column("datetime", { name: "TransactionDate", nullable: true })
  transactionDate: Date | null;

  @Column("nvarchar", { name: "TypeDamage", nullable: true, length: 255 })
  typeDamage: string | null;

  @Column("nvarchar", { name: "Item", nullable: true, length: 255 })
  item: string | null;

  @Column("nvarchar", { name: "InterfaceType", nullable: true, length: 255 })
  interfaceType: string | null;
}
