import { Inject, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TransactionRepository } from "../repository/TransactionRepository";
import { Transaction } from "../entities/Transaction";
import { ITransactionService } from "./ITransactionService";
import { CreateTransactionInput } from "../model/CreateTransactionInput";
import { plainToClass } from "class-transformer";
import { UpdateTransactionInput } from "../model/UpdateTransactionInput";
import { USER_TRANSACTION_SERVICE } from "../Constant";
import { IUserTransactionService } from "./IUserTransactionService";

export class TransactionService implements ITransactionService {
    private readonly logger: Logger = new Logger(TransactionService.name);
    constructor(@InjectRepository(Transaction)
    private transactionRepository: TransactionRepository,
    @Inject(USER_TRANSACTION_SERVICE)
    private userTransactionService:IUserTransactionService
    ) { }

    async editTransaction(id : string, updateTransactionInput : UpdateTransactionInput): Promise<Transaction> {
        const transaction = await this.transactionRepository.findOneBy({ id });
        const updatedTransaction =  plainToClass(Transaction, {
            ...transaction,
            ...updateTransactionInput
        });
        return this.transactionRepository.save(updatedTransaction);
    }
    getAllTransactionsByUserId(userId : string): Promise<Transaction[]> {
        return null;
    }
    getTransactionById(id : string): Promise<Transaction> {
        throw new Error("Method not implemented.");
    }

    createTransaction(createTransactionInput: CreateTransactionInput): Promise<Transaction> {
        const transaction = plainToClass(Transaction, {
            ...createTransactionInput
        });
        
        return this.transactionRepository.save(transaction);
    }
}