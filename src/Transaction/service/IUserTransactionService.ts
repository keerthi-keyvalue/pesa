import { AddUserTransactionInput } from "../dto/AddUserTransactionInput";
import { UserTransaction } from "../entities/UserTransaction";

export interface IUserTransactionService{
    addUserTransaction(
        addUserTransactionInput:AddUserTransactionInput
    ):Promise<UserTransaction[]>
}