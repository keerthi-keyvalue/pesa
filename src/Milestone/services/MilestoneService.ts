import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";
import { CreateMilestoneInput } from "../dto/CreateMilestoneInput";
import { Milestone } from "../entities/Milestone";
import { MilestoneRepository } from "../repository/MilestoneRepository";
import { IMilestoneService } from "./IMilestoneService";

export class MilestoneService implements IMilestoneService{

    constructor(
        @InjectRepository(Milestone)
        private readonly milestoneRepository: MilestoneRepository
    ) {}

    async createMilestone(createMilestoneInput: CreateMilestoneInput) {
        const milestone = plainToClass(Milestone, {
            ...createMilestoneInput
        });

        return this.milestoneRepository.save(milestone);
    }

}