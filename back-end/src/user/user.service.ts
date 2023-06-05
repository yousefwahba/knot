import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { UserDetails } from './userDetails.interface';
import { NewUserDto } from './dto/newUser.dto';

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

  //if i want to return all of document data
  //   getUserDetails(user: UserDocument): UserDetails {
  //     const { _id: id, ...userData } = user.toObject();
  //     return { id, ...userData };
  //     }

  async findByEmail(primaryEmail: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ primaryEmail }).exec();
  }

  async findById(id: string): Promise<UserDetails | null> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;
    return this.getUserDetails(user);
  }

  async create(
    userData: NewUserDto & { password: string },
  ): Promise<UserDocument> {
    const newUser = new this.userModel(userData);
    // console.log('new user', newUser);
    return newUser.save();
  }
}
