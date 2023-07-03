import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/User';

describe('UserService', () => {
  let service: UserService;
  let userRepository: Repository<User>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getRepositoryToken(User),
          useClass: jest.fn(() => ({
            find: jest.fn(),
            save: jest.fn(),
          })),
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    userRepository = module.get<Repository<User>>(getRepositoryToken(User));
  });

  describe('getAllUser', () => {
    it('should return an array of users', async () => {
      const expectedUsers: User[] = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Doe' },
      ];
      jest.spyOn(userRepository, 'find').mockResolvedValue(expectedUsers);
      const users = await service.getAllUser();
      expect(users).toEqual(expectedUsers);
    });
  });
});