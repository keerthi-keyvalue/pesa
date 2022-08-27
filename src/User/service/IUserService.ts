import { User } from "../entities/User";
import { CreateUserInput } from "../models/CreateUserInput";

export interface IUserService{
    createUser(createUserInput:CreateUserInput):Promise<User>;

    getUserByPhoneNumber(phoneNumber:string):Promise<User>;
}