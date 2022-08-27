import { Optional } from "@nestjs/common";
import { IsEnum, IsInt,  IsNotEmpty,  IsOptional,  Matches,  MaxLength,  MIN } from "class-validator";
import { UUID_REGEX } from "../../Common/Constants";
import { UserShare } from "../dto/UserShare";
import { ShareType } from "../enums/ShareType";
import { TransactionStatus } from "../enums/TransactionStatus";

export class CreateTransactionInput {

    @IsNotEmpty()
    @MaxLength(255)
    title : String

    userShares: UserShare[]

    @Matches(RegExp(UUID_REGEX))
    @Optional()
    categoricalMilestoneId: string;

    @Matches(RegExp(UUID_REGEX))
    milestoneId: string;

    @IsEnum(ShareType)
    shareType: ShareType

    @IsInt()
    amount: number

    @IsEnum(TransactionStatus)
    @Optional()
    transactionStatus : TransactionStatus
}