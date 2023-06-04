import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Represents a MongoDB document (to access mongodb properties)
export type UserDocument = User & Document;

export enum UserType {
  INDIVIDUAL = 'INDIVIDUAL',
  BUSINESS = 'BUSINESS',
  ADMIN = 'ADMIN',
  CUSTOMER_SERVICE = 'CUSTOMER_SERVICE',
}

@Schema()
export class User {
  @Prop()
  fullName: string;

  @Prop({ required: true, unique: true })
  userName: string;

  @Prop({ required: true, unique: true })
  primaryEmail: string;

  @Prop({ required: true })
  password: string;

  @Prop()
  bio: string;

  @Prop()
  createdAt: Date;

  @Prop({ default: false })
  primaryEmailEnabled: boolean;

  @Prop()
  primaryPhone: string;

  @Prop({ default: false })
  primaryPhoneEnabled: boolean;

  @Prop({ type: [{ type: String }] })
  emails: string[];

  @Prop({ type: [{ type: String }] })
  phones: string[];

  @Prop({ enum: UserType, default: UserType.INDIVIDUAL })
  userType: UserType;
}

export const UserSchema = SchemaFactory.createForClass(User);
