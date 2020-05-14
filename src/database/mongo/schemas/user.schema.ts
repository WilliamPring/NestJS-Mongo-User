
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';


class Alias  extends Document  {
  @Prop()
  name: string[];
}


@Schema()
export class User extends Document {
  @Prop()
  userName: string;
  @Prop()
  userType: string;
  @Prop()
  joined: Date;
  @Prop()
  lastUpdated: Date;
  @Prop()
  alias: Alias;

}


export const UserSchema = SchemaFactory.createForClass(User);
