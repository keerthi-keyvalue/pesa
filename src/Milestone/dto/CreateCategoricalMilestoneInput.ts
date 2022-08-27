import { IsEnum, Matches, Min } from "class-validator";
import { UUID_REGEX } from "../../Common/Constants";
import { Category } from "../../Common/enums/Category";

export class CreateCategoricalMilestoneInput {
    @IsEnum(Category)
    category: Category;

    @Matches(RegExp(UUID_REGEX))
    milestoneId: string;

    @Min(0)
    amount: number;
}