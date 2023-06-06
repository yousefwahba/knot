import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Product } from './product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() product: Product) {
    return this.productService.createProduct(product);
  }

  //get product by Id
  @Get(':id')
  async getProductById(@Param('id') id: string) {
    return this.productService.getProductById(id);
  }

  //get product by ownerId
  @Get('by-owner/:ownerId')
  async getProductsByOwnerId(@Param('ownerId') ownerId: string) {
    return this.productService.getProductsByOwnerId(ownerId);
  }

  //get product with user by product id
  @Get('with-user/:id')
  async getProductWithUser(@Param('id') id: string) {
    return this.productService.getProductWithUser(id);
  }

  //get product with user by owner id
  @Get('with-user/by-owner/:ownerId')
  async getProductsWithUserByOwnerId(@Param('ownerId') ownerId: string) {
    return this.productService.getProductsWithUserByOwnerId(ownerId);
  }
}
