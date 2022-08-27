import { Transaction } from "../entities/Transaction";

export interface ITransactionService {
    createTransaction(): Promise<Transaction>
    editTransaction(id : string) : Promise<Transaction>
    getTransactionById(id : string): Promise<Transaction>
    getAllTransactions(): Promise<Transaction[]>

}