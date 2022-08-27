import { CreateMilestoneInput } from "../dto/CreateMilestoneInput";

export interface IMilestoneService {
    createMilestone(createMilestoneInput: CreateMilestoneInput);

}