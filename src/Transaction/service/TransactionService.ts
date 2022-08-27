import { Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransactionRepository } from "../repository/TransactionRepository";
import { Transaction } from "../entities/Transaction";
import { ITransactionService } from "./ITransactionService";

export class TransactionService implements ITransactionService {
    private readonly logger: Logger = new Logger(TransactionService.name);
    constructor(@InjectRepository(Transaction)
    private transactionRepository: TransactionRepository
    ) { }

    editTransaction(id : string): Promise<Transaction> {
        throw new Error("Method not implemented.");
    }
    getAllTransactions(): Promise<Transaction[]> {
        return this.transactionRepository.find();
    }
    getTransactionById(id : string): Promise<Transaction> {
        throw new Error("Method not implemented.");
    }

    createTransaction(): Promise<Transaction> {
        throw new Error("Method not implemented.");
    }
}