import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './entity/User';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Get()
    async findAll(): Promise<User[]>{
        return await this.userService.getAllUser();
    }

    @Post()
    async createUser(@Body() user: User): Promise<User> {
      return await this.userService.createUser(user);
    }
    
}

