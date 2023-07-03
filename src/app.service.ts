import { Injectable } from '@nestjs/common';
import { ProducerService } from './kafka/producer.service';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) { }
  async getHello() {
    await this.producerService.produce({
      topic: 'test',
      messages: [
        {
          "value": "Hello World"
        }
      ]
    })
    await this.producerService.produce({
      topic: 'test-1',
      messages: [
        {
          "value": "Hello World 2"
        }
      ]
    })
   }

  
}
