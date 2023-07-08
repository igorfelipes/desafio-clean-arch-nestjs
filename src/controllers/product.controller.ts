import { Controller, Get, Param, Post, Body, Put } from '@nestjs/common';
import { ProductUseCases } from '../use-cases/product/product.use-cases';
import { CreateProductDto, UpdateProductDto } from '../core/dtos/product.dto';


@Controller('api/product')
export class ProductController {
  constructor(
    private productUseCases: ProductUseCases,
  ) {}

  @Get()
  async getAll() {
    return this.productUseCases.getAllProducts();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.productUseCases.getProductById(id);
  }

  @Post()
  async createProduct(@Body() productDto: CreateProductDto) {
    return this.productUseCases.createProduct(productDto);
  }

  @Put(':id')
  updateProduct(
    @Param('id') productId: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productUseCases.updateProduct(productId, updateProductDto);
  }
}