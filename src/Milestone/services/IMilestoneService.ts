import { CreateMilestoneInput } from "../dto/CreateMilestoneInput";
import { EditMilestoneInput } from "../dto/EditMilestoneInput";

export interface IMilestoneService {
    createMilestone(createMilestoneInput: CreateMilestoneInput);

    getCurrentMilestone(userId: string);

    editMilestone(id: string, editMilestoneInput: EditMilestoneInput);

}