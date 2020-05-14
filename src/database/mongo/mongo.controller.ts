import { Body, Controller, Get, Post } from '@nestjs/common';
import { MongoService } from './mongo.service';


@Controller('mongo')
export class MongoController {
       constructor(private readonly mongoService: MongoService) {}

        @Get()
        async dumpDataIntoMongo(): Promise<any> {
            return this.mongoService.createConfigerationDataDump(); 
        }
 }