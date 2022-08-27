import { IsEnum, IsInt, IsOptional, Matches } from "class-validator";
import { UUID_REGEX } from "../../Common/Constants";
import { MilestoneStatus } from "../enums/MilestoneStatus";
import { MilestoneType } from "../enums/MilestoneType";

export class CreateMilestoneInput {
    @Matches(RegExp(UUID_REGEX))
    userId: string;

    @IsInt()
    amount: number;

    @IsEnum(MilestoneStatus)
    @IsOptional()
    status: MilestoneStatus

    @IsEnum(MilestoneType)
    @IsOptional()
    type: MilestoneType
}