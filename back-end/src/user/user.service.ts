import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { UserDetails } from './userDetails.interface';
import { NewUserDto } from './dto/newUser.dto';
import { updateUserDto } from './dto/updateUser.dto';
import { ProductService } from 'src/product/product.service';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
    private readonly productService: ProductService,
  ) {}

  // getUserDetails(user: UserDocument): UserDetails {
  //   return {
  //     id: user._id,
  //     userName: user.userName,
  //     primaryEmail: user.primaryEmail,
  //   };
  // }

  //   return all of document data
  getUserDetails(user: UserDocument): UserDetails {
    const { _id: id, ...userData } = user.toObject();
    return { id, ...userData };
  }

  async findByEmail(primaryEmail: string): Promise<UserDocument | null> {
    return this.userModel.findOne({ primaryEmail }).exec();
  }

  async findById(id: string): Promise<UserDetails | null> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;
    return this.getUserDetails(user);
  }

  async getUserWithProducts(id: string): Promise<any> {
    const user = await this.userModel.findById(id).exec();
    if (!user) return null;

    const userDetails = this.getUserDetails(user);
    const products = await this.productService.getProductsByOwnerId(id);

    return {
      ...userDetails,
      products,
    };
  }
  //User
  async getUserWithSectionsAndLinks(id: string): Promise<UserDocument | null> {
    return this.userModel
      .findById(id)
      .populate({
        path: 'sections',
        populate: {
          path: 'links',
          model: 'Link',
        },
      })
      .exec();
  }

  async create(
    userData: NewUserDto & { password: string },
  ): Promise<UserDocument> {
    const newUser = new this.userModel(userData);
    // console.log('newUser', newUser);
    return newUser.save();
  }

  //update user
  async update(id: string, updateUserDto: updateUserDto): Promise<UserDetails> {
    const user = await this.userModel
      .findByIdAndUpdate(id, updateUserDto, { new: true })
      .exec();
    if (!user) return null;
    return this.getUserDetails(user);
  }

  //delete user
  async delete(id: string): Promise<string> {
    const user = await this.userModel.findByIdAndDelete(id).exec();
    if (!user) return null;
    return 'user deleted successfully';
  }
}
