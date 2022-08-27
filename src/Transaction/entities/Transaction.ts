import { AbstractEntity } from "../../Common/AbstractEntity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { v4 } from "uuid";
import { ShareType } from "../enums/ShareType";
import { TransactionStatus } from "../enums/TransactionStatus";


@Entity()
export class Transaction extends AbstractEntity {
    @Column()
    @PrimaryGeneratedColumn("uuid")
    id: string = v4();

    @Column({nullable : false})
    title : String

    @Column({nullable: true, type: "uuid"})
    categoryId: string;

    @Column({nullable: true, type: "uuid"})
    categoricalMilestoneId: string;

    @Column({nullable: true, type: "uuid"})
    milestoneId: string;

    @Column({
        default:ShareType.EQUALLY
    })
    shareType: ShareType

    @Column("decimal", {
        scale: 2,
        precision: 13,
        nullable: true,
      })
    amount: string

    @Column({
        default:TransactionStatus.NOT_SETTLED
    })
    transactionStatus : TransactionStatus


}