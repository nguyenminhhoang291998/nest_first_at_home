import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entity/User';
import { KafkaModule } from './kafka/kafka.module';
import { TestConsumer } from './kafka/test.consumer';
import { ProModule } from './pro/pro.module';

@Module({
  imports: [TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'first_nestjs',
      entities: [User],
      synchronize: true,
    }), UserModule, KafkaModule, ProModule],
  controllers: [AppController],
  providers: [AppService, TestConsumer],
})
export class AppModule {}
