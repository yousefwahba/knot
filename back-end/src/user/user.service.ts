import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { UserDetails } from './userDetails.interface';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  getUserDetails(user: UserDocument): UserDetails {
    return {
      id: user._id,
      userName: user.userName,
      primaryEmail: user.primaryEmail,
    };
  }

  async findByEmail(primaryEmail: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ primaryEmail }).exec();
  }

  async findById(id: string): Promise<UserDetails | null> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;
    return this.getUserDetails(user);
  }

  async create(
    userName: string,
    primaryEmail: string,
    hashedPassword: string,
  ): Promise<UserDocument> {
    const newUser = new this.userModel({
      userName,
      primaryEmail,
      password: hashedPassword,
    });
    return newUser.save();
  }
}
