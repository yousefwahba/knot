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

  //get product with user
  @Get('user/:id')
  async getProductWithUser(@Param('id') id: string) {
    return this.productService.getProductWithUser(id);
  }
}
