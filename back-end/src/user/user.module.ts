import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.schema';
import { ProductService } from 'src/product/product.service';
import { Product, ProductSchema } from 'src/product/product.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: Product.name, schema: ProductSchema },
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, ProductService],
  exports: [UserService],
})
export class UserModule {}
