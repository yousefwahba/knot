import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './product.schema';
import { Model } from 'mongoose';
import { UserDocument } from 'src/user/user.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel('User') private readonly userModel: Model<UserDocument>,
  ) {}

  async createProduct(product: Product): Promise<ProductDocument> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async getProductById(id: string): Promise<ProductDocument> {
    return this.productModel.findById(id).exec();
  }

  async getProductsByOwnerId(ownerId: string): Promise<ProductDocument[]> {
    return this.productModel.find({ ownerId }).exec();
  }

  async getProductWithUser(id: string): Promise<ProductDocument> {
    return this.productModel.findById(id).populate('ownerId').exec();
  }
}
