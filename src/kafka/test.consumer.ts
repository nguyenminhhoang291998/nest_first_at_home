import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ConsumerService } from "./consumer.service";

@Injectable()
export class TestConsumer implements OnModuleInit{
    constructor(private readonly consumerService:ConsumerService){}

    async onModuleInit() {
        console.log('Đã vào');
        await this.consumerService.consumer(
            {topic: 'test'},
            {
                eachMessage: async ({topic,partition,message}) => {
                    console.log({
                        value: message.value.toString(),
                        topic: topic.toString(),
                        partition: partition.toString(),
                    })
                }
            }
        )
        await this.consumerService.consumer(
            {topic: 'test-1'},
            {
                eachMessage: async ({topic,partition,message}) => {
                    console.log({
                        value: message.value.toString(),
                        topic: topic.toString(),
                        partition: partition.toString(),
                    })
                }
            }
        )
    }
}