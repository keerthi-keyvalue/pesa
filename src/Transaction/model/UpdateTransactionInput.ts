import { IsEnum, IsInt,  IsNotEmpty,  IsOptional,  Matches,  MaxLength,  MIN } from "class-validator";
import { UUID_REGEX } from "../../Common/Constants";
import { ShareType } from "../enums/ShareType";
import { TransactionStatus } from "../enums/TransactionStatus";

export class UpdateTransactionInput {
   
    @MaxLength(255)
    title : string

    @Matches(RegExp(UUID_REGEX))
    categoryId: string;

    @Matches(RegExp(UUID_REGEX))
    categoricalMilestoneId: string;

    @Matches(RegExp(UUID_REGEX))
    milestoneId: string;

    @IsEnum(ShareType)
    shareType: ShareType

    @IsInt()
    amount: number

    @IsEnum(TransactionStatus)
    transactionStatus : TransactionStatus
}