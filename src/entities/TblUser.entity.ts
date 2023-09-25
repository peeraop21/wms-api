import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("tblUser", { schema: "dbo" })
export class TblUser {
  @PrimaryGeneratedColumn({ type: "int", name: "Id" })
  id: number;

  @Column("nvarchar", { name: "UserName", nullable: true, length: 255 })
  userName: string | null;

  @Column("nvarchar", { name: "Password", nullable: true, length: 255 })
  password: string | null;

  @Column("nvarchar", { name: "PasswordType", nullable: true, length: 255 })
  passwordType: string | null;

  @Column("nvarchar", { name: "UserStatus", nullable: true, length: 255 })
  userStatus: string | null;

  @Column("nvarchar", { name: "ExpiredStatus", nullable: true, length: 255 })
  expiredStatus: string | null;

  @Column("nvarchar", { name: "ResetByStaff", nullable: true, length: 255 })
  resetByStaff: string | null;
}
