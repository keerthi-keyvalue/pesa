import {
    Controller,
    Get,
    Inject,
    Logger,
    Post,
} from "@nestjs/common";
import { Transaction } from "../entities/Transaction";
import { ITransactionService } from "../service/ITransactionService";

@Controller("/api/v1/transaction")
export class TransactionController {
    private readonly logger: Logger = new Logger(TransactionController.name);
    constructor(
        @Inject("TRANSACTION_SERVICE")
        private readonly transactionService: ITransactionService
    ) { }

    @Post("/")
    async createTransaction(): Promise<Transaction> {
        return this.transactionService.createTransaction();
    }

    @Post("/:id")
    async editTransaction(): Promise<Transaction> {
        return null;
    }

    @Get("/:id")
    async getTransactionById(): Promise<Transaction> {
        return null;
    }

    @Get()
    async getAllTransactions(): Promise<Transaction[]> {
        return null;
    }
}
