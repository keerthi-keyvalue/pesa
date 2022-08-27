import { Body, Controller, Get, Inject, Param, Post, Put } from "@nestjs/common";
import { MILESTONE_SERVICE } from "../Constants";
import { CreateMilestoneInput } from "../dto/CreateMilestoneInput";
import { EditMilestoneInput } from "../dto/EditMilestoneInput";
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

    @Get("current-milestone/:userId")
    async getCurrentMilestone(
        @Param("userId") userId: string
    ) {
        const result = await this.milestoneService.getCurrentMilestone(userId);
        return result;
    }

    @Put("/:id")
    async editMilestone(
        @Param("id") id: string,
        @Body() editMilestoneInput: EditMilestoneInput
    ) {
        const result = await this.milestoneService.editMilestone(id, editMilestoneInput);
        return result;
    }
    
}