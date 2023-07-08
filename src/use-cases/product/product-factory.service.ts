import { Injectable } from '@nestjs/common';
import { CreateProductDto, UpdateProductDto } from '../../core/dtos/product.dto';
import { Product } from '../../core/entities/product.entity';

@Injectable()
export class ProductFactoryService {
  createNewProduct(createProductDto: CreateProductDto) {
    const newProduct = new Product();
    newProduct.name = createProductDto.name;
    newProduct.price = createProductDto.price;
    newProduct.description = createProductDto.description;

    return newProduct;
  }

  updateProduct(updateProductDto: UpdateProductDto) {
    const updatedProduct = new Product();
    updatedProduct.name = updateProductDto.name;
    updatedProduct.price = updateProductDto.price;
    updatedProduct.description = updateProductDto.description;

    return updatedProduct;
  }
}