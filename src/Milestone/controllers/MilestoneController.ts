import { Body, Controller, Inject, Post } from "@nestjs/common";
import { MILESTONE_SERVICE } from "../Constants";
import { CreateMilestoneInput } from "../dto/CreateMilestoneInput";
import { IMilestoneService } from "../services/IMilestoneService";

@Controller("/api/v1/milestone")
export class MilestoneController {

    constructor(
        @Inject(MILESTONE_SERVICE)
        private readonly milestoneService: IMilestoneService
    ) {}

    @Post("/")
    async createMilestone(
        @Body() createMilestoneInput: CreateMilestoneInput,
    ){
        const result = await this.milestoneService.createMilestone(createMilestoneInput);
        return result;
    }

    
}