import {
    Body,
    Controller,
    Get,
    Inject,
    Logger,
    Param,
    Post,
} from "@nestjs/common";
import { Transaction } from "../entities/Transaction";
import { CreateTransactionInput } from "../model/CreateTransactionInput";
import { UpdateTransactionInput } from "../model/UpdateTransactionInput";
import { ITransactionService } from "../service/ITransactionService";

@Controller("/api/v1/transaction")
export class TransactionController {
    private readonly logger: Logger = new Logger(TransactionController.name);
    constructor(
        @Inject("TRANSACTION_SERVICE")
        private readonly transactionService: ITransactionService
    ) { }

    @Post("/")
    async createTransaction(@Body() createTransactionInput: CreateTransactionInput): Promise<Transaction> {
        return this.transactionService.createTransaction(createTransactionInput);
    }

    @Post("/:id")
    async editTransaction(@Param("id") id: string, @Body() updateTransactionInput: UpdateTransactionInput): Promise<Transaction> {
        return this.transactionService.editTransaction(id,updateTransactionInput);
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
