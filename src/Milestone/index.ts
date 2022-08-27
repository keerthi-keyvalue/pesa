import { Module, Provider } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserModule } from "../User";
import { CommonModule } from "../Common";
import { MILESTONE_SERVICE } from "./Constants";
import { MilestoneController } from "./controllers/MilestoneController";
import { Milestone } from "./entities/Milestone";
import { MilestoneRepository } from "./repository/MilestoneRepository";
import { MilestoneService } from "./services/MilestoneService";

const milestoneServiceProvider: Provider = {
    provide: MILESTONE_SERVICE,
    useClass: MilestoneService
}

@Module({
    imports: [
        CommonModule,
        TypeOrmModule.forFeature([Milestone, MilestoneRepository]),
        UserModule
    ],
    exports: [],
    providers: [milestoneServiceProvider],
    controllers: [MilestoneController]
})
export class MilestoneModule {}