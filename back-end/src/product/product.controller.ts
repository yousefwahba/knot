import { Body, Controller, Post } from '@nestjs/common';
import { Product } from './product.schema';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async createProduct(@Body() product: Product) {
    return this.productService.createProduct(product);
  }
}
