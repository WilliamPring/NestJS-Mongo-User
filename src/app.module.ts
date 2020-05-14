import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import {MongoModule} from './database/mongo/mongo.module'

@Module({
  imports: [MongooseModule.forRoot('mongodb://127.0.0.1/local'), MongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
