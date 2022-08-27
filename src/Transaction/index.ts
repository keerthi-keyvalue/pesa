import { Controller, Module, Provider } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommonModule } from "../Common";
import { TRANSACTION_SERVICE } from "./Constant";
import { TransactionController } from "./controller/TransactionController";
import { Transaction } from "./entities/Transaction";
import { TransactionRepository } from "./repository/TransactionRepository";
import { TransactionService } from "./service/TransactionService";

const transactionServiceProvider:Provider = {
    provide: TRANSACTION_SERVICE,
    useClass: TransactionService,
  };

@Module({
    imports: [CommonModule,TypeOrmModule.forFeature([Transaction, TransactionRepository]),],
    providers : [transactionServiceProvider],
    controllers : [TransactionController],
    exports : [transactionServiceProvider]
})
export class TransactionModule{}

