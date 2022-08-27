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

    @Column()
    shareType: ShareType

    @Column()
    amount: string

    @Column()
    transactionStatus : TransactionStatus


}
