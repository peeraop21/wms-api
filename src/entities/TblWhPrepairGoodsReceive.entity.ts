import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblWHPrepairGoodsReceive", { schema: "dbo" })
export class TblWhPrepairGoodsReceive {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "LOTNo", nullable: true, length: 255 })
  lotNo: string | null;

  @Column("datetime", { name: "LOTDate", nullable: true })
  lotDate: Date | null;

  @Column("nvarchar", { name: "CustREFNo", nullable: true, length: 255 })
  custRefNo: string | null;

  @Column("nvarchar", { name: "OwnerCode", nullable: true, length: 255 })
  ownerCode: string | null;

  @Column("nvarchar", { name: "OwnerNameENG", nullable: true, length: 255 })
  ownerNameEng: string | null;

  @Column("nvarchar", {
    name: "OwnerStreet_Number",
    nullable: true,
    length: 255,
  })
  ownerStreetNumber: string | null;

  @Column("nvarchar", { name: "OwnerDistrict", nullable: true, length: 255 })
  ownerDistrict: string | null;

  @Column("nvarchar", { name: "OwnerSubProvince", nullable: true, length: 255 })
  ownerSubProvince: string | null;

  @Column("nvarchar", { name: "OwnerProvince", nullable: true, length: 255 })
  ownerProvince: string | null;

  @Column("nvarchar", { name: "CustomerCode", nullable: true, length: 255 })
  customerCode: string | null;

  @Column("nvarchar", { name: "CustomerNameENG", nullable: true, length: 255 })
  customerNameEng: string | null;

  @Column("nvarchar", {
    name: "CustomerStreet_Number",
    nullable: true,
    length: 255,
  })
  customerStreetNumber: string | null;

  @Column("nvarchar", { name: "CustomerDistrict", nullable: true, length: 255 })
  customerDistrict: string | null;

  @Column("nvarchar", {
    name: "CustomerSubProvince",
    nullable: true,
    length: 255,
  })
  customerSubProvince: string | null;

  @Column("nvarchar", { name: "CustomerProvince", nullable: true, length: 255 })
  customerProvince: string | null;

  @Column("nvarchar", { name: "BrokerCode", nullable: true, length: 255 })
  brokerCode: string | null;

  @Column("nvarchar", { name: "BrokerNameENG", nullable: true, length: 255 })
  brokerNameEng: string | null;

  @Column("nvarchar", {
    name: "BrokerStreet_Number",
    nullable: true,
    length: 255,
  })
  brokerStreetNumber: string | null;

  @Column("nvarchar", { name: "BrokerDistrict", nullable: true, length: 255 })
  brokerDistrict: string | null;

  @Column("nvarchar", {
    name: "BrokerSubprovince",
    nullable: true,
    length: 255,
  })
  brokerSubprovince: string | null;

  @Column("nvarchar", { name: "BrokerProvince", nullable: true, length: 255 })
  brokerProvince: string | null;

  @Column("nvarchar", { name: "ENDUserCode", nullable: true, length: 255 })
  endUserCode: string | null;

  @Column("nvarchar", { name: "ENDNameENG", nullable: true, length: 255 })
  endNameEng: string | null;

  @Column("nvarchar", { name: "ENDStreet_Number", nullable: true, length: 255 })
  endStreetNumber: string | null;

  @Column("nvarchar", { name: "ENDDistrict", nullable: true, length: 255 })
  endDistrict: string | null;

  @Column("nvarchar", { name: "ENDSubprovince", nullable: true, length: 255 })
  endSubprovince: string | null;

  @Column("nvarchar", { name: "ENDProvince", nullable: true, length: 255 })
  endProvince: string | null;

  @Column("nvarchar", { name: "Commodity", nullable: true, length: 255 })
  commodity: string | null;

  @Column("int", { name: "QuantityOfPart", nullable: true })
  quantityOfPart: number | null;

  @Column("int", { name: "QuantityUnit", nullable: true })
  quantityUnit: number | null;

  @Column("int", { name: "QuantityPackage", nullable: true })
  quantityPackage: number | null;

  @Column("nvarchar", { name: "PackageUNIT", nullable: true, length: 255 })
  packageUnit: string | null;

  @Column("int", { name: "QuantityPLT", nullable: true })
  quantityPlt: number | null;

  @Column("int", { name: "QuantityPLTUnit", nullable: true })
  quantityPltUnit: number | null;

  @Column("int", { name: "Weigth", nullable: true })
  weigth: number | null;

  @Column("nvarchar", { name: "WeigthUnit", nullable: true, length: 255 })
  weigthUnit: string | null;

  @Column("int", { name: "Volume", nullable: true })
  volume: number | null;

  @Column("nvarchar", { name: "VolumeUnit", nullable: true, length: 255 })
  volumeUnit: string | null;

  @Column("int", { name: "PrintCount", nullable: true })
  printCount: number | null;

  @Column("nvarchar", { name: "Remark", nullable: true, length: 255 })
  remark: string | null;

  @Column("bit", { name: "UsedStatus", nullable: true })
  usedStatus: boolean | null;
}
