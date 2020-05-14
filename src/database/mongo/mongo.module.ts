import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema, User} from './schemas/user.schema'

import {  MongoController } from './mongo.controller';
import { MongoService } from './mongo.service';

@Module({
  imports: [MongooseModule.forFeature([ { name: User.name , schema: UserSchema }])],
  controllers: [MongoController],
  providers: [MongoService],

})
export class MongoModule {}
