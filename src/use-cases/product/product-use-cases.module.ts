import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { ProductUseCases } from './product.use-cases';
import { ProductFactoryService } from './product-factory.service';


@Module({
  imports: [DataServicesModule],
  providers: [ProductFactoryService, ProductUseCases],
  exports: [ProductFactoryService, ProductUseCases],
})
export class ProductUseCasesModule {}
