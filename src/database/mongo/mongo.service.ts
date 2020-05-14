import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

// import { CreateCatDto } from './dto/create-cat.dto';
import { User } from './schemas/user.schema';
@Injectable()
export class MongoService {
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {}

  async createConfigerationDataDump(): Promise<any> {
    const createdConfig = new this.userModel(
    {
        userName: 'BeefBento',
        userType: 'Admin',
        joined: new Date('2020-01-01'),
        lastUpdated: new Date('2020-01-01'),
        Alias: {
          name: ["MyBento", "Bento"],
        },
      })
    return createdConfig.save();
  }
}
