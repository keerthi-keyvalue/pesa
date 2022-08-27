import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { UserModule } from './User';
import { UserController } from './User/controller/UserController';
import { DatabaseModule } from './Db';
import { MilestoneModule } from './Milestone';

@Module({
  imports: [UserModule, DatabaseModule, MilestoneModule],
  controllers: [UserController,HealthController],
  providers: [],
})
export class AppModule {}
