import {Repository } from 'typeorm';
import { User } from './entity/User';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository extends Repository<User> {
}