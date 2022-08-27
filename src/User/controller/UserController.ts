import {
    Controller,
    Body,
    Put,
    Get,
    Inject,
    Logger,
    Param,
    Query,
    UseGuards,
    Res,
    Post,
    Patch,
    Req,
} from "@nestjs/common";
import { USER_SERVICE } from "../Constant";
import { User } from "../entities/User";
import { CreateUserInput } from "../models/CreateUserInput";
import { IUserService } from "../service/IUserService";

@Controller("/api/v1/user")
export class UserController {
    private readonly logger: Logger = new Logger(UserController.name);
    constructor(
        @Inject(USER_SERVICE)
        private readonly userService:IUserService
    ) {}
    @Post("/")
    async createUser(
        @Body() createUserInput:CreateUserInput 
    ): Promise<User> {
        return this.userService.createUser(createUserInput)
    }

    @Get("/:phoneNumber")
    async getUserByPhone(
        @Param("phoneNumber") phoneNumber: string,
    ):Promise<User>{
        return this.userService.getUserByPhoneNumber(phoneNumber);
    }
}
