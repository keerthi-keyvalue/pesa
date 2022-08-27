import { NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { plainToClass } from "class-transformer";
import { CreateCategoricalMilestoneInput } from "../dto/CreateCategoricalMilestoneInput";
import { EditCategoricalMilestoneInput } from "../dto/EditCategoricalMilestoneInput";
import { CategoricalMilestone } from "../entities/CategoricalMilestone";
import { CategoricalMilestoneRepository } from "../repository/CategoricalMilestoneRepository";
import { ICategoricalMilestoneService } from "./ICategoricalMilestoneService";

export class CategoricalMilestoneService implements ICategoricalMilestoneService {
    constructor(
        @InjectRepository(CategoricalMilestone)
        private readonly categoricalMilestoneRepository: CategoricalMilestoneRepository
    ) {}

    async createCategoricalMilestone(createMilestoneCategoricalInput: CreateCategoricalMilestoneInput) {
        
        const categoricalMilestone = plainToClass(CategoricalMilestone, {
            ...createMilestoneCategoricalInput
        });

        return this.categoricalMilestoneRepository.save(categoricalMilestone);
    }

    async editCategoricalMilestone(id: string, editCategoricalMilestoneInput: EditCategoricalMilestoneInput) {
        
        const categoricalMilestone =  await this.categoricalMilestoneRepository.findOneById(id);

        if (!categoricalMilestone) {
            throw new NotFoundException("Milestone not found");
        }
        const updatedMilestone = plainToClass(CategoricalMilestone, {
            ...categoricalMilestone,
            ...editCategoricalMilestoneInput
        })

        await this.categoricalMilestoneRepository.update({id}, updatedMilestone);

        return updatedMilestone;
    }

    async getCategoricalMilestoneById(id: string): Promise<CategoricalMilestone> {
        return this.categoricalMilestoneRepository.findOne({where: {id}});
    }

    async getCategoricalMilestoneByMilestoneId(milestoneId: string): Promise<CategoricalMilestone[]> {
        return this.categoricalMilestoneRepository.find({where: {milestoneId}})
    }
    

}