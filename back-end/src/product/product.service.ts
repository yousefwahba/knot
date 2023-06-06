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

  //get

  async getProductById(id: string): Promise<ProductDocument> {
    return this.productModel.findById(id).exec();
  }

  async getProductsByOwnerId(ownerId: string): Promise<ProductDocument[]> {
    return this.productModel.find({ ownerId }).exec();
  }

  // get product with user by product Id
  async getProductWithUser(id: string): Promise<ProductDocument> {
    return this.productModel.findById(id).populate('ownerId').exec();
  }

  async getProductsWithUserByOwnerId(
    ownerId: string,
  ): Promise<ProductDocument[]> {
    return this.productModel.find({ ownerId }).populate('ownerId').exec();
  }

  // updates

  async activeProduct(id: string): Promise<ProductDocument> {
    const product = await this.getProductById(id);
    product.active = true;
    return product.save();
  }

  async deactiveProduct(id: string): Promise<ProductDocument> {
    const product = await this.getProductById(id);
    product.active = false;
    return product.save();
  }

  async connectToOwner(id: string, ownerId: string): Promise<ProductDocument> {
    const product = await this.getProductById(id);
    const owner = await this.userModel.findById(ownerId).exec();
    product.ownerId = owner;
    return product.save();
  }

  async disconnectFromOwner(id: string): Promise<ProductDocument> {
    const product = await this.getProductById(id);
    product.ownerId = null;
    return product.save();
  }
}
