import { Module } from '@nestjs/common';
import { HealthController } from './health.controller';
import { UserModule } from './User';
import { UserController } from './User/controller/UserController';
import { DatabaseModule } from './Db';
import { TransactionModule } from './Transaction';
import { TransactionController } from './Transaction/controller/TransactionController';

@Module({
  imports: [UserModule, DatabaseModule, TransactionModule],
  controllers: [TransactionController,UserController,HealthController],
  providers: [],
})
export class AppModule {}
