import { Test } from '@nestjs/testing';
import { ProductUseCases } from './product.use-cases';
import { IDataServices } from '../../core/abstracts';
import { ProductFactoryService } from './product-factory.service';
import { CreateProductDto, UpdateProductDto } from '../../core/dtos/product.dto';
import { mock } from 'jest-mock-extended';
import { Product } from 'src/core'

describe('ProductUseCases', () => {
  let productUseCases: ProductUseCases;
  let dataServices: IDataServices;
  let productFactoryService: ProductFactoryService;

  beforeEach(async () => {
    dataServices = mock<IDataServices>();
    productFactoryService = mock<ProductFactoryService>();

    const moduleRef = await Test.createTestingModule({
      providers: [
        ProductUseCases,
        { provide: IDataServices, useValue: dataServices },
        { provide: ProductFactoryService, useValue: productFactoryService },
      ],
    }).compile();

    productUseCases = moduleRef.get<ProductUseCases>(ProductUseCases);
  });

  describe('getAllProducts', () => {
    it('should return all products', async () => {
      const products: Product[] = [
        { id: 1, name: 'Product 1', price: 10, description: 'Product 1 description' },
        { id: 2, name: 'Product 2', price: 20, description: 'Product 2 description' },
      ];

      dataServices.products.getAll = jest.fn().mockResolvedValue(products);

      const result = await productUseCases.getAllProducts();

      expect(result).toEqual(products);
      expect(dataServices.products.getAll).toHaveBeenCalled();
    });
  });

  describe('getProductById', () => {
    it('should return a product by ID', async () => {
      const productId = '1';
      const product: Product = { id: 1, name: 'Product 1', price: 10, description: 'Product 1 description' };

      dataServices.products.get =jest.fn().mockResolvedValue(product);

      const result = await productUseCases.getProductById(productId);

      expect(result).toEqual(product);
      expect(dataServices.products.get).toHaveBeenCalledWith(productId);
    });
  });

  describe('createProduct', () => {
    it('should create a new product', async () => {
      const createProductDto: CreateProductDto = { name: 'Product 1', price: 10, description: 'Product 1 description' };
      const createdProduct: Product = { id: 1, ...createProductDto };

      productFactoryService.createNewProduct = jest.fn().mockReturnValue(createdProduct);
      dataServices.products.create = jest.fn().mockResolvedValue(createdProduct);

      const result = await productUseCases.createProduct(createProductDto);

      expect(result).toEqual(createdProduct);
      expect(productFactoryService.createNewProduct).toHaveBeenCalledWith(createProductDto);
      expect(dataServices.products.create).toHaveBeenCalledWith(createdProduct);
    });
  });

  describe('updateProduct', () => {
    it('should update an existing product', async () => {
      const productId = '1';
      const updateProductDto: UpdateProductDto = { name: 'Product 1', price: 20 };
      const updatedProduct: Partial<Product> = { id: 1, ...updateProductDto };

      productFactoryService.updateProduct = jest.fn().mockReturnValue(updatedProduct);
      dataServices.products.update = jest.fn().mockResolvedValue(updatedProduct);

      const result = await productUseCases.updateProduct(productId, updateProductDto);

      expect(result).toEqual(updatedProduct);
      expect(productFactoryService.updateProduct).toHaveBeenCalledWith(updateProductDto);
      expect(dataServices.products.update).toHaveBeenCalledWith(productId, updatedProduct);
    });
  });
});