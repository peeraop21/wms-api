import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblWHRequestedISSUE", { schema: "dbo" })
export class TblWhRequestedIssue {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "LOTNo", nullable: true, length: 255 })
  lotNo: string | null;

  @Column("nvarchar", { name: "WHSource", nullable: true, length: 255 })
  whSource: string | null;

  @Column("nvarchar", { name: "ItemNo", nullable: true, length: 255 })
  itemNo: string | null;

  @Column("nvarchar", { name: "ItemInvoice", nullable: true, length: 255 })
  itemInvoice: string | null;

  @Column("nvarchar", { name: "PullSignal", nullable: true, length: 255 })
  pullSignal: string | null;

  @Column("nvarchar", { name: "ProductDesc", nullable: true, length: 255 })
  productDesc: string | null;

  @Column("nvarchar", { name: "OrderNo", nullable: true, length: 255 })
  orderNo: string | null;

  @Column("nvarchar", { name: "PriceForeigh", nullable: true, length: 255 })
  priceForeigh: string | null;

  @Column("nvarchar", { name: "PriceBath", nullable: true, length: 255 })
  priceBath: string | null;

  @Column("datetime", { name: "ManufacturingDate", nullable: true })
  manufacturingDate: Date | null;

  @Column("datetime", { name: "ExpiredDate", nullable: true })
  expiredDate: Date | null;

  @Column("nvarchar", { name: "Currency", nullable: true, length: 255 })
  currency: string | null;

  @Column("nvarchar", { name: "PalletNo", nullable: true, length: 255 })
  palletNo: string | null;

  @Column("nvarchar", { name: "OrderFrmOnline", nullable: true, length: 255 })
  orderFrmOnline: string | null;

  @Column("nvarchar", { name: "CustFrmOnline", nullable: true, length: 255 })
  custFrmOnline: string | null;

  @Column("nvarchar", { name: "Color", nullable: true, length: 255 })
  color: string | null;

  @Column("nvarchar", { name: "Sizes", nullable: true, length: 255 })
  sizes: string | null;

  @Column("nvarchar", { name: "ProductNo", nullable: true, length: 255 })
  productNo: string | null;

  @Column("nvarchar", { name: "CutomerPart", nullable: true, length: 255 })
  cutomerPart: string | null;

  @Column("nvarchar", { name: "OwnerPart", nullable: true, length: 255 })
  ownerPart: string | null;

  @Column("int", { name: "RequestQTY", nullable: true })
  requestQty: number | null;

  @Column("nvarchar", { name: "QTYUnit", nullable: true, length: 255 })
  qtyUnit: string | null;

  @Column("int", { name: "AvailableRequestQTY", nullable: true })
  availableRequestQty: number | null;

  @Column("int", { name: "ISSUEQuantity", nullable: true })
  issueQuantity: number | null;
}
