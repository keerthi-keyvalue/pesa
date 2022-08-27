import { BadRequestException, ConflictException, Logger } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "../entities/User";
import { CreateUserInput } from "../models/CreateUserInput";
import { UserRepository } from "../repository/UserRepository";
import { IUserService } from "./IUserService";
import { plainToClass } from "class-transformer";

export class UserService implements IUserService {
    private readonly logger: Logger = new Logger(UserService.name);
    constructor(
        @InjectRepository(User) private userRepository: UserRepository,
    ){
    }
    public async createUser(createUserInput:CreateUserInput):Promise<User> {
      const user = await this.userRepository.findOne({where:{phoneNumber:createUserInput.phoneNumber}});
      if(user){
          throw new ConflictException("User Exists")
      }
      const newUser = plainToClass(User,createUserInput);
      return this.userRepository.save(newUser);
    }

    public async getUserByPhoneNumber(phoneNumber: string): Promise<User> {
        return this.userRepository.findOne({where:{phoneNumber}});
    }
}