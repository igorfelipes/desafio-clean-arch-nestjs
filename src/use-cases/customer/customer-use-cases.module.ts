import { Module } from '@nestjs/common';
import { DataServicesModule } from '../../services/data-services/data-services.module';
import { CustomerFactoryService } from './customer-factory.service';
import { CustomerUseCases } from './customer.use-cases';

@Module({
  imports: [DataServicesModule],
  providers: [CustomerFactoryService, CustomerUseCases],
  exports: [CustomerFactoryService, CustomerUseCases],
})
export class CustomerUseCasesModule {}
