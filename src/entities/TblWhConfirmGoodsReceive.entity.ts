import { AutoMap } from "@automapper/classes";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblWHConfirmGoodsReceive", { schema: "dbo" })
export class TblWhConfirmGoodsReceive {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @AutoMap()
  @Column("nvarchar", { name: "LOTNo", nullable: true, length: 255 })
  lotNo: string | null;

  @AutoMap()
  @Column("datetime", { name: "LOTDate", nullable: true })
  lotDate: Date | null;

  @AutoMap()
  @Column("nvarchar", { name: "CustREFNo", nullable: true, length: 255 })
  custRefNo: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "OwnerCode", nullable: true, length: 255 })
  ownerCode: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "OwnerNameENG", nullable: true, length: 255 })
  ownerNameEng: string | null;

  @AutoMap()
  @Column("nvarchar", {
    name: "OwnerStreet_Number",
    nullable: true,
    length: 255,
  })
  ownerStreetNumber: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "OwnerDistrict", nullable: true, length: 255 })
  ownerDistrict: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "OwnerSubProvince", nullable: true, length: 255 })
  ownerSubProvince: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "OwnerProvince", nullable: true, length: 255 })
  ownerProvince: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "CustomerCode", nullable: true, length: 255 })
  customerCode: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "CustomerNameENG", nullable: true, length: 255 })
  customerNameEng: string | null;

  @AutoMap()
  @Column("nvarchar", {
    name: "CustomerStreet_Number",
    nullable: true,
    length: 255,
  })
  customerStreetNumber: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "CustomerDistrict", nullable: true, length: 255 })
  customerDistrict: string | null;

  @AutoMap()
  @Column("nvarchar", {
    name: "CustomerSubProvince",
    nullable: true,
    length: 255,
  })
  customerSubProvince: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "CustomerProvince", nullable: true, length: 255 })
  customerProvince: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "BrokerCode", nullable: true, length: 255 })
  brokerCode: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "BrokerNameENG", nullable: true, length: 255 })
  brokerNameEng: string | null;

  @AutoMap()
  @Column("nvarchar", {
    name: "BrokerStreet_Number",
    nullable: true,
    length: 255,
  })
  brokerStreetNumber: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "BrokerDistrict", nullable: true, length: 255 })
  brokerDistrict: string | null;

  @AutoMap()
  @Column("nvarchar", {
    name: "BrokerSubprovince",
    nullable: true,
    length: 255,
  })
  brokerSubprovince: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "BrokerProvince", nullable: true, length: 255 })
  brokerProvince: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "ENDUserCode", nullable: true, length: 255 })
  endUserCode: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "ENDNameENG", nullable: true, length: 255 })
  endNameEng: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "ENDStreet_Number", nullable: true, length: 255 })
  endStreetNumber: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "ENDDistrict", nullable: true, length: 255 })
  endDistrict: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "ENDSubprovince", nullable: true, length: 255 })
  endSubprovince: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "ENDProvince", nullable: true, length: 255 })
  endProvince: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "Commodity", nullable: true, length: 255 })
  commodity: string | null;

  @AutoMap()
  @Column("int", { name: "QuantityOfPart", nullable: true })
  quantityOfPart: number | null;

  @AutoMap()
  @Column("int", { name: "QuantityUnit", nullable: true })
  quantityUnit: number | null;

  @AutoMap()
  @Column("int", { name: "QuantityPackage", nullable: true })
  quantityPackage: number | null;

  @AutoMap()
  @Column("nvarchar", { name: "PackageUNIT", nullable: true, length: 255 })
  packageUnit: string | null;

  @AutoMap()
  @Column("int", { name: "QuantityPLT", nullable: true })
  quantityPlt: number | null;

  @AutoMap()
  @Column("int", { name: "QuantityPLTUnit", nullable: true })
  quantityPltUnit: number | null;

  @AutoMap()
  @Column("int", { name: "Weigth", nullable: true })
  weigth: number | null;

  @AutoMap()
  @Column("nvarchar", { name: "WeigthUnit", nullable: true, length: 255 })
  weigthUnit: string | null;

  @AutoMap()
  @Column("int", { name: "Volume", nullable: true })
  volume: number | null;

  @AutoMap()
  @Column("nvarchar", { name: "VolumeUnit", nullable: true, length: 255 })
  volumeUnit: string | null;

  @AutoMap()
  @Column("int", { name: "PrintCount", nullable: true })
  printCount: number | null;

  @AutoMap()
  @Column("nvarchar", { name: "Remark", nullable: true, length: 255 })
  remark: string | null;

  @AutoMap()
  @Column("nvarchar", { name: "UserBy", nullable: true, length: 255 })
  userBy: string | null;

  @AutoMap()
  @Column("datetime", { name: "LastUpdate", nullable: true })
  lastUpdate: Date | null;

  @AutoMap()
  @Column("int", { name: "QuantityReceived", nullable: true })
  quantityReceived: number | null;

  @AutoMap()
  @Column("nvarchar", { name: "ReceivedUNIT", nullable: true, length: 255 })
  receivedUnit: string | null;

  @AutoMap()
  @Column("int", { name: "QuantityWaitReceive", nullable: true })
  quantityWaitReceive: number | null;

  @AutoMap()
  @Column("nvarchar", { name: "WaitUNIT", nullable: true, length: 255 })
  waitUnit: string | null;

  @AutoMap()
  @Column("int", { name: "QuantityDamage", nullable: true })
  quantityDamage: number | null;

  @AutoMap()
  @Column("nvarchar", { name: "DamageUNIT", nullable: true, length: 255 })
  damageUnit: string | null;

  @AutoMap()
  @Column("int", { name: "QuantityDiscrepancy", nullable: true })
  quantityDiscrepancy: number | null;

  @AutoMap()
  @Column("nvarchar", { name: "DiscrepancyUNIT", nullable: true, length: 255 })
  discrepancyUnit: string | null;
}
