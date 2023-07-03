import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entity/User';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private readonly userRepository: Repository<User>,) { }

  async getAllUser(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async createUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }
}
