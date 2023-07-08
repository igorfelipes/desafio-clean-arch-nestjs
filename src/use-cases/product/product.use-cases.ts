import { Injectable } from '@nestjs/common';
import { Product } from '../../core/entities';
import { IDataServices } from '../../core/abstracts';
import { ProductFactoryService } from './product-factory.service';
import { CreateProductDto, UpdateProductDto } from '../../core/dtos/product.dto';

@Injectable()
export class ProductUseCases {
  constructor(
    private dataServices: IDataServices,
    private productFactoryService: ProductFactoryService,
  ) {}

  getAllProducts(): Promise<Product[]> {
    return this.dataServices.products.getAll();
  }

  getProductById(id: any): Promise<Product> {
    return this.dataServices.products.get(id);
  }

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productFactoryService.createNewProduct(createProductDto);
    return this.dataServices.products.create(product);
  }

  updateProduct(
    productId: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = this.productFactoryService.updateProduct(updateProductDto);
    return this.dataServices.products.update(productId, product);
  }
}